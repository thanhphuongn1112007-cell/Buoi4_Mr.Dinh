function addProduct() {
    var name = document.getElementById("productName").value;
    var quantity = parseFloat(document.getElementById("productQuantity").value);
    var price = parseFloat(document.getElementById("productPrice").value);
    var discount = parseFloat(document.getElementById("productDiscount").value);

    if (name == "" || isNaN(quantity) || isNaN(price) || isNaN(discount)) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    var subtotal = quantity * price * (1 - discount / 100);

    var table = document.getElementById("productTable");
    var id = table.rows.length; // dòng tiêu đề tính là 1 nên ID tiếp theo = số dòng

    var row = table.insertRow();
    row.insertCell().innerHTML = id;
    row.insertCell().innerHTML = name;
    row.insertCell().innerHTML = quantity;
    row.insertCell().innerHTML = "$" + price;
    row.insertCell().innerHTML = discount;
    row.insertCell().innerHTML = "$" + subtotal;
}

function clearForm() {
    document.getElementById("productName").value = "";
    document.getElementById("productQuantity").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productDiscount").value = "";
}