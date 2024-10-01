"use client";

// Vendors
import { ReactNode } from "react";

// Contexts
import { createContext } from "react";

// Hooks
import { useContext, useState } from "react";
import { IPropsMenuContext } from "./types";

const MenuContext = createContext<IPropsMenuContext | null>(null);

export const MenuProvider = ({children}: {children: ReactNode}) => {

    const [menu, setMenu] = useState<boolean>(false);

    const handleToggleMenu = () => setMenu(!menu);
    const handleCloseMenu = () => setMenu(false);

    return (
        <MenuContext.Provider value={{menu, handleToggleMenu, handleCloseMenu}}>
            {children}
        </MenuContext.Provider>
    );

};

export const useMenu = () => {

    const context = useContext(MenuContext);

    if (context === null) {

        throw new Error("El contexto debe ser utilizado dentro de un MenuProvider.");

    };

    return context;

};