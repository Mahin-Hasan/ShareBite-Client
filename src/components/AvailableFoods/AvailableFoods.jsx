import { useLoaderData } from "react-router-dom";
import AllFoods from "../AllFoods/AllFoods";
import { useState } from "react";

const AvailableFoods = () => {
    const allFoods = useLoaderData();
    console.log(allFoods);

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
    console.log('searchedFoodName:', searchedFoodName, 'foodName', foodName, 'foodNameLower', foodNameLower);
    return (
        <div>
            {/* Add some design */}
            <h1>this is available food {allFoods.length}</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleSearchFood} className='input border rounded-s-md rounded-e-none' type="text" placeholder='Search Here...' />
                    <input onClick={() => handleSearchedFoodName(foodName)} className="btn rounded-e-md rounded-s-none text-white capitalize hover:bg-red-700 bg-[#FF444A]" type="submit" value="Search" />
                </form>
            </div>
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