import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>, 
        children : [
            {
                path : "/",
                element: <Home></Home>
            },
        ]
    },
]);

export default router;
