import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoginForm from './modules/auth/components/LoginForm';
import ResourceList from './modules/resources/components/ResourceList';
import ResourceUpload from './modules/resources/components/ResourceUpload';
import VerificationDashboard from './modules/verification/components/VerificationDashboard';
import SearchPage from './modules/search/components/SearchPage';
import UserManager from './modules/admin/components/UserManager';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <div className="text-center mt-10">
                <h2 className="text-3xl font-bold text-[#800000] mb-4">Welcome to NITJ Resource Exchange</h2>
                <p className="text-gray-600">A centralized platform for sharing academic resources and notes.</p>
              </div>
            } />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/resources" element={<ResourceList />} />
            <Route path="/upload" element={<ResourceUpload />} />
            <Route path="/verification" element={<VerificationDashboard />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/admin" element={<UserManager />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
