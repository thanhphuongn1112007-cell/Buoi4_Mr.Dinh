function TinhDiem() {
    let diemToan = parseFloat(document.getElementById("toan").value);
    let diemVan = parseFloat(document.getElementById("van").value);
    let diemTB = (diemToan + diemVan) / 2;
    document.getElementById("diemTB").value = diemTB;
    return diemTB;
}
document.getElementById("tinhDiemBtn").addEventListener("click", TinhDiem);
function XepLoai(diemTB) {
    if (diemTB >= 8) {
        return "Giỏi";}
    else if (diemTB >= 6.5) {
        return "Khá";}
    else if (diemTB >= 5) {
        return "Trung bình";}
    else {
        return "Yếu";}  
    }

document.getElementById("diemTB").style.color = "red";
document.getElementById("diemTB").style.fontSize = "40px";