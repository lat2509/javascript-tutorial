async function addProduct(id,data) {
    const res = await fetch (`https://fakestoreapi.com/products/${id}`,{
        method: "PUT",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(data)
    });
}

const data = {
  "title": "Updated Product",
  "price": 99.99
};

addProduct(7,data)