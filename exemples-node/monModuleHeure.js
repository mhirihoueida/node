function formatHour(dt) 
{var international=new Intl.DateTimeFormat("fr-FR",{
    hour12: false,
    hour: "2-digit",
    minute:"2-digit",
    second:"2-digit"
} );

return international.format(dt);

}
/* Appel qui indique les fonctions à rendre publiques dans le module */

exports.formatHour = formatHour;
