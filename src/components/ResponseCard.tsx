import React from 'react';
import { Heart, HeartCrack } from 'lucide-react';

interface ResponseCardProps {
  answer: string;
  message: string;
  timestamp: string;
}

function ResponseCard({ answer, message, timestamp }: ResponseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        {answer === 'yes' ? (
          <Heart className="h-8 w-8 text-pink-500" />
        ) : (
          <HeartCrack className="h-8 w-8 text-gray-500" />
        )}
        <span className="ml-2 text-lg font-semibold">
          Answer: {answer.charAt(0).toUpperCase() + answer.slice(1)}
        </span>
      </div>
      <p className="text-gray-700 mb-2">{message}</p>
      <p className="text-sm text-gray-500">
        Received: {new Date(timestamp).toLocaleString()}
      </p>
    </div>
  );
}

export default ResponseCard;