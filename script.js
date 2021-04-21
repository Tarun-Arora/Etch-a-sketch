var a = document.querySelector(".main");
function rel() {
    var a1 = prompt();
    console.log(2);
    my(a1);
}
my(16);
function my(n = 16) {
    a.innerHTML="";
    for (var i = 0; i < n; i++) {
        var b = `<div class="${i}" id="b1" style="display:flex;">`;
        var c = "";
        for (var j = 0; j < n; j++) {
            var a1 = i * 16 + j;
            c += `<div id="${a1}" class="bn"></div>`;
        }
        a.innerHTML += b + c + "</div>"
    }
    var bn = document.querySelectorAll(".bn");
    bn.forEach(bn => {
        bn.addEventListener('mouseover', function () {
            // bn.currentTime=0;
            // console.log("hi");
            bn.style.cssText = `background-color:${randColor()};`
        })
    });
}
function randColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
