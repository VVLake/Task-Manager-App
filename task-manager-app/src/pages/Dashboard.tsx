import { useTaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import AuthButtons from '../components/AuthButtons';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { tasks, deleteTask } = useTaskContext();
  const { isAuthenticated, user, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <p>Loading authentication...</p>;
  }

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '2rem' }}>
        <p>Please login to manage your tasks.</p>
        <AuthButtons />
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Your Task Manager App</div>
        <div>
          <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none' }}>Dashboard</Link>
          <Link to="/create" style={{ marginRight: '1rem', textDecoration: 'none' }}>Create Task</Link>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', padding: 0 }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Welcome message */}
      {user && (
        <p style={{ marginBottom: '3rem' }}>Welcome, {user.name}!</p>
      )}

      <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '1rem' }}>
        Task Dashboard
      </h1>

      {/* Add Task Button */}
      <Link
        to="/create"
        style={{
          display: 'inline-block',
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
        }}
      >
        + Add Task
      </Link>

      {/* Task List */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.length === 0 && <p>No tasks available. Create one!</p>}
        {tasks.map(task => (
          <li
            key={task.id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '6px',
              boxShadow: '1px 1px 5px rgba(0,0,0,0.1)',
            }}
          >
            <h2 style={{ fontSize: '20px', marginBottom: '0.5rem' }}>{task.title}</h2>
            <p style={{ marginBottom: '0.25rem' }}>{task.description}</p>
            <p style={{ marginBottom: '0.25rem' }}>Due: {task.dueDate}</p>
            <p style={{ marginBottom: '0.75rem' }}>Status: {task.completed ? 'Complete' : 'Incomplete'}</p>
            <Link to={`/edit/${task.id}`} style={{ marginRight: '1rem' }}>
              Edit
            </Link>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this task?')) {
                  deleteTask(task.id);
                }
              }}
              style={{ cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
