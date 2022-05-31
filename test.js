var sus = 0
var amogus = 0
var amoguscost = 0
var amogusconvert = 0
var amogusmode = 0
var crewmatecost = 0
var crewmate = 0
var crewmateconvert = 0;
window.setInterval(function() {
    sus = ExpantaNum.floor(ExpantaNum.add(sus,ExpantaNum.mul(1,ExpantaNum.add(amogus,1))))
},60);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
    document.getElementById("crewmate").innerHTML = crewmate
    crewmatecost = ExpantaNum.mul(crewmate,ExpantaNum.add(200, ExpantaNum.mul(5,crewmate)))
    if (amogusmode == 0) {
    amoguscost = ExpantaNum.mul(ExpantaNum.add(amogus,1),5)
    document.getElementById("amoguscost").innerHTML = amoguscost
    document.getElementById("convertamount").innerHTML = "1"
    document.getElementById("mode").innerHTML = "Convert 1 Amogus each"
    document.getElementById("mode").style.color = "greenyellow"
    }
    if (amogusmode == 1) {
        amogusconvert = ExpantaNum.floor(ExpantaNum.div(sus,ExpantaNum.mul(ExpantaNum.add(amogus,1),5)))
        document.getElementById("amoguscost").innerHTML = "All"
        document.getElementById("convertamount").innerHTML = amogusconvert
        document.getElementById("mode").innerHTML = "Convert all at once"
        document.getElementById("mode").style.color = "lightskyblue"
    }
    Save()
},50);
function Amogus() { 
    if (amogusmode == 0) {
        if (ExpantaNum.gte(sus,amoguscost) == true) {
        amogus = ExpantaNum.add(amogus,1)
        sus = ExpantaNum.sub(sus,amoguscost)
    }}
    if (amogusmode == 1) {
        if (amogusconvert > 0) {
        amogus = ExpantaNum.add(amogus,amogusconvert)
        sus = 0
    }}
;}
function Amogusmode(number) {
    amogusmode = number
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
   if (ExpantaNum.gte(amogus,crewmatecost) == true) {
       crewmate = ExpantaNum.add(crewmate,1)
       amogus = 0
   }
}