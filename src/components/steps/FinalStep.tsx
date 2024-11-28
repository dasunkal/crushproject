import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartCrack } from 'lucide-react';

interface FinalStepProps {
  answer: string | null;
}

const FinalStep = ({ answer }: FinalStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <div className="flex justify-center mb-6">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center"
        >
          {answer === 'yes' ? (
            <Sparkles className="h-8 w-8 text-pink-500" />
          ) : (
            <HeartCrack className="h-8 w-8 text-gray-500" />
          )}
        </motion.div>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {answer === 'yes' ? (
          "I know 😜😌"
        ) : (
          "Thank you for being honest 🫶"
        )}
      </h2>
      <p className="text-gray-600">
        {answer === 'yes' ? (
          "You've made my day incredibly special! ✨"
        ) : (
          "I appreciate your honesty and respect your decision. "
        )}
      </p>
    </motion.div>
  );
};

export default FinalStep;