
import React, { useState, useCallback, useEffect } from 'react';
import type { Chat } from '@google/genai';
import { MoodTracker } from './components/MoodTracker';
import { ChatWindow } from './components/ChatWindow';
import { Header } from './components/Header';
import type { Message, Mood, MoodOption } from './types';
import { Role } from './types';
import { INITIAL_MESSAGE_CONTENT } from './constants';
import { startChatSession } from './services/geminiService';

export default function App() {
  const [currentMood, setCurrentMood] = useState<Mood | null>(null);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    { role: Role.MODEL, content: INITIAL_MESSAGE_CONTENT },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setChatSession(startChatSession());
  }, []);

  const handleMoodSelect = useCallback(async (moodOption: MoodOption) => {
    setCurrentMood(moodOption.mood);
    setMessages(prev => [...prev, { role: Role.USER, content: moodOption.prompt }]);
    
    if (!chatSession) return;
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessageStream({ message: moodOption.prompt });
      let text = '';
      
      const modelMessageIndex = messages.length + 1;
      setMessages(prev => [...prev, { role: Role.MODEL, content: '' }]);

      for await (const chunk of result) {
        text += chunk.text;
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[modelMessageIndex] = { role: Role.MODEL, content: text };
            return newMessages;
        });
      }
    } catch (error) {
      console.error("Failed to send mood:", error);
      setMessages(prev => [...prev, { role: Role.MODEL, content: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  }, [chatSession, messages.length]);

  const handleSendMessage = useCallback(async (text: string) => {
    if (!chatSession || !text.trim()) return;

    const userMessage: Message = { role: Role.USER, content: text };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessageStream({ message: text });
      let responseText = '';
      
      const modelMessageIndex = messages.length + 1;
      setMessages(prev => [...prev, { role: Role.MODEL, content: '' }]);

      for await (const chunk of result) {
        responseText += chunk.text;
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[modelMessageIndex] = { role: Role.MODEL, content: responseText };
            return newMessages;
        });
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages(prev => [...prev, { role: Role.MODEL, content: "I'm sorry, I encountered an error. Could you please try again?" }]);
    } finally {
      setIsLoading(false);
    }
  }, [chatSession, messages.length]);


  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white font-sans">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="w-full max-w-3xl h-full flex flex-col bg-slate-900/50 rounded-2xl shadow-2xl backdrop-blur-sm border border-slate-700">
          {!currentMood ? (
            <MoodTracker onMoodSelect={handleMoodSelect} />
          ) : (
            <ChatWindow
              messages={messages}
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
            />
          )}
        </div>
      </main>
    </div>
  );
}
