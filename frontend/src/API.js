const API_URL = 'http://localhost:8000/api';

export async function getProducts() {
     try {
        const response = await fetch(API_URL);
        return response.json();
     } catch (e) {
         console.error(e);
     }
}

export async function getSingleProduct(id) {
    try{
        const response = await fetch(`${API_URL}/${id}`);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}