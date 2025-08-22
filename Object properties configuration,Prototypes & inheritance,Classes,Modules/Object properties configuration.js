let product ={
    name: "sách",
    price: 3000,

    get priceWithtax(){
        return this._price*1.1;
    },

    set priceWithtax(value){
        this._price= value/1.1;
    }
}

Object.defineProperty(product,"name",{
    writable: true,
    enumerable:true,
    configurable:true,
});

Object.defineProperty(product,"price",{
    writable:false,
    enumerable: true,
    configurable:false
});

const descriptors = Object.getOwnPropertyDescriptors(product);

console.log(descriptors.price);

product.priceWithtax = 5500;


console.log(product.price);
console.log(product.priceWithtax);


