import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import registerbg from '../../assets/register.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [iconVisibility, setIconVisibility] = useState(false);
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    useEffect(()=>{
        document.title="Register"
    },[])
    //log in with email pass
    const handleSignup = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);

        //validate password
        if (password.length < 6) {
            toast.error('password cannot be less than 6 character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Must have one capital letter')
            return;
        }
        else if (!/[^a-zA-Z0-9]/.test(password)) {
            toast.error('Must contain one special character ex:"@*&$%')
            return;
        }
        //create user with email and password
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('Sign Up Successful')
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                console.error(err);
                toast.error(err.message)
            })
    }


    return (
        <section className="bg-orange-50 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:block hidden w-1/2">
                    <img
                        className="rounded-2xl"
                        src={registerbg}
                    />
                </div>
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-teal-700">Register</h2>
                    <p className="text-xs mt-4 text-teal-500">
                        Register and become a Food Donator
                    </p>
                    <form onSubmit={handleSignup} className="flex flex-col gap-4">
                        <input
                            className="p-2 mt-8 rounded-xl border"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            className="p-2 rounded-xl border"
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            required
                        />
                        <input
                            className="p-2 rounded-xl border"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <div className="relative">
                            <input
                                className="p-2 rounded-xl border w-full"
                                type={iconVisibility ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                autoComplete="username"
                                required
                            />
                            <span className='absolute top-1/2 right-3 -translate-y-1/2 text-teal-600' onClick={() => setIconVisibility(!iconVisibility)}>
                                {
                                    iconVisibility ? <FaEye /> : <FaEyeSlash />
                                }
                            </span>
                        </div>
                        <button className="bg-teal-500 rounded-xl text-white py-2 hover:scale-105 duration-300">
                            Register
                        </button>
                    </form>


                    <div className="mt-6 text-xs flex justify-between items-center text-[#002D74] border-t border-gray-400 pt-3">
                        <p>Already have an account?</p>
                        <Link to='/login'>
                            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 text-teal-700 font-semibold">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Register;