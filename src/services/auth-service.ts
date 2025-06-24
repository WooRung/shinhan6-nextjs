import type { Post } from "@/types/api/post";

export async function registerAction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await fetch("http://localhost:3001/api/users/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export async function loginAction({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<unknown> {
  const res = await fetch("http://localhost:3001/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  return await res.json();
}

export async function checkSession() {
  const res = await fetch("http://localhost:3001/api/users/me", {
    credentials: "include",
  });

  return await res.json();
}
