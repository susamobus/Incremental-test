var sus = 0
var suffixedsus = 0 //(suffix converted version of sus stat, only for display purposes)
var scientificsus = 0 //same as above but scientific
var susgainpertick = 0
var lifetimesus = 0
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
var isloading = 1  //1 = true 0 = false
var unlocks = []
var notation = 1; 

window.onload = function() {
   Load()
   Fixstaterror()
   doneloading()
};
window.setInterval(function() {
    if (isloading == 0){
      susgainpertick = ExpantaNum.floor(ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(impostor,2),1),ExpantaNum.mul(ExpantaNum.add(ExpantaNum.div(crewmate,2),1),ExpantaNum.add(amogus,1))))
      sus = ExpantaNum.floor(ExpantaNum.add(sus,susgainpertick))
      lifetimesus = ExpantaNum.floor(ExpantaNum.add(lifetimesus,susgainpertick))
}},50);
window.setInterval(function() {
   Save()
},250);
window.setInterval(function() {
    doneloading()
    Fixstaterror()
 },59);
window.setInterval(function() {
    suffixedsus = toSuffixes(sus)
    if (notation == 1) {
    document.getElementById("displayedsus").innerHTML = suffixedsus
    document.getElementById("notation").innerHTML = "suffixes"
    document.getElementById("notation").style.color = "royalblue"
} else if (notation == 2) {
    document.getElementById("displayedsus").innerHTML = scientificsus
    document.getElementById("notation").innerHTML = "scientific"
    document.getElementById("notation").style.color = "lightsteelblue"
}
    document.getElementById("amogus").innerHTML = amogus
    document.getElementById("crewmate").innerHTML = crewmate
    document.getElementById("impostor").innerHTML = impostor
    amoguscost = ExpantaNum.mul(ExpantaNum.add(amogus,1),5)
    amogusconvert = ExpantaNum.floor(ExpantaNum.mul(ExpantaNum.div(sus,amoguscost),ExpantaNum.add(crewmate,1)))
    crewmatecost = ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.add(crewmate,10),2),10)),10)
    crewmateconvert = ExpantaNum.floor(ExpantaNum.mul(ExpantaNum.div(amogus,crewmatecost),ExpantaNum.add(impostor,1)))
    impostorcost = ExpantaNum.mul(ExpantaNum.round(ExpantaNum.div(ExpantaNum.pow(ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(2.5,impostor),12.5),ExpantaNum.add(1,ExpantaNum.div(impostor,10))),2),10)),10)
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
        impostor: impostor,
        lifetimesus: lifetimesus
    };
    localStorage.setItem("save", JSON.stringify(save));
}
function Load() {
    var saveddata = JSON.parse(localStorage.getItem("save"));
    if (typeof saveddata.sus !== "undefined") sus = saveddata.sus;
    if (typeof saveddata.amogus !== "undefined") amogus = saveddata.amogus;
    if (typeof saveddata.crewmate !== "undefined") crewmate = saveddata.crewmate;
    if (typeof saveddata.impostor !== "undefined") impostor = saveddata.impostor;
    if (typeof saveddata.lifetimesus !== "undefined") lifetimesus = saveddata.lifetimesus;
}
function Restart() {
    sus = 0
    amogus = 0
    crewmate = 0
    impostor = 0
    liftimesus = 0
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
    amogus = ExpantaNum.add(amogus,0.000001)
    crewmate = ExpantaNum.add(crewmate,0.000001)
    impostor = ExpantaNum.add(impostor,0.000001)
    amogus = ExpantaNum.floor(amogus)
    crewmate = ExpantaNum.floor(crewmate)
    impostor = ExpantaNum.floor(impostor)
}
function doneloading() {
    isloading = ExpantaNum.mul(isloading,0)
}
function Notation(num) {
   notation = num
   // notations IDs: 1 = suffixes, 2 = scientific
}