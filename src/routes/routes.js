import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import NewProduct from '../pages/newProduct/NewProduct';
import NewUser from '../pages/newUser/NewUser';
import Product from '../pages/product/Product';
import ProductList from '../pages/productList/ProductList';
import User from '../pages/user/User';
import UserList from '../pages/userList/UserList';

export const publicRoutes = [
  {
    path: '/login',
    component: Login,
    name: '',
  },
];

export const privateRoutes = [
  {
    path: '/',
    component: Home,
    name: '',
  },
  {
    path: '/users',
    component: UserList,
    name: 'Usuarios',
  },
  {
    path: '/user/:userId',
    component: User,
    name: 'Usuario',
  },
  {
    path: '/newUser',
    component: NewUser,
    name: 'Nuevo Usuario',
  },
  {
    path: '/products',
    component: ProductList,
    name: 'Mis Productos',
  },
  {
    path: '/product/:productId',
    component: Product,
    name: '',
  },
  {
    path: '/newproduct',
    component: NewProduct,
    name: 'Nuevo Producto',
  },
];
