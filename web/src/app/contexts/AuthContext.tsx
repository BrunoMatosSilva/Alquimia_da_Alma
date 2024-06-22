import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../services/httpClient";
import { PageLoader } from "../../view/components/PageLoader";
import { toast } from "sonner";
import { User } from "../entities/User";
import { usersService } from "../services/usersService";

interface AuthContextValue {
  signedIn: boolean;
  user: User | undefined;
  signin(accessToken:string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({children}: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!storedAccessToken;
  });

  const setAccessToken = useCallback((accessToken: string) =>{
    httpClient.defaults.headers.Authorization = `Bearer ${accessToken}`
  }, [])

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken)
    setAccessToken(accessToken)

    setSignedIn(true)
  }, [setAccessToken])

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    remove()

    setSignedIn(false)
  },[setSignedIn])

  const { isError, isFetching, isSuccess, remove, data } = useQuery({
    queryKey: ['loggedUser'],
    queryFn: async () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity
  });

  useEffect(() => {
    if (isError) {
      toast('Sua sessão expirou!')
      signout()
    }
  },[isError, signout])

  return (
    <AuthContext.Provider value={{
      signedIn: isSuccess && signedIn,
      signin,
      signout,
      user: data
      }}>
      <PageLoader isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  )
}