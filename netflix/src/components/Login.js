// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { setUser } from "../redux/userSlice";
// import { API_END_POINT } from '../utils/constant';
// import toast from "react-hot-toast";
// import Header from './Header';

// const Login = () => {
//     const user = useSelector(state => state.user);
//     const [isLogin, setIsLogin] = useState(false);
//     const [fullName, setFullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const loginHandler = () => {
//         setIsLogin(!isLogin);
//     };

//     const getInputData = async (e) => {
//         e.preventDefault();
    
//         if (!email || !password || (!isLogin && !fullName)) {
//             toast.error("Please fill in all fields");
//             return;
//         }

//         const userData = isLogin ? { email, password } : { fullName, email, password };
    
//         try {
//             console.log("🔗 API Endpoint:", API_END_POINT);
//             const url = `${API_END_POINT}/user/${isLogin ? "login" : "register"}`;
//             const res = await axios.post(url, userData, { withCredentials: true });
    
//             console.log("📩 API Response:", res.data);
    
//             if (res.data.success) {
//                 toast.success(res.data.message);

//                 if (isLogin && res.data.user && res.data.user.user !== null) {
//                     console.log("📌 Before Dispatching Redux:", user);
//                     dispatch(setUser(res.data.user.user)); // Correct user data extraction
//                     console.log("✅ After Dispatching Redux:", res.data.user.user);
//                 } else {
//                     toast.error("Invalid login details.");
//                     return;
//                 }
    
//                 if (!isLogin) {
//                     toast.success("Account created! Please log in.");
//                     setIsLogin(true);
//                 }
    
//                 // Clear input fields
//                 setFullName("");
//                 setEmail("");
//                 setPassword("");
//             } else {
//                 toast.error(res.data.message || "Something went wrong");
//             }
    
//         } catch (error) {
//             console.error("❌ Login Error:", error.response?.data || error.message);
//             toast.error(error.response?.data?.message || "Something went wrong");
//         }
//     };

//     // Persist user in localStorage
//     useEffect(() => {
//         if (user) {
//             localStorage.setItem("user", JSON.stringify(user));
//         }
//     }, [user]);

//     // Redirect after successful login
//     useEffect(() => {
//         if (user?.id) {
//             navigate("/browse");
//         }
//     }, [user, navigate]);

//     return (
//         <div>
//             <Header />
//             <div className='absolute'>
//                 <img className='w-[100vw] h-[100vh] bg-cover' src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" alt="banner"/>
//             </div>
//             <form 
//                 onSubmit={getInputData} 
//                 className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto rounded-md items-center justify-center absolute bg-black opacity-90'
//             >
//                 <h1 className='text-white text-3xl mb-5 font-bold'>
//                     {isLogin ? "Login" : "Signup"}
//                 </h1>

//                 <div className='flex flex-col'>
//                     {!isLogin && (
//                         <input 
//                             value={fullName} 
//                             onChange={(e) => setFullName(e.target.value)} 
//                             type='text' 
//                             placeholder='Full Name' 
//                             className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
//                             required
//                         />
//                     )}

//                     <input 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         type='email' 
//                         placeholder='Email' 
//                         className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
//                         required
//                     />

//                     <input 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         type='password' 
//                         placeholder='Password' 
//                         className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
//                         required
//                     />

//                     <button type="submit" className='bg-red-800 mt-6 p-3 text-white rounded-md font-medium'>
//                         {isLogin ? "Login" : "Signup"}
//                     </button>

//                     <p className='text-white mt-2'>
//                         {isLogin ? "New to Netflix?" : "Already have an account?"} 
//                         <span 
//                             onClick={loginHandler} 
//                             className='ml-1 text-blue-900 font-medium cursor-pointer'
//                         >
//                             {isLogin ? "Signup" : "Login"}
//                         </span>
//                     </p>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios'; // <-- REMOVE this import for default axios
import { setUser, setLoading, setError } from "../redux/userSlice";
import { API_END_POINT, axiosInstance } from '../utils/constant'; // <-- Import axiosInstance
import toast from "react-hot-toast";
import Header from './Header';

const Login = () => {
    // Access 'loading' from your Redux state
    const { currentUser, loading, error } = useSelector(state => state.user);
    const [isLogin, setIsLogin] = useState(true);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginHandler = () => {
        setIsLogin(!isLogin);
    };

    const getInputData = async (e) => {
        e.preventDefault();

        if (!email || !password || (!isLogin && !fullName)) {
            toast.error("Please fill in all fields");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        dispatch(setLoading(true)); // Set loading to true BEFORE the API call

        const userData = isLogin ? { email, password } : { fullName, email, password };

        try {
            console.log("🔗 API Endpoint:", API_END_POINT);
            const url = `${API_END_POINT}/user/${isLogin ? "login" : "register"}`;
            // Use axiosInstance.post and remove the explicit { withCredentials: true }
            // because it's already configured on axiosInstance
            const res = await axiosInstance.post(url, userData); // <-- UPDATED LINE

            console.log("📩 API Response:", res.data);

            if (res.data.success) {
                toast.success(res.data.message);

                if (isLogin && res.data.user) {
                    dispatch(setUser(res.data.user));
                } else if (!isLogin) {
                    toast.success("Account created! Please log in.");
                    setIsLogin(true);
                } else {
                    toast.error("Invalid login details or user data missing from response.");
                }

                setFullName("");
                setEmail("");
                setPassword("");

            } else {
                toast.error(res.data.message || "Something went wrong");
            }

        } catch (error) {
            console.error("❌ Login Error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            dispatch(setLoading(false));
        }
    };

    // Persist user in localStorage when currentUser changes (existing logic)
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem("user", JSON.stringify(currentUser));
            console.log("User saved to localStorage:", currentUser);
        } else {
            localStorage.removeItem("user");
            console.log("User removed from localStorage.");
        }
    }, [currentUser]);

    // Redirect after successful login (existing logic)
    useEffect(() => {
        console.log("Login useEffect running. currentUser:", currentUser);
        if (currentUser && currentUser.id) {
            console.log("User has ID, navigating to /browse");
            navigate("/browse");
        } else {
            console.log("currentUser is null or missing ID. Not navigating.");
        }
    }, [currentUser, navigate]);

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh] bg-cover' src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" alt="banner"/>
            </div>
            <form
                onSubmit={getInputData}
                className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto rounded-md items-center justify-center absolute bg-black opacity-90'
            >
                <h1 className='text-white text-3xl mb-5 font-bold'>
                    {isLogin ? "Login" : "Signup"}
                </h1>

                <div className='flex flex-col'>
                    {!isLogin && (
                        <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            type='text'
                            placeholder='Full Name'
                            className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
                            required
                            disabled={loading} // Disable input during loading
                        />
                    )}

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        placeholder='Email'
                        className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
                        required
                        disabled={loading} // Disable input during loading
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='Password'
                        className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
                        required
                        disabled={loading} // Disable input during loading
                    />

                    <button
                        type="submit"
                        className='bg-red-800 mt-6 p-3 text-white rounded-md font-medium'
                        disabled={loading} // <-- Disable the button during loading
                    >
                        {loading ? 'Loading...' : (isLogin ? "Login" : "Signup")} {/* <-- Change button text */}
                    </button>

                    <p className='text-white mt-2'>
                        {isLogin ? "New to Netflix?" : "Already have an account?"}
                        <span
                            onClick={loginHandler}
                            className='ml-1 text-blue-900 font-medium cursor-pointer'
                        >
                            {isLogin ? "Signup" : "Login"}
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;