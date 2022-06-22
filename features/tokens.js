var tokenfuncs = {


    tokensupgrading : function(upgradeid,type) { // Type ID | 1 = Upgrades | 2 = Buyables | 3 = Upgrade Unlockers
        if (type == 1) {
          tokensupgrades.boughtonce[tokensupgrades.boughtonce.length] = upgradeid
        }
        if (type == 2) {
          tokensupgrades.boughtmore[upgradeid] = ExpantaNum.add(tokensupgrades.boughtmore[upgradeid],1)
        }
        if (type == 3) {
          tokensupgrades.upgradeunlocks[tokensupgrades.upgradeunlocks.length] = upgradeid
        }
      },
     addtokens : function(buttonorder) {
        let cost = ExpantaNum.mul(ExpantaNum.pow(5,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenspage,1),3))),5e15)
      if (ExpantaNum.gte(sus,cost) == true) {
        tokens = ExpantaNum.add(tokens,ExpantaNum.pow(3,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenspage,1),3))))
        sus = ExpantaNum.sub(sus,cost)
      }
    },
    getTokensCost : function(buttonorder) {
        return ExpantaNum.mul(ExpantaNum.pow(5,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenspage,1),3))),5e15)
    },
    getTokensGain : function(buttonorder) {
        return ExpantaNum.mul(ExpantaNum.pow(3,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenspage,1),3))),1)
    },
    addpage : function(increment) {
      if ((increment == -1 && tokenvars.tokenspage == 1) !== true) {
       tokenvars.tokenspage = ExpantaNum.add(tokenvars.tokenspage,increment)
    }},
    tokenbuttonsrefresh : function() {
      if ((ExpantaNum.gte(lifetimesus,5e14) == true) && (unlocks.includes("tokens") !== true) == true) {
        document.getElementById("unlocktokens").style.display = "inline"
      } else {
        document.getElementById("unlocktokens").style.display = "none"
      }
      if (unlocks.includes("tokens") == true) {
        document.getElementById("tokensbutton1").style.display = "inline"
        document.getElementById("tokensbutton2").style.display = "inline"
        document.getElementById("tokensbutton3").style.display = "inline"
        document.getElementById("tokenstext1").style.display = "inline"
        document.getElementById("tokenstext2").style.display = "inline"
        if (upgradepanelactive == "tokens") {
        document.getElementById("tokensupgradespanel").style.display = "inline"
        } else {
        document.getElementById("tokensupgradespanel").style.display = "none"    
        }
        if (tokenvars.tokensupgrades.boughtonce.includes("tokenpages")) {
          document.getElementsByClassName("TokenPageButtons")[1].style.display = "inline"
          document.getElementsByClassName("TokenPageButtons")[2].style.display = "inline"
          document.getElementsByClassName("TokensUpgradeButtons")[1].style.display = "none"
        }
        if (tokenvars.tokensupgrades.upgradeunlocks.includes("unlock1")) {
          document.getElementsByClassName("TokensBuyableButtons")[2].style.display = "inline"
          document.getElementsByClassName("TokensUnlockButtons")[1].style.display = "none"
        }
    }},
    tokenboostsrefresh : function() {
      tokentotalboosts.sus = ExpantaNum.pow(1.6,tokenvars.tokensupgrades.boughtmore.moresus1)
      tokentotalboosts.crewmate = ExpantaNum.pow(1.2,tokenvars.tokensupgrades.boughtmore.morecrewmate1)
    }
}

var tokenvars = {
  tokens = 0,
  tokenspage = 1,
  tokensupgrades = {boughtonce : [], boughtmore : {moresus1 : 0, morecrewmate1 : 0}, upgradeunlocks : []}
}
var tokentotalboosts = {
  tokens = 1,
  sus = 1,
  amogus = 1,
  crewmate = 1,
  impostor = 1
}

window.setInterval(function() {
  tokenfuncs.tokenbuttonsrefresh()
},50);
