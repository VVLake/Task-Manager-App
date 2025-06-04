import { useAuth0 } from '@auth0/auth0-react';

const AuthButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div style={{ marginBottom: '1rem' }}>
      {isAuthenticated ? (
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Logout
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>
          Login
        </button>
      )}
    </div>
  );
};

export default AuthButtons;
