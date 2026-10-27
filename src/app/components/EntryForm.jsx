import { useState } from 'react';
import { amountToInput, groupLabels, parseAmount } from '../finance/model';

export default function EntryForm({ entry, kind, defaultGroup, onSubmit, onCancel }) {
  const [description, setDescription] = useState(entry?.description ?? '');
  const [note, setNote] = useState(entry?.note ?? '');
  const [group, setGroup] = useState(entry?.expense_group ?? defaultGroup ?? 'essential');
  const [amount, setAmount] = useState(entry ? amountToInput(entry.amount) : '');
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const parsed = parseAmount(amount);
    if (!description.trim()) {
      setError('Informe a descrição.');
      return;
    }
    if (Number.isNaN(parsed)) {
      setError('Valor inválido. Use o formato 1.234,56.');
      return;
    }
    setError(null);
    setSaving(true);
    try {
      await onSubmit({
        kind,
        expense_group: kind === 'expense' ? group : null,
        description: description.trim(),
        note: note.trim() || null,
        amount: parsed,
      });
    } catch {
      setError('Não foi possível salvar. Tente novamente.');
      setSaving(false);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Descrição
        <input
          className="form__input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={120}
          required
          autoFocus
        />
      </label>

      <label className="form__label">
        Observação <span className="form__optional">(opcional)</span>
        <input
          className="form__input"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={200}
        />
      </label>

      {kind === 'expense' && (
        <fieldset className="form__fieldset">
          <legend className="form__label">Grupo</legend>
          <div className="segmented">
            {Object.entries(groupLabels).map(([value, label]) => (
              <label key={value} className={`segmented__option ${group === value ? 'segmented__option--active' : ''}`}>
                <input
                  type="radio"
                  name="expense_group"
                  value={value}
                  checked={group === value}
                  onChange={() => setGroup(value)}
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <label className="form__label">
        {kind === 'expense' ? 'Valor médio mensal' : 'Valor mensal'}
        <div className="form__money">
          <span>R$</span>
          <input
            className="form__input"
            inputMode="decimal"
            placeholder="0,00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </label>

      {error && <p className="form__error" role="alert">{error}</p>}

      <div className="form__actions">
        <button type="button" className="btn btn--ghost" onClick={onCancel}>Cancelar</button>
        <button type="submit" className="btn" disabled={saving}>
          {saving ? 'Salvando…' : 'Salvar'}
        </button>
      </div>
    </form>
  );
}
