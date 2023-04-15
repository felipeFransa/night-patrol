import React, { createContext, useState, useContext } from 'react';
import { authService } from '../../api';
import { Alert } from 'react-native';

export interface AuthData {
  token: string;
  email: string;
  name: string;
}
interface AuthContextData {
  authData?: AuthData;
  login: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {

  const [authData, setAuthData] = useState<AuthData>();

  const login = async (email: string, password: string):Promise<AuthData> => {
    try {
      const auth = await authService.login(email, password);
      setAuthData(auth)
      return auth;
    }catch(error){
      Alert.alert('tente novamente')
      return Promise.reject(error)
    }
  }
  const signOut = async (): Promise<void> => {
    setAuthData(undefined)
    return;
  }

  return (
    <AuthContext.Provider value={{authData, login, signOut}}>
      {children && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;

}