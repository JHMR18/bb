import { useState, useEffect } from 'react';
import { FloatingHearts } from './FloatingHearts';

interface Phase1LandingProps {
  onNext: () => void;
}

export function Phase1Landing({ onNext }: Phase1LandingProps) {
  const [answer, setAnswer] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [showTampo, setShowTampo] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (isLocked) {
      const timer = setTimeout(() => {
        setIsLocked(false);
        setShowTampo(false);
        setAttempts(0);
        setErrorMessage('');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isLocked]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLocked) return;

    const normalizedAnswer = answer.toLowerCase().trim();

    if (normalizedAnswer.includes('jhomer')) {
      setIsFading(true);
      setTimeout(() => {
        onNext();
      }, 800);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      if (newAttempts === 1) {
        setErrorMessage('ayusin mo sagot mo. isa!');
      } else if (newAttempts === 2) {
        setErrorMessage('ayusin mo sagot mo. dalawa!');
      } else if (newAttempts >= 3) {
        setErrorMessage('GEH');
        setShowTampo(true);
        setIsLocked(true);
      }
    }
  };

  return (
    <div className={`phase ${isFading ? 'fade-out' : ''}`} style={isFading ? { animation: 'fadeOut 0.8s ease-out forwards' } : {}}>
      <FloatingHearts />

      <div className="card">
        <h1>Sino ang love love mo?</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer..."
            disabled={isLocked}
            autoFocus
          />

          <button
            type="submit"
            className="btn"
            disabled={isLocked || !answer.trim()}
          >
            Submit
          </button>
        </form>

        {errorMessage && !showTampo && (
          <p className="error-message" key={attempts}>
            {errorMessage}
          </p>
        )}

        {showTampo && (
          <div className="tampo-message">
            WALA NA TAMPO NA SI DUDONG
          </div>
        )}
      </div>
    </div>
  );
}
