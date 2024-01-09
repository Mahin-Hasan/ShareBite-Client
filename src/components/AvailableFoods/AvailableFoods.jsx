import { useLoaderData } from "react-router-dom";
import AllFoods from "../AllFoods/AllFoods";
import { useState } from "react";
import searchbanner from '../../assets/searchbanner.jpg'

const AvailableFoods = () => {
    const allFoods = useLoaderData();
    // console.log(allFoods);

    // Implement search functionality by food name
    const [searchedFoodName, setSearchedFoodName] = useState('');
    const handleSearchedFoodName = searchedFood => {
        setSearchedFoodName(searchedFood);
    }

    //get searched text
    const [foodName, setFoodName] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleSearchFood = e => {
        setFoodName(e.target.value);
    }
    const foodNameLower = searchedFoodName.toLowerCase();
    // console.log('searchedFoodName:', searchedFoodName, 'foodName', foodName, 'foodNameLower', foodNameLower);
    return (
        <div className="container mx-auto">
            {/* Add some design */}
            {/* <h1>this is available food {allFoods.length}</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleSearchFood} className='input border rounded-s-md rounded-e-none' type="text" placeholder='Search Here...' />
                    <input onClick={() => handleSearchedFoodName(foodName)} className="btn rounded-e-md rounded-s-none text-white capitalize hover:bg-red-700 bg-[#FF444A]" type="submit" value="Search" />
                </form>
            </div> */}
            <div
                className="w-full bg-gray-500 mb-16"
                style={{
                    // backgroundImage: "url('https://source.unsplash.com/random/640x480')",
                    backgroundImage: `url(${searchbanner})`,
                    backgroundPosition: "center center",
                    backgroundBlendMode: "multiply",
                    backgroundSize: "cover",
                }}
            >
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-36">
                    <h1 className="text-6xl antialiased custom-font font-semibold leading text-center italic text-amber-500">
                        Hungry..???
                    </h1>
                    <p className="pt-6 pb-8 text-xl antialiased text-center text-gray-100">
                        Find Your Favourite Food
                    </p>
                    <div className="flex flex-row">
                        {/* <input
                            type="text"
                            placeholder="Search Foods"
                            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
                        />
                        <button
                            type="button"
                            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-amber-500 text-gray-50"
                        >
                            Search
                        </button> */}
                        <form onSubmit={handleSubmit}>
                            <input onChange={handleSearchFood}
                                type="text"
                                placeholder="Search Foods"
                                className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
                            />
                            <input onClick={() => handleSearchedFoodName(foodName)} className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-amber-500 hover:bg-amber-600 text-gray-50" type="submit" value="Search" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                {
                    allFoods.filter((item) => {
                        return foodNameLower === ''
                            ? item
                            : item.foodName.toLowerCase() === foodNameLower;
                    }).map(allFood =>
                        <AllFoods key={allFood._id}
                            allFood={allFood}
                        >
                        </AllFoods>)
                }
            </div>
            {/* {
                allFoods.map(allFood =>
                    <AllFoods key={allFood._id}
                        allFood={allFood}
                    >
                    </AllFoods>)
            } */}
        </div>
    );
};

export default AvailableFoods;