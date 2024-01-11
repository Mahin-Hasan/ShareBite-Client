import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import editFoodbg from "../../assets/editFood.jpg"
const EditFood = () => {
    const foods = useLoaderData();
    const { _id, foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes } = foods;
    const { user } = useContext(AuthContext);
    // console.log(_id);

    const handleEditFood = e => {
        e.preventDefault();

        const foodName = e.target.foodName.value;
        const foodImage = e.target.foodImage.value;
        const foodQuantity = e.target.foodQuantity.value;
        const pickupLocation = e.target.pickupLocation.value;
        const expiredDateTime = e.target.expiredDateTime.value;
        const additionalNotes = e.target.additionalNotes.value;
        const foodStatus = 'available';
        const userName = user.displayName;
        const userEmail = user.email;
        const userPhoto = user.photoURL;
        // console.log(foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes,user.photoURL,user.displayName,user.email,foodStatus);
        const updatedFood = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, userName, userEmail, userPhoto, foodStatus }
        console.log(updatedFood);
        axios.put(`http://localhost:5000/foods/${_id}`, updatedFood)
            .then(data => {
                console.log(data.data);
                if (data.data.modifiedCount) {
                    Swal.fire({
                        title: 'Successful...!',
                        text: 'Food Details Updated Added',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }
    return (
        <div style={{ backgroundImage: `url(${editFoodbg})` }} className="bg-cover bg-center my-16">
            <div className="py-32">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-inner">
                    <h2 className="font-bold mb-6 text-center text-yellow-700 custom-font text-4xl italic">Update Food Details</h2>
                    <form onSubmit={handleEditFood} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="label py-1 text-yellow-600 text-lg font-medium">
                                    Food Name
                                </label>
                                <input
                                    type="text"
                                    id="foodName"
                                    name="foodName"
                                    defaultValue={foodName}
                                    className="input input-bordered bg-[#fefff7] w-full rounded-md py-2"
                                    required />
                            </div>
                            <div>
                                <label className="label py-1 text-yellow-600 text-lg font-medium">
                                    Food Photo URL
                                </label>
                                <input type="url" id="foodImage" name="foodImage"
                                    className="input input-bordered bg-[#fefff7] w-full rounded-md py-2"
                                    defaultValue={foodImage}
                                    required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="label py-1 text-yellow-600 text-lg font-medium">
                                    Food Quantity
                                </label>
                                <input type="number" id="foodQuantity" name="foodQuantity"
                                    className="input input-bordered bg-[#fefff7] w-full rounded-md py-2"
                                    defaultValue={foodQuantity}
                                    required />
                            </div>
                            <div>
                                <label className="label py-1 text-yellow-600 text-lg font-medium">
                                    Pickup Location
                                </label>
                                <input type="text" id="pickupLocation" name="pickupLocation"
                                    className="input input-bordered bg-[#fefff7] w-full rounded-md py-2"
                                    defaultValue={pickupLocation}
                                    required />
                            </div>
                        </div>
                        <div>
                            <label className="label py-1 text-yellow-600 text-lg font-medium">
                                Expired Date/Time
                            </label>
                            <input type="date" id="expiredDateTime" name="expiredDateTime" className="input input-bordered bg-[#fefff7] w-full rounded-md py-2"
                                defaultValue={expiredDateTime}
                                required />

                        </div>
                        <div>
                            <label className="label py-1 text-yellow-600 text-lg font-medium">
                                Additional Notes
                            </label>
                            <textarea id="additionalNotes" name="additionalNotes"
                                className="px-2 border-2 bg-[#fefff7] w-full rounded-md py-2"
                                rows="3"
                                defaultValue={additionalNotes}
                            ></textarea>
                        </div>
                        <button type="submit" className=" btn btn-warning text-white py-2 px-4 rounded-md w-full">
                            Update Food
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditFood;

