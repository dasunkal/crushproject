import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HeartCrack } from 'lucide-react';

interface DecisionStepProps {
  onAnswer: (answer: string) => void;
}

const DecisionStep = ({ onAnswer }: DecisionStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Will you be my Parthner? 💝
      </h2>
      <p className="text-gray-600 mb-8">
        I promise to make every moment special with you...
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAnswer('yes')}
          className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-lg bg-pink-100 text-pink-500 hover:bg-pink-200 transition-all"
        >
          <Heart className="h-6 w-6" />
          <span>Yes</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAnswer('no')}
          className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-all"
        >
          <HeartCrack className="h-6 w-6" />
          <span>sorry</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DecisionStep;