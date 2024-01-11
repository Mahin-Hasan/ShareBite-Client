import { Link } from "react-router-dom";

const FeaturedFoods = ({ food }) => {
    const { _id, foodName, foodImage, foodQuantity, userName, userPhoto, additionalNotes,
        expiredDateTime, pickupLocation } = food;
    return (
        <div className="w-full rounded-md bg-orange-50 text-gray-800 shadow-xl relative">

            <img src={foodImage} alt="" className="object-cover object-center w-full rounded-t-lg h-72 p-3 bg-amber-400 relative" />
            <div className="">
                <div className="absolute flex items-center left-4 top-4 bg-sky-500 rounded-s-full rounded-e-full">
                    <img alt="added user photo" src={userPhoto} className="object-cover w-12 h-12 rounded-full shadow bg-blue-500 p-1" />
                    <div className="flex flex-col space-y-1 px-1">
                        <span className="text-sm font-semibold italic text-white">{userName}</span>
                        {/* <span className="text-xs text-gray-600">4 hours ago</span> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-2 space-y-8">
                <div className="">
                    <h2 className="text-3xl font-semibold text-center text-stone-700 custom-font tracking-wide italic drop-shadow-lg">{foodName}</h2>
                    <div className="ps-3 space-y-1">
                        <p className="text-stone-600 font-semibold">Person to be Served: {foodQuantity}</p>
                        <p className="text-stone-600 font-semibold">Pickup Location: {pickupLocation}</p>
                        <p className="text-stone-600 font-semibold">Expires In: {expiredDateTime}</p>
                        <p className="text-stone-600 font-semibold">Additional Info: {additionalNotes}</p>
                    </div>
                </div>
                <Link to={`/food/${_id}`}>
                    <button type="button" className="w-full p-3 font-semibold rounded-md btn btn-warning">View Detail</button>
                </Link>
            </div>
        </div>

    );
};

export default FeaturedFoods;