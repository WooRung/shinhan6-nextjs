import authContext from "@/contexts/auth/authContext";
import { useContext } from "react";

export default function useAuth() {
  const context = useContext(authContext);
  if (!context) {
    return {
      login: undefined,
      user: null,
    };
  }
  return context;
}
