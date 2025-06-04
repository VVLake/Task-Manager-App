import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import { CreateTask } from './pages/CreateTask';
import EditTask from './pages/EditTask';
import { TaskProvider } from './context/TaskContext';
import NotFound from './pages/NotFound';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isLoading, isAuthenticated, error } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return (
      <div style={{ padding: '2rem', backgroundColor: '#ffe6e6', color: '#b30000' }}>
        <h2>Authentication Error</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <TaskProvider>
      <Router>
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<CreateTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        ) : (
          <LoginPage />
        )}
      </Router>
    </TaskProvider>
  );
};

export default App;
