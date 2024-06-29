import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home/Home";
import App from "../App";
import Gig from "../Pages/gig/Gig";
import AddGig from "../Pages/add/AddGig";
import Orders from "../Pages/orders/Orders";
import Messages from "../Pages/messages/Messages";
import Message from "../Pages/message/Message";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import MyGigs from "../Pages/myGigs/MyGigs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
    
            {
                path: "/myGigs",
                element: <MyGigs />,
            },
            {
                path: "/gig/:id",
                element: <Gig />,
            },
            {
                path: "/add",
                element: <AddGig />,
            },
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/messages",
                element: <Messages />,
            },
            {
                path: "/message/:id",
                element: <Message />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
