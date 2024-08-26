import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';
import "react-circular-progressbar/dist/styles.css";
export default function Skill_ter( {color="orange"}) {
  const percentage = 90;
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
    <div className='flex gap-5 p-8 w-[90%] max-w-full flex-wrap m-9 overflow-x-hidden'>
      {skill.map(({name, val}) => (
      <div key={name} className='flex gap-3'>
        <div className='w-fit'>
          <div className='w-20 h-19 text-[2px]'>
            <CircularProgressbar
              value={val}
              text={`${val}%`}
              background
              backgroundPadding={0}
              styles={{
                background: {
                  fill: "#102558"
                },
                path: {
                  stroke: `${color}`,
                },
                trail: {
                  stroke: "transparent",
                  transform: "rotate(90deg)",
                  transformOrigin: "center center",
                  rotation: 1 / 7 + 1 / 10,
                },
                text: {
                  // Text color
                  fill: "white",
                  // Text size
                  fontSize: "1rem",
                  fontWeight: "bold",
                }
              }}
            />
          </div>
          <div className='text-center'>

            {name}
          </div>
        </div>
      </div>

      ))}
    </div>

  )
}
