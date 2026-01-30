import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { FloatingHearts } from './FloatingHearts';

interface Phase4FinalProps {
  onNext: () => void;
}

const MESSAGES = [
  "he made this for you. he put a lot of effort in creating this just so he can show you how much he loves you.",
  "sabe ko sayo im a messenger kaya ito na yung message nya para sayo"
];

export function Phase4Final({ onNext }: Phase4FinalProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const currentMessage = MESSAGES[messageIndex] || '';
  const { displayedText, isComplete } = useTypewriter(currentMessage, 50);

  useEffect(() => {
    if (isComplete && messageIndex < MESSAGES.length - 1) {
      const timer = setTimeout(() => {
        setMessageIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (isComplete && messageIndex === MESSAGES.length - 1) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isComplete, messageIndex]);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      onNext();
    }, 800);
  };

  return (
    <div className={`phase`} style={isFading ? { animation: 'fadeOut 0.8s ease-out forwards' } : {}}>
      <FloatingHearts count={10} />

      <div className="character-container">
        {/* Speech bubble on TOP */}
        <div className="speech-bubble speech-bubble-bottom">
          <p>
            {displayedText}
            {!isComplete && <span className="typewriter-cursor" />}
          </p>
        </div>

        {/* Character below */}
        <img
          src={`${import.meta.env.BASE_URL}character/character3.gif`}
          alt="Dudong"
          className="character"
          style={{ width: '180px', height: '180px' }}
        />

        {showButton && (
          <button
            className="btn"
            onClick={handleNext}
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
