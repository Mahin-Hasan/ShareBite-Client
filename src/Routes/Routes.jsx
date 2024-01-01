import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import AvailableFood from "../components/AvailableFood/AvailableFood";
import AddFood from "../components/AddFood/AddFood";
import ManageFood from "../components/ManageFood/ManageFood";
import FoodRequest from "../components/FoodRequest/FoodRequest";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/availableFoods",
                element: <AvailableFood></AvailableFood>
            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/manageFood",
                element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>
            },
            {
                path: "/foodRequest",
                element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>
            },
        ]
    },
]);

export default router;