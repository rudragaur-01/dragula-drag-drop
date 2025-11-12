import React from 'react';

const CardComp2 = ({id, name, role }) => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex flex-col items-center justify-center rounded-xl shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-grab active:cursor-grabbing select-none">
      <h3 className="text-lg font-semibold"> {id} {" "}{name}</h3>
      <p className="text-sm opacity-90">{role}</p>
    </div>
  );
};

export default CardComp2;
