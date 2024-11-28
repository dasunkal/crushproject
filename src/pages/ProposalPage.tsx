import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Confetti from 'react-confetti';
import InitialStep from '../components/steps/InitialStep';
import DecisionStep from '../components/steps/DecisionStep';
import MessageStep from '../components/steps/MessageStep';
import FinalStep from '../components/steps/FinalStep';
import { initialSteps } from '../config/steps';

function ProposalPage() {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleAnswer = (selectedAnswer: string) => {
    setAnswer(selectedAnswer);
    if (selectedAnswer === 'yes') {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
    handleNext();
  };

  const handleSubmit = async (submittedMessage: string) => {
    if (!answer) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'responses'), {
        answer,
        message: submittedMessage,
        timestamp: new Date().toISOString()
      });
      handleNext();
    } catch (error) {
      console.error('Error submitting response:', error);
      alert('Failed to submit response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentInitialStep = initialSteps[step - 1];

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <AnimatePresence mode="wait">
              {step <= initialSteps.length && (
                <InitialStep
                  title={currentInitialStep.title}
                  content={currentInitialStep.content}
                  icon={currentInitialStep.icon}
                  onNext={handleNext}
                />
              )}
              {step === initialSteps.length + 1 && <DecisionStep onAnswer={handleAnswer} />}
              {step === initialSteps.length + 2 && (
                <MessageStep
                  answer={answer}
                  isSubmitting={isSubmitting}
                  onSubmit={handleSubmit}
                />
              )}
              {step === initialSteps.length + 3 && <FinalStep answer={answer} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProposalPage;