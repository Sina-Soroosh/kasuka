import React from "react";
import { FaChevronLeft } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="bg-gray-950 text-white">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 pb-4">
            <div className="">
              <div className="">
                <h3 className="flex items-center">
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="img-fluid"
                    width="80"
                    height="80"
                  />
                  Kasuka
                </h3>
                <p className="my-3 text-whit px-3 text-base">
                  تهران خیابان آزادی
                  <br />
                  <strong>تلفن:</strong> 01234567895
                  <br />
                  <strong>ایمیل:</strong> info@example.com
                  <br />
                </p>
              </div>
            </div>
            <div className="">
              <h4 className="font-bold text-xl text-white mb-3">
                لینک های مفید
              </h4>
              <ul>
                <li className="flex gap-2 items-center text-primary text-base">
                  <FaChevronLeft />{" "}
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href="#"
                  >
                    خانه
                  </a>
                </li>
                <li className="flex gap-2 items-center text-primary text-base">
                  <FaChevronLeft />{" "}
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href="#"
                  >
                    درباره ی ما
                  </a>
                </li>
                <li className="flex gap-2 items-center text-primary text-base">
                  <FaChevronLeft />{" "}
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href="#"
                  >
                    خدمات
                  </a>
                </li>
                <li className="flex gap-2 items-center text-primary text-base">
                  <FaChevronLeft />{" "}
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href="#"
                  >
                    شرایط استفاده از خدمات
                  </a>
                </li>
                <li className="flex gap-2 items-center text-primary text-base">
                  <FaChevronLeft />{" "}
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href="#"
                  >
                    سیاست حفظ حریم خصوصی
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="font-bold text-xl text-white mb-3">خدمات ما</h4>
              <ul>
                <li className="flex gap-2 items-center text-primary text-base">
                  <FaChevronLeft />{" "}
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href="#"
                  >
                    طراحی وب سایت
                  </a>
                </li>
                <li className="flex gap-2 items-center text-primary text-base">
                  <FaChevronLeft />{" "}
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href="#"
                  >
                    توسعه وب
                  </a>
                </li>
                <li className="flex gap-2 items-center text-primary text-base">
                  <FaChevronLeft />{" "}
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href="#"
                  >
                    مدیریت تولید
                  </a>
                </li>
                <li className="flex gap-2 items-center text-primary text-base">
                  <FaChevronLeft />{" "}
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href="#"
                  >
                    بازار یابی
                  </a>
                </li>
                <li className="flex gap-2 items-center text-primary text-base">
                  <FaChevronLeft />{" "}
                  <a
                    className="text-white hover:text-primary transition-colors"
                    href="#"
                  >
                    طراحی گرافیک
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-white text-lg mb-3 font-bold">خبرنامه ما</h4>
              <p className="text-white text-base mb-3">
                با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما
                نخواهد بود
              </p>
              <form
                action=""
                method="post"
                className="overflow-hidden rounded-md flex"
              >
                <input
                  className="w-full p-2 text-black"
                  type="email"
                  name="email"
                />
                <input
                  className="bg-primary p-2 text-black cursor-pointer"
                  type="submit"
                  value="دنبال کردن"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="bg-black py-4">
          <div className="container">
            <p className="text-center text-white text-xl">
              تمام حقوق مادی و معنوی وبسایت متعلق به{" "}
              <a href="" className="text-primary">
                kasuka
              </a>{" "}
              میباشد
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
