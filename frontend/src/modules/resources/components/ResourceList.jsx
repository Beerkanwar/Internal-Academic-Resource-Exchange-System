import React, { useEffect, useState } from 'react';
import { fetchResources } from '../services/resources.api';

const ResourceList = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetchResources().then(setResources).catch(console.error);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#800000]">Approved Resources</h2>
        <a href="/upload" className="bg-[#800000] text-white px-4 py-2 rounded hover:bg-[#600000] transition">Upload New</a>
      </div>
      
      <div className="grid gap-4">
        {resources.length === 0 ? (
          <p className="text-gray-500 italic">No resources found.</p>
        ) : (
          resources.map(res => (
            <div key={res.id} className="p-4 border rounded shadow-sm bg-white hover:shadow-md transition">
              <h3 className="text-lg font-bold">{res.title}</h3>
              <p className="text-sm text-gray-600 mb-2">Subject: {res.subject}</p>
              <p className="text-gray-800 mb-4">{res.description}</p>
              <a 
                href={`http://localhost:5000/${res.filePath}`} 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 hover:underline text-sm font-semibold"
              >
                Download File
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResourceList;
