import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

type MemberProps = {
  img: string;
  name: string;
  job: string;
};

function Member({ img, job, name }: MemberProps) {
  return (
    <>
      <div className="overflow-hidden shadow-md rounded-md">
        <div className="container-member">
          <div className="relative group">
            <img src={img} alt={name} />
            <div className="absolute bottom-9 transition-all inset-x-0 opacity-0 duration-300 group-hover:opacity-100 group-hover:bottom-8">
              <ul className="flex justify-center gap-4 m-auto">
                <li>
                  <a
                    href="#"
                    className="text-black block p-2 rounded-md text-xl bg-slate-200 backdrop-opacity-70 transition-colors hover:bg-primary"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black block p-2 rounded-md text-xl bg-slate-200 backdrop-opacity-70 transition-colors hover:bg-primary"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black block p-2 rounded-md text-xl bg-slate-200 backdrop-opacity-70 transition-colors hover:bg-primary"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-black block p-2 rounded-md text-xl bg-slate-200 backdrop-opacity-70 transition-colors hover:bg-primary"
                  >
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-lg mb-3 font-bold text-black">{name}</h4>
            <span className="text-base text-gray-500">{job}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
