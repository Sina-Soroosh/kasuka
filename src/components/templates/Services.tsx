import React from "react";
import IconBox from "../modules/IconBox/IconBox";
import { FaArchway, FaDribbble, FaTv } from "react-icons/fa";
import {
  FaEarthEurope,
  FaFileLines,
  FaTachographDigital,
} from "react-icons/fa6";

function Services() {
  return (
    <>
      <div className="container my-4">
        <h2 className="text-gray-800 text-2xl font-bold mb-4">
          خدمات ما را بررسی کنید
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <IconBox
            title="لورم اپیسوم"
            text="برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"
            logo={<FaDribbble />}
          />
          <IconBox
            title="اما همانطور که مشاهده می کنید"
            text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"
            logo={<FaFileLines />}
          />
          <IconBox
            title="دردهای بزرگ"
            text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"
            logo={<FaTachographDigital />}
          />
          <IconBox
            title="هیچکس دیگر"
            text="اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم"
            logo={<FaEarthEurope />}
          />
          <IconBox
            title="لولا را پاک کنید"
            text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"
            logo={<FaTv />}
          />
          <IconBox
            title="دیوا دان"
            text="روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد"
            logo={<FaArchway />}
          />
        </div>
      </div>
    </>
  );
}

export default Services;
