import React from 'react'
import { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Events = () => {
  const text = "EVENTS - 2024"
  const text2 = "Co-ordinators"
  const images = ['/img4.jpg', '/img5.jpeg', '/img6.jpeg', '/img7.jpeg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleImages = [
    images[(currentIndex + images.length - 1) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length]
  ];

  return (
    <div className='flex flex-col relative my-6 w-full'>
      <div className='mt-20 h-20 flex justify-center items-center'
        style={{ 'backgroundImage': '-webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 2%, rgba(253, 108, 0, 1) 30%, rgba(241, 102, 0, 1) 70%, rgba(255, 255, 255, 1) 98%)' }}
      >
        <h1 className='text-4xl tracking-widest text-white font-semibold italic'>
          {text.split('').map((letter, index) => (
            <span key={index} style={{ "text-shadow": "4px 4px 10px rgba(0,0,0, 0.5)" }}>{letter}</span>
          ))}
        </h1>
      </div>
      <div className='realtive pt-4 flex my-6 h-[320px] mx-[100px] gap-20'>
        <div className='mt-6 h-full flex flex-col p-10 justify-center items-center'>
          <Calendar defaultValue={new Date(2024, 5, 30)}
            className="border rounded-2xl shadow-lg p-4"
            calendarClassName="p-4"
            tileClassName="rounded-full text-center"
            prev2Label={null}
            next2Label={null}
            locale="en-US"
            formatShortWeekday={(locale, date) =>
              ['M', 'T', 'W', 'T', 'F', 'S', 'S'][date.getDay()]
            }
            />
        </div>
        <div className='flex flex-col p-8 justify-center items-center flex-wrap'>
          <p className='text-xl font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi.<br /><br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant cras morbi hendrerit nunc vel sapien. In habitasse at diam suspendisse non vitae fermentum, pharetra arcu. Viverra a morbi ut donec in. Ac diam, at sed cras nisi.
          </p>
        </div>
      </div>


      <div className='relative flex flex-col mt-6 w-full'>
        <div className='mt-20 h-20 flex justify-center items-center'
          style={{ 'backgroundImage': '-webkit-linear-gradient(0deg, rgba(255, 255, 255, 1) 2%, rgba(253, 108, 0, 1) 30%, rgba(241, 102, 0, 1) 70%, rgba(255, 255, 255, 1) 98%)' }}

        >
          <h1 className='text-4xl tracking-widest text-white font-semibold italic'>
            {text2.split('').map((letter, index) => (
              <span key={index} style={{ "text-shadow": "4px 4px 10px rgba(0,0,0, 0.5)" }}>{letter}</span>
            ))}
          </h1>
        </div>

        <div className='relative flex justify-around items-center h-[500px] w-full'>
          <AiOutlineLeft className='w-[30px] h-[30px] cursor-pointer' onClick={handleLeft} />
          {
            visibleImages.map((image, index) => (
              <div className="w-[300px] h-[300px] rounded-full flex justify-center items-center "
                style={{ "box-shadow": "0px 0px 10px rgba(0,0,0, 0.5)" }}>
                <img
                  key={index}
                  src={image}
                  alt={`img${index}`}
                  className="w-full h-full rounded-full "
                />
              </div>
            ))
          }
          <AiOutlineRight className='w-[30px] h-[30px] cursor-pointer' onClick={handleRight} />
        </div>
      </div>
    </div>
  )
}

export default Events;