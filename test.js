var sus = 100
var amogus = 0;
window.setInterval(function() {
    sus = Math.floor(sus + (0.5 * amogus))
}, 190);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
    Save()
},50);
function Amogus() {  
    amogus = amogus+floor((((sus-1)*5)+100)*sus
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