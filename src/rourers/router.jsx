import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import CategoryPage from "../components/pages/Category/CategoryPage";

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
        ]
    },
]);

export default router;
