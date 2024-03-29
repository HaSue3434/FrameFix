import React, { useEffect, useRef, useState } from "react";
import "./App.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

gsap.registerPlugin(ScrollTrigger);

interface ScrollSmootherProps {
    children: React.ReactNode;
}

const ScrollSmootherComponent: React.FC<ScrollSmootherProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [locoScroll, setLocoScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 400, 
      once: false, 
    });

    if (!scrollRef.current) return;

    const ls = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp : 0.1,


    });

    setLocoScroll(ls);
    let currentScrollY = 0;
    ls.on("scroll", (scrollEvent) => {
      currentScrollY = scrollEvent.scroll.y;
      ScrollTrigger.update();
      AOS.refresh();
      
    });

    ls.on("call", func=>{
      console.log(func);
      if(func){
        ScrollTrigger.refresh();
        AOS.refresh();
      }
    })
    ScrollTrigger.refresh();

    return () => {
      ls.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollSmootherComponent;