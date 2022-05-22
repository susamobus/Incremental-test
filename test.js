var amogus = 0
var sus = 0
function amogus() {
    amogus = amogus+1
};
setInterval(function(){
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
    sus = sus+1*amogus
},50)
