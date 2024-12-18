import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

interface AuthGuardProps {
  children: React.ReactNode;
}

function AuthGuard({ children }: AuthGuardProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return <>{children}</>;
}

export default AuthGuard;