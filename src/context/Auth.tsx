import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
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
  loading: boolean;
}
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {

  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true)

  const { setItem, removeItem, getItem } = useAsyncStorage("@auth:user");

  useEffect(()=>{
    LoadingAuth()
  },[])

  const LoadingAuth = async () => {
    const auth = await getItem()
    if(auth){
      setAuthData(JSON.parse(auth) as AuthData);
    }
    setLoading(false);
  }
  const login = async (email: string, password: string):Promise<AuthData> => {
    try {
      const auth = await authService.login(email, password);
      setAuthData(auth)
      await setItem(JSON.stringify(auth));
      return auth;
    }catch(error){
      Alert.alert('tente novamente')
      return Promise.reject(error)
    }
  }
  const signOut = async (): Promise<void> => {
    setAuthData(undefined)
    await removeItem()
    return;
  }

  return (
    <AuthContext.Provider value={{authData, loading, login, signOut}}>
      {children && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;

}