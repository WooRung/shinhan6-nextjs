import { createContext } from "react";

type AuthContext = {
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<boolean>;
  user: { _id: string; email: string } | null;
};

const authContext = createContext<AuthContext | null>(null);

export default authContext;
