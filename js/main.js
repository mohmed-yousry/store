// show and hidd over
let over = document.querySelector(".over");
let links = document.querySelectorAll("header nav .link ul li");
let links2 = [];
for (let i = 0; i < links.length; i++) {
  links2.push(links[i].cloneNode(true));
}
document.querySelector(".menu").onclick = function () {
  over.classList.toggle("active");
};

document.querySelector(".close").onclick = function () {
  over.classList.remove("active");
};

links2.forEach((e) => {
  over.appendChild(e);
});

// start section
let imgTop = document.querySelector(".prodect .container .pro .left .top img");
let allImg = Array.from(
  document.querySelectorAll(".prodect .container .pro .left .botoom .part")
);

let nextAndProv = Array.from(
  document.querySelectorAll(".prodect .container .pro .left .top i")
);

allImg.forEach((e) => {
  e.addEventListener("click", (cl) => {
    for (let i = 0; i < allImg.length; i++) {
      allImg[i].classList.remove("active");
    }
    cl.target.parentElement.classList.add("active");
    imgTop.src = cl.target.src;
  });
});

// btn
let inc = 0;
nextAndProv[0].addEventListener("click", (x) => {
  imgTop.src = allImg[inc].children[0].src;
  inc++;
  if (inc >= 4) {
    inc = 0;
  }
});

nextAndProv[1].addEventListener("click", (f) => {
  imgTop.src = allImg[inc].children[0].src;
  inc--;
  if (inc <= -1) {
    inc = 3;
  }
});

//input and salary
let startSalary = document.querySelector(".start-salary");
let inp = document.querySelector("input");
let value = 0;
let totelPrice = document.querySelector(".totel-price");

let plusAndMin = Array.from(document.querySelectorAll(".incr"));
plusAndMin[0].onclick = function () {
  inp.value--;
  if (inp.value <= 0) {
    inp.value = 0;
  }
  value = inp.value;
  totelPrice.innerHTML = value * startSalary.innerHTML + " " + "$";
};
plusAndMin[1].onclick = function () {
  inp.value++;
  value = inp.value;
  totelPrice.innerHTML = value * startSalary.innerHTML + " " + "$";
};

//start cart
//child
let cart = document.querySelector(".cart");
let body = document.createElement("div");
body.className = "card-body";
document.querySelector("header").appendChild(body);
let child = document.createElement("div");
child.className = "child";
let imeg = document.createElement("img");
let title = document.createElement("h5");
title.innerHTML = "Full  limit edition";
let newP = document.createElement("span");
let newP2 = document.createElement("span");
let newP3 = document.createElement("span");
newP.innerHTML = startSalary.innerHTML + "$" + " " + "x" + " ";

let salery = document.createElement("div");
salery.classList.add("sel");
child.appendChild(imeg);
salery.appendChild(newP);
salery.appendChild(newP2);
salery.appendChild(newP3);
let del = document.createElement("span");
del.className = `dele`;
del.innerHTML = `X`;
del.title = `delete the prodect`;

// end child
cart.onclick = function () {
  body.classList.toggle("active");
  if (body.children.length <= 0) {
    body.innerHTML = "card Not found";
  }
};

let addCart = document.querySelector(
  ".prodect .container .pro .right .buy button"
);

addCart.onclick = function () {
  if (value <= 0) {
  } else {
    body.innerHTML = ``;
    body.appendChild(salery);
    child.appendChild(title);
    imeg.src = imgTop.src;
    newP2.innerHTML = value;
    newP3.innerHTML = totelPrice.innerHTML;
    child.appendChild(del);
    body.appendChild(child);
  }
};

del.onclick = function () {
  body.innerHTML = `card Not found`;
};


