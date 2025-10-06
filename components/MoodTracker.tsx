
import React from 'react';
import { MOOD_OPTIONS } from '../constants';
import type { MoodOption } from '../types';

interface MoodTrackerProps {
  onMoodSelect: (moodOption: MoodOption) => void;
}

export const MoodTracker: React.FC<MoodTrackerProps> = ({ onMoodSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-slate-100">How are you feeling today?</h2>
      <p className="text-slate-400 mb-10 max-w-md">
        Sharing your mood helps me understand you better. Your feelings are always valid here.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {MOOD_OPTIONS.map((option) => (
          <button
            key={option.mood}
            onClick={() => onMoodSelect(option)}
            className="flex flex-col items-center justify-center p-6 bg-slate-800/70 rounded-lg border border-slate-700 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span className={`text-5xl ${option.color}`}>{option.emoji}</span>
            <span className="mt-2 font-medium text-slate-200">{option.mood}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
