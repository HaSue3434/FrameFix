import { useState, useEffect,useRef } from 'react';
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