import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f0f2f5',
        padding: '2rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '3rem 4rem',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>
          Welcome to Task Manager
        </h2>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          Please log in to start managing your tasks.
        </p>
        <button
          onClick={() => loginWithRedirect()}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            width: '100%',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
