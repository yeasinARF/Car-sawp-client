import { createBrowserRouter } from "react-router-dom";
import AddCategories from "../Dashboard/AddCategorie/AddCategories";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Dashboard/AllSellers/AllSellers";
import Layout from "../Dashboard/Layout/Layout";
import MyOrders from "../Dashboard/MyOrders/MyOrders";
import MyProducts from "../Dashboard/MyProducts/MyProducts";
import ReportedItems from "../Dashboard/ReportedItems/ReportedItems";
import Main from "../layout/Main";
import AllCars from "../Pages/AllCars/AllCars";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Products from "../Pages/Products/Products";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,
            {
                path: '/home',
                element: <Home></Home>
            }
            ,
            {
                path: '/allcars',
                loader: async () => {
                    return fetch('https://car-swap-server.vercel.app/cars')
                }
                ,
                element: <AllCars></AllCars>
            }
            ,
            {
                path: '/category/:id',
                loader: async ({ params }) => {
                    return fetch(`https://car-swap-server.vercel.app/cars/${params.id}`);
                }
                ,
                element: <PrivateRoute><Products></Products></PrivateRoute>
            }
            ,
            {
                path: '/blog',
                element: <Blog></Blog>
            }
            ,
            {
                path: '/login',
                element: <SignIn></SignIn>
            }
            ,
            {
                path: '/register',
                element: <SignUp></SignUp>
            }
            ,
            {
                path: '/dashboard',
                loader: async () => {
                    return fetch('https://car-swap-server.vercel.app/users/seller')
                }
                ,
                element: <Layout></Layout>
                ,
                children: [
                    {
                        path: 'addProduct',
                        element: <AddProduct></AddProduct>
                    }
                    ,
                    {
                        path:'addCategory',
                        element:<AddCategories></AddCategories>
                    }
                    ,
                    {
                        path: 'myProducts/:email',
                        loader: async ({ params }) => {
                            return fetch(`https://car-swap-server.vercel.app/products/${params.email}`)
                        }
                        ,
                        element: <MyProducts></MyProducts>
                    }
                    , {
                        path: 'myOrders/:email',
                        loader: async ({ params }) => {
                            return fetch(`https://car-swap-server.vercel.app/orders/${params.email}`)
                        }
                        ,
                        element: <MyOrders></MyOrders>
                    }
                    ,
                    {
                        path: 'allSellers',
                        loader: async () => {
                            return fetch('https://car-swap-server.vercel.app/users/seller')
                        }
                        ,
                        element: <AllSellers></AllSellers>
                    }
                    ,
                    {
                        path: 'allBuyers',
                        loader: async () => {
                            return fetch('https://car-swap-server.vercel.app/users/buyer')
                        }
                        ,
                        element: <AllBuyers></AllBuyers>
                    }
                    ,
                    {
                        path: 'reportedItems',
                        loader: async () => {
                            return fetch('https://car-swap-server.vercel.app/reportedItems')
                        }
                        ,
                        element: <ReportedItems></ReportedItems>
                    }
                ]

            }
        ]
    }
    ,
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;