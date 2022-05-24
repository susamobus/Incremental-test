var sus = 105
var amogus = 0;
window.setInterval(function() {
    sus = Math.floor(sus + (0.5 * amogus))
}, 90);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
    Save()
},50);
function Amogus() {  
    amogus = amogus + (sus / (math.floor(((sus*5)+100)*sus))
);}
function Save() {
    var save = {
        Sus: sus,
        Amogus: amogus
    }
    localStorage.setItem("save",JSON.stringify(save));
}
function Load() {
    var savegame = JSON.parse(localStorage.getItem("save"))}