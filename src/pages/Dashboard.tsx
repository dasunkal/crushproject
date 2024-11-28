import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { LogOut } from 'lucide-react';
import { db, auth } from '../firebase';
import AuthGuard from '../components/AuthGuard';
import ResponseCard from '../components/ResponseCard';

interface Response {
  id: string;
  answer: string;
  message: string;
  timestamp: string;
}

function Dashboard() {
  const [responses, setResponses] = useState<Response[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, 'responses'),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const responseData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Response[];
      setResponses(responseData);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthGuard>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Response Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </div>

        {responses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-600">No responses yet</p>
          </div>
        ) : (
          responses.map((response) => (
            <ResponseCard key={response.id} {...response} />
          ))
        )}
      </div>
    </AuthGuard>
  );
}

export default Dashboard;