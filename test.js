var sus = 0
var amogus = 0
window.setInterval(function() {
    sus = sus + 0.1 * amogus
}, 35);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
},50)
function Amogus() {  
    amogus = amogus + 1
}