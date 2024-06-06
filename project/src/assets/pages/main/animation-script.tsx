import React, { useState, useEffect,useRef } from 'react';

import { 
  motion,
  useAnimation,
  AnimationControls,

} from 'framer-motion';

import { useInView } from 'react-intersection-observer';

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


interface LetterAnimationConfig {
  letter: string;
  delay: number;
}

const createAnimationConfig = (text: string): LetterAnimationConfig[] => {
  return Array.from(text).map((letter, index) => ({
    letter,
    delay: index * 0.05, 
  }));
};

interface TxtAnimationProps {
  text: string;
}

export const TxtAnimation: React.FC<TxtAnimationProps> = ({ text }) => {
  const animationConfig = createAnimationConfig(text);

  return (
    <div style={{ display: 'flex' }}>
      {animationConfig.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%', opacity :0 }}
          animate={{ y: 0,opacity :0.1}}
          exit={{ y: '-100%' }}
          transition={{ duration:1, delay: (item.delay) }}
        >
          {item.letter}
        </motion.span>
      ))}
    </div>
  );
};

export const useInViewCursorScale = (x: number, y: number): [React.RefObject<HTMLDivElement>, AnimationControls] => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inViewRef = useInView();
  const { ref: inViewRefCallback, inView } = inViewRef;

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity : 1,
        scale: 1,
        transition: { duration: 1, ease: 'anticipate', delay: 0.25 }
      })
    } else {
      controls.start({ opacity : 0,scale: 0.5 });
    }
  }, [controls, inView, x, y]);

  useEffect(() => {
    if (ref.current) {
      inViewRefCallback(ref.current);
    }
  }, [inViewRefCallback]);

  return [ref, controls];
};

export const useInViewExContentSpring = (): [React.RefObject<HTMLDivElement>, AnimationControls] => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null); 
  const inViewRef = useInView();
  const { ref: inViewRefCallback, inView } = inViewRef;

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 50, damping: 10 },
      });
    } else {
      controls.start({ opacity: 0, scale: 0.7 });
    }
  }, [controls, inView]);

  useEffect(() => {
    if (ref.current) {
      inViewRefCallback(ref.current);
    }
  }, [inViewRefCallback]);

  return [ref, controls];
};
export const useDescriptionFadeOut = (): [React.RefObject<HTMLDivElement>, AnimationControls] => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null); 
  const inViewRef = useInView();
  const { ref: inViewRefCallback, inView } = inViewRef;

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x : 0,
        transition: { duration : 0.5, ease : 'easeInOut'},
      });
    } else {
      controls.start({ opacity: 0, x: -100 });
    }
  }, [controls, inView]);

  useEffect(() => {
    if (ref.current) {
      inViewRefCallback(ref.current);
    }
  }, [inViewRefCallback]);

  return [ref, controls];
}

export const useDefaultFadeOut = (): [React.RefObject<HTMLDivElement>, AnimationControls] => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null); 
  const inViewRef = useInView();
  const { ref: inViewRefCallback, inView } = inViewRef;

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration : 0.5, ease : 'easeInOut'},
      });
    } else {
      controls.start({ opacity: 0});
    }
  }, [controls, inView]);

  useEffect(() => {
    if (ref.current) {
      inViewRefCallback(ref.current);
    }
  }, [inViewRefCallback]);

  return [ref, controls];

}

export const useInViewPluginsScale = (activate : any): [React.RefObject<HTMLDivElement>, AnimationControls] => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (activate) {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: { type: 'spring', stiffness: 50, damping: 10 },
        });
      } else {
        controls.start({ opacity: 0, scale: 0.5 });
      }
    }, [controls, activate]);
  
    return [ref, controls];
}
export const useDelaySpring = (delay: number = 1): [React.RefObject<HTMLDivElement>, AnimationControls] => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null); 
    const inViewRef = useInView();
    const { ref: inViewRefCallback, inView } = inViewRef;

    useEffect(() => {
      if (inView) {
        controls.start({
          scale : 1,
          opacity : 1,
          transition: { duration: 1.5, ease : "anticipate" ,delay : delay},
        });
      } else {
        controls.start({ scale : 0.5,opacity : 0,});
      }
    }, [controls, inView]);

    useEffect(() => {
      if (ref.current) {
        inViewRefCallback(ref.current);
      }
    }, [inViewRefCallback]);

    return [ref, controls];
};
export const useSeoAnimation = ():[React.RefObject<HTMLDivElement>, AnimationControls] =>{
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null); 
  const inViewRef = useInView();
  const { ref: inViewRefCallback, inView } = inViewRef;
  useEffect(() => {
    if (inView) {
      controls.start({
        x : 0,
        y : 0,
        transition: { duration: 1.5, ease : "anticipate", delay : 0.25,},
      });
    } else {
      controls.start({x : 50, y : 50,});
    }
  }, [controls, inView]);

  useEffect(() => {
    if (ref.current) {
      inViewRefCallback(ref.current);
    }
  }, [inViewRefCallback]);

  return [ref, controls];
}

export const useFrameScale = ():[React.RefObject<HTMLDivElement>, AnimationControls] =>{
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null); 
  const inViewRef = useInView();
  const { ref: inViewRefCallback, inView } = inViewRef;
  useEffect(() => {
    if (inView) {
      controls.start({
        scale : 1,
        
        transition: { duration: 1.5, ease : "anticipate", delay : 0.35,},
      });
    } else {
      controls.start({scale : 0.8});
    }
  }, [controls, inView]);

  useEffect(() => {
    if (ref.current) {
      inViewRefCallback(ref.current);
    }
  }, [inViewRefCallback]);

  return [ref, controls];
}
