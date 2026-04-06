import React, { useState } from 'react';
import { performSearch } from '../services/search.api';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      const data = await performSearch(query);
      setResults(data);
      setSearched(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-[#800000] text-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Search Academic Resources</h2>
        <form onSubmit={handleSearch} className="flex gap-2 justify-center">
          <input 
            type="text" 
            placeholder="Search by title, subject, or keywords..." 
            className="w-2/3 px-4 py-3 rounded text-gray-900 border-none focus:ring-2 focus:ring-yellow-400 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-yellow-500 hover:bg-yellow-400 text-[#800000] font-bold px-6 py-3 rounded transition-colors"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      {searched && (
        <div>
          <h3 className="text-xl font-bold mb-4 border-b pb-2">Results ({results.length})</h3>
          <div className="grid gap-4">
            {results.length === 0 ? (
              <p className="text-gray-500 italic">No matching resources found.</p>
            ) : (
              results.map(res => (
                <div key={res.id} className="p-4 border border-gray-200 rounded shadow-sm bg-white hover:shadow-md transition">
                  <h4 className="text-lg font-bold text-[#800000]">{res.title}</h4>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Subject: {res.subject}</p>
                  <p className="text-gray-700 mb-3 text-sm">{res.description}</p>
                  <a 
                    href={`http://localhost:5000/${res.filePath}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block border border-gray-300 rounded px-3 py-1 text-xs font-semibold hover:bg-gray-50 transition"
                  >
                    Download File
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
