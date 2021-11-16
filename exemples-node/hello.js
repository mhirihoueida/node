var dt=new Date ();
var international=new Intl.DateTimeFormat("fr-FR",{
    hour12: false,
    hour: "2-digit",
    minute:"2-digit",
    second:"2-digit"
} );
console.log("bonjour!");
console.log("il est exactement " +international.format(dt));