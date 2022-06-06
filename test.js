var sus = 0
var amogus = 0
var amoguscost = 0
var amogusconvert = 0
var mode = 0
var crewmatecost = 0
var crewmate = 0
var crewmateconvert = 0
var impostor = 0
var impostorcost = 0
var impostorconvert = 0
var teststat = 0
var tokens = 0
var isloading = 1; //1 = true 0 = false

window.onload = function() {
   Load()
   Fixstaterror()
   doneloading()
};
window.setInterval(function() {
    if (isloading == 0){
      sus = ExpantaNum.floor(ExpantaNum.add(sus,ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(impostor,2),1),ExpantaNum.mul(ExpantaNum.add(ExpantaNum.div(crewmate,2),1),ExpantaNum.add(amogus,1)))))
}},60);
window.setInterval(function() {
   Save()
},250);
window.setInterval(function() {
    doneloading()
 },420.69);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
    document.getElementById("crewmate").innerHTML = crewmate
    document.getElementById("impostor").innerHTML = impostor
    amoguscost = ExpantaNum.mul(ExpantaNum.add(amogus,1),5)
    amogusconvert = ExpantaNum.floor(ExpantaNum.mul(ExpantaNum.div(sus,amoguscost),ExpantaNum.add(crewmate,1)))
    crewmatecost = ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.add(crewmate,10),2),10)),10)
    crewmateconvert = ExpantaNum.floor(ExpantaNum.mul(ExpantaNum.div(amogus,crewmatecost),ExpantaNum.add(impostor,1)))
    impostorcost = ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(2,impostor),12),ExpantaNum.add(1,ExpantaNum.div(impostor,10))),2),10)),10)
    impostorconvert = ExpantaNum.floor(ExpantaNum.div(crewmate,impostorcost))
    if (mode == 0) {
    document.getElementById("amoguscost").innerHTML = amoguscost
    document.getElementById("amogusamount").innerHTML = "1"
    document.getElementById("crewmatecost").innerHTML = crewmatecost
    document.getElementById("crewmateamount").innerHTML = "1"
    document.getElementById("impostorcost").innerHTML = impostorcost
    document.getElementById("impostoramount").innerHTML = "1"
    document.getElementById("mode").innerHTML = "Buy singles"
    document.getElementById("mode").style.color = "greenyellow"
    }
    if (mode == 1) {
        document.getElementById("amoguscost").innerHTML = "All"
        document.getElementById("amogusamount").innerHTML = amogusconvert
        document.getElementById("crewmatecost").innerHTML = "1 crewmate when converted"
        document.getElementById("crewmateamount").innerHTML = crewmateconvert
        document.getElementById("impostorcost").innerHTML = "1 impostor when converted"
        document.getElementById("impostoramount").innerHTML = impostorconvert
        document.getElementById("mode").innerHTML = "Buy max"
        document.getElementById("mode").style.color = "lightskyblue"
    }
    Save()
},50);
function Amogus() { 
    if (mode == 0) {
        if (ExpantaNum.gte(sus,amoguscost) == true) {
        amogus = ExpantaNum.add(amogus,ExpantaNum.add(1, crewmate))
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
        sus: sus,
        amogus: amogus,
        crewmate: crewmate,
        impostor: impostor
    };
    localStorage.setItem("save", JSON.stringify(save));
}
function Load() {
    var saveddata = JSON.parse(localStorage.getItem("save"));
    if (typeof saveddata.sus !== "undefined") sus = saveddata.sus;
    if (typeof saveddata.amogus !== "undefined") amogus = saveddata.amogus;
    if (typeof saveddata.crewmate !== "undefined") crewmate = saveddata.crewmate;
    if (typeof saveddata.impostor !== "undefined") impostor = saveddata.impostor;
}
function Restart() {
    sus = 0
    amogus = 0
    crewmate = 0
    impostor = 0
    var saveddata = {};
    localStorage.setItem("saveddata", JSON.stringify(saveddata))
    location.reload();

}
function Crewmate() {
    if (mode == 0) {
    if (ExpantaNum.gte(amogus,crewmatecost) == true) {
        crewmate = ExpantaNum.add(crewmate,ExpantaNum.add(1,impostor))
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
function Test() {
    teststat = teststat + 1
}
function Impostor() {
    if (mode == 0) {
        if (ExpantaNum.gte(crewmate,impostorcost) == true) {
            impostor = ExpantaNum.add(impostor,1)
            amogus = 0
            sus = 0
            crewmate = 0
        }}
        if (mode == 1) {
        if (ExpantaNum.gt(impostorconvert,0) == true) {
            impostor = ExpantaNum.add(impostor,impostorconvert)
            amogus = 0
            sus = 0
            crewmate = 0
        }}
}
function Fixstaterror() {
    sus = ExpantaNum.add(sus,0)
    amogus = ExpantaNum.add(amogus,0.001)
    crewmate = ExpantaNum.add(crewmate,0.001)
    impostor = ExpantaNum.add(impostor,0.001)
    setTimeout(100)
    amogus = ExpantaNum.floor(amogus)
    crewmate = ExpantaNum.floor(crewmate)
    impostor = ExpantaNum.floor(impostor)
}
function doneloading() {
    isloading = ExpantaNum.mul(isloading,0)
}