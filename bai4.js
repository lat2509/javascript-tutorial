//Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
function checked(arr,b){
    let c=[];
    for (let str of arr){
        for (let i of b){
            if(str ===i){
                c.push(i);
            }
        }
    }
    return c;
}

let arr=[1,3,5,7,9];
let b=[1,2,3,4,5,6,7,9];

console.log(checked(arr,b));