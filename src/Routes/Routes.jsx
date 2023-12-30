import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import AvailableFood from "../components/AvailableFood/AvailableFood";
import AddFood from "../components/AddFood/AddFood";
import ManageFood from "../components/ManageFood/ManageFood";
import FoodRequest from "../components/FoodRequest/FoodRequest";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/availableFoods",
                element: <AvailableFood></AvailableFood>
            },
            {
                path: "/addFood",
                element: <AddFood></AddFood>
            },
            {
                path: "/manageFood",
                element: <ManageFood></ManageFood>
            },
            {
                path: "/foodRequest",
                element: <FoodRequest></FoodRequest>
            },
        ]
    },
]);

export default router;