

const card1 = ({ title, image, about, by }) => {
  return (
    <div className="max-w-[305px] h-[389px] relative px-[10px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <p className="text-[#999999] text-[10px] mb-[18px]">{title}</p>

        <h5 className="mb-2 text-[19px] uppercase font-normal tracking-tight text-[#000000] dark:text-white">
          {about}
        </h5>

        <p className="mb-3 text-[10px] font-bold absolute bottom-1 text-[#000] dark:text-gray-400">
          {by}
        </p>
      </div>
    </div>
  );
};



export default card1;