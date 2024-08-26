import React, { useRef, useEffect } from 'react';
import Circular from './Circular';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import { useSelector } from 'react-redux';
import Skill_ter from './terminal/component_ter/Skill_ter';

export default function About() {
  const sliderRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300, // Adjust the scroll distance as needed
      behavior: 'smooth'
    });
  };

  // Function to scroll right
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300, // Adjust the scroll distance as needed
      behavior: 'smooth'
    });
  };

  // Function to handle mouse movement for automatic scrolling
  const handleMouseMove = (event) => {
    //console.log(sliderRef.current);

    if (!sliderRef.current) return;

    const { clientX, clientY } = event;
    const { offsetLeft, offsetWidth, clientWidth } = sliderRef.current;

    // Calculate the horizontal position as a percentage
    const mouseX = clientX - offsetLeft;
    let scrollPercentage = (mouseX / offsetWidth) * 100;

    // Calculate the scroll position
    let scrollAmount = (scrollPercentage / 100) * (sliderRef.current.scrollWidth - clientWidth);
   //console.log(scrollAmount);
    if (scrollAmount < 260) {
      scrollAmount = scrollAmount - 160;
    }
    // Smooth scroll the container
    sliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // const skill = [
  //   { name: "Html", val: 90 },
  //   { name: "Css", val: 90 },
  //   { name: "Tailwind Css", val: 90 },
  //   { name: "Javascript", val: 90 },
  //   { name: "React.js", val: 90 },
  //   { name: "Oracle", val: 90 },
  //   { name: "Java", val: 90 },
  //   { name: "C", val: 90 },
  //   { name: "C++", val: 90 }
  // ];
  const skill=useSelector((state)=>state.data.skills)
  return (
    <div className='w-full h-full bg-transparent'>
      <div className='p-16'>
        <div className='text-center text-white text-5xl font-bold mb-8'>
          <h1 className='text-5xl font-extrabold mb-4 leading-tight'>
            Skills
          </h1>
          {/* <p className='text-lg text-gray-400'>
            Explore my skill set and see how I'm building a solid foundation for a career in tech.
          </p> */}
        </div>

        <div className='text-center text-white text-lg mb-12 font-bold'>
          <p className='text-lg text-gray-400 '>
            As I pursue my BTech in IT, I'm driven by a passion for frontend development and a desire to create seamless user experiences. With each line of code, I'm building a strong foundation for a career in tech. I'm excited to see where this journey takes me.
          </p>
        </div>

        <div className='relative'>
          <button
            onClick={scrollLeft}
            className='hidden md:absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 ease-in-out z-10'
          >
            <FaArrowLeft />
          </button>
          <div
            ref={sliderRef}
            className='hidden md:flex h-[50vh] gap-8 overflow-x-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800'
          >
            {skill.map((item) => (
              <div key={item.name} className='snap-center shrink-0'>
                <Circular label={item.name} val={item.val} />
              </div>
            ))}
          </div>
            <div className='md:hidden flex w-[80vw] text-pink-500 gap-8 overflow-x-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800'>
              <Skill_ter color='#ce2bae'/>
            </div>
          <button
            onClick={scrollRight}
            className='hidden md:absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-300 ease-in-out z-10'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
