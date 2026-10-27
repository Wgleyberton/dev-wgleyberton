// Itens padrão baseados na planilha modelo (valores começam zerados)
const incomeTemplate = [
  ['Salário líquido', 'Titular'],
  ['Vale-alimentação', 'Titular'],
  ['Vale-refeição', 'Titular'],
  ['Salário líquido', 'Outra pessoa'],
  ['Vale-alimentação', 'Outra pessoa'],
  ['Vale-refeição', 'Outra pessoa'],
  ['Renda extra 01', 'Avon, Uber…'],
  ['Renda extra 02', 'Comissões, bônus…'],
  ['Renda extra 03', 'Aluguel, aulas…'],
];

const essentialTemplate = [
  ['Moradia', 'Aluguel/financiamento'],
  ['Condomínio', null],
  ['Supermercado', 'Valor médio'],
  ['Água', 'Incluso no condomínio?'],
  ['Luz', 'Incluso no condomínio?'],
  ['Gás', 'Incluso no condomínio?'],
  ['IPTU', 'Incluso no condomínio?'],
  ['Plano de saúde', 'Incluso nos benefícios do trabalho?'],
  ['Seguro de vida', 'Incluso nos benefícios do trabalho?'],
  ['Investimentos', 'Obrigatório investir todo mês!'],
  ['Outras despesas essenciais 01', null],
  ['Outras despesas essenciais 02', null],
];

const nonEssentialTemplate = [
  ['Academia/Esportes', null],
  ['Aplicativos, programas e assinaturas', null],
  ['Cartão de crédito', 'Evite usar!'],
  ['Celular/Telefonia', null],
  ['Combustível', null],
  ['Empréstimos', 'Tente eliminar!'],
  ['Escola/Faculdade/Cursos', null],
  ['Farmácia', null],
  ['Financiamento de veículos', 'Carro ou moto'],
  ['Gastos com animais', null],
  ['Gastos imprevistos', 'Valor médio'],
  ['Gastos com transporte', 'Ônibus/trem/99/Uber'],
  ['Internet residencial', null],
  ['Lazer', 'Cinema, passeios, baladas…'],
  ['Plataformas de streaming', 'Netflix/Amazon/HBO'],
  ['Padaria/Feira', null],
  ['Restaurantes/iFood', null],
  ['Salão/Manicure/Depilação', null],
  ['Tarifas bancárias', 'Peça isenção no banco!'],
  ['Outras despesas 01', 'IPVA, seguro…'],
  ['Outras despesas 02', 'Tratamentos médicos, psicólogo…'],
];

function toRows(items, kind, expenseGroup = null) {
  return items.map(([description, note], position) => ({
    kind,
    expense_group: expenseGroup,
    description,
    note,
    amount: 0,
    position,
  }));
}

export const templateRows = [
  ...toRows(incomeTemplate, 'income'),
  ...toRows(essentialTemplate, 'expense', 'essential'),
  ...toRows(nonEssentialTemplate, 'expense', 'non_essential'),
];

export const groupLabels = {
  essential: 'Essenciais',
  non_essential: 'Não essenciais',
};

// Reserva de emergência ideal = 6x o custo de vida básico (despesas essenciais)
export const EMERGENCY_MONTHS = 6;

const sum = (entries) => entries.reduce((acc, e) => acc + Number(e.amount), 0);

export function computeSummary(entries) {
  const income = entries.filter((e) => e.kind === 'income');
  const essential = entries.filter((e) => e.expense_group === 'essential');
  const nonEssential = entries.filter((e) => e.expense_group === 'non_essential');

  const totalIncome = sum(income);
  const totalEssential = sum(essential);
  const totalNonEssential = sum(nonEssential);
  const totalExpenses = totalEssential + totalNonEssential;

  return {
    totalIncome,
    totalEssential,
    totalNonEssential,
    totalExpenses,
    balance: totalIncome - totalExpenses,
    emergencyReserve: totalEssential * EMERGENCY_MONTHS,
    committedRatio: totalIncome > 0 ? totalExpenses / totalIncome : null,
  };
}

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export function formatBRL(value) {
  return brl.format(Number(value) || 0);
}

export function formatPercent(ratio, digits = 0) {
  if (ratio == null || !Number.isFinite(ratio)) return '—';
  return `${(ratio * 100).toLocaleString('pt-BR', { maximumFractionDigits: digits })}%`;
}

// Aceita "1.234,56", "1234,56", "1234.56" e "R$ 10"; retorna NaN se inválido
export function parseAmount(input) {
  const s = String(input).replace(/R\$|\s/g, '');
  if (!s) return 0;
  const normalized = s.includes(',') ? s.replace(/\./g, '').replace(',', '.') : s;
  const n = Number(normalized);
  return Number.isFinite(n) && n >= 0 ? Math.round(n * 100) / 100 : NaN;
}

export function amountToInput(value) {
  return Number(value || 0).toFixed(2).replace('.', ',');
}
