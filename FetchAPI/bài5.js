async function addProduct(product) {
    const res = await fetch ("https://fakestoreapi.com/products",{
        method: "POST",
        headers:{
            "Content-type":"application/json",
        },
        body: JSON.stringify(product)
    })
    
}

const product = {
  "title": "Test Product",
  "price": 29.99,
  "description": "Test description",
  "image": "https://i.pravatar.cc",
  "category": "electronics"
};

addProduct(product);