import { createContext, ReactNode } from "react";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import { User } from "firebase/auth";

export const FirebaseAuthContext = createContext<User | null>(null);

interface FirebaseAuthProviderProps {
  children: ReactNode;
}

export default function FirebaseAuthProvider({
  children,
}: FirebaseAuthProviderProps) {
  const { user } = useFirebaseAuth();
  console.log(user);

  return (
    <FirebaseAuthContext.Provider value={user}>
      {children}
    </FirebaseAuthContext.Provider>
  );
}
