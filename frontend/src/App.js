import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/navigation/navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/activate/Activate';
import Rooms from './pages/Rooms/Rooms';

// Simulated auth state – replace with real logic or context
const isAuthenticated = false;
const user = {
  isActivated: false,
};

// Route guard for guests (unauthenticated users)
const GuestRoute = ({ children }) => {
  if (isAuthenticated) {
    return <Navigate to="/rooms" replace />;
  }
  return children;
};

// Route guard for users who are authenticated but may not be activated
const SemiProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/authenticate" replace />;
  }
  if (isAuthenticated && !user.isActivated) {
    return children;
  }
  return <Navigate to="/rooms" replace />;
};

// Route guard for fully authenticated and activated users
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  if (isAuthenticated && !user.isActivated) {
    return <Navigate to="/activate" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<GuestRoute><Home /></GuestRoute>} />
        <Route path="/authenticate" element={<GuestRoute><Authenticate /></GuestRoute>} />
        <Route path="/activate" element={<SemiProtectedRoute><Activate /></SemiProtectedRoute>} />
        <Route path="/rooms" element={<ProtectedRoute><Rooms /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
