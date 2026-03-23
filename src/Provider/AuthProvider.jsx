import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isLoggedIn = !!user;

  const login = (userData) => setUser(userData ?? { name: 'User', email: 'user@example.com' });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
