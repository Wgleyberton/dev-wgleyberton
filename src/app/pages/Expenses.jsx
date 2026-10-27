import { useFinance } from '../finance/FinanceContext';
import { formatBRL } from '../finance/model';
import EntryTable from '../components/EntryTable';
import FinanceGate from '../components/FinanceGate';
import StatTile from '../components/StatTile';
import { ExpenseIcon } from '../layout/icons';

function ExpensesContent() {
  const { essential, nonEssential, summary } = useFinance();

  return (
    <div className="page">
      <div className="stats stats--three">
        <StatTile tone="essential" icon={<ExpenseIcon />} label="Despesas essenciais" value={formatBRL(summary.totalEssential)} />
        <StatTile tone="non_essential" icon={<ExpenseIcon />} label="Despesas não essenciais" value={formatBRL(summary.totalNonEssential)} />
        <StatTile tone="neutral" icon={<ExpenseIcon />} label="Total geral de despesas" value={formatBRL(summary.totalExpenses)} />
      </div>
      <div className="page__columns">
        <EntryTable
          title="Essenciais"
          entries={essential}
          kind="expense"
          group="essential"
          totalLabel="Total de despesas essenciais"
          swatch="var(--c-essential)"
        />
        <EntryTable
          title="Não essenciais"
          entries={nonEssential}
          kind="expense"
          group="non_essential"
          totalLabel="Total de despesas não essenciais"
          swatch="var(--c-non_essential)"
        />
      </div>
    </div>
  );
}

export default function Expenses() {
  return (
    <FinanceGate>
      <ExpensesContent />
    </FinanceGate>
  );
}
