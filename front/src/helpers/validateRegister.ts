// Types
import { IUserRegister } from "@/app/register/types";

const regex = {
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    address: /^[a-zA-Z\s.]+ \d+$/,
    phone: /^(11|15)\d{8}$/,
};

interface IError {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string;
};

export const validateRegister = (input: IUserRegister) => {

    const errors: IError = {};

    if (!input.name.trim().includes(" ")) {

        errors.name = "Nombre inválido";

    };

    if (!regex.email.test(input.email)) {

        errors.email = "Correo electrónico inválido.";

    };

    if (!regex.password.test(input.password)) {

        errors.password = "Contraseña inválida.";

    };

    if (!regex.address.test(input.address)) {

        errors.address = "Dirección inválida.";

    };

    if (!regex.phone.test(input.phone)) {

        errors.phone = "Teléfono inválido.";
        
    };

    return errors;

};