import React, { useState } from 'react';
import { uploadResource } from '../services/resources.api';

const ResourceUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file.");

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('subject', subject);
    formData.append('file', file);

    try {
      await uploadResource(formData);
      alert('Resource uploaded successfully! Setup for verification.');
      setTitle(''); setDescription(''); setSubject(''); setFile(null);
    } catch (err) {
      alert('Error uploading. Make sure you are logged in (token active).');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-center text-[#800000] mb-6">Upload Notes/Resource</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1">Title</label>
          <input className="w-full border p-2 rounded" required value={title} onChange={e=>setTitle(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Subject</label>
          <input className="w-full border p-2 rounded" required value={subject} onChange={e=>setSubject(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Description</label>
          <textarea className="w-full border p-2 rounded" rows="3" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">File</label>
          <input type="file" className="w-full border p-2 rounded" required onChange={e=>setFile(e.target.files[0])} />
        </div>
        <button type="submit" className="w-full bg-[#800000] text-white font-bold py-2 rounded">
          Submit for Verification
        </button>
      </form>
    </div>
  );
};

export default ResourceUpload;
