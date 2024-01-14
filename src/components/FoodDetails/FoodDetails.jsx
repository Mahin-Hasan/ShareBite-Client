import { useLoaderData } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    useEffect(()=>{
        document.title="Food Details"
    },[])



    const food = useLoaderData();
    const { _id, foodImage, foodName, foodQuantity, expiredDateTime, userName, userEmail, pickupLocation } = food;
    const currentDate = new Date();
    const requestedDate = currentDate.toLocaleDateString(); //Current Id
    const foodId = _id; // foodId
    const loggedUserEmail = user?.email;
    const loggedUserPhoto = user?.photoURL;
    const requesterName = user?.displayName;
    const foodRequestStatus = 'pending';
    // console.log(foodRequestStatus);
    //additional notes
    //donation money


    const handleRequestFood = e => {
        e.preventDefault();

        const additionalInfo = e.target.extraInfo.value;
        const donationAmount = e.target.donationAmount.value;
        console.log(additionalInfo, donationAmount);

        const requestedFood = { foodName, foodImage, foodId, userEmail, userName, requestedDate, pickupLocation, expiredDateTime, additionalInfo, loggedUserEmail, loggedUserPhoto, requesterName, donationAmount, foodRequestStatus }
        console.log(requestedFood);
        axios.post('http://localhost:5000/requests', requestedFood)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    toast.success('Selected Food Requested', {
                        position: "top-right",
                        autoClose: 3000,
                    });
                }
            })

    }
    return (
        <div className="container mx-auto">
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-teal-100 text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={foodImage} className="w-full h-64 sm:h-[460px] bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-4 -mt-16 space-y-2 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-green-50">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-semibold sm:text-3xl text-center custom-font tracking-wide text-amber-600">Food Name: {foodName}</h1>
                            <p className="font-mono tracking-tight">Food QuantiQuantity: {foodQuantity}</p>
                            <p className="font-mono tracking-tight">Food Expiration: {expiredDateTime}</p>
                            <p className="font-mono tracking-tight">Pickup Locationn: {pickupLocation}</p>
                            <p className="font-mono tracking-tight">Expire Date: {expiredDateTime}</p>
                        </div>
                        <div className="flex justify-end">
                            <button className="btn btn-warning" onClick={() => document.getElementById('my_modal_1').showModal()}>Request Food</button>
                        </div>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className="card bg-base-100 p-2 sm:p-8">
                                    <h1 className="text-center mb-4 text-teal-700 text-xl font-serif font-semibold">Add Selected Food To My Request</h1>
                                    <figure>
                                        <img className="w-56" src={foodImage} alt="Shoes" />
                                    </figure>
                                    <div className="space-y-3 text-center">
                                        <h5 className="text-2xl font-bold custom-font tracking-wide text-amber-600">{foodName}</h5>
                                        <div className="text-start space-y-2 text-stone-600 font-medium">
                                            <p>Food Id: {foodId}</p>
                                            <p>Donator email: {userEmail}</p>
                                            <p>Donator name: {userName}</p>
                                            <p>Logged User email: {loggedUserEmail}</p>
                                            <p>Request Date: {requestedDate}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <form onSubmit={handleRequestFood} className="">
                                            <div className="form-control">
                                                <label className="label text-yellow-600 text-lg font-medium">
                                                    Amount you want to donate
                                                </label>
                                                <input type="number" className="input input-bordered py-0" name="donationAmount" required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label text-yellow-600 text-lg font-medium">
                                                    Additional Information
                                                </label>
                                                <textarea id="extraInfo" name="extraInfo"
                                                    className="px-2 border-2 w-full rounded-lg py-1"
                                                    rows="2"
                                                    placeholder="Type Here"></textarea>
                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="btn btn-primary">Request Food</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-action justify-end">
                                        <form method="dialog">
                                            <span className="flex items-center bg-red-500 hover:bg-red-800 duration-300 rounded-md p-3 text-white font-semibold">
                                                <button className="hidden sm:inline">
                                                    Close
                                                </button>
                                                <MdCancel className="ms-1 text-2xl font-extrabold" />
                                            </span>
                                        </form>


                                    </div>
                                </div>
                            </div>

                            {/* <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal /}
                            <button className="btn btn-sm">Close</button>
                        </form>
                    </div>
                </div> */}
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;