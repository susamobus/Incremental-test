var amogus = 0
var sus = 0
function amogus() {
    var amogus = amogus+1
};
setInterval(function(){
    document.getElementById("sus").innerHTML = sus
    document.getElementById("amogus").innerHTML = amogus
},1)
setInterval(function(){
    var sus = sus+(1*amogus)
},5)
