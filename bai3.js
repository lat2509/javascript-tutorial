//Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó khi gọi function đó
function takeRandom(arr){
    let str;
    return str=arr.splice(Math.floor(Math.random()*arr.length),1);
}


let arr=['a','b','c','aa','bb','bb','dd','ff0','rr','ee'];

console.log(takeRandom(arr));



