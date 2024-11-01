import React from 'react';

type AdviceDisplayProps = {
  advice: string;
};

export function AdviceDisplay({ advice }: AdviceDisplayProps) {
  return (
    <div className="bg-purple-100 rounded-xl p-6 min-h-[120px] flex items-center justify-center text-center">
      <p className="text-lg text-purple-900 font-medium">{advice}</p>
    </div>
  );
}