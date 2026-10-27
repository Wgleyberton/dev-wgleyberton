import { useFinance } from '../finance/FinanceContext';
import { formatBRL } from '../finance/model';
import EntryTable from '../components/EntryTable';
import FinanceGate from '../components/FinanceGate';
import StatTile from '../components/StatTile';
import { InvestmentIcon } from '../layout/icons';

function InvestmentsContent() {
  const { investments, summary } = useFinance();

  return (
    <div className="page">
      <div className="stats stats--compact">
        <StatTile
          tone="investment"
          icon={<InvestmentIcon />}
          label="Total investido"
          value={formatBRL(summary.totalInvestments)}
          hint={`${investments.length} ${investments.length === 1 ? 'aplicação' : 'aplicações'} · saldo acumulado`}
        />
      </div>
      <EntryTable
        title="Investimentos"
        entries={investments}
        kind="investment"
        totalLabel="Total investido"
        valueLabel="Saldo atual"
        swatch="var(--c-investment)"
      />
    </div>
  );
}

export default function Investments() {
  return (
    <FinanceGate skipEmpty>
      <InvestmentsContent />
    </FinanceGate>
  );
}
