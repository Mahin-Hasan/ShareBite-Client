import { IoTimerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";



const AllFoods = ({ allFood }) => {
    const {_id, foodImage, foodName, expiredDateTime, userName, userPhoto, foodQuantity, pickupLocation, additionalNotes } = allFood;
    return (
        //    max-w-md
        <div className="p-8 sm:flex items-center justify-evenly sm:space-x-6 bg-stone-100 text-gray-800 rounded-lg">
            <div className="flex-shrink-0 w-full mb-6 h-48 sm:h-40 sm:w-40 sm:mb-0">
                <img src={foodImage} alt="" className="object-cover object-center w-full h-full rounded bg-gray-500" />
            </div>
            <div className="flex flex-col space-y-1">
                <div>
                    <div className="flex items-center justify-end">
                        <img className="w-9 rounded-full" src={userPhoto} alt="" />
                        <h2 className="text-base font-semibold">{userName}</h2>
                    </div>
                    <h1 className="text-2xl custom-font tracking-wide text-amber-600 mt-1">{foodName}</h1>
                </div>
                <div className="space-y-1">
                    <div className="text-stone-700">
                        <p className="font-sans">Servings: {foodQuantity} Persons</p>
                        <p className="font-sans">Pickup From: {pickupLocation}</p>
                        <div className="flex items-center space-x-2">
                            <p className="font-sans">Expires in: {expiredDateTime} </p>
                            <IoTimerOutline className="text-amber-600 font-bold" />
                        </div>

                        <p className="font-sans">Additional Info: <br /><span className="italic font-mono tracking-tighter">{additionalNotes}</span></p>
                    </div>
                    <Link to={`/food/${_id}`}>
                        <button type="button" className="font-semibold rounded-md btn btn-sm btn-warning">View Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllFoods;