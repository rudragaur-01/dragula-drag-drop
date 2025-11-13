const CardComp1 = ({ id, name, role }) => {
  return (
    <div
      className="
       cursor-grab
        w-full h-full
        bg-primary
      text-primary-foreground
        flex flex-col items-center justify-center
        rounded-2xl shadow-lg 
        hover:shadow-xl hover:scale-[1.03]
       
        p-4 text-center
      "
    >
      <span className="text-sm md:text-md lg:text-lg font-bold text-white mb-1">
        {id}.
      </span>

      <h3 className="text-md md:text-lg lg:text-xl font-semibold mb-1 break-words">
        {name}
      </h3>

      <p className="text-[11px] md:text-sm lg:text-md opacity-90 break-words">
        {role}
      </p>
    </div>
  );
};

export default CardComp1;
