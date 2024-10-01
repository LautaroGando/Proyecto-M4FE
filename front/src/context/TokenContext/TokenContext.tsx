"use client";

// Vendors
import { ReactNode } from "react";

// Contexts
import { createContext } from "react";

// Hooks
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Types
import { IPropsTokenContext } from "./types";

// Libraries
import Cookies from "js-cookie";

const TokenContext = createContext<IPropsTokenContext | undefined>(undefined);

export const TokenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {

        const storedToken = Cookies.get("userToken");

        if (storedToken) {

            setToken(storedToken);

        };

        setLoading(false);

    }, [token]);

    const handleLogout = () => {

        Cookies.remove("userToken");
        localStorage.removeItem("userData");

        setToken(null);

        router.push("/");

    };

    if (loading) return;

    return (

        <TokenContext.Provider value={{ token, setToken, handleLogout }}>
            {children}
        </TokenContext.Provider>

    );
};

export const useToken = () => {

    const context = useContext(TokenContext);

    if (!context) throw new Error("El contexto debe ser utilizado dentro de un TokenProvider.");

    return context;

};