/* eslint-disable no-unused-vars */
import { categories } from "../data";
import { useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

export default function Category() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById("scrollContainer");
    const scrollAmount = 200;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }

    setScrollPosition(container.scrollLeft);
  };

  return (
    <>
      <div className="max-w-lg lg:max-w-[425px] mx-5 lg:mx-24">
        <h1 className="text-[28px] lg:text-[38px] font-medium leading-[50px] text-[#333]">
          Browser Our Category
        </h1>
        <p className="text-[24px] lg:text-[30px] font-medium lg:leading-[50px] leading-[30px] text-primary">
          Receipt
        </p>
      </div>
      <div
        className="category ml-5 lg:ml-24 flex flex-row gap-3 my-2 py-10 pr-5"
        id="scrollContainer"
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="min-w-[230px] flex justify-center items-center py-8 px-20 rounded-lg hover:translate-y-3 hover:scale-105 hover:bg-hero-pattern hover:bg-cover"
            style={{ backgroundColor: category.color }}
          >
            <div className="min-w-max flex flex-col justify-center items-center">
              <img
                src={category.image}
                alt={category.name}
                className="h-[47px] w-[47px]"
              />
              <h5 className="mb-2 text-[16px] font-medium leading-[22px] text-[#333] mt-5">
                {category.name}
              </h5>
              <p className="text-[14px] font-normal leading-[16px] text-[#333] mt-1">
                {category.item}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden sm:flex justify-end mr-24 gap-4">
        <button
          onClick={() => handleScroll("left")}
          className="bg-primary rounded-[100px] flex justify-center items-center py-3 px-5 text-[16px] font-medium text-[#fff] gap-1"
        >
          <span className="inline-flex bg-white p-1 rounded-full text-primary font-bold">
            <SlArrowLeft />
          </span>
          Prev
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="bg-primary rounded-[100px] flex flex-row-reverse justify-center items-center py-3 px-5 text-[16px] font-medium text-[#fff] gap-1"
        >
          <span className="inline-flex bg-white p-1 rounded-full text-primary">
            <SlArrowRight />
          </span>
          Next
        </button>
      </div>
    </>
  );
}
