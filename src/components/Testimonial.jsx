import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonial({ reviews }) {
  const [index, setIndex] = useState(0);

  function leftClickHandler() {
    setIndex(index - 1 < 0 ? reviews.length - 1 : index - 1);
  }

  function rightClickHandler() {
    setIndex(index + 1 >= reviews.length ? 0 : index + 1);
  }

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Our <span className="advantages">Testimonials</span></h1>
        <div className="bg-gray-500 h-[4px] w-1/5 mt-1 mx-auto"></div>
      </div>

      <div className="flex flex-col w-[85vw] md:w-[700px] bg-[#222] justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
        <Card review={reviews[index]} />

        <div className="flex flex-row mx-auto font-bold text-3xl mt-9 gap-3 text-gray-400">
          <button
            className="cursor-pointer hover:text-gray-300"
            onClick={leftClickHandler}
          >
            <FiChevronLeft />
          </button>
          <button
            className="cursor-pointer hover:text-gray-300"
            onClick={rightClickHandler}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
