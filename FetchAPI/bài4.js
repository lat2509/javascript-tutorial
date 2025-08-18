async function getProductsByCategory(category) {
    const data = await fetch (`https://fakestoreapi.com/products/category/${category}`);
    const res = await data.json();
    let list = res.map(item =>[item.title,item.price]);
    console.log(list);
}

getProductsByCategory("electronics");