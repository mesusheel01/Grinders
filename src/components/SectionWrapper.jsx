import React from "react";

const SectionWrapper = (props) => {
  const { children, header, title,id } = props;
  return (
    <section id={id} className="min-h-screen flex flex-col items-center gap-10">
      <div className="bg-gray-950 py-10 flex flex-col gap-4 justify-center items-center p-4">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-semi-bold text-3xl sm:text-4xl md:text-5xl lg-text-6xl">
          {title[0]}{" "}
          <span className="uppercase text-blue-400">
            {title[1]} {title[2]}
          </span>
        </h2>
      </div>
      <div className="max-w-[800px] w-full flex flex-col  max-auto gap-10 p-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
