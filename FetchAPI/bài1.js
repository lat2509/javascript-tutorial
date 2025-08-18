fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => data.map(product =>  product.title))
  .then(item => console.log(item))
  .catch(error => console.error('Error:', error));