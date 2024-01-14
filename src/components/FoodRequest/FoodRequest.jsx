import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import AllFoodRequest from "../AllFoodRequest/AllFoodRequest";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import gif from '../../assets/loader.gif'
import { motion } from 'framer-motion';

const FoodRequest = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { user } = useContext(AuthContext);
    // a state to set change in data
    const [requestedFood, setRequestedFood] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        document.title = "Food Request"
    }, [])
    const url = `http://localhost:5000/requests?loggedUserEmail=${user.email}`

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setRequestedFood(res.data);
                setLoading(true);
            })
    }, [url])
    const handleDeleteRequest = id => {
        console.log('Delete button clicked for ID:', id);
        Swal.fire({
            title: "Cancel Requested food?",
            text: "Once deleted cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log('Result of confirmation dialog:', result);

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/requests/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Delete request response:', data);

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your requested food has been deleted.",
                                icon: "success"
                            });

                            const remaining = requestedFood.filter(food => food._id !== id);
                            setRequestedFood(remaining);
                        }
                    })
                    .catch(error => {
                        console.error('Error during delete request:', error);
                    });
            }
        });
    };
    return (
        <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <div>
            <div className="flex justify-center">
                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="text-xl font-semibold">{requestedFood.length === 0 && (
                        <p>No Requested food</p>
                    )}</h2>
                    <div className="space-y-1 text-right">
                        <p>Total Requested Food:
                            <span className="font-semibold custom-font text-2xl text-amber-400"> {requestedFood.length}</span>
                        </p>
                    </div>
                    <ul className="flex flex-col divide-y dark:divide-gray-700">
                        {
                            loading ? (
                                requestedFood.map(reqFood => (
                                    <AllFoodRequest
                                        key={reqFood._id}
                                        reqFood={reqFood}
                                        handleDeleteRequest={handleDeleteRequest}
                                    ></AllFoodRequest>
                                ))
                            )
                                :
                                (
                                    <div>
                                        <img className="w-80" src={gif} />
                                    </div>
                                )
                        }
                    </ul>
                    <div className="flex justify-end space-x-4">
                        <Link to='/'>
                            <button className="px-6 py-2 border rounded-md dark:border-violet-400">
                                <span className="sr-only sm:not-sr-only">Back to </span>Home
                            </button>
                        </Link>
                        <Link to='/availableFoods'>
                            <button className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                                <span className="sr-only sm:not-sr-only">Continue to </span>Request
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default FoodRequest;