"use client";

import authContext from "@/contexts/auth/authContext";
import { checkSession, loginAction } from "@/services/auth-service";
import { useEffect, useState } from "react";

type User = {
  _id: string;
  email: string;
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const user = await loginAction({ email, password });
    if (user) {
      setUser(user as User);
      return true;
    }
    return false;
  };

  // 새로고침해도 유지 되려면...
  useEffect(() => {
    checkSession().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <authContext.Provider value={{ user, login }}>
      {children}
    </authContext.Provider>
  );
}
