var result = document.getElementById("result");
var intro = document.getElementById("intro");
var opt = document.querySelectorAll(".option");
var selected;

opt.forEach(function (el) {
    el.onclick = function () {
        selected = this.innerHTML;
    }
});

function submit() {
    result.style.display = "flex";
    intro.style.display = "none";
    document.getElementById("selected").innerHTML = `You selcted ${selected || "0"} out of 5`;
}