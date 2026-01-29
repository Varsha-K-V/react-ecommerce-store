// const API_URL = "http://localhost:5000";

export async function fetchProducts() {
    try {
        const response = await fetch('/products.json');

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    } catch (error) {
        console.error(error);
        return []; // return empty array if fetch fails
    }
}

export async function fetchProductById(id) {
    try {
        const response = await fetch('/products.json');

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();
        

        // Find product with matching ID
        const product = products.find(p => p.id === Number(id));
        

        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }

        return product;
    } catch (error) {
        console.error(error);
        return null; // return null if product not found or error occurs
    }
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
