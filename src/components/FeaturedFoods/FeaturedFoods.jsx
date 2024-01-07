import { Link } from "react-router-dom";

const FeaturedFoods = ({ food }) => {
    const { _id, foodName, foodImage, foodQuantity, userName, userPhoto, additionalNotes,
        expiredDateTime, pickupLocation } = food;
    return (
        <div className="w-full rounded-md bg-orange-50 text-gray-800 shadow-xl">

            <img src={foodImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex items-center space-x-2">
                <img alt="added user photo" src={userPhoto} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <span className="text-sm font-semibold">Donator: {userName}</span>
                    {/* <span className="text-xs text-gray-600">4 hours ago</span> */}
                </div>
            </div>
            <div className="flex flex-col justify-between p-2 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold text-center">{foodName}</h2>
                    <p className="text-gray-800">Food Info: {additionalNotes}</p>
                    <p className="text-gray-800">Person to be Served: {foodQuantity}</p>
                    <p className="text-gray-800">Pickup Location: {pickupLocation}</p>
                    <p className="text-gray-800">Expires In: {expiredDateTime}</p>
                </div>
                <Link to={`/food/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold  rounded-md btn btn-warning">Read more</button>
                </Link>
            </div>
        </div>

    );
};

export default FeaturedFoods;