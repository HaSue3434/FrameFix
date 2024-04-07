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
      offset : ["-13%", '13%'],
      repeat : true,
    });
    
    let currentScrollY = 0;
    ls.on("scroll", (scrollEvent) => {
      currentScrollY = scrollEvent.scroll.y;
      ScrollTrigger.refresh();
    });

    (ls.on as any)('call', (func: any, direction: any, obj: any) => {
      if(func){
      }
      
    });

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

    window.addEventListener("load", ()=>{
      ScrollTrigger.refresh();
      
    });
    document.addEventListener("DOMContentLoaded", ()=>{
      ScrollTrigger.refresh();
      
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