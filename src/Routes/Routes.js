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
import IndividualProduct from "../Pages/IndividualProducts/IndividualProduct";
import AdminSignIn from "../AdminPanel/AdminLogin/AdminSignIn";
import AllCategories from "../Dashboard/AllCategories/AllCategories";
import CustomerOrder from "../Dashboard/CustomerOrder/CustomerOrder";
import Overall from "../Dashboard/Overall/Overall";
import AboutSection from "../AboutSection/AboutSection";
import Contact from "../Contact/Contact";
import MyProfileSection from "../MyProfile/MyProfileSection";

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
                    return fetch('http://localhost:5000/cars')
                }
                ,
                element: <PrivateRoute><AllCars></AllCars></PrivateRoute>
            }
            ,
            {
                path: '/specific-car/:id',
                loader: async ({ params }) => {
                    return fetch(`https://car-swap-server.vercel.app/cars/${params.id}`);
                }
                ,
                element: <PrivateRoute><Products></Products></PrivateRoute>
            }
            ,
            {
                path: '/singleCar/:item_id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/advertise/${params.item_id}`);
                }
                ,
                element: <PrivateRoute><IndividualProduct></IndividualProduct></PrivateRoute>
            }
            ,
            {
                path: '/aboutUs',
                element: <AboutSection></AboutSection>
            }
            ,
            {
                path: '/contactUs',
                element: <Contact></Contact>
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
                path: '/',
                loader: async () => {
                    return fetch('https://car-swap-server.vercel.app/users/seller')
                }
                ,
                element: <PrivateRoute><Layout></Layout></PrivateRoute>
                ,
                children: [
                    {
                        path: 'addProduct',
                        element: <AddProduct></AddProduct>
                    }
                    ,
                    {
                        
                        
                        path: 'addCategory',
                        loader: async () => {
                            return fetch('http://localhost:5000/categories')
                        }
                        ,
                        element: <AddCategories></AddCategories>
                    }
                    ,
                    {
                        path: 'myProducts/:email',
                        loader: async ({ params }) => {
                            return fetch(`http://localhost:5000/products/${params.email}`)
                        }
                        ,
                        element: <MyProducts></MyProducts>
                    }
                    , {
                        path: 'myOrders/:email',
                        loader: async ({ params }) => {
                            return fetch(`http://localhost:5000/orders/${params.email}`)
                        }
                        ,
                        element: <MyOrders></MyOrders>
                    }
                    ,
                    {
                        path: 'order/:email',
                        loader: async ({ params }) => {
                            return fetch(`http://localhost:5000/customerOrder/${params.email}`)
                        }
                        ,
                        element: <CustomerOrder></CustomerOrder>
                    }
                    , {
                        path: 'allBrand/:email',
                        loader: async ({ params }) => {
                            return fetch(`http://localhost:5000/categories/${params.email}`)
                        }
                        ,
                        element: <AllCategories></AllCategories>
                    }
                    ,
                    {
                        path: 'dashboard',

                        element: <Overall></Overall>
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
                    ,
                    {
                        path: 'profile',
                        element: <MyProfileSection></MyProfileSection>
                    }
                    ,
                ]

            }
        ]
    }
    ,
    {
        path: 'admin-login',
        element: <AdminSignIn></AdminSignIn>
    }
    
    ,
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;