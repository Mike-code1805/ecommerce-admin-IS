import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Topbar from '../components/topbar/Topbar';
import { routes } from './routes';
import '../App.css';

export const Navigation = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </div>
  );
};
