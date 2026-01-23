const API_URL = "http://localhost:5000";

export async function fetchProducts(){
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok){
        throw new Error("Failed to fetch products");
    }

    return response.json();
}

export async function fetchProductById(id){
    const response = await fetch(`http://localhost:5000/products/${id}`);

    if(!response.ok){
        throw new Error("Failed to fetch product");
    }

    return response.json();
}

// export async function fetchProductsByCategory(category) {
//   const response = await fetch(
//     `/api/products?category=${encodeURIComponent(category)}`
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch related products");
//   }

//   return response.json();
// }
