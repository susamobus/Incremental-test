var sus = 0
var amogus = 0;
window.setInterval(function() {
    sus = sus + 0.1 * amogus
}, 35);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
    Save()
},50);
function Amogus() {  
    amogus = amogus + 1
};
function Save() {
    var save = {
        Sus: sus,
        Amogus: amogus
    }
    localStorage.setItem("save",JSON.stringify(save));
}
function Load() {
    var load = JSON.parse(localStorage.getItem("save"))
}