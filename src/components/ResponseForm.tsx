import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HeartCrack, Send } from 'lucide-react';

interface ResponseFormProps {
  answer: string | null;
  message: string;
  isSubmitting: boolean;
  onAnswer: (answer: string) => void;
  onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ResponseForm = ({
  answer,
  message,
  isSubmitting,
  onAnswer,
  onMessageChange,
  onSubmit,
}: ResponseFormProps) => {
  return (
    <motion.div
      key="response"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Will you be my Valentine? 💝
        </h2>
        <p className="text-gray-600 mb-8">
          I promise to make every moment special with you...
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAnswer('yes')}
            className={`flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-lg transition-all ${
              answer === 'yes'
                ? 'bg-pink-500 text-white'
                : 'bg-pink-100 text-pink-500 hover:bg-pink-200'
            }`}
          >
            <Heart className="h-6 w-6" />
            <span>Yes</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAnswer('no')}
            className={`flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-lg transition-all ${
              answer === 'no'
                ? 'bg-gray-500 text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <HeartCrack className="h-6 w-6" />
            <span>sorry</span>
          </motion.button>
        </div>
      </div>

      {answer && (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={onSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              {answer === 'yes' 
                ? "Share your thoughts... 💭"
                : "Would you like to tell me why? 🤔"}
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 text-gray-800"
              value={message}
              onChange={onMessageChange}
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
            <span>{isSubmitting ? 'Sending...' : 'Send Response'}</span>
          </motion.button>
        </motion.form>
      )}
    </motion.div>
  );
};

export default ResponseForm;