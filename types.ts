
export enum Role {
  USER = 'user',
  MODEL = 'model',
}

export interface Message {
  role: Role;
  content: string;
}

export enum Mood {
  HAPPY = 'Happy',
  SAD = 'Sad',
  ANXIOUS = 'Anxious',
  CALM = 'Calm',
  NEUTRAL = 'Neutral',
}

export interface MoodOption {
  mood: Mood;
  emoji: string;
  color: string;
  prompt: string;
}
