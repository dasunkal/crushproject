import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface MessageStepProps {
  answer: string | null;
  isSubmitting: boolean;
  onSubmit: (message: string) => void;
}

const MessageStep = ({ answer, isSubmitting, onSubmit }: MessageStepProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(message);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {answer === 'yes' ? 'You made today special! ✨' : 'I understand... 🥺'}
        </h2>
        <p className="text-gray-600">
          {answer === 'yes'
            ? 'What are you thinking at this moment?'
            : 'Would you like to tell me why?'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 text-gray-800"
            placeholder={answer === 'yes' 
              ? "Write something sweet..."
              : "Your honest thoughts mean a lot to me..."}
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2 px-6 py-4 text-lg border border-transparent rounded-lg shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
        >
          <Send className="h-6 w-6" />
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </motion.button>
      </form>
    </motion.div>
  );
};

export default MessageStep;