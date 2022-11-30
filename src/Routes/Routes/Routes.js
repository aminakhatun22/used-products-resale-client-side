import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import CategoriesProducts from '../../Pages/Categories/CategoriesProducts/CategoriesProducts';
import Category from '../../Pages/Categories/Categoris/Category';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../../Pages/Dashboard/AllSellers/AllSellers';
import AddAProduct from '../../Pages/Dashboard/Dashboard/AddAProduct/AddAProduct';

import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from '../../Pages/Dashboard/Dashboard/MyOrders/MyOrders';
import MyProducts from '../../Pages/Dashboard/Dashboard/MyProducts/MyProducts';
import MyWishList from '../../Pages/Dashboard/Dashboard/MyWishList/MyWishList';


import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';

import ErrorElement from '../../Pages/Shared/ErrorElement/ErrorElement';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute';


import PrivateRoute from '../PrivateRoute/PrivateRoute';
import UserRoute from '../UserRoute';
import SellerRoute from './SellerRoute';

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

                loader: ({ params }) =>
                    fetch(`https://quality-consoles-server.vercel.app/categoriesProduct/${params.id}`),
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
                path: '/dashboard/myorders',
                element: <UserRoute><MyOrders></MyOrders></UserRoute>

            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute> <AllSellers></AllSellers></AdminRoute>
            },

            {
                path: '/dashboard/allbuyers',

                element: <AdminRoute> <AllBuyers></AllBuyers></AdminRoute>

            },

            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>

            },

            {
                path: '/dashboard/mywishlist',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>

            }

        ]
    },
])

export default router;