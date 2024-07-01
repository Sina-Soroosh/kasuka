import React from "react";

function Hero() {
  return (
    <>
      <section className="min-h-screen bg-[url(../../public/images/hero-bg.jpg)] bg-fixed bg-cover relative before:bg-[#00000099] before:absolute before:contain-content before:inset-0 before:z-0">
        <div className="container py-28 p-10 md:p-28 text-center relative z-[5]">
          <div className="">
            <h1 className="text-white text-5xl font-bold">
              راه حل های قدرتمند دیجیتال با
              <br />
              <span className="my-4 block font-bold text-primary">Kasuka</span>
            </h1>
            <h2 className="text-white my-2 font-bold text-xl">
              ما تیمی از بازاریابان با استعداد دیجیتال هستیم
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"></div>
        </div>
      </section>
    </>
  );
}

export default Hero;
