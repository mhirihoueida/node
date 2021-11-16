export const catchErrors =fn => (req, res,next) =>
fn(req, res, next).catch(next)
/* remarque: c'est super génant que à chq fonction on fait le try catch , 
du coup on a crée cette fn ,ou on globera toutes les autres fonctions.
cette fonction , logiquent on l'insére dans le fichier produitControllers, mais comme on veut pas touché à nos fonctions , 
du coup on peut l'insérer dans notre fichier routes.js */
/* remarque : next pour qu il passe à l'étape d'aprés , pour que on evite qu il reste blouqué*/
