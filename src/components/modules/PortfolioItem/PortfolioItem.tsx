import React from "react";

type PortfolioItemProps = {
  img: string;
  title: string;
  category: "program" | "internet" | "product";
};

function PortfolioItem({ category, img, title }: PortfolioItemProps) {
  return (
    <div className="">
      <div className="relative overflow-hidden group">
        <div className="">
          <img
            src={img}
            alt={title}
            className="w-full group-hover:scale-125 transition-all duration-300"
          />
        </div>
        <div className="bg-[#0000006c] absolute inset-0 p-4 pb-6 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h4 className="text-white text-2xl font-bold">{title}</h4>
          <p className="text-base text-gray-300">
            {(category === "internet" && "اینترنت") ||
              (category === "product" && "محصول") ||
              (category === "program" && "برنامه")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
