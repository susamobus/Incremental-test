var tokenfuncs = {


    tokensupgrading : function(upgradeid = "",type = Number,basecost ,scaling) { // Type ID | 1 = Upgrades | 2 = Buyables | 3 = Upgrade Unlockers
        if ((type == 1) && (ExpantaNum.gte(tokenvars.tokens,basecost))) {
          tokenvars.tokensupgrades.boughtonce[tokenvars.tokensupgrades.boughtonce.length] = upgradeid
          tokenvars.tokens = ExpantaNum.sub(tokenvars.tokens,basecost)
        }
        if ((type == 2) && (ExpantaNum.gte(tokenvars.tokens,ExpantaNum.mul(basecost,ExpantaNum.pow(scaling,tokenvars.tokensupgrades.boughtmore[upgradeid])))) == true) {
          tokenvars.tokensupgrades.boughtmore[upgradeid] = ExpantaNum.add(tokenvars.tokensupgrades.boughtmore[upgradeid],1)
          tokenvars.tokens = ExpantaNum.sub(tokenvars.tokens,ExpantaNum.mul(basecost,ExpantaNum.pow(scaling,tokenvars.tokensupgrades.boughtmore[upgradeid])))
        }
        if ((type == 3) && (ExpantaNum.gte(tokenvars.tokens,basecost))) {
          tokenvars.tokensupgrades.upgradeunlocks[tokenvars.tokensupgrades.upgradeunlocks.length] = upgradeid
          tokenvars.tokens = ExpantaNum.sub(tokenvars.tokens,basecost)
        }
      },
     addtokens : function(buttonorder) {
        let cost = ExpantaNum.mul(ExpantaNum.pow(5,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenvars.tokenspage,1),3))),5e15)
      if (ExpantaNum.gte(sus,cost) == true) {
        tokenvars.tokens = ExpantaNum.add(tokenvars.tokens,ExpantaNum.pow(3,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenvars.tokenspage,1),3))))
        sus = ExpantaNum.sub(sus,cost)
      }
    },
    getTokensCost : function(buttonorder) {
        return ExpantaNum.mul(ExpantaNum.pow(5,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenvars.tokenspage,1),3))),5e15)
    },
    getTokensGain : function(buttonorder) {
        return ExpantaNum.mul(ExpantaNum.pow(3,ExpantaNum.add(ExpantaNum.sub(buttonorder,1),ExpantaNum.mul(ExpantaNum.sub(tokenvars.tokenspage,1),3))),1)
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
        document.getElementsByClassName("buyablescosttext")[0].innerHTML = toDisplay(ExpantaNum.mul(100,ExpantaNum.pow(2,tokenvars.tokensupgrades.boughtmore["moresus1"])))
        document.getElementsByClassName("buyablescosttext")[1].innerHTML = toDisplay(ExpantaNum.floor(ExpantaNum.mul(1000,ExpantaNum.pow(2.5,tokenvars.tokensupgrades.boughtmore["morecrewmate1"]))))
        document.getElementsByClassName("ShowTokensUpgradesPanel")[0].style.display = "inline"
      if (upgradepanelactive == "tokens") {
        document.getElementsByClassName("TokenUpgradesPanel")[0].style.display = "inline"
        document.getElementsByClassName("TokensPanelHeader")[0].style.display = "inline"
        document.getElementsByClassName("TokenBuyableButtons")[0].style.display = "inline"
        } else {
        document.getElementsByClassName("TokenUpgradesPanel")[0].style.display = "none" 
        document.getElementsByClassName("TokensPanelHeader")[0].style.display = "inline"
        document.getElementsByClassName("TokenBuyableButtons")[0].style.display = "inline"  
        }
        if (tokenvars.tokensupgrades.boughtonce.includes("tokenpages")) {
          document.getElementsByClassName("TokenPageButtons")[0].style.display = "inline"
          document.getElementsByClassName("TokenPageButtons")[1].style.display = "inline"
          document.getElementsByClassName("TokenUpgradeButtons")[0].style.display = "none"
        } else {
          document.getElementsByClassName("TokenUpgradeButtons")[0].style.display = "inline"
        }
        if (tokenvars.tokensupgrades.upgradeunlocks.includes("unlock1")) {
          document.getElementsByClassName("TokenBuyableButtons")[1].style.display = "inline"
          document.getElementsByClassName("TokenUnlockButtons")[0].style.display = "none"
        } else {
          document.getElementsByClassName("TokenUnlockButtons")[0].style.display = "inline"
        }
    }},
    tokenboostsrefresh : function() {
      tokentotalboosts.sus = ExpantaNum.pow(1.6,tokenvars.tokensupgrades.boughtmore.moresus1)
      tokentotalboosts.crewmate = ExpantaNum.pow(1.2,tokenvars.tokensupgrades.boughtmore.morecrewmate1)
    }
}

var tokenvars = {
  tokens : 0,
  tokenspage : 1,
  tokensupgrades : {boughtonce : [], boughtmore : {moresus1 : 0, morecrewmate1 : 0}, upgradeunlocks : []}
}
var tokentotalboosts = {
  tokens : 1,
  sus : 1,
  amogus : 1,
  crewmate : 1,
  impostor : 1
}

window.setInterval(function() {
  tokenfuncs.tokenbuttonsrefresh()
  tokenfuncs.tokenboostsrefresh()
},50);
