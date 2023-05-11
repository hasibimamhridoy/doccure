import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayouts/MainLayouts";
import Home from "../../pages/Home/Home/Home";
import Specialities from "../../pages/Specialities/Specialities";
import Doctors from "../../pages/Doctors/Doctors";
import Blog from "../../pages/Blog/Blog";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Login from "../../pages/LoginSignup/Login/Login";
import Signup from "../../pages/LoginSignup/Signup/Signup";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/specialities',
                element:<Specialities></Specialities>
            },
            {
                path:'/doctors',
                element:<Doctors></Doctors>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contactUs',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            
        ]
    }
])

export default router;