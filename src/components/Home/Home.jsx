import { Link, useLoaderData } from "react-router-dom";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import { useEffect, useState } from "react";

const Home = () => {
    const foods = useLoaderData();
    const [highestQuantity, setHighestQuantity] = useState(foods);
    console.log(highestQuantity);

    // Function to compare Food Quantity

    const sortByHighestQuantity = (a, b) => {
        return b.foodQuantity - a.foodQuantity;
    };
    // Function to handle sorting

    const sortFoodByHighestQuantity = () => {
        const sortedFoodQuantity = [...highestQuantity].sort(sortByHighestQuantity);
        setHighestQuantity(sortedFoodQuantity);
    };

    useEffect(() => {
        sortFoodByHighestQuantity();
    }, []);

    return (
        <main>
            <section>
                <h1 className="text-7xl">This is banner</h1>
            </section>
            <section>
                <h1 className="text-3xl">This is banner</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit repellendus beatae ratione nostrum sit quos sint sequi exercitationem, omnis expedita veritatis totam, neque architecto illum aperiam ipsa labore fugit.</p>

                {/* display 6 food items */}
                <div>
                    <h1 className="text-center text-6xl text-red-700">This is featured foods {foods.length}</h1>
                    {
                        highestQuantity.slice(0, 6).map(food =>
                            <FeaturedFoods
                                key={food._id}
                                food={food}
                            ></FeaturedFoods>)
                    }
                </div>
                <Link to='availableFoods'>
                    <button className="btn btn-info">View All Food Items</button>
                </Link>

            </section>
        </main>
    );
};

export default Home;