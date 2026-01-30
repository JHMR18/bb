import { useState } from 'react';
import './App.css';
import { Phase1Landing } from './components/Phase1Landing';
import { Phase2Messenger } from './components/Phase2Messenger';
import { Phase3Memories } from './components/Phase3Memories';
import { Phase4Final } from './components/Phase4Final';
import { Phase5Message } from './components/Phase5Message';

function App() {
  const [phase, setPhase] = useState(1);

  const nextPhase = () => {
    setPhase((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      {phase === 1 && <Phase1Landing onNext={nextPhase} />}
      {phase === 2 && <Phase2Messenger onNext={nextPhase} />}
      {phase === 3 && <Phase3Memories onNext={nextPhase} />}
      {phase === 4 && <Phase4Final onNext={nextPhase} />}
      {phase === 5 && <Phase5Message />}
    </div>
  );
}

export default App;
