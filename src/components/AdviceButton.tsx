import React from 'react';
import { RefreshCw } from 'lucide-react';

type AdviceButtonProps = {
  onClick: () => void;
  isSpinning: boolean;
};

export function AdviceButton({ onClick, isSpinning }: AdviceButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
    >
      <RefreshCw className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
      Nouveau Conseil Absurde
    </button>
  );
}