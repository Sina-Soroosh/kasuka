import React from "react";

function CTA() {
  return (
    <>
      <div className="my-3 bg-[url(../../public/images/cta-bg.jpg)] bg-fixed bg-cover py-4 relative before:bg-[#00000099] before:absolute before:contain-content before:inset-0 before:z-0">
        <div className="container text-center relative z-10">
          <h3 className="text-white font-bold my-4 text-2xl">
            فراخوانی برای اقدام
          </h3>
          <p className="text-white text-lg">
            {" "}
            اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد
            سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به
            دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های
            خود را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.
          </p>
          <a
            href="#"
            className="block my-4 px-4 py-3 bg-transparent border border-white rounded-md w-fit mx-auto text-white hover:bg-primary hover:border-primary hover:text-black transition-colors"
          >
            فراخوانی برای اقدام
          </a>
        </div>
      </div>
    </>
  );
}

export default CTA;
