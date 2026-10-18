import { Navigate, Route, Routes } from 'react-router-dom';
import { isSupabaseConfigured } from './lib/supabaseClient';
import AuthProvider from './auth/AuthProvider';
import ProtectedRoute from './auth/ProtectedRoute';
import AppLayout from './layout/AppLayout';
import AuthCard from './layout/AuthCard';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import './app.css';

export default function AppRoutes() {
  if (!isSupabaseConfigured) {
    return (
      <AuthCard
        title="Indisponível"
        subtitle="Supabase não configurado: defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY em .env.local."
      />
    );
  }

  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
    </AuthProvider>
  );
}
