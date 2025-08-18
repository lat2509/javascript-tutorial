Promise.all([
    fetch('https://fakestoreapi.com/products/1'),
    fetch('https://fakestoreapi.com/products/2'),
    fetch('https://fakestoreapi.com/products/3')
]).then(res => Promise.all(res.map(r => r.json())))
  .then(data => console.log(data.map(item => item.title)))
