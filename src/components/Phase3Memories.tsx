import { useState, useEffect, useMemo } from "react";
import { FloatingHearts } from "./FloatingHearts";

interface Phase3MemoriesProps {
  onNext: () => void;
}

// 26 floating messages and quotes
const FLOATING_MESSAGES = [
  "I love you each and everyday",
  "Always you",
  "My favorite person",
  "With you, always",
  "Home is you",
  "I choose you",
  "You are my sunshine",
  "Forever yours",
  "My heart is yours",
  "You complete me",
  "Love of my life",
  "My everything",
  "Ikaw lang",
  "Mahal kita",
  "You're my home",
  "Always and forever",
  "My best friend",
  "My soulmate",
  "You make me happy",
  "I'm so lucky",
  "Thank you for loving me",
  "You're amazing",
  "My favorite hello",
  "My hardest goodbye",
  "Better together",
  "You + Me = Forever",
];

// All images from /public/images/
const IMAGE_FILES = [
  "068e445c-0ded-4895-a518-54e3ce88bd63.jpeg",
  "0d175e59-58e5-4f60-a0a6-5be8cab2755f.jpeg",
  "0e147e01-9ab7-47e1-9044-aed0ed03d11d.jpeg",
  "12aff5aa-21a2-4731-afa1-bffbd6da4962.jpeg",
  "172ace7c-1715-459b-bafb-70f0eca4a106.jpeg",
  "18d78d89-9087-4ece-aff3-ba532ae5db11.jpeg",
  "1aef9e85-886d-40dd-8c69-f108b9198cfc.jpeg",
  "27791909-68e2-4bef-b391-8f7eb904d66c.jpeg",
  "28cc4fa5-f323-440b-99be-23cc33523519.jpeg",
  "30fdb202-0088-40a8-a3b7-c1fd9b323579.jpeg",
  "4457b2cc-eb79-490d-962c-8d0c66c64054.jpeg",
  "46d4fe9c-f1f3-4758-8fa7-006796336444.jpeg",
  "4c4e1551-d256-430a-a2a7-260113fb712a.jpeg",
  "57c4a27a-f0aa-449c-a159-2eb197fccd0f.jpeg",
  "628f3fb6-e7ca-4094-b2f4-2e8a3ab689e2.jpeg",
  "680beb3d-2f9d-4892-97af-cd781174fdf7.jpeg",
  "8f696f60-39fe-458b-9d05-b19c6d5268dd.jpeg",
  "90f840bc-11ac-43b3-8649-8a32810a2d10.jpeg",
  "9c6a9771-2292-4f8c-8991-f6e4e0e89222.jpeg",
  "a475a614-e41e-4985-b1a6-fcb6976bc85c.jpeg",
  "ab7e5262-76c2-4d50-a122-6212910822bc.jpeg",
  "b0d109f0-0f3c-460b-a464-e670c19d28b7.jpeg",
  "b16751c4-7480-4d3b-ade4-7b8463d80a2e.jpeg",
  "b47b3df6-f698-4c4d-b652-33bbf410ed81.jpeg",
  "b48d9418-c42f-4207-a335-5132088efc80.jpeg",
  "c978786e-3d4a-4a42-a634-2e9ebd470996.jpeg",
  "cbcb6187-c6c8-47ff-8a2d-d715103ce7f7.jpeg",
  "cdfbf321-1956-43d3-8c40-6251255f38af.jpeg",
  "e3a53e82-f5ef-465c-a721-28c6a9dbb8eb.jpeg",
  "e7c7debe-59c4-44a3-9675-3d680675e6f7.jpeg",
  "ec68fbcf-5623-43c4-8a75-a65ce368e629.jpeg",
  "f4a153c2-157a-4719-9be2-a290d09c2535.jpeg",
  "f6fc5c6b-d048-4e0c-ab39-e72e02446444.jpeg",
  "f961e835-bc6c-452d-b35a-77caefbbac89.jpeg",
  "f97daaf3-e820-4af2-929f-fccfb34c5c06.jpeg",
];

export function Phase3Memories({ onNext }: Phase3MemoriesProps) {
  const [phase, setPhase] = useState<"scatter" | "carousel">("scatter");
  const [isFading, setIsFading] = useState(false);

  // Generate petal-like scatter positions - images fly from edges toward center then settle
  const scatterPositions = useMemo(() => {
    return IMAGE_FILES.map((_, i) => {
      const angle = (i / IMAGE_FILES.length) * Math.PI * 2;
      const distance = 400 + Math.random() * 200;
      return {
        startX: Math.cos(angle) * distance,
        startY: Math.sin(angle) * distance - 300,
        rotation: (Math.random() - 0.5) * 360,
        delay: Math.random() * 0.8,
        scale: 0.8 + Math.random() * 0.4,
      };
    });
  }, []);

  // Generate positions for all floating messages - spread across the screen
  const messagePositions = useMemo(() => {
    return FLOATING_MESSAGES.map((_, i) => {
      const row = Math.floor(i / 4);
      const col = i % 4;
      return {
        top: 5 + row * 12 + Math.random() * 8,
        left: 5 + col * 22 + Math.random() * 10,
        delay: Math.random() * 3,
        duration: 6 + Math.random() * 4,
        fontSize: 11 + Math.random() * 4,
      };
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("carousel");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      onNext();
    }, 800);
  };

  return (
    <div
      className="phase phase-memories"
      style={isFading ? { animation: "fadeOut 0.8s ease-out forwards" } : {}}
    >
      <FloatingHearts count={12} subtle />

      {/* Floating Messages - visible in both phases */}
      <div className="floating-messages">
        {FLOATING_MESSAGES.map((msg, i) => (
          <span
            key={i}
            className="floating-message"
            style={{
              top: `${messagePositions[i].top}%`,
              left: `${messagePositions[i].left}%`,
              animationDelay: `${messagePositions[i].delay}s`,
              animationDuration: `${messagePositions[i].duration}s`,
              fontSize: `${messagePositions[i].fontSize}px`,
            }}
          >
            {msg}
          </span>
        ))}
      </div>

      {/* Character with speech bubble on top */}
      <div
        className="character-container"
        style={{ marginTop: "60px", marginBottom: "20px", zIndex: 20 }}
      >
        <div
          className="speech-bubble speech-bubble-bottom"
          style={{ fontSize: "14px" }}
        >
          This is how love looks when it’s built to last.🩷
        </div>
        <img
          src="/character/character2.gif"
          alt="Character"
          className="character"
          style={{ width: "120px", height: "120px" }}
        />
      </div>

      {/* Scatter Animation - petal-like falling */}
      {phase === "scatter" && (
        <div className="memory-blast">
          {IMAGE_FILES.slice(0, 20).map((img, i) => (
            <img
              key={img}
              src={`/images/${img}`}
              alt={`Memory ${i + 1}`}
              className="blast-image"
              style={
                {
                  "--start-x": `${scatterPositions[i].startX}px`,
                  "--start-y": `${scatterPositions[i].startY}px`,
                  "--rotation": `${scatterPositions[i].rotation}deg`,
                  "--scale": scatterPositions[i].scale,
                  animationDelay: `${scatterPositions[i].delay}s`,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}

      {/* Carousel */}
      {phase === "carousel" && (
        <div
          style={{
            animation: "fadeIn 0.8s ease-out",
            width: "100%",
            zIndex: 15,
          }}
        >
          <div className="carousel-container">
            <div className="carousel">
              {[...IMAGE_FILES, ...IMAGE_FILES].map((img, i) => (
                <img
                  key={`${img}-${i}`}
                  src={`/images/${img}`}
                  alt={`Memory ${(i % IMAGE_FILES.length) + 1}`}
                  className="carousel-image"
                />
              ))}
            </div>
          </div>

          <button
            className="btn"
            onClick={handleNext}
            style={{
              animation: "fadeIn 0.5s ease-out 0.3s both",
              marginTop: "20px",
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
