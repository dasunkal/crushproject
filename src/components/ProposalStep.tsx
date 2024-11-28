import React from 'react';
import { motion } from 'framer-motion';

interface ProposalStepProps {
  title: string;
  content: string;
  onNext: () => void;
}

const ProposalStep = ({ title, content, onNext }: ProposalStepProps) => {
  return (
    <motion.div
      key="step"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="text-center space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
      >
        Continue
      </motion.button>
    </motion.div>
  );
};

export default ProposalStep;