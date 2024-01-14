import { Link, useLoaderData } from "react-router-dom";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";
import { useEffect, useState } from "react";
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import special1 from '../../assets/special1.jpg'
import special2 from '../../assets/special2.jpg'
import chef from '../../assets/chef.png'
import truck from '../../assets//truck.svg'
import cash from '../../assets/cash.svg'
import returnLogo from '../../assets/return.svg'
import gift from '../../assets/gift.svg'
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
    useEffect(()=>{
        document.title="ShareBite | Home"
    },[])

    return (
        <main>
            <section className="container mx-auto mb-16">
                <div className="carousel w-full h-[800px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slider1} className="w-full rounded-md" />
                        <div className="absolute rounded-md flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 pl-12 w-full md:w-1/2'>
                                <h2 className='text-7xl sm:text-9xl font-semibold custom-font italic'>Delicious</h2>
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
                <div className="text-center space-y-4 mb-10">
                    <h1 className="text-7xl custom-font font-bold">Featured Foods</h1>
                    <p className="px-2 lg:px-40 text-justify md:text-center tracking-wide text-stone-600 font-serif">Indulge your senses in an exquisite journey through the featured foods on our homepage. Each culinary masterpiece tells a unique story, from succulent dishes that tantalize the taste buds to visually stunning creations that promise an unforgettable dining experience. Our curated selection showcases the epitome of gastronomic delight, inviting you to explore a world of flavors and textures meticulously crafted by our skilled chefs. Elevate your culinary adventure with our featured foods, where every bite is a celebration of innovation, quality, and the sheer joy of exceptional dining. Welcome to a symphony of tastes that promises to awaken your palate and leave you craving for more.</p>
                </div>

                {/* display 6 food items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        highestQuantity.slice(0, 6).map(food =>
                            <FeaturedFoods
                                key={food._id}
                                food={food}
                            ></FeaturedFoods>)
                    }
                </div>
                <div className="text-center">
                    <Link to='availableFoods'>
                        <button className="btn btn-warning rounded-sm px-6 text-base mt-8">View All Food Items</button>
                    </Link>
                </div>

            </section>
            {/* Chef Section */}
            <section>
                <div className="chef-bg relative min-h-96 bg-black">
                    <div className="flex flex-col sm:flex-row container mx-auto justify-between items-center text-stone-100 z-10">
                        <div className="w-full sm:w-2/3 px-2 sm:px-0">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12">
                                <div className="flex justify-start items-center gap-6">
                                    <div className="w-24 bg-amber-500">
                                        <img src={truck} alt="" />
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="custom-font text-3xl">Free Delivery</h1>
                                        <span className="w-24  h-1 md:mx-0 block bg-amber-500 rounded-full"></span>
                                        <p className="text-sm sm:text-base">Delivery on us, always free.</p>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center gap-6">
                                    <div className="w-24 bg-amber-500">
                                        <img src={cash} alt="" />
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="custom-font text-3xl">Secure Payment</h1>
                                        <span className="w-24 h-1 md:mx-0 block bg-amber-500 rounded-full"></span>
                                        <p className="text-sm sm:text-base">Safe transactions with our secure payment.</p>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center gap-6">
                                    <div className="w-24 flex justify-center bg-amber-500">
                                        <img className="w-16 h-24 sm:h-12 md:h-14 lg:h-20 xl:h-24" src={returnLogo} alt="" />
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="custom-font text-3xl">Free Returns</h1>
                                        <span className="w-24 h-1 md:mx-0 block bg-amber-500 rounded-full"></span>
                                        <p className="text-sm sm:text-base">No-hassle returns, always free service.</p>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center gap-6">
                                    <div className="w-24 bg-amber-500">
                                        <img src={gift} alt="" />
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="custom-font text-3xl">Gift Service</h1>
                                        <span className="w-24 h-1 md:mx-0 block bg-amber-500 rounded-full"></span>
                                        <p className="text-sm sm:text-base">Complimentary gift service for added delight.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-2/3 sm:w-1/3">
                            <img src={chef} alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <section className="container mx-auto mt-16 px-1">
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* <div className="max-w-md overflow-hidden bg-gray-200 rounded-md shadow-md">
                        <img className=" h-auto transform transition-transform duration-300 hover:scale-110" src={special1} alt="" />
                        <img className=" h-auto transform transition-transform duration-300 hover:scale-110" src={special2} alt="" />
                    </div> */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex justify-center flex-col sm:flex-row gap-4">
                            <div className="max-w-full sm:max-w-md overflow-hidden bg-gray-200 rounded-md shadow-md">
                                <img className="w-full h-auto transform transition-transform duration-300 hover:scale-110" src={special1} alt="" />
                            </div>
                            <div className="max-w-full sm:max-w-md overflow-hidden bg-gray-200 rounded-md shadow-md">
                                <img className="w-full h-auto transform transition-transform duration-300 hover:scale-110" src={special2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div>
                            <div className="text-center custom-font font-semibold">
                                <h4 className="text-2xl sm:text-4xl inline relative top-8 sm:top-14">Weekend’s</h4>
                                <h1 className=" italic text-8xl sm:text-[170px]  text-[#efa41e] ">Special</h1>
                                <h5 className="text-2xl sm:text-4xl inline relative -right-16 bottom-4">Dinner For You............</h5>
                                {/* <h5 className="text-4xl absolute -bottom-7 right-40">Dinner For You............</h5> */}
                            </div>
                            <div className="text-justify tracking-wide text-stone-600  px-4">
                                <p>A culinary masterpiece crafted for your delight. Indulge in exquisite flavors, creating unforgettable moments around the table. Elevate your weekends with our carefully curated menu, promising a feast for the senses and the perfect blend of warmth and joy.</p>
                                <p>Escape the ordinary and make your weekends extraordinary with our Special Dinner—a feast for the senses that transforms your evenings into moments of pure delight. </p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* grid and flex */}
                {/* <div>
                    <div className="">
                        <h4 className="">Weekend’s</h4>
                        <h1>Special</h1>
                        <h5 className="">Dinner For You............</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and unknown printer typesetting industry. </p>
                    </div>
                </div> */}
            </section>
        </main>
    );
};

export default Home;