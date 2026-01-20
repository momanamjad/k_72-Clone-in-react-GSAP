import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Jean-Philippe_480x640.jpg?w=480&h=640&fit=crop&s=2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p",
    "https://k72.ca/images/teamMembers/Marie-Eve_480x640.jpg?w=480&h=640&fit=crop&s=1f4f3f5f4e2e4d6b6c8e8f4e5d6c7b8a",
  ];
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers:true,
        start: "top 28%",
        end: "top -70%",
        scrub: true,
        pin: true,
        onUpdate: function (elem) {
          let imageIndex;
          if (elem.progress < 0.1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="h-[20vw] rounded-4xl  w-[15vw] top-80 left-[30vw] overflow-hidden object-cover absolute"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover rounded-3xl"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt=""
          />
        </div>
        <div className="relative">
          <div className="mt-[50vh]">
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
