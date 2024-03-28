import React, { useEffect, useRef, useState } from "react";
import "./App.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import AOS from 'aos';


gsap.registerPlugin(ScrollTrigger);

interface ScrollSmootherProps {
    children: React.ReactNode;
}

const ScrollSmootherComponent: React.FC<ScrollSmootherProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [locoScroll, setLocoScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const ls = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp : 0.07,
    });

    setLocoScroll(ls);
    ls.init()
    let currentScrollY = 0;
    ls.on("scroll", (scrollEvent) => {
      currentScrollY = scrollEvent.scroll.y;
      ScrollTrigger.update();

      
    });

    ls.on("call", func=>{
      console.log(func);
      if(func){
        ls.start();
        ScrollTrigger.refresh();
      }
    })
    ScrollTrigger.refresh();

    return () => {
      ls.stop();
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