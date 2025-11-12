import React from 'react';


const CardComp1 = ({ id, name, role }) => {
  return (
    <div
      className="
        w-full h-full 
        bg-gradient-to-br from-red-500 to-pink-600 
        text-white 
        flex flex-col items-center justify-center 
        rounded-2xl shadow-lg cursor-grab 
        hover:shadow-xl hover:scale-[1.03] 
        transition-all duration-300 ease-in-out
      "
    >
      <h3 className="text-lg font-semibold tracking-wide">{id}{" "}{name}</h3>
      <p className="text-sm opacity-90">{role}</p>
    </div>
  );
};

export default CardComp1;
