
import React, { forwardRef } from 'react';

export default forwardRef(function Input({ label, label_svg, place_h, type ,className="",...props},ref) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        {label_svg}
        <label className='font-semibold text-white'>{label}</label>
      </div>
      <input
        className={`${className} fill-white w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300`}
        type={type}
        placeholder={place_h}
        {...props}
        ref={ref}
      />
    </div>
  );
})


