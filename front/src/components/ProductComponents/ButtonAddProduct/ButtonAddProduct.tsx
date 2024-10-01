// Vendors
import React from 'react';

// Hooks
import { useToken } from '@/context/TokenContext/TokenContext';
import { useRouter } from 'next/navigation';

// Types
import { IPropsButtonAddProduct } from './types';
import { IProduct } from '@/app/products/types';

// Libraries
import Swal from 'sweetalert2';

const ButtonAddProduct: React.FC<IPropsButtonAddProduct<IProduct>> = ({ product: { id, image, name, price }, quantity, width, text, disabled }: IPropsButtonAddProduct<IProduct>): React.ReactElement => {

    const { token } = useToken();
    const router = useRouter();

    const handleAddProduct = () => {

        if (!token) {

            return (

                Swal.fire({
                    title: "¡Error al agregar producto!",
                    text: `¡Debes tener una cuenta para poder agregar un producto!`,
                    icon: "error"
                }),

                router.push("/login")

            );

        };

        const userData = localStorage.getItem("userData");

        if (userData) {

            const userId = JSON.parse(userData).id;

            const storedProducts = localStorage.getItem(`productsCart-${userId}`);

            const productsCart = storedProducts ? JSON.parse(storedProducts) : [];

            const productExist = productsCart.findIndex((product: IProduct) => product.id === id);

            if (productExist !== -1) {

                productsCart[productExist].quantity += quantity;

                Swal.fire({
                    title: "¡Producto agregado con éxito!",
                    icon: "success"
                });

                return localStorage.setItem(`productsCart-${userId}`, JSON.stringify(productsCart));

            };

            productsCart.push({ id, image, name, price, quantity });

            localStorage.setItem(`productsCart-${userId}`, JSON.stringify(productsCart));

            Swal.fire({
                title: "¡Producto agregado con éxito!",
                icon: "success"
            });

        };

    };

    return <button onClick={handleAddProduct} className={`btn ${width} bg-[#6ca7ec] hover:bg-[#6ca7ecca] disabled:bg-[#373737]`} disabled={disabled}>{text}</button>

};

export default ButtonAddProduct;