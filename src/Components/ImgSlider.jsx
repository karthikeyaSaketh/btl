import React from 'react'
import { useState ,useEffect } from 'react'
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs'

const ImgSlider = () => {
  const images = ['/img4.jpg','/img5.jpeg','/img6.jpeg','/img7.jpeg'];
  const [currentImg,setCurrentImg] = useState(0);
  function handlePrevious(){
    setCurrentImg(currentImg===0 ? images.length -1 : currentImg-1)
}
function handleNext(){
    setCurrentImg(currentImg===images.length -1 ? 0 : currentImg+1)
}

useEffect(()=>{
  const interval = setInterval(() => {
    setCurrentImg((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000);
  return () => {
    clearInterval(interval);
  };
},)
  return (
    <div className='relative mt-1 flex justify-center items-center h-[600px] w-full'>
      <BsArrowLeftCircleFill className='arrow absolute w-8 h-8 text-white 
          filter drop-shadow-lg cursor-pointer left-4' onClick={handlePrevious}/>
      {
        images && images.length ?
          images.map((imageurl,index)=>(
            <img
              key={index}
              src={imageurl}
              alt={`img${index}`}
              className={currentImg === index ? "rounded-md shadow-md w-full h-full"  : "rounded-md shadow-md w-full h-full hidden"}
              />
          )) : null
      }
      <BsArrowRightCircleFill className='arrow absolute w-8 h-8 text-white 
          filter drop-shadow-lg cursor-pointer right-4'onClick={handleNext}/>

      <span className='absolute flex bottom-4'>
            {
                images && images.length
                    ? images.map((_, index) => (
                        <button
                            key={index}
                            className={`h-1 w-10 rounded-full border-none outline-none mx-1 cursor-pointer ${currentImg===index ? 'bg-white' : 'bg-gray-500'}`}
                            onClick={() => setCurrentImg(index)}
                        ></button>
                    ))
                    : null}
        </span>
      
    </div>
  )
}

export default ImgSlider
