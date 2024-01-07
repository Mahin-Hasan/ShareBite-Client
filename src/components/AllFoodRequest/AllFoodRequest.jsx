
const AllFoodRequest = ({ reqFood, handleDeleteRequest }) => {
    const { _id, foodImage, foodName, userName, foodRequestStatus } = reqFood;



    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={foodImage} alt="Polaroid camera" />
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leadi sm:pr-8">{foodName}</h3>
                            <p className="text-sm dark:text-gray-400">Donar Name: {userName}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold">59.99€</p>
                            <p className="text-sm line-through dark:text-gray-600">75.50€</p>
                        </div>
                    </div>
                    <div className="flex text-sm divide-x">
                        <button
                            className={`flex items-center px-2 py-1 pl-0 space-x-1 ${foodRequestStatus === 'delivered' ? 'text-red-500 disabled:opacity-80 cursor-not-allowed' : 'text-lime-500'}`}
                            disabled={foodRequestStatus === 'delivered'}
                            onClick={() => handleDeleteRequest(_id)}
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect width="32" height="200" x="168" y="216"></rect>
                                <rect width="32" height="200" x="240" y="216"></rect>
                                <rect width="32" height="200" x="312" y="216"></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span className={`${foodRequestStatus === 'delivered' ? 'text-red-500 disabled:opacity-80 cursor-not-allowed' : 'text-lime-500'}`}
                                disabled={foodRequestStatus === 'delivered'}
                                >Remove</span>
                            {/* <button
                                className={`${foodRequestStatus === 'delivered' ? 'text-red-500 disabled:opacity-80 cursor-not-allowed' : 'text-lime-500'}`}
                                disabled={foodRequestStatus === 'delivered'}
                                onClick={handleDeleteRequest}
                            >
                                Remove
                            </button> */}
                        </button>
                        <button type="button" className="flex items-center px-2 py-1 space-x-1">
                            <span>Status:</span>
                            <span>{foodRequestStatus}</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default AllFoodRequest;