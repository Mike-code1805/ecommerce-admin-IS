import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/topbar/Topbar';
import '../App.css';
import { publicRoutes, privateRoutes } from './routes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const admin = useSelector((state) => state.user.currentUser);
  console.log({ admin });
  return (
    <div>
      {admin ? <Topbar /> : null}
      <div className='container'>
        {admin ? <Sidebar /> : null}
        <Routes>
          <Route element={<PublicRoute user={!admin} />}>
            {publicRoutes.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<PrivateRoute user={admin} />}>
            {privateRoutes.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </div>
    </div>
  );
};
