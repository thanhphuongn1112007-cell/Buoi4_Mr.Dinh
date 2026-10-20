var man = [
  {
    id:1,
    name: "The Cosmo (Đen) Quần short khaki",
    code: "TC1025011BA",
    price: "250.000" ,
    image:"https://znews-photo.zadn.vn/w660/Uploaded/ycgmvjvj/2018_04_16/9_2.jpg"
  },
  {
    id:2,
    name: "Quần baggy đen sang trọng QQ ",
    code: "TC1025011BA",
    price: "398.000" ,
    image:"https://www.celeb.vn/wp-content/uploads/2017/10/ao-phong-thoi-trang-nam-4-554x800.jpg"
  },
  {
    id:3,
    name: "The Cosmo (Đen) Quần short khaki",
    code: "TC1025011BA",
    price: "300.000" ,
    image:"https://toplist.vn/images/800px/4men-shop-175469.jpg"
  },
  {
    id:4,
    name: "The Cosmo (Đen) Quần short khaki",
    code: "TC1025011BA",
    price: "300.000" ,
    image:"https://cdn.nhanh.vn/cdn/store/3138/albumCT/7046/dsc_3135.jpg"
  },
];
var woment = [
  {
    id:1,
    name: "Váy Fashion",
    code: "TC1025011BA",
    price: "250.000" ,
    image:"https://luzy.vn/wp-content/uploads/2019/02/lzd9078-3.jpg"
  },
  {
    id:2,
    name: "Áo thun phối váy ngắn ",
    code: "TC1025011BA",
    price: "398.000" ,
    image:"https://gumac.vn/image/thang919/at75-do050920191344211605.jpg?width=220"
  },
  {
    id:3,
    name: "Áo khoác",
    code: "TC1025011BA",
    price: "300.000" ,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6Ytt2NITTynV8NhtufxJmusBY2ehUhQkNLzQ0TsS_JACc9RB"
  },
  {
    id:4,
    name: "Áo thun",
    code: "TC1025011BA",
    price: "300.000" ,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6uZzcUSHH9GEO8zvgMWIbdugSLHInfa3gJdGhGpbhCQ0FWSK9"
  },
];
function listProducts() {
  for (let i=0; i<= man.length-1; i++) {
    var demo= '<div class="col-3">';
    demo +=  '<div class="card" style="width: 18rem; ">';
    demo += '<img src="'+man[i].image+'" class="card-img-top" style="height:400px;">';
    demo += '<div class="card-body">';
    demo +=  '<h5 class="card-title">'+man[i].name+'</h5>';
    demo +=  '<p class="card-text">'+man[i].price+'</p>';
    demo +=  '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
    demo +='</div>';
    demo +='</div>';
    demo +='</div>';
    console.log(demo);
    document.getElementById("men").innerHTML += demo;
  }
  for (let i=0; i<= woment.length-1; i++) {
    var demo= '<div class="col-3">';
    demo +=  '<div class="card" style="width: 18rem; ">';
    demo += '<img src="'+woment[i].image+'" class="card-img-top" style="height:400px;">';
    demo += '<div class="card-body">';
    demo +=  '<h5 class="card-title">'+woment[i].name+'</h5>';
    demo +=  '<p class="card-text">'+woment[i].price+'</p>';
    demo +=  '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
    demo +='</div>';
    demo +='</div>';
    demo +='</div>';
    console.log(demo);
    document.getElementById("woment").innerHTML += demo;
  }
}
function oder() {
  alert("thank you your order ");
}