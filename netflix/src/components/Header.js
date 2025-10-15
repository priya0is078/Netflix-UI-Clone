/*import React from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Header = () => {
  // Correctly declare the selector parameter as 'state'
  const user = useSelector((state) => state.user?.user);
    console.log("User from Redux:", user);


  return (
    <div className='absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black'>
      <img
        className='w-56'
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt="Netflix Logo"
      />
      {user ? (
        <div className='flex items-center'>
          <IoIosArrowDropdown size='24px' color='white' />
          <h1 className='text-lg font-medium text-white ml-2'>{user.fullName}</h1>
          <div className='ml-4'>
            <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
            <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movies</button>
          </div>
        </div>
      ) : (
        <h1 className='text-lg font-medium text-white'>Welcome Guest!</h1>
      )}
    </div>
  );
};

export default Header;*/
// import React from 'react';
// import { IoIosArrowDropdown } from 'react-icons/io';
// import { useSelector } from 'react-redux';

// const Header = () => {
//     //const user = false;
//   // Directly access 'state.user' since it's the entire user object
//     const user = useSelector((store) => store.app.user);
  
//   return (
//     <div className='absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black'>
//       <img className='w-56'src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"alt="Netflix Logo"/>
//       { 
//         user && (
//           <div className='flex items-center'>
//           <IoIosArrowDropdown size='24px' color='white' />
//           <h1 className='text-lg font-medium text-white ml-2'>{user.fullName}</h1>
//           <div className='ml-4'>
//             <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
//             <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movies</button>
//           </div>
//         </div>
//         )
//       }
        
      
//     </div>
//   );
// };

// export default Header;
// Header.js
import React from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../redux/userSlice';
import { setToggle } from '../redux/MovieSlice'; // import the toggle action
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'; // Toast notifications

const Header = () => {
  const currentUser = useSelector((store) => store.user.currentUser);
  const toggle = useSelector((store) => store.movie.toggle); // get current toggle state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUser());
    toast.success("Logged out successfully!");
    navigate('/');
  };

  const handleToggleSearch = () => {
    dispatch(setToggle()); // toggles search bar visibility
  };

  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black">
      {/* Netflix Logo */}
      <img
        className="w-56"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt="Netflix Logo"
      />

      {/* User Info & Buttons */}
      {currentUser && (
        <div className="flex items-center">
          <IoIosArrowDropdown size="24px" color="white" />
          <h1 className="text-lg font-medium text-white ml-2">{currentUser.fullName}</h1>
          <div className="ml-4 flex">
            <button
              onClick={handleLogout}
              className="bg-red-800 text-white px-4 py-2"
            >
              Logout
            </button>

            {/* Toggle SearchBar */}
            <button
              onClick={handleToggleSearch}
              className="bg-red-800 text-white px-4 py-2 ml-2"
            >
              {toggle ? 'Home' : 'Search Movies'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
