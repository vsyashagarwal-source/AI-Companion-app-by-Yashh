
import React from 'react';
import { BotIcon } from './icons/BotIcon';

export const Header: React.FC = () => {
  return (
    <header className="flex-shrink-0 flex items-center p-4 border-b border-slate-700/50">
       <BotIcon className="w-8 h-8 mr-3 text-cyan-400" />
      <div>
        <h1 className="text-xl font-bold text-white">AI Friend</h1>
        <p className="text-sm text-slate-400">Your companion for emotional support</p>
      </div>
    </header>
  );
};
