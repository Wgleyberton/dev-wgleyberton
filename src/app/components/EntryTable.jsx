import { useCallback, useState } from 'react';
import { useFinance } from '../finance/FinanceContext';
import { formatBRL } from '../finance/model';
import { EditIcon, PlusIcon, TrashIcon } from '../layout/icons';
import EntryForm from './EntryForm';
import Modal from './Modal';

const newTitles = { income: 'Nova receita', expense: 'Nova despesa', investment: 'Novo investimento' };

// Tabela editável de lançamentos de um grupo (receitas, despesas essenciais/não essenciais ou investimentos)
export default function EntryTable({ title, entries, kind, group, totalLabel, swatch, valueLabel = 'Valor' }) {
  const { create, update, remove } = useFinance();
  // null = fechado · { mode: 'create' } · { mode: 'edit', entry } · { mode: 'delete', entry }
  const [dialog, setDialog] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const close = useCallback(() => {
    setDialog(null);
    setDeleteError(null);
  }, []);

  const total = entries.reduce((acc, e) => acc + Number(e.amount), 0);

  async function handleSubmit(values) {
    if (dialog.mode === 'edit') await update(dialog.entry.id, values);
    else await create(values);
    close();
  }

  async function handleDelete() {
    setDeleting(true);
    try {
      await remove(dialog.entry.id);
      close();
    } catch {
      setDeleteError('Não foi possível excluir. Tente novamente.');
    } finally {
      setDeleting(false);
    }
  }

  return (
    <section className="card">
      <div className="card__header">
        <h2 className="card__title">
          {swatch && <span className="swatch" style={{ background: swatch }} aria-hidden="true" />}
          {title}
        </h2>
        <button type="button" className="btn btn--soft btn--sm" onClick={() => setDialog({ mode: 'create' })}>
          <PlusIcon /> Adicionar
        </button>
      </div>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th className="table__num">{valueLabel}</th>
              <th className="table__actions"><span className="sr-only">Ações</span></th>
            </tr>
          </thead>
          <tbody>
            {entries.length === 0 && (
              <tr>
                <td colSpan={3} className="table__empty">Nenhum lançamento. Clique em “Adicionar”.</td>
              </tr>
            )}
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>
                  <span className="table__desc">{entry.description}</span>
                  {entry.note && <span className="table__note">{entry.note}</span>}
                </td>
                <td className={`table__num ${Number(entry.amount) === 0 ? 'table__zero' : ''}`}>
                  {formatBRL(entry.amount)}
                </td>
                <td className="table__actions">
                  <button
                    type="button"
                    className="icon-btn"
                    onClick={() => setDialog({ mode: 'edit', entry })}
                    aria-label={`Editar ${entry.description}`}
                  >
                    <EditIcon />
                  </button>
                  <button
                    type="button"
                    className="icon-btn icon-btn--danger"
                    onClick={() => setDialog({ mode: 'delete', entry })}
                    aria-label={`Excluir ${entry.description}`}
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>{totalLabel}</td>
              <td className="table__num">{formatBRL(total)}</td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>

      {(dialog?.mode === 'create' || dialog?.mode === 'edit') && (
        <Modal title={dialog.mode === 'edit' ? 'Editar lançamento' : newTitles[kind]} onClose={close}>
          <EntryForm
            entry={dialog.entry}
            kind={kind}
            defaultGroup={group}
            onSubmit={handleSubmit}
            onCancel={close}
          />
        </Modal>
      )}

      {dialog?.mode === 'delete' && (
        <Modal title="Excluir lançamento" onClose={close}>
          <p className="modal__text">
            Excluir <strong>{dialog.entry.description}</strong> ({formatBRL(dialog.entry.amount)})?
            Esta ação não pode ser desfeita.
          </p>
          {deleteError && <p className="form__error" role="alert">{deleteError}</p>}
          <div className="form__actions">
            <button type="button" className="btn btn--ghost" onClick={close}>Cancelar</button>
            <button type="button" className="btn btn--danger" onClick={handleDelete} disabled={deleting}>
              {deleting ? 'Excluindo…' : 'Excluir'}
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
}
