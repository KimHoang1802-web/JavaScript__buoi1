// BÀI TẬP: TÌM KẾT QUẢ CHO CÁC PHÉP TÍNH
/*
Câu 1: Tìm đáp án cho biến a và b
let a = 10;
let b = 20;
b = a++ * 2 - b-- + --a;
Đáp án: b = 10 * 2 - 20 + 10 = 10
*/

/*
// Câu 2: Tìm đáp án cho biến a, b,c và d
let a = 5;
let b = 10;
let c = 15;
let d = 20;
c = a++ + b-- - --c + ++d;
// c = 5 + 10 - 14 + 21 = 22
a = b + 10 - c-- + d++;
// a = 9 + 10 - 22 + 21 = 18
let tong = a++ + b-- - --c + ++d
// tong = 18 + 10 - 21 + 23 = 30
*/
/*
// Câu 3: Tìm đáp án cho các biến a, b và c
let a = 5;
let b = 6;
a = b++ + 3;
// a = 6 + 3 = 9
b = --b + ++a;
// b = 6 + 10 = 16
c = 2 * a + ++b;
// c = 2 * 10 + 17 = 37
b = 2 * ++c - a++
// b = 2 * 38 - 10 = 66
*/
// Câu 4: Tìm đáp án cho biến a, b và c
let a = 3;
let b = 1;
a -= b;
// a = a - b = 3 -1 = 2
b = --b + --a;
// 0 + 1 =1

/* 
    Bài tập tính điểm trung bình:
    1. Viết chương trình nhập vào 5 số thực bằng promt 
    2. Tính giá trị trung bình của 5 số này và xuất ra màn hình
*/

/*
    input: Xác định đầu vào: 5 số thực
    xử lý: GiatriTB = (so1 + so2 + so3 + so4 + so5) / 5
    ouput: Giá trị trung bình của 5 số 
*/
// let so1 = prompt("Nhập số thực thứ nhất: ");
// console.log("Số thứ nhất: ", parseFloat(so1));
// let so2 = prompt("Nhập số thực thứ hai: ");
// console.log("Số thứ hai: ", parseFloat(so2));
// let so3 = prompt("Nhập số thực thứ ba: ");
// console.log("Số thứ ba: ", parseFloat(so3));
// let so4 = prompt("Nhập số thực thứ tư: ");
// console.log("Số thứ tư: ", parseFloat(so4));
// let so5 = prompt("Nhập số thực thứ năm: ");
// console.log("Số thứ năm: ", parseFloat(so5));

// let GiaTriTB = (+so1 + +so2 + +so3 + +so4 + +so5) / 5;

// console.log("Giá trị trung bình của 5 số thực: ", GiaTriTB);

/*
    Bài tập quy đổi tiền tệ
    1. Viết chương trình nhập vào giá trị USD hiện nay đang có và số lượng USD cần quy đổi bằng promt
    2. Tính tổng số tiền Việt nhận được sau khi người dùng quy đổi
    Gợi ý: Tổng số tiền nhận được sẽ được tính bằng công thức giá USD * số lượng
 */

/*
    input: đầu vào là nhập giá USD hiện nay, số lượng USD cần quy đổi
    xử lý: TongSoTienViet = giaUSD * soLuongUSD
    output: tổng giá trị tiền Việt nhận được  
 */

// let giaUSD = prompt("Nhập giá USD của tiền Việt hiện nay: ");
// console.log("Giá trị tiền Việt hiện nay: ", giaUSD);
// let soLuongUSD = prompt("Nhập số lượng USD cần đổi sang tiền Việt: ");
// console.log("Số lượng USD cần đổi sang tiền Việt: ", soLuongUSD);
// let TongSoTienViet = giaUSD * soLuongUSD;
// console.log("Tổng số tiền nhận được là: ", TongSoTienViet);

/*
    Bài tập tính chu vi và diện tích hình chữ nhật
    1. Viết chương trình nhập vào chiều dài và chiều rộng của hình chữ nhật bằng promt
    2. Tính toán chu vi và diện tích hình chữ nhật từ các giá trị người dùng cun cấp
 */

/*
    input: xác định đầu vào: chiều dài hình chữ nhật, chiều rộng hình chữ nhật
    xử lý: 
        +) chuViHCN = (chieuDai + chieuRong)*2
        +) dienTichHCN = (chieuDai * chieuRong)
    output: xác định đầu ra: chu vi và diện tích của hình chữ nhật
 */
// Chiều dài và chiều rộng hình chữ nhật có thể là số thực

let chieuDai = prompt("Nhập vào chiều dài của hình chữ nhật: ");
console.log("Chiều dài hình chữ nhật: ", parseFloat(chieuDai));
let chieuRong = prompt("Nhập vào chiều rộng của hình chữ nhật: ");
console.log("Chiều rộng hình chữ nhật: ", parseFloat(chieuRong));
let chuViHCN = (+chieuDai + +chieuRong) * 2;
let dienTichHCN = chieuDai * chieuRong;

console.log("Chu vi hình chữ nhật là: ", chuViHCN);
console.log("Diện tích hình chữ nhật: ", dienTichHCN);
