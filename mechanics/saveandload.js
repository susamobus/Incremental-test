var save = {}
var saveddata = {}
var saveandload = {

Save : function() {
    save = {
     mainlayers : { 
        sus: sus,
        amogus: amogus,
        crewmate: crewmate,
        impostor: impostor,
        lifetimesus: lifetimesus,
        },
     tokensfeature : {
        tokens: tokenvars.tokens,
        tokenupgrades : tokenvars.upgrades
        },
      unlocked : {
        unlocks: unlocks
      }
    };
    localStorage.setItem("save", JSON.stringify(save));
},
Load : function() {
    saveddata = JSON.parse(localStorage.getItem("save"));
    if (typeof saveddata.mainlayers.sus !== "undefined") sus = saveddata.mainlayers.sus;
    if (typeof saveddata.mainlayers.amogus !== "undefined") amogus = saveddata.mainlayers.amogus;
    if (typeof saveddata.mainlayers.crewmate !== "undefined") crewmate = saveddata.mainlayers.crewmate;
    if (typeof saveddata.mainlayers.impostor !== "undefined") impostor = saveddata.mainlayers.impostor;
    if (typeof saveddata.mainlayers.lifetimesus !== "undefined") lifetimesus = saveddata.mainlayers.lifetimesus;
    if (typeof saveddata.unlocked.unlocks !== "undefined") unlocks = saveddata.unlocked.unlocks;
    if (typeof saveddata.tokensfeature.tokens !== "undefined") tokenvars.tokens = saveddata.tokensfeature.tokens;
    if (typeof saveddata.tokensfeature.tokenupgrades !== "undefined") tokenvars.tokensupgrades = saveddata.tokensfeature.tokenupgrades;
}}