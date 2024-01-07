import { useLoaderData } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const FoodDetails = () => {
    const { user } = useContext(AuthContext);

    // _id
    // foodName
    // foodImage
    // foodQuantity
    // pickupLocation
    // expiredDateTime
    // additionalNotes
    // userName = donar name from previous stored
    // userEmail =
    // userPhoto
    // foodStatus




    const food = useLoaderData();
    const { _id, foodImage, foodName, foodQuantity, expiredDateTime, userName, userEmail, pickupLocation } = food;
    const currentDate = new Date();
    const requestedDate = currentDate.toLocaleDateString(); //Current Id
    const foodId = _id; // foodId
    const loggedUserEmail = user?.email;
    const loggedUserPhoto = user?.photoURL;
    const requesterName = user?.displayName;
    const foodRequestStatus = 'pending';
    console.log(foodRequestStatus);
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


        //change food request status on request
        // fetch(`http://localhost:5000/foods/${_id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({ 
        //         foodStatus: 'pending' })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     }


        //commenting previously added to wrong database
        // fetch(`http://localhost:5000/foods/${_id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         foodStatus: 'pending',
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //     });
    }
    return (
        <div className="container mx-auto">
            {/* <h1>This is Food Details of id:{_id}</h1> */}
            <img src={foodImage} alt="" />
            <p>Food Name: {foodName}</p>
            <p>Food QuantiQuantity: {foodQuantity}</p>
            <p>Food Expiration: {expiredDateTime}</p>
            {/* Trying modal */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Request Food</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="card bg-base-100 p-8">
                        <h1 className="text-center mb-4">Add Selected Food To My Request</h1>
                        <figure>
                            <img className="w-48" src={foodImage} alt="Shoes" />
                        </figure>
                        <div className="space-y-3 text-center">
                            <h5 className="text-2xl font-bold">{foodName}</h5>
                            <div className="text-start space-y-2 text-yellow-700 ">
                                <p>Food Id: {foodId}</p>
                                <p>Donator email: {userEmail}</p>
                                <p>Donator name: {userName}</p>
                                <p>Logged User email: {loggedUserEmail}</p>
                                <p>Request Date: {requestedDate}</p>
                                <p>Pickup Location: {pickupLocation}</p>
                                <p>Expire Date: {expiredDateTime}</p>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleRequestFood} className="">
                                <div className="form-control">
                                    <label className="label text-yellow-600 text-lg font-medium">
                                        Additional Information
                                    </label>
                                    <textarea id="extraInfo" name="extraInfo"
                                        className="px-2 border-2 w-full rounded-lg py-2"
                                        rows="2"
                                        placeholder="Type Here"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Amount you want to donate</span>
                                    </label>
                                    <input type="number" className="input input-bordered" name="donationAmount" required />
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
    );
};

export default FoodDetails;