import React from 'react';

const CardComp2 = ({ id, name, role }) => {
  return (
    <div
      className="
        w-full h-full
        bg-gradient-to-br from-blue-500 to-blue-600
        text-white
        flex flex-col items-center justify-center
        rounded-2xl shadow-lg cursor-grab
        hover:shadow-xl hover:scale-[1.03]
        transition-all duration-300 ease-in-out
        p-4 text-center
      "
    >
     
      <span className="text-sm sm:text-md lg:text-lg font-bold text-black mb-1">{id}.</span>


      <h3 className="text-md sm:text-lg lg:text-xl font-semibold mb-1 break-words">{name}</h3>

      <p className="text-[11px]  lg:text-md  sm:text-sm opacity-90 break-words">{role}</p>
    </div>
  );
};

export default CardComp2;
