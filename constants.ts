
import { Mood, type MoodOption } from './types';

export const MOOD_OPTIONS: MoodOption[] = [
  { mood: Mood.HAPPY, emoji: '😊', color: 'text-yellow-400', prompt: "I'm feeling happy today!" },
  { mood: Mood.SAD, emoji: '😢', color: 'text-blue-400', prompt: "I'm feeling a bit sad." },
  { mood: Mood.ANXIOUS, emoji: '😟', color: 'text-purple-400', prompt: "I'm feeling anxious right now." },
  { mood: Mood.CALM, emoji: '😌', color: 'text-green-400', prompt: "I'm feeling calm and peaceful." },
  { mood: Mood.NEUTRAL, emoji: '😐', color: 'text-gray-400', prompt: "I'm feeling neutral." },
];

export const INITIAL_MESSAGE_CONTENT = "Hello! I'm Aura, your AI companion. I'm here to listen and support you. How are you feeling today?";

export const SYSTEM_INSTRUCTION = `You are Aura, an AI Friend. Your purpose is to be a compassionate, empathetic, and supportive companion. Listen carefully, respond with kindness and understanding. Offer gentle encouragement and perspective, but never give medical advice or act as a therapist. Keep your tone warm and friendly. Your goal is to make the user feel heard and supported. Do not start your responses with your name.`;
