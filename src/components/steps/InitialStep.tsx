import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface InitialStepProps {
  title: string;
  content: string;
  icon: LucideIcon;
  onNext: () => void;
}

const InitialStep = ({ title, content, icon: Icon, onNext }: InitialStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-6"
    >
      <div className="flex justify-center mb-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center"
        >
          <Icon className="h-8 w-8 text-pink-500" />
        </motion.div>
      </div>
      <h2 className="text-3xl font-bold text-gray-800">
        {title}
      </h2>
      <p className="text-gray-600">
        {content}
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-8 py-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
      >
        Continue
      </motion.button>
    </motion.div>
  );
};

export default InitialStep;