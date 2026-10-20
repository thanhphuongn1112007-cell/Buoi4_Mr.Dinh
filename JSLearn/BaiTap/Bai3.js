function chuviHCN(a, b) {
    return (a + b) * 2;
}

function dientichHCN(a, b) {
    return a * b;
}

var a = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
var b = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));

console.log("Chu vi hình chữ nhật là: " + chuviHCN(a, b));
console.log("Diện tích hình chữ nhật là: " + dientichHCN(a, b));

alert("Chu vi hình chữ nhật là: " + chuviHCN(a, b));
alert("Diện tích hình chữ nhật là: " + dientichHCN(a, b));