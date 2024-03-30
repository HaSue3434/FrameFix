import React, { useEffect, useRef, useState } from "react";
import "../../../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSmootherProps {
    children: React.ReactNode;
}

const ScrollSmootherComponent: React.FC<ScrollSmootherProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!scrollRef.current) return;

    const ls = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp : 0.1,
      class : 'is-inview',
      offset : ["-12%", '12%'],
      repeat : true,
    });
    
    let currentScrollY = 0;
    ls.on("scroll", (scrollEvent) => {
      currentScrollY = scrollEvent.scroll.y;
      ScrollTrigger.update();      
      ScrollTrigger.refresh();
    });

    (ls.on as any)('call', (func: any, direction: any, obj: any) => {
      if(func){
        console.log(func)
        ScrollTrigger.refresh();
      }
      
    })

    ScrollTrigger.scrollerProxy(scrollRef.current,{
      scrollTop(value) {
        
        if (scrollRef.current) {
          return arguments.length
            ? scrollRef.current.scrollTo({ top: value, behavior: 'smooth' })
            : value;
        }
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: scrollRef.current.style.transform
        ? "transform"
        : "fixed"
    });

    ScrollTrigger.refresh();
    window.addEventListener("load", ()=>{
      ScrollTrigger.update();
      ScrollTrigger.refresh();
      ls.update();
    })
    return () => {
      ls.destroy();
    };
  }, []);

  
  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollSmootherComponent;