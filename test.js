
var sus = 0
var amogus = 0
var amoguscost = 0
var amogusconvert = 0
var mode = 0
var crewmatecost = 0
var crewmate = 0
var crewmateconvert = 0;
window.setInterval(function() {
    sus = ExpantaNum.floor(ExpantaNum.add(sus,ExpantaNum.mul(ExpantaNum.add(crewmate,1),ExpantaNum.add(amogus,1))))
},60);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
    document.getElementById("crewmate").innerHTML = crewmate
    if (mode == 0) {
    amoguscost = ExpantaNum.mul(ExpantaNum.add(amogus,1),5)
    crewmatecost = ExpantaNum.pow(ExpantaNum.add(crewmate,10),2)
    document.getElementById("amoguscost").innerHTML = amoguscost
    document.getElementById("amogusamount").innerHTML = "1"
    document.getElementById("crewmatecost").innerHTML = crewmatecost
    document.getElementById("crewmateamount").innerHTML = "1 amogus"
    document.getElementById("mode").innerHTML = "Convert 1 for each"
    document.getElementById("mode").style.color = "greenyellow"
    }
    if (mode == 1) {
        amogusconvert = ExpantaNum.floor(ExpantaNum.div(sus,ExpantaNum.mul(ExpantaNum.add(amogus,1),5)))
        crewmateconvert = ExpantaNum.floor(ExpantaNum.root(ExpantaNum.add(crewmate,10)))
        document.getElementById("amoguscost").innerHTML = "All"
        document.getElementById("amogusamount").innerHTML = amogusconvert
        document.getElementById("crewmatecost").innerHTML = "1 crewmate when converted"
        document.getElementById("crewmateamount").innerHTML = crewmateconvert
        document.getElementById("mode").innerHTML = "Convert all at once"
        document.getElementById("mode").style.color = "lightskyblue"
    }
    Save()
},50);
function Amogus() { 
    if (mode == 0) {
        if (ExpantaNum.gte(sus,amoguscost) == true) {
        amogus = ExpantaNum.add(amogus,1)
        sus = ExpantaNum.sub(sus,amoguscost)
    }}
    if (mode == 1) {
        if (ExpantaNum.gt(amogusconvert,0) == true) {
        amogus = ExpantaNum.add(amogus,amogusconvert)
        sus = 0
    }}
;}
function Mode(number) {
    mode = number
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
}
function Crewmate() {
    if (mode == 0) {
    if (ExpantaNum.gte(sus,crewmateconvert) == true) {
        crewmate = ExpantaNum.add(crewmate,1)
        amogus = 0
        sus = 0
    }}
    if (mode == 1) {
    if (ExpantaNum.gt(crewmateconvert,0) == true) {
        crewmate = ExpantaNum.add(crewmate,crewmateconvert)
        amogus = 0
        sus = 0
    }}
}