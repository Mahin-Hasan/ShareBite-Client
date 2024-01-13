import { FaLocationDot, FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../../assets/logo.png'
import ig1 from '../../assets/ig1.jpg'
import ig2 from '../../assets/ig2.jpg'
import ig3 from '../../assets/ig3.jpg'
import ig4 from '../../assets/ig4.jpg'
import ig5 from '../../assets/ig5.jpg'
import ig6 from '../../assets/ig6.jpg'
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-bg px-4 divide-y-2 divide-amber-400 mt-24">
            <div className="container flex flex-col justify-between pt-28 pb-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/4 mt-24 sm:mt-0">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className='w-40 bg-amber-50 rounded-xl'>
                            <img src={logo} alt="" />
                        </div>
                        {/* <span className="self-center text-2xl font-semibold">Brand name</span> */}
                    </a>
                    <p className='my-6 font-mono leading-snug text-center lg:text-start'>Share Bite: A flavorful rendezvous for foodies, where bites tell tales and joy is shared in every taste. Unite with us for a bite-sized adventure in the world of deliciousness.</p>
                    <div className="flex gap-3 text-4xl text-white justify-center lg:justify-start">
                        <Link target="blank" to='https://www.facebook.com/mahin.hasan.750/'><FaFacebook />
                        </Link>
                        <Link target="blank" to='https://www.instagram.com/mahin_hsn/'><FaInstagram />
                        </Link>
                        <Link target="blank" to='https://twitter.com/Mahin_hsn'><FaTwitter />
                        </Link>
                        <Link target="blank" to='https://www.linkedin.com/in/mahin-hasan-/'><FaLinkedin />
                        </Link>
                        <Link target="blank" to='https://github.com/Mahin-Hasan'><FaGithub />
                        </Link>

                    </div>
                </div>
                <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 lg:w-3/4 sm:grid-cols-3">
                    <div className="space-y-3 ms-0 sm:ms-4">
                        <h3 className="custom-font text-4xl">Quick Links</h3>
                        <ul className="list-disc ms-5 space-y-3 text-lg">
                            <li className='hover:text-amber-400 transition duration-500'>
                                <a rel="noopener noreferrer" href="#">Home</a>
                            </li>
                            <li className='hover:text-amber-400 transition duration-500'>
                                <a rel="noopener noreferrer" href="#">About Us</a>
                            </li>
                            <li className='hover:text-amber-400 transition duration-500'>
                                <a rel="noopener noreferrer" href="#">Services</a>
                            </li>
                            <li className='hover:text-amber-400 transition duration-500'>
                                <a rel="noopener noreferrer" href="#">Gallery</a>
                            </li>
                            <li className='hover:text-amber-400 transition duration-500'>
                                <a rel="noopener noreferrer" href="#">Blog</a>
                            </li>
                            <li className='hover:text-amber-400 transition duration-500'>
                                <a rel="noopener noreferrer" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="custom-font text-4xl">Contact Us</h3>
                        <div className='flex text-lg items-start gap-x-4 hover:text-amber-400 transition duration-500'>
                            <div className="text-3xl mt-1">
                                <FaLocationDot />
                            </div>
                            <div>
                                <h3 className="custom-font text-2xl">Location:</h3>
                                <p>Sylhet | Bangladesh</p>
                            </div>
                        </div>
                        <div className='flex text-lg items-start gap-x-4 hover:text-amber-400 transition duration-500'>
                            <div className="text-3xl mt-1">
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className="custom-font text-2xl">Phone:</h3>
                                <a href="tel:+017123456789">+88 017123456789</a>
                            </div>
                        </div>
                        <div className='flex text-lg items-start gap-x-4 hover:text-amber-400 transition duration-500'>
                            <div className="text-3xl mt-1">
                                <MdEmail />
                            </div>
                            <div>
                                <h3 className="custom-font text-2xl">Email:</h3>
                                <a href="mailto:mahinmtra@gmail.com">mahinmtrs@gmail.com</a>

                            </div>
                        </div>
                    </div>
                    <div className="space-y-3 col-span-2 sm:col-span-1">
                        <h3 className="custom-font text-4xl">Instagram</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <img className="w-full" src={ig1} alt="" />
                            <img className="w-full" src={ig2} alt="" />
                            <img className="w-full" src={ig3} alt="" />
                            <img className="w-full" src={ig4} alt="" />
                            <img className="w-full" src={ig5} alt="" />
                            <img className="w-full" src={ig6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center">© All rights reserved <span className="text-amber-400 font-bold text-xl">|</span> Mahin Hasan 2024</div>
        </footer>
    );
};

export default Footer;