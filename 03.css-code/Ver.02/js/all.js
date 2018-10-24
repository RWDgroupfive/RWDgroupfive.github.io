let mobilestyletoggle = document.querySelector("#nav-btn")
mobilestyletoggle.onclick = function () {
    document.querySelector(".mobile-navbar").classList.toggle("active")
}

var backtop = document.querySelector(".Back_To_Top")
backtop.onclick = function () {
    /*轉動高度固定為0*/
    document.documentElement.scrollTop = 0
}
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var tab1_content = document.querySelector("#tab1_content");
var tab2_content = document.querySelector("#tab2_content");

btn1.onclick = function () {
    tab1_content.classList.add("show");
    tab2_content.classList.remove("show");
}
btn2.onclick = function () {
    tab1_content.classList.remove("show");
    tab2_content.classList.add("show");
}

var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn5 = document.querySelector("#btn5");
var tab3_content = document.querySelector("#tab3_content");
var tab4_content = document.querySelector("#tab4_content");
var tab5_content = document.querySelector("#tab5_content");

btn3.onclick = function () {
    tab3_content.classList.add("show");
    tab4_content.classList.remove("show");
    tab5_content.classList.remove("show");
}

btn4.onclick = function () {
    tab3_content.classList.remove("show");
    tab4_content.classList.add("show");
    tab5_content.classList.remove("show");
}

btn5.onclick = function () {
    tab3_content.classList.remove("show");
    tab4_content.classList.remove("show");
    tab5_content.classList.add("show");
}


function Scroll() {
    var top = document.getElementById("header");
    var ypos = window.pageYOffset;
    if (ypos > 587) {
        top.style.height = "30px";
    } else {
        top.style.height = "70px";
    }
}
window.addEventListener("scroll", Scroll);
