async function getProductById(id) {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await product.json();
    console.log([data.title, data.price]);
}


getProductById(5);