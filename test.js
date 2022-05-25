var sus = 105
var amogus = 0;
window.setInterval(function() {
    sus = Math.floor(sus + (1 * amogus))
}, 90);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
    var amoguscost = 100 + amogus * 5
    document.getElementById("amogusCost").innerHTML = amoguscost
    Save()
},50);
function Amogus() { 
    if (sus >= amoguscost) {
    amogus = amogus + 1
    sus = sus - amoguscost
    }
;}
function Save() {
    var save = {
        Sus: sus,
        Amogus: amogus
    }
    localStorage.setItem("save",JSON.stringify(save));
}
function Load() {
    var savegame = JSON.parse(localStorage.getItem("save"))}
