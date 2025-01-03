import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>Sign in</button>
    )
  );
};

export default LoginButton;
