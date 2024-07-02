import React from "react";
import Member from "../modules/Member/Member";

function Team() {
  return (
    <>
      <div className="my-6">
        <div className="container">
          <h2 className="my-4 text-gray-700 font-bold text-2xl">
            تیم ما را بررسی کنید
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Member
              name="والتر وایت"
              job="مدیر ارشد اجرایی"
              img="images/team-1.jpg"
            />
            <Member
              name="سارا جونسون"
              job="مدیر تولید"
              img="images/team-2.jpg"
            />
            <Member name="ویلیام اندرسون" job="CTA" img="images/team-3.jpg" />
            <Member name="آماندا جپسون" job="حسابدار" img="images/team-4.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
