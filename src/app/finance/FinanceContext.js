import { createContext, useContext } from 'react';

export const FinanceContext = createContext(null);

export function useFinance() {
  const ctx = useContext(FinanceContext);
  if (!ctx) throw new Error('useFinance deve ser usado dentro de <FinanceProvider>');
  return ctx;
}
