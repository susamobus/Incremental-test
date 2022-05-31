var sus = 0
var amogus = 0
var amoguscost = 100;
window.setInterval(function() {
    sus = ExpantaNum.floor(ExpantaNum.add(sus,ExpantaNum.mul(1,ExpantaNum.add(amogus,1))))
},60);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
    amoguscost = ExpantaNum.mul(amogus,5)
    document.getElementById("amoguscost").innerHTML = amoguscost
    Save()
},50);
function Amogus() { 
    if (ExpantaNum.gte(sus,amoguscost) == true) {
    amogus = ExpantaNum.add(amogus,1)
    sus = ExpantaNum.sub(sus,amoguscost)
    }
;}
function Display(id) {
    for (i = 0 ; i < document.getElementsByClassName("Display").length ; i++) {
        document.getElementsByClassName("Display").style.display="none"
    }
    document.getElementById(id).style.display = "inline-block";
}
function Save() {
    var save = {
        Sus: sus,
        Amogus: amogus
    }
    localStorage.setItem("save",JSON.stringify(save));
}
function Load() {
    var savegame = JSON.parse(localStorage.getItem("save"))};
function Restart() {
    sus = 0
    amogus = 0
    amoguscost = 100
}
