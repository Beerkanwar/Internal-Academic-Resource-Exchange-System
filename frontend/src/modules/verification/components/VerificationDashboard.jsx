import React, { useEffect, useState } from 'react';
import { fetchPending, approveResource, rejectResource } from '../services/verification.api';

const VerificationDashboard = () => {
  const [pending, setPending] = useState([]);

  const loadPending = () => {
    fetchPending().then(setPending).catch(console.error);
  };

  useEffect(() => {
    loadPending();
  }, []);

  const handleAction = async (id, action) => {
    try {
      if (action === 'approve') await approveResource(id);
      if (action === 'reject') await rejectResource(id);
      loadPending();
    } catch (err) {
      alert('Error verifying resource. Must be admin role.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-[#800000] mb-6">Verification Dashboard (Admin)</h2>
      
      <div className="grid gap-4">
        {pending.length === 0 ? (
          <p className="text-gray-500 italic">No resources pending verification.</p>
        ) : (
          pending.map(res => (
            <div key={res.id} className="p-4 border rounded shadow-sm bg-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{res.title}</h3>
                <p className="text-sm text-gray-600 mb-1">Subject: {res.subject}</p>
                <p className="text-gray-800 text-sm mb-1">{res.description}</p>
                <a 
                  href={`http://localhost:5000/${res.filePath}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-600 hover:underline text-xs"
                >
                  View File
                </a>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleAction(res.id, 'approve')}
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 font-bold"
                >
                  Approve
                </button>
                <button 
                  onClick={() => handleAction(res.id, 'reject')}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 font-bold"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VerificationDashboard;
