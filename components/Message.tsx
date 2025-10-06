
import React from 'react';
import { Role, type Message } from '../types';
import { BotIcon } from './icons/BotIcon';
import { UserIcon } from './icons/UserIcon';

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === Role.USER;

  const bubbleClasses = isUser
    ? 'bg-cyan-600/80 text-white self-end rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl'
    : 'bg-slate-700/70 text-slate-200 self-start rounded-tr-2xl rounded-tl-2xl rounded-br-2xl';

  const containerClasses = isUser ? 'justify-end' : 'justify-start';

  return (
    <div className={`flex items-end gap-3 ${containerClasses}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600">
          <BotIcon className="w-5 h-5 text-cyan-400" />
        </div>
      )}
      <div
        className={`max-w-md lg:max-w-xl px-5 py-3 ${bubbleClasses} shadow-md`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600">
          <UserIcon className="w-5 h-5 text-slate-400" />
        </div>
      )}
    </div>
  );
};
