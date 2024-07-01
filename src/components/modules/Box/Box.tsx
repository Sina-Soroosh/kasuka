import React from "react";

type BoxProps = {
  title: string;
  logo: React.ReactNode;
};

function Box({ logo, title }: BoxProps) {
  return (
    <>
      <div className="border border-white text-center text-white py-3 px-2 w-full rounded-md hover:border-primary transition-colors">
        <div className="flex flex-col items-center text-lg gap-2 text-primary">
          {logo}
          <h3>
            <a href="" className="text-white font-bold">
              {title}
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Box;
