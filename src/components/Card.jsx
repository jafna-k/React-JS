import React from "react";

function Card({name,des}) {
  return (
    <div
      className="
        bg-[#f4eef8]
        rounded-t-[35px]
        rounded-b-none
        px-7 py-8
        min-h-[320px]
        shadow-lg
        border-b-4 border-[#c9a548]
      "
    >
      <div
        className="
          w-20 h-20
          rounded-full
          bg-[#e0dce5]
          flex items-center justify-center
          mb-7
        "
      >
        <img
          src="/mealplans.png"
          alt="Health Strategy"
          className="w-14 h-14 object-contain"
        />
      </div>

      <h2 className="text-xl font-bold text-[#151515] mb-4">
        {name}
      </h2>

      <p className="text-gray-600 text-base leading-7 mb-5">
       {des}
      </p>

      <a
        href="#"
        className="text-sm font-semibold tracking-widest text-gray-700"
      >
        MORE
      </a>
    </div>
  );
}

export default Card;