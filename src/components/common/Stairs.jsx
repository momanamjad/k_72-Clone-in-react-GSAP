import React, { Children } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = (props) => {

 const currentPath= useLocation().pathname;
 console.log(currentPath)





  const pageRef=useRef(null);   
  const stateParentRef = useRef(null);
  useGSAP(function () {
    const timeline = gsap.timeline();
    timeline.to(stateParentRef.current, {
      display: "block",
    });

    timeline.from(".stare", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });
    timeline.to(".stare", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    timeline.to(stateParentRef.current, {
      display: "none",
    });
    timeline.to(".stare", {
      y: "0%",
    });
    gsap.from(pageRef.current, {
        opacity: 0,
        delay:1.3,
        scale:1.2,
    })
  },[currentPath]);







  return (
   <div>
     <div
      ref={stateParentRef}
      className=" stare h-screen w-full  top-0 fixed z-99"
    >
      <div className=" stare h-full  w-full flex ">
        <div className=" stare h-screen w-1/5 bg-black"> </div>
        <div className=" stare h-screen w-1/5 bg-black"> </div>
        <div className=" stare h-screen w-1/5 bg-black"> </div>
        <div className=" stare h-screen w-1/5 bg-black"> </div>
        <div className=" stare h-screen w-1/5 bg-black"> </div>
      </div>
    </div>
<div ref={pageRef}>
    {props.children}

</div>
   </div>
  );
};

export default Stairs;
