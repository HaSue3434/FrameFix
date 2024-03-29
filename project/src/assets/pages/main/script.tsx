import { useState, useEffect,useRef } from 'react';
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


// Defines the return type for the Pin function.
interface PinEvent {
  element: React.RefObject<HTMLDivElement>;
  triggerElement: React.RefObject<HTMLDivElement>;
}

export const usePin = (): PinEvent => {
  
  const elementRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    const triggerElement = triggerElementRef.current;
    
    // Ensures the elements exist before attempting to use them.
    if (element && triggerElement) {

      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 50%",
        end: "+=500", 
        pin: element,
        markers: true,
      });
    }

  }, []);

  return { element: elementRef, triggerElement: triggerElementRef };
}