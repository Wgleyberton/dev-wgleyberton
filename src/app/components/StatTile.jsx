export default function StatTile({ label, value, hint, icon, tone = 'neutral' }) {
  return (
    <div className={`stat stat--${tone}`}>
      <div className="stat__head">
        <span className="stat__icon" aria-hidden="true">{icon}</span>
        <span className="stat__label">{label}</span>
      </div>
      <span className="stat__value">{value}</span>
      {hint && <span className="stat__hint">{hint}</span>}
    </div>
  );
}
