import { createBrowserRouter } from "react-router-dom";
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
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
            ,
            {
                path:'/home',
                element:<Home></Home>
            }
            ,
            {
                path:'/allcars',
                loader:async()=>{
                    return fetch('http://localhost:5000/cars')
                }
                ,
                element:<AllCars></AllCars>
            }
            ,
            {
                path:'/category/:id',
                loader:async({params})=>{
                    return fetch(`http://localhost:5000/cars/${params.id}`);
                }
                ,
                element:<PrivateRoute><Products></Products></PrivateRoute>
            }
            ,
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            ,
            {
                path:'/login',
                element:<SignIn></SignIn>
            }
            ,
            {
                path:'/register',
                element:<SignUp></SignUp>
            }
        ]
    }
    ,
    {
        path:'*',
        element:<NotFound></NotFound>
    }
]);

export default router;