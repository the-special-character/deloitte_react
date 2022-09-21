import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useReducer,
} from 'react';
import authReducer, { authInitialState } from '../reducers/authReducer';

type UserType = {
  email: string;
  name: string;
  id: string;
};

type AuthContextType = {
  user?: UserType;
  accessToken?: string;
  isAuthenticated: boolean;
  login: () => void;
  register: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  accessToken: undefined,
  isAuthenticated: false,
  login: () => {},
  register: () => {},
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const login = useCallback(() => {
    console.log('login function');
  }, []);

  const register = useCallback(() => {
    console.log('login function');
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      login,
      register,
    }),
    [state],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
