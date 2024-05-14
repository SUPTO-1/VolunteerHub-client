import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import NeedPage from "../Pages/NeedPage";
import ManageVolunteer from "../Pages/ManageVolunteer";
import AddVolunteer from "../Pages/AddVolunteer";
import DetailsPage from "../Pages/DetailsPage";
import BeAVolunteer from "../Pages/BeAVolunteer";
import UpdatePost from "../Pages/UpdatePost";
import Error from "../Error/Error";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/need',
                element:<NeedPage></NeedPage>
            },
            {
                path:'/manage',
                element:<PrivateRoute><ManageVolunteer></ManageVolunteer></PrivateRoute>
            },
            {
                path:'/add',
                element:<PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader:({params}) => fetch(`https://volunteer-hub-server-eight.vercel.app/volunteers/${params.id}`)
            },
            {
                path:'/be-a-volunteer/:id',
                element:<PrivateRoute><BeAVolunteer></BeAVolunteer></PrivateRoute>,
                loader:({params}) => fetch(`https://volunteer-hub-server-eight.vercel.app/volunteers/${params.id}`)
            },
            {
                path:'/manage/:email',
                element:<PrivateRoute><ManageVolunteer></ManageVolunteer></PrivateRoute>,
                loader:({params}) => fetch(`https://volunteer-hub-server-eight.vercel.app/volunteers/user/${params.email}`)
            },
            {
                path:'/update/:id',
                element:<PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
                loader:({params}) => fetch(`https://volunteer-hub-server-eight.vercel.app/volunteers/${params.id}`)
            }
        ]
    }
])
export default routes;