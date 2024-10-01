const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getOrdersFetch = async (token: string) => {

    try {

        const response = await fetch(`${API_URL}/users/orders`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            }
        });
    
        const data = await response.json();

        return data;
        
    } catch (error) {

        console.log(error);
        
    };

};