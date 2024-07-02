"use client";

import React, { useEffect, useState } from "react";

type Categories = "program" | "internet" | "product";

type Product = {
  id: number;
  title: string;
  img: string;
  category: Categories;
};

const products: Product[] = [
  {
    id: 1,
    title: "اینترنت 1",
    img: "/image/portfolio/portfolio-1.jpg",
    category: "internet",
  },
  {
    id: 2,
    title: "محصول 1",
    img: "/image/portfolio/portfolio-1.jpg",
    category: "product",
  },
  {
    id: 3,
    title: "برنامه 1",
    img: "/image/portfolio/portfolio-1.jpg",
    category: "program",
  },
  {
    id: 4,
    title: "اینترنت 2",
    img: "/image/portfolio/portfolio-1.jpg",
    category: "internet",
  },
  {
    id: 5,
    title: "محصول 2",
    img: "/image/portfolio/portfolio-1.jpg",
    category: "product",
  },
  {
    id: 6,
    title: "برنامه 2",
    img: "/image/portfolio/portfolio-1.jpg",
    category: "program",
  },
  {
    id: 7,
    title: "اینترنت 3",
    img: "/image/portfolio/portfolio-1.jpg",
    category: "internet",
  },
  {
    id: 8,
    title: "محصول 3",
    img: "/image/portfolio/portfolio-1.jpg",
    category: "product",
  },
  {
    id: 9,
    title: "برنامه 3",
    img: "/image/portfolio/portfolio-1.jpg",
    category: "program",
  },
];

function Portfolio() {
  const [category, setCategory] = useState<Categories | "all">("all");
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([
    ...products,
  ]);

  useEffect(() => {
    if (category !== "all") {
      setSelectedProducts(
        [...products].filter((product) => product.category === category)
      );
    } else {
      setSelectedProducts([...products]);
    }
  }, [category]);

  return (
    <>
      <div className="my-4">
        <div className="container">
          <h2 className="my-4 text-gray-700 font-bold text-2xl">
            نمونه کارها ما را بررسی کنید
          </h2>
          <div className="flex justify-center gap-4 my-4">
            <button
              className={` text-black p-2 hover:bg-primary rounded-md ${
                category === "all" && "bg-primary"
              } transition-colors`}
              onClick={() => setCategory("all")}
            >
              همه
            </button>
            <button
              className={` text-black p-2 hover:bg-primary rounded-md ${
                category === "program" && "bg-primary"
              }  transition-colors`}
              onClick={() => setCategory("program")}
            >
              برنامه
            </button>
            <button
              className={` text-black p-2 hover:bg-primary rounded-md ${
                category === "product" && "bg-primary"
              }  transition-colors`}
              onClick={() => setCategory("product")}
            >
              محصول
            </button>
            <button
              className={` text-black p-2 hover:bg-primary rounded-md ${
                category === "internet" && "bg-primary"
              }  transition-colors`}
              onClick={() => setCategory("internet")}
            >
              اینترنت
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
