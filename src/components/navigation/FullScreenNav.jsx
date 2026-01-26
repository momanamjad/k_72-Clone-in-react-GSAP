import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef, } from "react";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullscreenref = useRef(null)
    const fullNavLinksRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    console.log(navOpen)


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])
  return (
    <div
    ref={fullscreenref}
      id="fullscreennav"
      className="fullscreennav h-screen absolute z-99 hidden  text-white w-full  overflow-x-hidden  p-4 bg-black"
    >
      <div  className="h-screen w-full fixed "> 
        <div className=" stairing h-full  w-full flex ">
        <div className=" stairing h-screen w-1/5 bg-black"> </div>
        <div className=" stairing h-screen w-1/5 bg-black"> </div>
        <div className=" stairing h-screen w-1/5 bg-black"> </div>
        <div className=" stairing h-screen w-1/5 bg-black"> </div>
        <div className=" stairing h-screen w-1/5 bg-black"> </div>
      </div>
      </div>
  <div ref={fullNavLinksRef} className="relative">
     <div className="navlink flex p-5 items-start w-full  justify-between">
       <div className="">
        <div className="w-30">
          <svg
            className=" w-full cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 44"
          >
            <path
            
              fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
      </div>
      <div 
       onClick={()=>{
        setNavOpen(false)
      }} className="h-32 w-32  relative cursor-pointer">
        <div className="h-44 w-0.5 -rotate-45 origin-top bg-[#D3FD50] absolute"> </div>
        <div className="h-44 w-0.5 rotate-45 right-0 origin-top bg-[#D3FD50] absolute"> </div>
      </div>
    </div>
      <div className="py-23 cursor-pointer">  
        <div className="link origin-top border-t  relative border-white ">
          <h1 className="text-[8vw] uppercase leading-[1.2] text-center">
            PROJECTS
          </h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center">
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex items-center">
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="link origin-top border-t  relative border-white ">
          <h1 className="text-[8vw] uppercase leading-[1.2] text-center">
            AGENCY
          </h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center">
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO KNOW EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO KNOW EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex items-center">
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO KNOW EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO KNOW EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="link origin-top border-t  relative border-white ">
          <h1 className="text-[8vw] uppercase leading-[1.2] text-center">
            CONTACT
          </h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center">
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex items-center">
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="link origin-top border-t border-b  relative border-white ">
          <h1 className="text-[8vw] uppercase leading-[1.2] text-center">
            BLOG
          </h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex items-center">
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                alt=""
              />
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                alt=""
              />
            </div>
            <div className="moveX flex items-center">
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                alt=""
              />
              <h2 className=" whitespace-nowrap text-[8vw] uppercase leading-[1.2] text-center">
                TO  SEE EVERYTHING
              </h2>
              <img
                className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                alt=""
              />
            </div>
          </div>
        </div>
       
      </div>
  </div>
    </div>
  );
};

export default FullScreenNav;
