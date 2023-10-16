const selectAuth = (state: {
  auth: {
    user: { username: string };
    isAuthenticated: boolean;
    rememberUser: boolean;
  };
}) => state.auth;

export { selectAuth };
