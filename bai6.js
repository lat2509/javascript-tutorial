// Bài 6 (2 điểm). Cho mảng users như sau:
// users = [
//   {
//     name : “Bùi Công Sơn”,
//     age : 30,
//     isStatus : true
//   },
//   {
//     name : “Nguyễn Thu Hằng”,
//     age : 27,
//     isStatus : false
//   },
//   {
//     name : “Phạm Văn Dũng”,
//     age : 20,
//     isStatus : false
//   }
// ]
// Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true

function takeUser(users){
    return a = users.filter(item =>(item.age>25 && item.isStatus==true));
}

users = [
  {
    name : "Bùi Công Sơn",
    age : 30,
    isStatus : true
  },
  {
    name : "Nguyễn Thu Hằng",
    age : 27,
    isStatus : false
  },
  {
    name : "Phạm Văn Dũng",
    age : 20,
    isStatus : false
  }
]

users2 = [
  {
    name : "Bùi Công Sơn",
    age : 30,
    isStatus : true
  },
  {
    name : "Nguyễn Thu Hằng",
    age : 27,
    isStatus : false
  },
  {
    name : "Phạm Văn Dũng",
    age : 26,
    isStatus : true
  }
]


console.log(takeUser(users)); //{name: 'Bùi Công Sơn', age: 30, isStatus: true}
console.log(takeUser(users2)); // {name: 'Bùi Công Sơn', age: 30, isStatus: true},{name: 'Phạm Văn Dũng', age: 26, isStatus: true}
