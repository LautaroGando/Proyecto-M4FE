// Types
import { IUserLogin } from "@/app/login/types";

const regex = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

interface IError {
    email?: string;
    password?: string;
};

export const validateLogin = (input: IUserLogin) => {

    const errors: IError = {};

    if (!regex.email.test(input.email)) {

        errors.email = "Correo electrónico inválido.";

    };

    if (!regex.password.test(input.password)) {

        errors.password = "Contraseña inválida.";

    };

    return errors;

};