//file used for notations



 function toSuffixes(num){
  if (ExpantaNum.gte(num,ExpantaNum.pow(10,6)) && ExpantaNum.lt(num,ExpantaNum.pow(10,9)) == true) {
      return [ExpantaNum.div(ExpantaNum.round(ExpantaNum.div(num,1e4)),100),"M"].join("")
  }else if (ExpantaNum.gte(num,ExpantaNum.pow(10,9)) && ExpantaNum.lt(num,ExpantaNum.pow(10,12)) == true) {
    return [ExpantaNum.div(ExpantaNum.round(ExpantaNum.div(num,1e7)),100),"B"].join("")
  }
  else if (ExpantaNum.gte(num,ExpantaNum.pow(10,12)) && ExpantaNum.lt(num,ExpantaNum.pow(10,15)) == true) {
    return [ExpantaNum.div(ExpantaNum.round(ExpantaNum.div(num,1e10)),100),"T"].join("")
  }
  else if (ExpantaNum.gte(num,ExpantaNum.pow(10,15)) && ExpantaNum.lt(num,ExpantaNum.pow(10,18)) == true) {
    return [ExpantaNum.div(ExpantaNum.round(ExpantaNum.div(num,1e13)),100),"Qd"].join("")
  }
  else if (ExpantaNum.gte(num,ExpantaNum.pow(10,18)) && ExpantaNum.lt(num,ExpantaNum.pow(10,21)) == true) {
    return [ExpantaNum.div(ExpantaNum.round(ExpantaNum.div(num,1e16)),100),"Qn"].join("")
  }
  else if (ExpantaNum.gte(num,ExpantaNum.pow(10,21)) && ExpantaNum.lt(num,ExpantaNum.pow(10,24)) == true) {
    return [ExpantaNum.div(ExpantaNum.round(ExpantaNum.div(num,1e19)),100),"Sx"].join("")
  }
  else if (ExpantaNum.gte(num,ExpantaNum.pow(10,24)) && ExpantaNum.lt(num,ExpantaNum.pow(10,27)) == true) {
    return [ExpantaNum.div(ExpantaNum.round(ExpantaNum.div(num,1e22)),100),"Sp"].join("")
  }
  else if (ExpantaNum.gte(num,ExpantaNum.pow(10,27)) && ExpantaNum.lt(num,ExpantaNum.pow(10,30)) == true) {
    return [ExpantaNum.div(ExpantaNum.round(ExpantaNum.div(num,1e25)),100),"Oc"].join("")
  }
  else if (ExpantaNum.gte(num,ExpantaNum.pow(10,30)) && ExpantaNum.lt(num,ExpantaNum.pow(10,33)) == true) {
    return [ExpantaNum.div(ExpantaNum.round(ExpantaNum.div(num,1e28)),100),"No"].join("")
  }
  else if (ExpantaNum.gte(num,ExpantaNum.pow(10,33)) && ExpantaNum.lt(num,ExpantaNum.pow(10,36)) == true) {
    return [ExpantaNum.div(ExpantaNum.round(ExpantaNum.div(num,1e31)),100),"De"].join("")
  }
  else if (ExpantaNum.gte(num,ExpantaNum.pow(10,36))) {
   return num
  }
  else if (ExpantaNum.lt(num,ExpantaNum.pow(10,6))) {
    return num
   }
}
// roundpower = round to nearest roundpower decimal, 3 round power will round to nearest 0.001 or (1/1e3)
function toRoundedScientific(num,roundpower) {
  if (ExpantaNum.gte(num,1e3) && ExpantaNum.lt(num,ExpantaNum.pow(10,1000)) == true) {
   return ExpantaNum(ExpantaNum.mul(ExpantaNum.pow(10,ExpantaNum.sub(ExpantaNum.round(ExpantaNum.log10(num)),roundpower)),ExpantaNum.round(ExpantaNum.div(num,ExpantaNum.div(num,ExpantaNum.pow(10,ExpantaNum.round(ExpantaNum.minus(ExpantaNum.log10(num),roundpower)))))))).toString
  } else {
    return num
  }
  }
