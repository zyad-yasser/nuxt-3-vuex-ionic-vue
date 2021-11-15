export interface AuthState {
  isAuthenticated: boolean;
  user?: any;
}

export type Logout = () => void;