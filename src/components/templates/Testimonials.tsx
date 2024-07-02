import React from "react";

function Testimonials() {
  return (
    <>
      <div className="my-3 bg-[url(../../public/images/testimonials-bg.jpg)] bg-fixed bg-cover py-4 relative before:bg-[#00000099] before:absolute before:contain-content before:inset-0 before:z-0">
        <div className="container relative z-10">
          <div className="flex flex-col items-center my-4">
            <img
              src="/images/testimonials-3.jpg"
              alt=""
              className="w-[100px] h-[100px] border-[7px] border-[#ffffff66] object-cover rounded-full my-4"
            />
            <h3 className="font-bold text-white text-xl">ینا کارلیس</h3>
            <h4 className="text-gray-200 text-lg">فریلنسر</h4>
            <p className="text-white text-base">
              زیرا من آن کسی بودم که از درد رهایی می یافت ، درد هیچ تقصیری از
              بسیاری ندارد ، حداقل فوجیات را حداقل از طریق درد ، کار می کند.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
