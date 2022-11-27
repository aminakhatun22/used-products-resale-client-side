import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import CategoriesProducts from '../../Pages/Categories/CategoriesProducts/CategoriesProducts';
import Category from '../../Pages/Categories/Categoris/Category';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../../Pages/Dashboard/AllSellers/AllSellers';

import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from '../../Pages/Dashboard/Dashboard/MyOrders/MyOrders';
import MyWishList from '../../Pages/Dashboard/Dashboard/MyWishList/MyWishList';


import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';

import ErrorElement from '../../Pages/Shared/ErrorElement/ErrorElement';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRout/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoriesProducts></CategoriesProducts></PrivateRoute>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },


        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/mywishlist',
                element: <MyWishList></MyWishList>
            }

        ]
    },
])

export default router;