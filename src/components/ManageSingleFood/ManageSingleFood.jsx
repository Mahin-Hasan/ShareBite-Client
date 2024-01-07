import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import RequesterInfo from "../RequesterInfo/RequesterInfo";
import Swal from "sweetalert2";

const ManageSingleFood = () => {
    const { user } = useContext(AuthContext);

    const [foodRequests, setFoodRequests] = useState([]);


    const manage = useLoaderData();//food clicked 
    const { _id, foodName, foodImage, foodStatus } = manage;
    console.log(foodStatus);
    //if user.email === food or email then set url email to -- 
    const url = `http://localhost:5000/requests?foodId=${_id}`
    // const url = `http://localhost:5000/requests?foodId=659340991fa5d2b7d56fbe17`
    // console.log(url);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setFoodRequests(res.data);
            })
    }, [url])
    // console.log(foodRequests);


    const handleDeliver = (foodId, reqId) => {
        console.log('food id', foodId);
        console.log('req id', reqId);

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
                    // const remaining = foodRequests.filter(req => req._id !== reqId);
                    // console.log('remainingActual', remaining);
                    // setFoodRequests(remaining);
                    // console.log(addedFoods);
                    const remaining = foodRequests.filter(request => request._id !== reqId);
                    const updated = foodRequests.find(request => request._id === reqId);
                    updated.foodRequestStatus = 'delivered'
                    //code explain settting status confirm of the specific clicked item
                    const newRequests = [updated, ...remaining]
                    setFoodRequests(newRequests);
                }
            });
    }

    return (
        <div>
            <h1>this is manage single food for iD {_id}</h1>
            <h1>this is manage single food: {foodName}</h1>
            <img src={foodImage} alt="" />
            {/* Showing information */}
            {/* {
                foodStatus === "pending" ? (
                    foodRequests.map(request => (
                        <RequesterInfo
                            key={request._id}
                            request={request}
                            handleDeliver={handleDeliver}
                        ></RequesterInfo>
                    ))
                ) : (
                    <span className="font-bold text-primary">No Request for this food</span>
                )
            } */}
            {/* fix table issue */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th> */}
                                <th>Image</th>
                                <th>Requester Name</th>
                                <th>Email</th>
                                <th>Requested Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                foodRequests.map(request => <RequesterInfo
                                    key={request._id}
                                    request={request}
                                    handleDeliver={handleDeliver}
                                ></RequesterInfo>)
                            }

                        </tbody>
                        {/* foot */}
                        {/* <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </tfoot> */}

                    </table>
                </div>
            </div>
            {/* {
                foodRequests.map(request => <RequesterInfo
                    key={request._id}
                    request={request}
                    handleDeliver={handleDeliver}
                ></RequesterInfo>)
            } */}
        </div>
    );
};

export default ManageSingleFood;