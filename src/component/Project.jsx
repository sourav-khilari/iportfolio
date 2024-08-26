import React, { useState, useEffect } from 'react';

export default function Project() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">Stay Tuned!</h2>
        <p className="text-lg text-gray-600">
          We're working on something exciting and can't wait to share it with you. 
          While our current projects are under wraps, we're dedicated to bringing you something amazing soon.
        </p>
      </div>
      <div className="relative flex items-center justify-center w-full max-w-md mx-auto">
        <div className='relative w-full h-80 rounded-lg bg-gradient-to-r from-blue-400 to-purple-600 p-4 shadow-lg'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-full h-full rounded-lg bg-white flex items-center justify-center shadow-xl'>
              <p className='text-2xl font-semibold text-gray-700'>
                Projects Coming Soon!
              </p>
            </div>
          </div>
          <div className='absolute top-0 left-0 w-12 h-12 rounded-full bg-blue-300 opacity-50'></div>
          <div className='absolute bottom-0 right-0 w-12 h-12 rounded-full bg-purple-300 opacity-50'></div>
        </div>
      </div>
    </div>
  );
}
