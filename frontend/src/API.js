const API_URL = 'http://localhost:8000/api';

const myheaders = {
    "Origin": 'http://localhost:3000/',
}


export async function getProducts() {
    const response = await fetch(API_URL, {headers: myheaders});
    const body = await response.json();    
    return body;
}

export async function getSingleProduct(id) {
    const response = await fetch(`${API_URL}/${id}`);
    const body = await response.json();
    console.log("BODY", body);
    
    return body;
}