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
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roles }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <div className="text-center mt-12 bg-white p-12 rounded shadow-sm border border-gray-100 max-w-4xl mx-auto">
                <h1 className="text-5xl font-extrabold text-[#800000] mb-6">Dr B R Ambedkar NIT Jalandhar</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Internal Academic Resource Exchange</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                  A centralized, secure platform for exchanging notes, assignments, and research materials verified by faculty.
                </p>
                <div className="flex gap-4 justify-center">
                  <a href="/resources" className="bg-[#800000] text-white px-6 py-3 rounded-md font-bold hover:bg-[#600000] transition">Browse Resources</a>
                  <a href="/search" className="bg-white text-[#800000] border-2 border-[#800000] px-6 py-3 rounded-md font-bold hover:bg-gray-50 transition">Search Archive</a>
                </div>
              </div>
            } />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/resources" element={<ResourceList />} />
            <Route path="/search" element={<SearchPage />} />
            
            {/* Protected Routes */}
            <Route path="/upload" element={<PrivateRoute><ResourceUpload /></PrivateRoute>} />
            <Route path="/verification" element={<PrivateRoute roles={['admin', 'teacher']}><VerificationDashboard /></PrivateRoute>} />
            <Route path="/admin" element={<PrivateRoute roles={['admin']}><UserManager /></PrivateRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
