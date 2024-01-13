import AllFoods from "../AllFoods/AllFoods";
import { useEffect, useState } from "react";
import searchbanner from '../../assets/searchbanner.jpg'
import axios from "axios";
import gif from '../../assets/loader.gif'
const AvailableFoods = () => {
    const [allFoods, setAllFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchedFoodName, setSearchedFoodName] = useState('');


    useEffect(() => {
        axios.get('http://localhost:5000/foods')
            .then(res => {
                setAllFoods(res.data);
                setLoading(true);
            })
    }, [])

    // Implement search functionality by food name
    const handleSearchedFoodName = searchedFood => {
        setSearchedFoodName(searchedFood);
    }

    const [foodName, setFoodName] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleSearchFood = e => {
        setFoodName(e.target.value);
    }
    const foodNameLower = searchedFoodName.toLowerCase();
    return (
        <div className="container mx-auto">
            <div
                className="w-full bg-gray-500 mb-16"
                style={{
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

            {
                loading ?
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
                    :
                    <div className="flex justify-center h-64 items-center">
                        <img className="w-80" src={gif} />
                    </div>
            }
           
        </div >
    );
};

export default AvailableFoods;