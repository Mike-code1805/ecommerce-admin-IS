import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to='/' replace />;
};
