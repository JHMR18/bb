# Monthsary React Website Design

## Overview
A mobile-only romantic interactive website for a 3rd monthsary gift. 5-phase flow with animations, typewriter effects, and photo carousel.

## Tech Stack
- React + Vite + TypeScript
- Pure CSS animations (no heavy libraries)
- Mobile-only (max-width: 430px)

## Project Structure
```
src/
├── App.tsx                    # Main app with phase state
├── App.css                    # Global styles & animations
├── components/
│   ├── Phase1Landing.tsx      # Question gate
│   ├── Phase2Messenger.tsx    # Character intro
│   ├── Phase3Memories.tsx     # Photo carousel
│   ├── Phase4Final.tsx        # Final messenger
│   ├── Phase5Message.tsx      # Long love letter
│   ├── TypeWriter.tsx         # Reusable typewriter component
│   └── FloatingHearts.tsx     # Background animation
├── hooks/
│   └── useTypewriter.ts       # Typewriter hook
└── main.tsx
```

## Theme
```css
--pink-primary: #f8c8dc
--pink-light: #fbe4ec
--pink-rose: #f4a7b9
--lavender: #e8d5e8
--cream: #fff9f9
```

## Phase Flow

### Phase 1: Question Gate
- Question: "Sino ang love love mo?"
- Correct: contains "jhomer" (case-insensitive) → fade to Phase 2
- Wrong attempts:
  - 1st: "ayusin mo sagot mo. isa!"
  - 2nd: "ayusin mo sagot mo. dalawa!"
  - 3rd: "GEH" + "WALA NA TAMPO NA SI DUDONG" + 10s lockout

### Phase 2: Character Intro
- character1.gif with speech bubble
- Typewriter messages (3 sequential)
- Button: "sige nga gaano ka special?"

### Phase 3: Memory Blast
- 51 images scatter-in animation → settle into carousel
- character2.gif: "ang cute nyo together. you look so happy"
- 6 floating sweet messages
- Auto-scrolling horizontal carousel

### Phase 4: Final Messenger
- character3.gif with 2 typewriter messages
- Button: "Next"

### Phase 5: Love Letter
- Full typewriter long message
- Soft pink, flower accents, subtle hearts
- Final destination (no next button)

## Assets
- `/public/character/character1.gif`
- `/public/character/character2.gif`
- `/public/character/character3.gif`
- `/public/images/*.jpeg` (51 photos)

## Animations
- fadeIn: soft opacity (0.8s)
- float: gentle up/down
- popIn: scale 0→1 with bounce
- heartFloat: hearts rising/fading
- scatter: images fly in like petals
