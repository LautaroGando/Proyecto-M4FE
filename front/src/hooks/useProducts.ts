// Hooks
import { useEffect, useState } from "react";

// Types
import { IProduct } from "@/app/products/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useProducts = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await fetch(`${API_URL}/products`, {
                    next: {
                        revalidate: 1200,
                    },
                    cache: "no-cache",
                });
    
                const products = await response.json();
    
                setProducts(products);
                setLoading(false);
                
            } catch (error) {
              
                console.log(error);

            };

        };

        fetchData();

    }, []);

    return {products, loading};

};