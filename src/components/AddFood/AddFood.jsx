import { useContext, useEffect } from "react";
import { motion } from 'framer-motion';
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import addfoodbg from "../../assets/addfood.jpg"
const AddFood = () => {
    const { user } = useContext(AuthContext);
    useEffect(() => {
        document.title = "Add Food"
    }, [])
    // for framer motion
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleAddFood = e => {
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
        const newFood = { foodName, foodImage, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, userName, userEmail, userPhoto, foodStatus }
        // console.log(newFood);

        axios.post('http://localhost:5000/foods', newFood)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'Successful...!',
                        text: 'Food Details Added',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}>
            <div style={{ backgroundImage: `url(${addfoodbg})` }} className="bg-cover bg-center my-16">
                <div className="py-32">
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-inner">
                        <h2 className="font-bold mb-6 text-center text-yellow-700 custom-font text-5xl italic">Donation Form</h2>
                        <form onSubmit={handleAddFood} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="label py-1 text-yellow-600 text-lg font-medium">
                                        Food Name
                                    </label>
                                    <input type="text" id="foodName" name="foodName"
                                        className="input input-bordered bg-[#fefff7] w-full rounded-md py-2"
                                        required />
                                </div>
                                <div>
                                    <label className="label py-1 text-yellow-600 text-lg font-medium">
                                        Food Photo URL
                                    </label>
                                    <input type="url" id="foodImage" name="foodImage"
                                        className="input input-bordered bg-[#fefff7] w-full rounded-md py-2"
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
                                        required />
                                </div>
                                <div>
                                    <label className="label py-1 text-yellow-600 text-lg font-medium">
                                        Pickup Location
                                    </label>
                                    <input type="text" id="pickupLocation" name="pickupLocation"
                                        className="input input-bordered bg-[#fefff7] w-full rounded-md py-2"
                                        required />
                                </div>
                            </div>
                            <div>
                                <label className="label py-1 text-yellow-600 text-lg font-medium">
                                    Expired Date/Time
                                </label>
                                <input type="date" id="expiredDateTime" name="expiredDateTime" className="input input-bordered bg-[#fefff7] w-full rounded-md py-2" required />
                                {/* <input type="number" id="expiredDateTime" name="expiredDateTime"
                            className="input input-bordered bg-[#fefff7] w-full rounded-md py-2"
                            required /> */}
                            </div>
                            <div>
                                <label className="label py-1 text-yellow-600 text-lg font-medium">
                                    Additional Notes
                                </label>
                                <textarea id="additionalNotes" name="additionalNotes"
                                    className="px-2 border-2 bg-[#fefff7] w-full rounded-md py-2"
                                    rows="3"></textarea>
                            </div>



                            {/* <div>
                        <label htmlFor="foodStatus" className="block text-sm font-medium text-gray-600">
                            Food Status
                        </label>
                        <select id="foodStatus" name="foodStatus" className="form-select" required>
                            <option value="">Select Status</option>
                            <option value="fresh">Fresh</option>
                            <option value="cooked">Cooked</option>
                            <option value="canned">Canned</option>
                        </select>
                    </div> */}

                            <button type="submit" className=" btn btn-warning text-white py-2 px-4 rounded-md w-full">
                                Add Food
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AddFood;