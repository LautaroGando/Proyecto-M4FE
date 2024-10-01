// Types
import { IUserRegister } from "@/app/register/types";

// Libraries
import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (userData: IUserRegister) => {

    try {

        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const user = await response.json();

        if (user.message) {

            return (

                Swal.fire({
                    title: "¡Error al registrar el usuario!",
                    text: `¡${user.message}!`,
                    icon: "error"
                })

            );

        };

        Swal.fire({
            title: "¡Usuario registrado con éxito!",
            text: `¡Inicia sesión para ingresar a la página!`,
            icon: "success"
        });

        return user;

    } catch (error) {

        console.log(error);

    };

};