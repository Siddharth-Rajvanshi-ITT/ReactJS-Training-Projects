export type user = {
  username: string;
  password: string;
  name: { firstname: string; lastname: string };
  phone: string;
  email: string;
  image: string;
};

export type authType = {
  user: user | null;
  isAuthenticated: boolean;
  rememberUser: boolean;
};
