import React from "react";

type IconBoxProps = {
  logo: React.ReactNode;
  title: string;
  text: string;
};

function IconBox({ logo, text, title }: IconBoxProps) {
  return (
    <>
      <div className="p-4 border border-gray-300 text-center rounded-md hover:-translate-y-3 hover:shadow transition-all">
        <div className="text-center w-fit my-3 mx-auto bg-primary text-2xl p-3 rounded-md">
          {logo}
        </div>
        <h4 className="mb-3">
          <a href="#" className="text-gray-800 font-bold text-xl">
            {title}
          </a>
        </h4>
        <p className="text-right text-lg text-gray-700">{text}</p>
      </div>
    </>
  );
}

export default IconBox;
