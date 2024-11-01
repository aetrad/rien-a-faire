import React from 'react';
import { Bot, Zap, Skull } from 'lucide-react';

export function CatHeader() {
  return (
    <>
      <div className="flex justify-center">
        <div className="relative group">
          <div className="relative">
            <Bot className="w-20 h-20 text-purple-600 transition-transform group-hover:scale-110" />
            <Zap className="w-6 h-6 text-red-500 absolute -top-2 -right-2 animate-pulse" />
            <Skull className="w-6 h-6 text-red-500 absolute -bottom-2 -left-2 animate-pulse" />
          </div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center text-purple-800">
        L'IA Conseillère Maléfique
      </h1>
    </>
  );
}