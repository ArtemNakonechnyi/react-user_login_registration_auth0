import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();
  return isAuthenticated && <button onClick={() => logout()}>Sign out</button>;
};

export default LogoutButton;
