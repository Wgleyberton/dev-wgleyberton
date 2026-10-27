import { useState } from 'react';
import { useFinance } from '../finance/FinanceContext';
import { WalletIcon } from '../layout/icons';

// Trata carregamento, erro e o estado vazio (oferece carregar o modelo padrão).
// skipEmpty: a página funciona sem receitas/despesas (ex.: Investimentos)
export default function FinanceGate({ children, skipEmpty = false }) {
  const { entries, loading, error, loadTemplate } = useFinance();
  const hasBudget = entries.some((e) => e.kind === 'income' || e.kind === 'expense');
  const [seeding, setSeeding] = useState(false);
  const [seedError, setSeedError] = useState(null);

  if (loading) {
    return (
      <div className="page-center">
        <div className="spinner" aria-label="Carregando" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="card empty">
        <h2 className="card__title">Não foi possível carregar seus dados</h2>
        <p className="muted">{error}</p>
      </div>
    );
  }

  if (!hasBudget && !skipEmpty) {
    async function handleSeed() {
      setSeeding(true);
      setSeedError(null);
      try {
        await loadTemplate();
      } catch {
        setSeedError('Não foi possível carregar o modelo. Tente novamente.');
        setSeeding(false);
      }
    }

    return (
      <div className="card empty">
        <span className="empty__icon"><WalletIcon /></span>
        <h2 className="card__title">Comece seu controle financeiro</h2>
        <p className="muted">
          Carregue o modelo padrão com as receitas e despesas mais comuns (todas com valor zerado)
          e depois ajuste os valores, ou cadastre seus lançamentos do zero em Receitas e Despesas.
        </p>
        {seedError && <p className="form__error" role="alert">{seedError}</p>}
        <button type="button" className="btn" onClick={handleSeed} disabled={seeding}>
          {seeding ? 'Carregando…' : 'Carregar modelo padrão'}
        </button>
      </div>
    );
  }

  return children;
}
