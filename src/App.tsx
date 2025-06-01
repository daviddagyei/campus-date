import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { EmailVerificationBanner } from '@/components/EmailVerificationBanner';
import LandingPage from '@/pages/LandingPage';
import Dashboard from '@/pages/Dashboard';
import Profile from '@/pages/Profile';
import Matches from '@/pages/Matches';

function App() {
  const { user, isEmailVerified } = useAuth();

  return (
    <>
      <Navbar />
      {user && !isEmailVerified && <EmailVerificationBanner />}
      <Routes>
        <Route path="/" element={!user ? <LandingPage /> : <Navigate to="/dashboard" />} />
        <Route 
          path="/dashboard" 
          element={
            user ? (
              isEmailVerified ? <Dashboard /> : <Navigate to="/profile" />
            ) : (
              <Navigate to="/" />
            )
          } 
        />
        <Route 
          path="/profile" 
          element={user ? <Profile /> : <Navigate to="/" />} 
        />
        <Route 
          path="/matches" 
          element={
            user ? (
              isEmailVerified ? <Matches /> : <Navigate to="/profile" />
            ) : (
              <Navigate to="/" />
            )
          } 
        />
      </Routes>
    </>
  );
}

export default App;