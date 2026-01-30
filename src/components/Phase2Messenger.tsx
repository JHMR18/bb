import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { FloatingHearts } from './FloatingHearts';

interface Phase2MessengerProps {
  onNext: () => void;
}

const MESSAGES = [
  "hello lovely, im dudong. ako ang messenger na pinadala ng jhomer para sayo.",
  "Hindi man sya perfect, hindi man nya mabigay lahat ng gusto mo, pero mahal na mahal ka nya araw araw.",
  "and today gusto nya ipaalala sayo kung gaano ka ka-special."
];

export function Phase2Messenger({ onNext }: Phase2MessengerProps) {
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
          src="/character/character1.gif"
          alt="Dudong"
          className="character"
        />

        {showButton && (
          <button
            className="btn"
            onClick={handleNext}
            style={{ animation: 'fadeIn 0.5s ease-out' }}
          >
            sige nga gaano ka special?
          </button>
        )}
      </div>
    </div>
  );
}
