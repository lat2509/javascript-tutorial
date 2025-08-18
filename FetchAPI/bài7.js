async function getProductSafe(id) {
  try{
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok){
        throw new Error(error);
    }
    const data = await res.json();
    console.log (data);
  }catch{
    console.log("khong tim thay mat hang");
  }
}

getProductSafe(7);
