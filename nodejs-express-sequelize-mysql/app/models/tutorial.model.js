module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN

    }
  });

  return Tutorial;
};

/*Ce modèle Sequelize représente la table des tutoriels dans la base de données MySQL. Ces colonnes seront générées automatiquement : id , title , description , published , createdAt , updatedAt .

Après avoir initialisé Sequelize, nous n'avons pas besoin d'écrire des fonctions CRUD, Sequelize les prend toutes en charge :

créer un nouveau tutoriel : create(object)
trouver un tutoriel par identifiant : findByPk(id)
obtenir tous les didacticiels : findAll()
mettre à jour un tutoriel par identifiant : update(data, where: { id: id })
supprimer un tutoriel : destroy(where: { id: id })
supprimer tous les didacticiels : destroy(where: {})
retrouvez tous les Tutoriels par titre : findAll({ where: { title: ... } })
Ces fonctions seront utilisées dans notre contrôleur.*/
