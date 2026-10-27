import { useFinance } from '../finance/FinanceContext';
import { formatBRL } from '../finance/model';
import EntryTable from '../components/EntryTable';
import FinanceGate from '../components/FinanceGate';
import StatTile from '../components/StatTile';
import { IncomeIcon } from '../layout/icons';

function IncomeContent() {
  const { income, summary } = useFinance();

  return (
    <div className="page">
      <div className="stats stats--compact">
        <StatTile
          tone="income"
          icon={<IncomeIcon />}
          label="Total de entradas"
          value={formatBRL(summary.totalIncome)}
          hint={`${income.length} ${income.length === 1 ? 'lançamento' : 'lançamentos'}`}
        />
      </div>
      <EntryTable
        title="Receitas (entradas)"
        entries={income}
        kind="income"
        totalLabel="Total de entradas"
        swatch="var(--c-income)"
      />
    </div>
  );
}

export default function Income() {
  return (
    <FinanceGate>
      <IncomeContent />
    </FinanceGate>
  );
}
