const selectAuth = (state: {
  auth: { user: { username: string }; isAuthenticated: boolean };
}) => state.auth;

export { selectAuth };
