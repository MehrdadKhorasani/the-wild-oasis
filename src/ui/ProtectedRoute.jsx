function ProtectedRoute({ children }) {
  //1. Load the authenticated user

  //2. white loading, show a spinner

  //3. if there is no authenticated user, redirect to the /login

  //4 if there is a user, render the app
  return children;
}

export default ProtectedRoute;
