const monModule = require ("./monModuleHeure");
var dt=new Date();
console.log("bonjour!");
console.log("il est exactement " +monModule.formatHour(dt));
