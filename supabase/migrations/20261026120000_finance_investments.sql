-- Investimentos: lançamentos separados de receitas e despesas.
-- O valor representa o saldo acumulado da aplicação (não o aporte mensal).
alter table public.finance_entries drop constraint finance_entries_kind_check;
alter table public.finance_entries
  add constraint finance_entries_kind_check check (kind in ('income', 'expense', 'investment'));

alter table public.finance_entries drop constraint finance_entries_group_matches_kind;
alter table public.finance_entries
  add constraint finance_entries_group_matches_kind check (
    (kind in ('income', 'investment') and expense_group is null)
    or (kind = 'expense' and expense_group is not null)
  );
