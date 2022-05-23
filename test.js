var sus = 0
var amogus = 0
window.setInterval(function() {
    sus = sus + 1 * amogus
}, 500);
window.setInterval(function() {
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
},50)
function Amogus() {  
    amogus = amogus + 1
}