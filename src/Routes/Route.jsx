import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import NeedPage from "../Pages/NeedPage";
import ManageVolunteer from "../Pages/ManageVolunteer";
import AddVolunteer from "../Pages/AddVolunteer";

const routes = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
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
                element:<ManageVolunteer></ManageVolunteer>
            },
            {
                path:'/add',
                element:<AddVolunteer></AddVolunteer>
            }
        ]
    }
])
export default routes;