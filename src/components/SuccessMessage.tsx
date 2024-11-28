import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const SuccessMessage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center"
          >
            <Heart className="h-8 w-8 text-pink-500" />
          </motion.div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Thank you for your response! ❤️
        </h2>
        <p className="text-gray-600">
          Your message means the world to me. I appreciate your honesty and sincerity.
        </p>
      </motion.div>
    </div>
  );
};

export default SuccessMessage;