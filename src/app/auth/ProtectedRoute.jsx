import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Loader from '../layout/Loader';

export default function ProtectedRoute() {
  const { session, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loader />;
  if (!session) return <Navigate to="/app/login" replace state={{ from: location.pathname }} />;
  return <Outlet />;
}
