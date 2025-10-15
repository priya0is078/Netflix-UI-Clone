import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-[vw] absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        {/* FIX: Add an empty string to className */}
        <p className='w-1/3 mt-4'>{overview}</p> 
        {/* I added 'text-lg' as an example class, but you can use "" */}
        <div className='flex mt-8'>
            <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                <CiPlay1  size="24px" />
                <span className="ml-2">Play</span>
            </button>
            <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80 ml-3'>
                <MdInfoOutline size='24px' />
                <span className="ml-2">Watch More</span>
            </button>
        </div>
    </div>
  );
};

export default VideoTitle;