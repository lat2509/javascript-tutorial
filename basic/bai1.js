//Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số
function findNumber(arr){
    arr.sort((a,b)=>a-b);
    return arr[arr.length-2];
}

let arr=[4,3,2,4,2,10,22,30];

console.log(findNumber(arr));