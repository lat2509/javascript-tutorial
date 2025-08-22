# sự khác nhau giữa named export và default export

- named export có thể xuất được nhiều hàm trong 1 file khi import thì phải viết đúng tên và đặt trong dấu {...}
- 1 file thì chỉ có thể export default 1 lần khi imprort thì để tên gì cũng được và không cần đặt trong dấu ngoặc {}

# tại sao dynamic import trả về một object
- khi import (let {add,mul, default:trusub} = await import(`./${modulePath}.js`);) sẽ trả về một Promise khi resolve() thì sẽ trả về một object
