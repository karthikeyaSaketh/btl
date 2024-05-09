import React, { useState } from 'react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState([false, false, false, false, false,false]);

  const handleHover = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = true;
    setIsHovered(updatedHoverState);
  };

  const handleHoverLeave = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = false;
    setIsHovered(updatedHoverState);
  };

  return (
    <div className='relative flex justify-between w-full pr-20 pl-20  items-center h-16'>
      <div className='h-full'>
        <img src='/btl_logo.png' alt='logo' className='p-1 w-full h-full'/>
      </div>  
      <div className='flex justify-end align-middle gap-20'>
        <div
          className={`relative h-1/2 pt-3 p-1 text-gray-500 hover:text-blue-500`}
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleHoverLeave(0)}
        >
          Home
          {isHovered[0] && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
          )}
        </div>
        <div
          className={`relative h-1/2 pt-3 p-1  text-gray-500 hover:text-blue-500`}
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHoverLeave(1)}
        >
          About BTL
          {isHovered[1] && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
          )}
        </div>
        <div
          className={`relative h-1/2 pt-3 p-1  text-gray-500  hover:text-blue-500`}
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleHoverLeave(2)}
        >
          Events
          {isHovered[2] && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
          )}
        </div>
        <div
          className={`relative h-1/2 pt-3 p-1  text-gray-500 hover:text-blue-500`}
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleHoverLeave(3)}
        >
          Gallery
          {isHovered[3] && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
          )}
        </div>
        <div
          className={`relative h-1/2 pt-3 p-1  text-gray-500 hover:text-blue-500`}
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={() => handleHoverLeave(4)}
        >
          Registration
          {isHovered[4] && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
          )}
        </div>
        <div
          className={`relative h-1/2 pt-3 p-1  text-gray-500 hover:text-blue-500`}
          onMouseEnter={() => handleHover(5)}
          onMouseLeave={() => handleHoverLeave(5)}
        >
          Contact Us
          {isHovered[5] && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white via-blue-500 to-white"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
