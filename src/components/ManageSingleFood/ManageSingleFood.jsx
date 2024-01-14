import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import RequesterInfo from "../RequesterInfo/RequesterInfo";
import Swal from "sweetalert2";

const ManageSingleFood = () => {
    const [foodRequests, setFoodRequests] = useState([]);
    const [loading, setLoading] = useState(false);


    const manage = useLoaderData();//food clicked 
    const { _id, foodName, foodImage } = manage;
    const url = `http://localhost:5000/requests?foodId=${_id}`
    useEffect(()=>{
        document.title=`Manage ${foodName}`
    },[])
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setFoodRequests(res.data);
                setLoading(true);
            })
    }, [url])


    const handleDeliver = (foodId, reqId) => {
        console.log('food id', foodId);
        // console.log('req id', reqId);

        fetch(`http://localhost:5000/requests/${reqId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                foodRequestStatus: 'delivered',
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Delivered",
                        text: "Pending Food Request Set To Delivered",
                        icon: "success"
                    });
                    const remaining = foodRequests.filter(request => request._id !== reqId);
                    const updated = foodRequests.find(request => request._id === reqId);
                    updated.foodRequestStatus = 'delivered'
                    const newRequests = [updated, ...remaining]
                    setFoodRequests(newRequests);
                }
            });
    }

    return (
        <div className="container mx-auto">
            <h1 className="font-bold  mt-32 mb-6 text-center text-yellow-700 custom-font text-5xl italic">Manage Food For: {foodName}</h1>
            <div className="flex justify-center">
                <div className="w-80">
                    <img className="w-full rounded-xl shadow-2xl" src={foodImage} />
                </div>
            </div>
            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="font-serif border text-xs sm:text-base text-zinc-800">
                                <th className="border px-1">Requester Details</th>
                                <th className="border px-1">Email</th>
                                <th className="border px-1">Requested Date</th>
                                <th className="border px-1">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? (
                                    foodRequests.map(request => (<RequesterInfo
                                        key={request._id}
                                        request={request}
                                        handleDeliver={handleDeliver}
                                    ></RequesterInfo>))
                                ) : (
                                    <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg text-amber-600"></span>
                                    </div>
                                )
                            }
                            {/* {
                                foodRequests.map(request => <RequesterInfo
                                    key={request._id}
                                    request={request}
                                    handleDeliver={handleDeliver}
                                ></RequesterInfo>)
                            } */}

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleFood;