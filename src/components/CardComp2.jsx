import React from "react";

const CardComp2 = ({ id, name, role }) => {
  return (
    <div
      className="
      cursor-grab
        w-full h-full
       bg-secondary text-secondary-foreground
       
        flex flex-col items-center justify-center
        rounded-2xl shadow-lg 
        hover:shadow-xl hover:scale-[1.03]
        
        p-4 text-center
      "
    >
      <span className="text-sm sm:text-md lg:text-lg font-bold text-black mb-1">
        {id}.
      </span>

      <h3 className="text-md sm:text-lg lg:text-xl font-semibold mb-1 break-words">
        {name}
      </h3>

      <p className="text-[11px]  lg:text-md  sm:text-sm opacity-90 break-words">
        {role}
      </p>
    </div>
  );
};

export default CardComp2;
