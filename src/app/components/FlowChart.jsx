import { useState } from 'react';
import { formatBRL, formatPercent } from '../finance/model';

// Barras horizontais: Entradas x Saídas (saídas empilhadas por grupo)
export default function FlowChart({ summary }) {
  const { totalIncome, totalEssential, totalNonEssential, totalExpenses, balance } = summary;
  const [hover, setHover] = useState(null);
  const max = Math.max(totalIncome, totalExpenses) || 1;

  const rows = [
    {
      label: 'Entradas',
      total: totalIncome,
      segments: [{ key: 'income', label: 'Entradas', value: totalIncome }],
    },
    {
      label: 'Saídas',
      total: totalExpenses,
      segments: [
        { key: 'essential', label: 'Essenciais', value: totalEssential },
        { key: 'non_essential', label: 'Não essenciais', value: totalNonEssential },
      ],
    },
  ];

  return (
    <div className="flow">
      <ul className="legend">
        <li><span className="swatch swatch--income" />Entradas</li>
        <li><span className="swatch swatch--essential" />Essenciais</li>
        <li><span className="swatch swatch--non_essential" />Não essenciais</li>
      </ul>

      {rows.map((row) => {
        const visible = row.segments.filter((s) => s.value > 0);
        return (
          <div key={row.label} className="flow__row">
            <div className="flow__meta">
              <span className="flow__label">{row.label}</span>
              <span className="flow__value">{formatBRL(row.total)}</span>
            </div>
            <div className="flow__track">
              {visible.length === 0 && <span className="flow__empty" />}
              {visible.map((seg, i) => (
                <span
                  key={seg.key}
                  className={`flow__bar flow__bar--${seg.key} ${i === visible.length - 1 ? 'flow__bar--end' : ''} ${hover && hover !== seg.key ? 'flow__bar--dim' : ''}`}
                  style={{ width: `${(seg.value / max) * 100}%` }}
                  onMouseEnter={() => setHover(seg.key)}
                  onMouseLeave={() => setHover(null)}
                  tabIndex={0}
                  onFocus={() => setHover(seg.key)}
                  onBlur={() => setHover(null)}
                  aria-label={`${seg.label}: ${formatBRL(seg.value)}`}
                >
                  {hover === seg.key && (
                    <span className="tip" role="tooltip">
                      <strong>{seg.label}</strong>
                      {formatBRL(seg.value)}
                      {totalIncome > 0 && <em>{formatPercent(seg.value / totalIncome, 1)} da renda</em>}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        );
      })}

      <p className="flow__footer">
        {balance >= 0 ? 'Sobra mensal' : 'Déficit mensal'}
        <strong className={balance < 0 ? 'text-danger' : ''}>{formatBRL(Math.abs(balance))}</strong>
      </p>
    </div>
  );
}
