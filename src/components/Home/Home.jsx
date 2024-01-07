import { Link, useLoaderData } from "react-router-dom";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import { useEffect, useState } from "react";
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import './Home.css';

const Home = () => {
    const foods = useLoaderData();
    const [highestQuantity, setHighestQuantity] = useState(foods);
    // console.log(highestQuantity);

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
            <section className="container mx-auto">
                <div className="carousel w-full h-[800px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slider1} className="w-full rounded-md" />
                        <div className="absolute rounded-md  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 pl-12 w-1/2'>
                                <h2 className='text-9xl font-semibold custom-font italic'>Delicious</h2>
                                <p className="tracking-wide leading-7 line-clamp-6">Savor the exquisite taste of our artisanal spaghetti, handcrafted to perfection. Each al dente strand is embraced by a rich, simmered tomato sauce, adorned with fresh basil and a sprinkle of Parmesan. Immerse yourself in the essence of authentic Italian flavors, a brief journey to culinary delight with every delightful bite.</p>
                                <div>
                                    <Link to='availableFoods'>
                                        <button className='btn btn-warning rounded-sm px-6 text-xl'>Request Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-start transform -translate-y-1/2 left-0 bottom-28 gap-3 pl-12">
                            <a href="#slide3" className="btn btn-square btn-warning rounded-sm">❮</a>
                            <a href="#slide2" className="btn btn-square btn-warning rounded-sm">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slider2} className="w-full rounded-md" />
                        <div className="absolute rounded-md  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 pl-12 w-1/2'>
                                <h2 className='text-9xl font-semibold custom-font italic'>Fast Food</h2>
                                <p className="tracking-wide leading-7 line-clamp-6">Experience the best of both worlds with our fresh fast food—quick, convenient, and bursting with flavor. From crisp salads to perfectly grilled burgers, savor the goodness of made-to-order delights that elevate fast food to a new level of freshness.</p>
                                <div>
                                    <Link to='availableFoods'>
                                        <button className='btn btn-warning rounded-sm px-6 text-xl'>Request Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-start transform -translate-y-1/2 left-0 bottom-28 gap-3 pl-12">
                            <a href="#slide1" className="btn btn-square btn-warning rounded-sm">❮</a>
                            <a href="#slide3" className="btn btn-square btn-warning rounded-sm">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slider3} className="w-full rounded-md" />
                        <div className="absolute rounded-md  flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 pl-12 w-1/2'>
                                <h2 className='text-9xl font-semibold custom-font italic'>Deshi Delights</h2>
                                <p className="tracking-wide leading-7">Savor the essence of Bangladesh with Deshi Eats. Indulge in flavorful biryanis, aromatic curries, and sweet delights that capture the heart of Deshi cuisine. Our menu is a curated celebration of tradition and authenticity, bringing the rich tapestry of Bangladeshi flavors to your table. Enjoy the warmth and diversity of Deshi food in every delicious bite.</p>
                                <div>
                                    <Link to='availableFoods'>
                                        <button className='btn btn-warning rounded-sm px-6 text-xl'>Request Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-start transform -translate-y-1/2 left-0 bottom-28 gap-3 pl-12">
                            <a href="#slide2" className="btn btn-square btn-warning rounded-sm">❮</a>
                            <a href="#slide1" className="btn btn-square btn-warning rounded-sm">❯</a>
                        </div>
                    </div>

                </div>
            </section>
            <section className="container mx-auto">
                <h1 className="text-3xl">This is banner</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit repellendus beatae ratione nostrum sit quos sint sequi exercitationem, omnis expedita veritatis totam, neque architecto illum aperiam ipsa labore fugit.</p>

                {/* display 6 food items */}
                <h1 className="text-center text-6xl text-red-700">This is featured foods {foods.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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