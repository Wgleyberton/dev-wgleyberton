-- Lançamentos do orçamento mensal (receitas e despesas)
create table public.finance_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  kind text not null check (kind in ('income', 'expense')),
  -- Despesas são classificadas em essenciais / não essenciais; receitas não têm grupo
  expense_group text check (expense_group in ('essential', 'non_essential')),
  description text not null check (char_length(description) between 1 and 120),
  note text check (char_length(note) <= 200),
  amount numeric(12, 2) not null default 0 check (amount >= 0),
  position integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint finance_entries_group_matches_kind check (
    (kind = 'income' and expense_group is null)
    or (kind = 'expense' and expense_group is not null)
  )
);

create index finance_entries_user_kind_idx on public.finance_entries (user_id, kind, position);

alter table public.finance_entries enable row level security;

create policy "finance_entries_select_own"
  on public.finance_entries for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "finance_entries_insert_own"
  on public.finance_entries for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "finance_entries_update_own"
  on public.finance_entries for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "finance_entries_delete_own"
  on public.finance_entries for delete
  to authenticated
  using ((select auth.uid()) = user_id);

revoke all on public.finance_entries from anon;
grant select, insert, update, delete on public.finance_entries to authenticated;

create trigger finance_entries_set_updated_at
  before update on public.finance_entries
  for each row execute function public.set_updated_at();
