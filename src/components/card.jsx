import React from 'react'

const  Card = ({title, image, about, by}) => {
  return (
    <div className="w-[406px] relative h-[406px] px-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg bg-contain" src={image} alt="" />
      </a>
      <div className="p-5">
        <p className="text-[#999999] text-[10px] mb-[18px]">{title}</p>

        <h5 className="mb-2 text-[20px] font-normal tracking-tight text-[#000000] dark:text-white">
         {about}
        </h5>

        <p className="mb-3 text-[10px] absolute bottom-0 font-bold text-[#000] dark:text-gray-400">
          {by}
        </p>
      </div>
    </div>
  );
}

export default Card;