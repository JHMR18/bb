import { useState, useEffect } from 'react';

interface UseTypewriterReturn {
  displayedText: string;
  isComplete: boolean;
}

export function useTypewriter(
  text: string,
  speed: number = 50,
  startDelay: number = 0
): UseTypewriterReturn {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);

    if (!text) {
      setIsComplete(true);
      return;
    }

    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(intervalId);
    };

    if (startDelay > 0) {
      timeoutId = setTimeout(startTyping, startDelay);
      return () => clearTimeout(timeoutId);
    } else {
      return startTyping();
    }
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
}
