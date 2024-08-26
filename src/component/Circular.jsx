import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

export default function Circular({ label, val ,color='blue'}) {
    const sliderValue = val; // Use the value passed from props

    return (
        <div className='flex items-center justify-center h-30 w-30 p-4 rounded-lg shadow-lg'>
            <CircularSlider
                label={label}
                labelColor="#ffffff" // White label for better contrast
                knobColor="#005a58"
                progressColorFrom="#8236c4 "
                progressColorTo="#8236c4 "
                progressSize={24}
                trackColor="#eeeeee"
                trackSize={24}
                min={0}
                max={100}
                dataIndex={sliderValue}
                hideKnob={true}
                knobDraggable={false}
                className='transition-all duration-300 ease-in-out transform hover:scale-105' // Add transition to the slider
            />
        </div>
    );
}

