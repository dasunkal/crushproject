import React from 'react';
import { Heart, Coffee, Music, Gift, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface StepIconProps {
  step: number;
  totalSteps: number;
}

const StepIcon = ({ step, totalSteps }: StepIconProps) => {
  const icons = [Heart, Coffee, Music, Gift, Sparkles];
  const IconComponent = step <= totalSteps ? icons[(step - 1) % icons.length] : Heart;

  return (
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
    >
      <IconComponent className="h-8 w-8 text-pink-500" />
    </motion.div>
  );
};

export default StepIcon;