import Swal from "sweetalert2";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const postOrdersFetch = async (token: string, userId: number, productsCartId: number) => {

    try {

        const response = await fetch(`${API_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },
            body: JSON.stringify({
                userId: userId,
                products: productsCartId,
            }),
        });

        const data = await response.json();

        if (data.message) {

            return Swal.fire({
                title: "¡Error al realizar la compra!",
                text: `${data.message}`,
                icon: "error",
            });

        };
        
        Swal.fire({
            title: `¡Compra realizada con éxito!`,
            icon: "success",
        });

        return data;

    } catch (error) {
      
        console.log(error);

    };

};