import { Link } from 'react-router-dom';
import { useFinance } from '../finance/FinanceContext';
import { EMERGENCY_MONTHS, formatBRL, formatPercent } from '../finance/model';
import FinanceGate from '../components/FinanceGate';
import FlowChart from '../components/FlowChart';
import IncomeDonut from '../components/IncomeDonut';
import StatTile from '../components/StatTile';
import TopExpenses from '../components/TopExpenses';
import { ExpenseIcon, IncomeIcon, InvestmentIcon, LogoMark, ShieldIcon } from '../layout/icons';

function Overview() {
  const { entries, summary } = useFinance();
  const {
    totalIncome, totalEssential, totalNonEssential, totalExpenses, balance, emergencyReserve,
    totalInvestments, balanceWithInvestments,
  } = summary;
  const share = (v) => (totalIncome > 0 ? `${formatPercent(v / totalIncome)} da renda` : null);

  return (
    <div className="dashboard">
      <div className="heroes">
        <section className="hero">
          <div className="hero__top">
            <span className="hero__logo"><LogoMark /></span>
            <span className="hero__tag">{balance >= 0 ? 'Sobra mensal' : 'Déficit mensal'}</span>
          </div>
          <span className="hero__value">{formatBRL(balance)}</span>
          <p className="hero__text">
            {balance >= 0
              ? 'Se sua planilha estiver correta, todo mês vai sobrar este valor.'
              : 'Suas despesas estão maiores que suas receitas. Revise os gastos não essenciais.'}
          </p>
          <div className="hero__actions">
            <Link to="/app/receitas" className="hero__action"><IncomeIcon />Receitas</Link>
            <Link to="/app/despesas" className="hero__action"><ExpenseIcon />Despesas</Link>
          </div>
        </section>

        <section className="hero hero--light">
          <div className="hero__top">
            <span className="hero__logo"><InvestmentIcon /></span>
            <span className="hero__tag">Sobra mensal + investimentos</span>
          </div>
          <span className="hero__value">{formatBRL(balanceWithInvestments)}</span>
          <div className="hero__breakdown">
            <div>
              <span className="hero__breakdown-label">{balance >= 0 ? 'Sobra mensal' : 'Déficit mensal'}</span>
              <strong>{formatBRL(balance)}</strong>
            </div>
            <span className="hero__breakdown-plus" aria-hidden="true">+</span>
            <div>
              <span className="hero__breakdown-label">Total investido</span>
              <strong>{formatBRL(totalInvestments)}</strong>
            </div>
          </div>
          <div className="hero__actions">
            <Link to="/app/investimentos" className="hero__action"><InvestmentIcon />Investimentos</Link>
          </div>
        </section>
      </div>

      <div className="stats">
        <StatTile tone="income" icon={<IncomeIcon />} label="Total de entradas" value={formatBRL(totalIncome)} />
        <StatTile
          tone="essential"
          icon={<ExpenseIcon />}
          label="Despesas essenciais"
          value={formatBRL(totalEssential)}
          hint={share(totalEssential)}
        />
        <StatTile
          tone="non_essential"
          icon={<ExpenseIcon />}
          label="Despesas não essenciais"
          value={formatBRL(totalNonEssential)}
          hint={share(totalNonEssential)}
        />
        <StatTile
          tone="neutral"
          icon={<ShieldIcon />}
          label="Reserva de emergência ideal"
          value={formatBRL(emergencyReserve)}
          hint={`${EMERGENCY_MONTHS}× o custo de vida básico`}
        />
      </div>

      <section className="card dashboard__flow">
        <div className="card__header">
          <h2 className="card__title">Entradas x Saídas</h2>
          <span className="muted">Mensal</span>
        </div>
        <FlowChart summary={summary} />
      </section>

      <section className="card dashboard__donut">
        <div className="card__header">
          <h2 className="card__title">Para onde vai sua renda</h2>
        </div>
        <IncomeDonut summary={summary} />
      </section>

      <section className="card dashboard__top">
        <div className="card__header">
          <h2 className="card__title">Maiores despesas</h2>
          <Link to="/app/despesas" className="link">Ver todas</Link>
        </div>
        <TopExpenses entries={entries} totalExpenses={totalExpenses} />
      </section>

      <section className="card dashboard__summary">
        <div className="card__header">
          <h2 className="card__title">Resumo</h2>
        </div>
        <table className="table table--summary">
          <tbody>
            <tr><td>Total de entradas</td><td className="table__num">{formatBRL(totalIncome)}</td></tr>
            <tr><td>Total de despesas essenciais</td><td className="table__num">{formatBRL(totalEssential)}</td></tr>
            <tr><td>Total de despesas não essenciais</td><td className="table__num">{formatBRL(totalNonEssential)}</td></tr>
            <tr><td>Total geral de despesas</td><td className="table__num">{formatBRL(totalExpenses)}</td></tr>
          </tbody>
          <tfoot>
            <tr>
              <td>{balance >= 0 ? 'Sobra mensal' : 'Déficit mensal'}</td>
              <td className={`table__num ${balance < 0 ? 'text-danger' : ''}`}>{formatBRL(balance)}</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </div>
  );
}

export default function Dashboard() {
  return (
    <FinanceGate>
      <Overview />
    </FinanceGate>
  );
}
