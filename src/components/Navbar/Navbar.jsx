import { Link, NavLink } from "react-router-dom";
import icon from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoIosLogOut } from "react-icons/io";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    //Lot out
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navbarlinks = <>
        <li className="text-base font-semibold"><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500 border-b-2 border-amber-800 rounded-none px-2 py-1" : "text-yellow-700 px-2 py-1"
            }
        >Home</NavLink></li>
        <li className="text-base font-semibold"><NavLink to='/availableFoods'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500 border-b-2 border-amber-800 rounded-none px-2 py-1" : "text-yellow-700 px-2 py-1"
            }
        >Available Foods</NavLink></li>
        <li className="text-base font-semibold"><NavLink to='/addFood'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500 border-b-2 border-amber-800 rounded-none px-2 py-1" : "text-yellow-700 px-2 py-1"
            }
        >Add Food</NavLink></li>
        <li className="text-base font-semibold"><NavLink to='/manageFood'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500 border-b-2 border-amber-800 rounded-none px-2 py-1" : "text-yellow-700 px-2 py-1"
            }
        >Manage My Foods</NavLink></li>
        <li className="text-base font-semibold"><NavLink to='/foodRequest'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-yellow-500 border-b-2 border-amber-800 rounded-none px-2 py-1" : "text-yellow-700 px-2 py-1"
            }
        >My Food Request</NavLink></li>
    </>

    return (
        <nav className="glass fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navbarlinks}
                            </ul>
                        </div>
                        <NavLink>
                            <div className="flex items-center">
                                <img className="w-40" src={icon} alt="nav icon" />
                            </div>
                        </NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal">
                            {navbarlinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <div className="flex items-center">
                                    <div className="relative flex-shrink-0">
                                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full text-gray-800 border-gray-50"></span>
                                        <img src={user.photoURL} alt="" className="w-12 h-12 border rounded-full bg-gray-500 border-gray-300" />
                                    </div>
                                    <p className="ms-1 mr-0 sm:mr-3 font-mono font-semibold text-sm sm:text-xl text-yellow-700">{user.displayName}</p>
                                    <Link className="" onClick={handleLogOut} to='/login'><span className="flex items-center bg-red-500 rounded-md p-2 text-white">
                                        <IoIosLogOut className="text-2xl font-extrabold" />
                                        <button className="hidden sm:inline">
                                            Logout
                                        </button>
                                    </span>
                                    </Link>
                                </div>
                                :
                                <Link to='/login'>
                                    <button className="px-7 py-2 font-semibold rounded bg-blue-600 text-gray-50">Log in</button>
                                </Link>
                        }


                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;