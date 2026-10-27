import { formatBRL, formatPercent, groupLabels } from '../finance/model';

export default function TopExpenses({ entries, totalExpenses, limit = 5 }) {
  const top = entries
    .filter((e) => e.kind === 'expense' && Number(e.amount) > 0)
    .sort((a, b) => Number(b.amount) - Number(a.amount))
    .slice(0, limit);

  if (top.length === 0) {
    return <p className="muted">Cadastre valores nas despesas para ver o ranking.</p>;
  }

  const max = Number(top[0].amount);

  return (
    <ol className="ranking">
      {top.map((e) => (
        <li key={e.id} className="ranking__item">
          <div className="ranking__row">
            <span className="ranking__name">
              <span className={`swatch swatch--${e.expense_group}`} aria-hidden="true" />
              {e.description}
              <span className="ranking__group">{groupLabels[e.expense_group]}</span>
            </span>
            <span className="ranking__value">{formatBRL(e.amount)}</span>
            <span className="badge">{formatPercent(Number(e.amount) / totalExpenses)}</span>
          </div>
          <div className="meter">
            <span
              className={`meter__fill meter__fill--${e.expense_group}`}
              style={{ width: `${(Number(e.amount) / max) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ol>
  );
}
