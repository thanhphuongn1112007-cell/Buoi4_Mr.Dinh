function sum() {
    let sum = 0;
    let i = 1;

    while (i <= 5) {
        sum += i;
        i++;
    }

     document.getElementById("ketqua").innerText = sum;
}

