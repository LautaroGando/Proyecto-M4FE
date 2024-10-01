// Types
import { IUserLogin } from "@/app/login/types";

// Libraries
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async (userData: IUserLogin) => {

    try {

        const response = await fetch(`${API_URL}/users/login`, {
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
                    title: "¡Error al iniciar sesión!",
                    text: `¡${user.message}!`,
                    icon: "error"
                })

            );

        };

        Cookies.set("userToken", user.token);
        localStorage.setItem("userData", JSON.stringify(user.user));

        Swal.fire({
            title: `¡Bienvenido ${userData.email}!`,
            icon: "success"
        });

        return user;

    } catch (error) {

        console.log(error);

    };

};