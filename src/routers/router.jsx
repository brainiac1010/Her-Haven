import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import CategoryPage from "../components/pages/Category/CategoryPage";
import Search from "../components/pages/search/Search";
import ShopPage from "../components/pages/Shop/ShopPage";
import SingleProduct from "../components/pages/Shop/ProductDetails/SingleProduct";
import Login from "../components/Login";
import Register from "../components/Register";
import PaymentSuccess from "../components/PaymentSuccess";
import DashboardLayout from "../components/pages/dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import UserDMain from "../components/pages/dashboard/user/dashboard/UserDMain";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [

            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/categories/:categoryName",
                element: <CategoryPage></CategoryPage>
            },

            {
                path: "/search",
                element: <Search></Search>
            },
            {
                path: "/shop",
                element: <ShopPage></ShopPage>
            },
            {
                path: "/shop/:id",
                element: <SingleProduct></SingleProduct>
            },
            {
                path: "/success",
                element: <PaymentSuccess></PaymentSuccess>
            }


        ]
    },

    {
        path: '/login',
        element: <Login></Login>

    },
    {
        path: '/register',
        element: <Register></Register>

    },
    //dashboard routs  start hear ... 
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>, //TODO...it will bea a privet route hear
        children: [
            //user routes
            { path: "", element: <UserDMain></UserDMain>},
            { path: "orders", element: <div>user Order</div> },
            { path: "payments", element: <div>user Payments</div> },
            { path: "profile", element: <div>user Profile</div> },
            { path: "reviews", element: <div>user Reviews</div> },

            //admin routes(only accessible for admin) TODO :ROLE FILED INCLUDE with privet route
            {
                path: "admin",
                element: <PrivateRoute role="admin"><div>Admin main</div></PrivateRoute>
            },
            {
                path: "add-new-post",
                element: <PrivateRoute role="admin"><div>New Post</div></PrivateRoute>
            },
            {
                path: "manage-products",
                element: <PrivateRoute role="admin"><div>Manage Post</div></PrivateRoute>
            },
            {
                path: "update-product/:id",
                element: <PrivateRoute role="admin"><div>Update Post</div></PrivateRoute>
            },
            {
                path: "users",
                element: <PrivateRoute role="admin"><div>All Users</div></PrivateRoute>
            },
            {
                path: "manage-orders",
                element: <PrivateRoute role="admin"><div>Manage Orders</div></PrivateRoute>
            }

        ]
    },

]);

export default router;
