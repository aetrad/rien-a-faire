import React, { useState } from 'react';
import { CatHeader } from './components/CatHeader';
import { AdviceDisplay } from './components/AdviceDisplay';
import { AdviceButton } from './components/AdviceButton';
import { ABSURD_ADVICE } from './data/adviceData';

function App() {
  const [advice, setAdvice] = useState(ABSURD_ADVICE[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const getNewAdvice = () => {
    setIsSpinning(true);
    const randomAdvice = ABSURD_ADVICE[Math.floor(Math.random() * ABSURD_ADVICE.length)];
    setTimeout(() => {
      setAdvice(randomAdvice);
      setIsSpinning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-600 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6">
        <CatHeader />
        <AdviceDisplay advice={advice} />
        <AdviceButton onClick={getNewAdvice} isSpinning={isSpinning} />
        <p className="text-sm text-center text-purple-600 italic">
          *Aucune IA n'a été désactivée pour ces conseils
        </p>
      </div>
    </div>
  );
}

export default App;