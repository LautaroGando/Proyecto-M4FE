export interface IPropsTokenContext {
    token: string | null;
    setToken: (token: string | null) => void;
    handleLogout: () => void;
};