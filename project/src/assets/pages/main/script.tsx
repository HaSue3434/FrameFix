import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TypingEffectHookReturnType {
  typedText: string;
  isCompleted: boolean;
}

export const useTypingEffect = (text: string, speed: number): TypingEffectHookReturnType => {
  const [typedText, setTypedText] = useState<string>('');
  const [index, setIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (isCompleted) return;

    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((prevTypedText) => prevTypedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else {
    
      setIsCompleted(true);
    }
  }, [index, text, speed, isCompleted]); 

  useEffect(() => {
    setTypedText('');
    setIndex(0);
    setIsCompleted(false);
  }, [text]);

  return { typedText, isCompleted };
};

interface GSAPHookReturnType {
  e: string;
}

export const useGsapScrollTrigger = (selector: string): GSAPHookReturnType => {
  useEffect(() => {
    const element = document.querySelector(selector);

    if (element) {
      gsap.fromTo(
        element,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 75%", 
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      if (element) {
        ScrollTrigger.getById(selector)?.kill();
      }
    };
  }, [selector]);

  return { e: '' };
};