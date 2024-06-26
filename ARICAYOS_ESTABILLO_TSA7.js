let box = document.getElementById("mainbody");
let a = document.getElementById("body1");
let b = document.getElementById("body2");
let c = document.getElementById("body3");
let gap = document.getElementById("gap");
let box1 = document.getElementById("boxs1");
let box2 = document.getElementById("boxs2");
let box3 = document.getElementById("boxs3");

function reset() {
    box.style.flexDirection = 'row';
    box.style.justifyContent = 'start';
    box.style.alignItems = 'start';
    a.style.flexGrow = 0;
    b.style.flexGrow = 0;
    c.style.flexGrow = 0;
    document.getElementById("mainbody").style.gap = "0px";
    gap.value = "0";
    box1.value = "0";
    box2.value = "0";
    box3.value = "0";

}
function gapChange() {
    document.getElementById("mainbody").style.gap = gap.value + "px";
}

function flexrow() {
    box.style.flexDirection = 'row';
}
function flexcolumn() {
    box.style.flexDirection = 'column';

}
function justifystart() {
    box.style.justifyContent = 'start';
}
function justifycenter() {
    box.style.justifyContent = 'center';
}
function justifyend() {
    box.style.justifyContent = 'end';
}
function justifybetween() {
    box.style.justifyContent = 'space-between';
}
function justifyaround() {
    box.style.justifyContent = 'space-around';
}
function justifyevenly() {
    box.style.justifyContent = 'space-evenly';
}
function alignstart() {
    box.style.alignItems = 'start';
}
function aligncenter() {
    box.style.alignItems = 'center';
}
function alignend() {
    box.style.alignItems = 'end';
}
function flexreset() {
    box1.value = "0";
    box2.value = "0";
    box3.value = "0";
    flexgrow1();
    flexgrow2();
    flexgrow3();
}
function flexgrowall() {
    box1.value++
    box2.value++
    box3.value++
    flexgrow1();
    flexgrow2();
    flexgrow3();
}
function flexgrow1() {
    document.getElementById("body1").style.flexGrow = box1.value;
}
function flexgrow2() {
    document.getElementById("body2").style.flexGrow = box2.value;
}
function flexgrow3() {
    document.getElementById("body3").style.flexGrow = box3.value;
}  
