import React from "react";

const Agence = () => {
  return (
    <div>
      <div className="section1">
        <div className="h-[20vw] rounded-4xl  w-[15vw] top-80 left-[30vw] overflow-hidden object-cover absolute">
          <img
             className="h-full w-full object-cover rounded-3xl"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className="relative">
          <div className="mt-[50vh]   ">
            <h1 className="text-[20vw] uppercase text-center leading-[18vw]">
              Sixty- <br />
              seventh <br />
              Twelve
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="font-size-40px text-6xl select-none user-select-none">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our
              curiosity fuels our creativity. We remain humble and say no to big
              egos, even yours. A brand is alive. It has values, a personality,
              a history. If we forget that, we might achieve good short-term
              results, but we'll kill it in the long run. That's why we're
              committed to providing perspective, to building influential
              brands.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
