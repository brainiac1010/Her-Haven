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
import UserOrder from "../components/pages/dashboard/user/UserOrder";
import OrderDetails from "../components/pages/dashboard/user/OrderDetails";
import UserPayments from "../components/pages/dashboard/user/UserPayments";
import UserReviews from "../components/pages/dashboard/user/UserReviews";
import UserProfile from "../components/pages/dashboard/user/UserProfile";
import AdminDmain from "../components/pages/dashboard/admin/dashboardAdmin/AdminDmain";
import AddProduct from "../components/pages/dashboard/admin/addProduct/AddProduct";
import ManageProduct from "../components/pages/dashboard/admin/ManageProduct/ManageProduct";
import UpdateProduct from "../components/pages/dashboard/admin/ManageProduct/UpdateProduct";
import ManageUser from "../components/pages/dashboard/admin/users/ManageUser";
import ManageOrder from "../components/pages/dashboard/admin/manageOrders/ManageOrder";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import OrderCancelled from "../components/pages/OrderCancle.jsx";
import OurBlogs from "../components/pages/Ourblogs.jsx";
import Terms from "../components/pages/Terms.jsx";
import Help from "../components/pages/Help.jsx";

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
            },
            {
                path: "/orders/:orderId",
                element: <OrderDetails></OrderDetails>
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/cancel",
                element: <OrderCancelled></OrderCancelled>
            },
            {
                path: "/blog",
                element: <OurBlogs></OurBlogs>
            },
            {
                path: "/terms",
                element: <Terms></Terms>
            },
            {
                path: "/help",
                element: <Help></Help>
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
            { path: "", element: <UserDMain></UserDMain> },
            { path: "orders", element: <UserOrder></UserOrder> },
            { path: "payments", element: <UserPayments></UserPayments> },
            { path: "profile", element: <UserProfile></UserProfile> },
            { path: "reviews", element: <UserReviews></UserReviews> },

            //admin routes(only accessible for admin) TODO :ROLE FILED INCLUDE with privet route
            {
                path: "admin",
                element: <PrivateRoute role="admin"><AdminDmain></AdminDmain></PrivateRoute>
            },
            {
                path: "add-product",
                element: <PrivateRoute role="admin"><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "manage-products",
                element: <PrivateRoute role="admin"><ManageProduct></ManageProduct></PrivateRoute>
            },
            {
                path: "update-product/:id",
                element: <PrivateRoute role="admin"><UpdateProduct></UpdateProduct></PrivateRoute>
            },
            {
                path: "users",
                element: <PrivateRoute role="admin"> <ManageUser></ManageUser></PrivateRoute>
            },
            {
                path: "manage-orders",
                element: <PrivateRoute role="admin"><ManageOrder></ManageOrder></PrivateRoute>
            }

        ]
    },

]);

export default router;
