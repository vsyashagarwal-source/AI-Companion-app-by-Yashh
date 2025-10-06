
import React from 'react';
import { BotIcon } from './icons/BotIcon';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-end gap-3 justify-start">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600">
          <BotIcon className="w-5 h-5 text-cyan-400" />
        </div>
      <div className="bg-slate-700/70 text-slate-200 self-start rounded-tr-2xl rounded-tl-2xl rounded-br-2xl px-5 py-4 shadow-md">
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
