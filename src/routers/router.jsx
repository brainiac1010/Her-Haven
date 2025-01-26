import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import CategoryPage from "../components/pages/Category/CategoryPage";
import Search from "../components/pages/search/Search";
import ShopPage from "../components/pages/Shop/ShopPage";
import SingleProduct from "../components/pages/Shop/ProductDetails/SingleProduct";
import Login from "../components/Login";
import Register from "../components/Register";

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
                path:"/success",
                element: <div>When payment success </div>
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
]);

export default router;
