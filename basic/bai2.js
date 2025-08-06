//Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả function trả về là 1 mảng các chuỗi có độ dài lớn nhất
function findLongest(arr){
    let max=0;
    let results;
    for (let str of arr){
        if(str.length> max){
            max = str.length;
        }
    }
    return results= arr.filter(str => str.length === max);
}


let arr=['bb','bb',"cca","baa"];

console.log(findLongest(arr));