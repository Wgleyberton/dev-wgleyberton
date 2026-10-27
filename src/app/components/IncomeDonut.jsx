import { useState } from 'react';
import { formatBRL, formatPercent } from '../finance/model';

const R = 70;
const STROKE = 20;
const C = 2 * Math.PI * R;
const GAP = 3;

// Para onde vai a renda: essenciais, não essenciais e o que sobra
export default function IncomeDonut({ summary }) {
  const { totalIncome, totalEssential, totalNonEssential, totalExpenses, balance, committedRatio } = summary;
  const [hover, setHover] = useState(null);

  const base = Math.max(totalIncome, totalExpenses);
  const segments = [
    { key: 'essential', label: 'Essenciais', value: totalEssential },
    { key: 'non_essential', label: 'Não essenciais', value: totalNonEssential },
    { key: 'free', label: 'Sobra', value: Math.max(balance, 0) },
  ].filter((s) => s.value > 0);

  let offset = 0;
  const arcs = segments.map((seg) => {
    const len = (seg.value / base) * C;
    const arc = { ...seg, dash: Math.max(len - (segments.length > 1 ? GAP : 0), 0.5), offset };
    offset += len;
    return arc;
  });

  const active = arcs.find((a) => a.key === hover);
  const overBudget = totalExpenses > totalIncome;

  return (
    <div className="donut">
      <div className="donut__chart">
        <svg viewBox="0 0 180 180" role="img" aria-label="Distribuição da renda">
          <circle cx="90" cy="90" r={R} className="donut__track" strokeWidth={STROKE} fill="none" />
          {arcs.map((a) => (
            <circle
              key={a.key}
              cx="90"
              cy="90"
              r={R}
              fill="none"
              strokeWidth={hover === a.key ? STROKE + 4 : STROKE}
              className={`donut__arc donut__arc--${a.key} ${hover && hover !== a.key ? 'donut__arc--dim' : ''}`}
              strokeDasharray={`${a.dash} ${C - a.dash}`}
              strokeDashoffset={-a.offset}
              transform="rotate(-90 90 90)"
              onMouseEnter={() => setHover(a.key)}
              onMouseLeave={() => setHover(null)}
            />
          ))}
        </svg>
        <div className="donut__center">
          {active ? (
            <>
              <span className="donut__caption">{active.label}</span>
              <span className="donut__value">{formatPercent(active.value / base, 1)}</span>
              <span className="donut__caption">{formatBRL(active.value)}</span>
            </>
          ) : (
            <>
              <span className="donut__caption">Renda comprometida</span>
              <span className={`donut__value ${overBudget ? 'text-danger' : ''}`}>{formatPercent(committedRatio)}</span>
              {overBudget && <span className="donut__caption">⚠ acima da renda</span>}
            </>
          )}
        </div>
      </div>

      <ul className="donut__legend">
        {[
          { key: 'essential', label: 'Essenciais', value: totalEssential },
          { key: 'non_essential', label: 'Não essenciais', value: totalNonEssential },
          { key: 'free', label: balance >= 0 ? 'Sobra' : 'Déficit', value: balance },
        ].map((item) => (
          <li
            key={item.key}
            onMouseEnter={() => setHover(item.key)}
            onMouseLeave={() => setHover(null)}
          >
            <span className={`swatch swatch--${item.key}`} />
            <span className="donut__legend-label">{item.label}</span>
            <span className="donut__legend-value">{formatBRL(Math.abs(item.value))}</span>
            <span className="badge">{base > 0 ? formatPercent(Math.abs(item.value) / base) : '—'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
