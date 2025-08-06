// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:
// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

function showTime(arr,a){
    let [hours,minutes,secds]=arr.split(":");
    if(hours<0 || hours>24 ||secds>60||secds<0||minutes>59||minutes<0){
        return "sai định dạng";
    }else{
        const newHours=0;
        let total = hours* 3600 + minutes*60 + secds*1+a; 
        hours = Math.floor(total /3600);
        minutes= Math.floor((total-3600*hours)/60);
        secds= (total-3600*hours-60*minutes);
        if(hours>=24){
            hours=newHours;
        }

        if (hours<10) hours= "0"+hours;
        if (minutes<10) minutes= "0"+minutes;
        if (secds<10) secds= "0"+secds;
    }
    let results=[hours,minutes,secds];
    return results.join(":");
}

let arr ="23:59:59";
let a= 2;

console.log(showTime(arr,a));
console.log(showTime("25:00:00", 10));
console.log(showTime("-01:00:11"));
console.log(showTime("12:30:45", 3600)); // "13:30:45"
console.log(showTime("00:00:00", 86400)); // "00:00:00"
console.log(showTime("12:30:45", -45)) // "12:30:00"