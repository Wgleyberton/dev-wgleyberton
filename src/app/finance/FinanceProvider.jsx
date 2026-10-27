import { useCallback, useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { FinanceContext } from './FinanceContext';
import { computeSummary, templateRows } from './model';

const COLUMNS = 'id, kind, expense_group, description, note, amount, position, created_at';

const byPosition = (a, b) => a.position - b.position || a.created_at.localeCompare(b.created_at);

async function fetchEntries() {
  const { data, error } = await supabase.from('finance_entries').select(COLUMNS).order('position');
  if (error) throw error;
  return data;
}

export default function FinanceProvider({ children }) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    fetchEntries()
      .then((data) => active && setEntries(data))
      .catch((err) => active && setError(err.message))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, []);

  const create = useCallback(async (entry) => {
    const siblings = entries.filter(
      (e) => e.kind === entry.kind && e.expense_group === (entry.expense_group ?? null),
    );
    const position = siblings.reduce((max, e) => Math.max(max, e.position + 1), 0);
    const { data, error: err } = await supabase
      .from('finance_entries')
      .insert({ ...entry, position })
      .select(COLUMNS)
      .single();
    if (err) throw err;
    setEntries((prev) => [...prev, data]);
    return data;
  }, [entries]);

  const update = useCallback(async (id, patch) => {
    const { data, error: err } = await supabase
      .from('finance_entries')
      .update(patch)
      .eq('id', id)
      .select(COLUMNS)
      .single();
    if (err) throw err;
    setEntries((prev) => prev.map((e) => (e.id === id ? data : e)));
    return data;
  }, []);

  const remove = useCallback(async (id) => {
    const { error: err } = await supabase.from('finance_entries').delete().eq('id', id);
    if (err) throw err;
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const loadTemplate = useCallback(async () => {
    const { data, error: err } = await supabase
      .from('finance_entries')
      .insert(templateRows)
      .select(COLUMNS);
    if (err) throw err;
    setEntries((prev) => [...prev, ...data]);
  }, []);

  const value = useMemo(() => {
    const sorted = [...entries].sort(byPosition);
    return {
      entries: sorted,
      income: sorted.filter((e) => e.kind === 'income'),
      essential: sorted.filter((e) => e.expense_group === 'essential'),
      nonEssential: sorted.filter((e) => e.expense_group === 'non_essential'),
      investments: sorted.filter((e) => e.kind === 'investment'),
      summary: computeSummary(sorted),
      loading,
      error,
      create,
      update,
      remove,
      loadTemplate,
    };
  }, [entries, loading, error, create, update, remove, loadTemplate]);

  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>;
}
