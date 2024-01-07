import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import AvailableFoods from "../components/AvailableFoods/AvailableFoods";
import AddFood from "../components/AddFood/AddFood";
import ManageFood from "../components/ManageFood/ManageFood";
import FoodRequest from "../components/FoodRequest/FoodRequest";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../components/FoodDetails/FoodDetails";
import EditFood from "../components/EditFood/EditFood";
import ManageSingleFood from "../components/ManageSingleFood/ManageSingleFood";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/foods')
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
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: "/food/:id",
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/editFood/:id",
                element: <PrivateRoute><EditFood></EditFood></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: "/manageFood",
                element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute>
            },
            {
                path: "/manage/:id",
                element: <PrivateRoute><ManageSingleFood></ManageSingleFood></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: "/foodRequest",
                element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute>
            },
        ]
    },
]);

export default router;