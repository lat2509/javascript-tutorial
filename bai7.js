// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

function timeAppear(arr){
    let results=[];
 
    for(let str of arr){
        if(!results.includes(str)){
            results.push(str);
        }
    }
    let count;
    let a=[];
    for (let i of results){
        count=0;
        for(let str of arr){
            if(i ===str){
                count++;
            }
        }
        a.push(i+": "+ count);
    }
    return a;
}

let arr = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", "Halen"];

let arr2=[0,20,20,0,20,0];


console.log(timeAppear(arr));
console.log(timeAppear(arr2));
