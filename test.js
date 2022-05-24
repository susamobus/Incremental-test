var sus = 105
var amogus = 0;
window.setInterval(function() {
    sus = Math.floor(sus + (1 * amogus))
}, 90);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
    Save()
},50);
function Amogus() { 
    if (sus > 100 + (amogus * 5)) {
    amogus = amogus + 1, sus = sus - (100 + (amogus * 5))
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
