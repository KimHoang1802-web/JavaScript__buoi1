// console.log("hello");

// console.warn("this is message warning");

// console.error("Đây là console error")

// // Biến: là dùng để lưu trữ và truy xuất giá trị mình mong muốn, biến có thể đem đi sử dụng nhiều nơi
// // Kiểu 1: 
// // Khai báo tên biến
// //cập nhật/ gán giá trị cho biến
// // let tenBien;
// // tenBien = giaTri;

// let user1;
// user1 = "abc";
// console.log("user1: ", user1);

// console.log()
// /*
//     Kiểu 2: 
//     vừa khai báo biến, vừa gán giá trị cho biến
//     let tenBien = giaTri;
// */
// let user2 = "Nguyễn Văn A";
// console.log("user2: ", user2);

// // const(constant): hằng số không được gán lại giá trị,
// // sử dụng khi giá trị không bị thay đổi
// // cons tenBien = giaTri;
// const PI = 3.14;
// console.log("PI", PI);
// // PI = 2;
// const HANG_SO = 2;

// // quy tắt đặt tên biến -camelCase
// let userName;
// let luongCoBan;

// // 
// //     Kiểu dữ liệu:
// //     1. Number: 1,2,3,4,5,6 (dùng cho cả số nguyên lẫn số thực --> dùng để tính toán, mới khai báo kiểu number);    
//         let birthday = 1995;
//         console.log("birthday: ", birthday);
// //     2. String: kiểu chuỗi, ký tự thường dùng đặt tên, email, số điện thoại,...
//         let firstName = "Thy";
//         console.log("firstName: ", firstName);
// //     3. Boolean: true/false thường kết hợp với toán tử so sánh
//         isApproval = true;
//         console.log("isApproval: ", isApproval)
// //     4. undefined: khi một biến được khai báo nhưng chưa gán
// //     giá trị thì giá trị của nó sẽ là underfined
//         let lastName;
//         console.log("lastName: ", lastName);
// //     5. Null: biểu thị 1 giá trị không tồn tại
//         let shoppingCart = null;
//         console.log("shoppingCart: ", shoppingCart);
//         /******************* Các loại toán tử ********************** */
// // 1. Toán tử toán học
// let number1 = 30;
// let number2 = 20;
// let number3 = "10";

// let sum = number1 + number2;
// console.log("sum: ", sum);

// let minus = number2 - number1;
// console.log("minus: ", minus);

// // phép nhân: *
// let product = number1 * number2;
// console.log("product: ", product);

// // phép chia: /
// let quotient = number1 / number2;
// console.log("quotient: ", quotient);

// // phép chia lấy dư: %
// let mod = number1 % number2;
// console.log("mod: ", mod);

// // cộng 1 number với 1 string: chỉ xảy ra với phép cộng
// // typeof: dùng để kiểm tra kiểu dữ liệu của 1 biến

// console.log("Kiểu dữ liệu của number3: ", typeof number3);

// // cộng 1 number với 1 string: chỉ xảy ra với phép cộng
// let result = number1 + number3;
// console.log("result: ", result);

// let result2 = number1 / number3;
// console.log("result2: ", result2);
// //  để đưa kiểu dữ liệu string về number thì dùng hàm parseInt
// // Cách convert dữ liệu từ string về number: parseInt(), variable * 1, +variable
// // let number3Convert = parseInt(number3)
// // let number3Convert = number3 + 1;
// // Ví dụ như với number3 => parseInt(number3)
// let result3 = number1 + parseInt(number3);
// console.log("result3: ", result3);

// let number3Convert = parseInt(number3);
// console.log("Kiểu dữ liệu của number3Convert: ", typeof number3Convert);
// // chuỗi + chuỗi
// let string1 = "Hello";
// let string2 = "BC77";
// let string3 = "Cybersoft";

// let totalString = string1 + string2 + string3;
// console.log("totalString: ", totalString);
// // => Không thể tự tạo khoảng trắng
// // thì có cách thứ 2
// let totalString1 = string1 + " " + string2 + " " + string3
// console.log("totalString1: ", totalString1);
// // cách 3
// let totalString2 = "Hello "+"World"
// console.log("totalString2: ", totalString2);

// // toán tử ++ / --: tăng 1 hoặc giảm 1;
// // let number4 = 1;
// // let number5 = 3;

// // number4++;
// // console.log("number4++: ", number4++);
// // number5--;
// // console.log("number5--: ", number5--);
// let number4 = 10;
// console.log("number4++: ", number4++);
// console.log("number4 sau khi chạy ++: ", number4);

// console.log("++number: ", ++number4);

// let numberA = 1;
// let numberB = 3;
// numberA++;
// console.log("numberA++: ", numberA);
// // --numberB;
// // console.log("--numberB: ", numberB);
// numberB--;
// console.log("numberB--: ", numberB)
// // let resultAB = numberA++ + --numberB;
// // // 1 + 2 = 3
// // console.log("resultAB: ", resultAB, numberA, numberB);

// // let resultAB2 = numberA++ + numberB--;
// // // 1 + 3 = 4
// // console.log("resultAB2: ", resultAB2, numberA, numberB);

// //2. toán tử gán
// // a = a + b => a += b;
// // a = a - b => a -= b;
// // a = a % b => a %= b;

// let number6 = 10;
// // number = number6 + 10;
// number6 += 10;
// console.log("number6: ", number6); 

// let a, b, c;
// a = 10;
// a += a;
// console.log("a: ", a); 
// // a = 20
// b = ++a + 5;
// // b = 21 + 5 = 26
// c = a++ + 5;
// // 21 + 5 = 26
// console.log("a: ", a);
// // a = 22

// a = 0;
// console.log("b: ", b);
// console.log("c: ", c);
// // prompt
// // let name = prompt("Nhập tên của bạn: ");
// // alert("Tên bạn đã nhập: ", name);

// // Khi nhận đề bài: input: (dữ liệu đầu vào) => các bước xử lý (công thức tính toán) => output(kết quả trả ra)
// // Bài 1: Tính lương nhân viên
// // Bước 1: xác định input: số ngày làm, lương cơ bản
// // Bước 2: xử lý: lương nhân viên = số ngày làm * lương cơ bản
// // Bước 3; xác định output: tên nhân viên và lương nhân viên

// let tenNV = prompt("Nhập tên nhân viên:");
// // console.log("Tên nhân viên: ", tenNV);
// let soNgayLam = prompt("Nhập số ngày làm: ");
// // console.log("Số ngày làm: ", parseInt(soNgayLam));
// let luongCB = prompt("Nhập lương cơ bản");
// // console.log("Lương cơ bản: ", parseInt(luongCB));
// let luong = +soNgayLam * +luongCB;
// console.log("Tên nhân viên: ", tenNV, "lương: ", luong);

