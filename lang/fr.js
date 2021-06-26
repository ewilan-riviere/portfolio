export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Bienvenue',
    pages: {
      home: {
        title: "Portfolio d'Ewilan Rivière",
        abstract: 'Développeuse web & mobile chez Useweb, France',
      },
      projects: {
        title: 'Projets',
        abstract: 'La liste de mes projets personnels et profesionnels',
      },
    },

    projects: 'Projets',
    training: 'Formation',
    bachelor: 'bac',
    cat: 'Chat',
    years: 'années',
    experience: 'Expérience',

    testimonial:
      "Ce qui importe ce n'est pas tant le chemin parcouru que celui à parcourir. Et donc, ce serait une manière de dire qu'une formation ne détermine pas une personne ? Oui. Sinon nous serions tous les mêmes.",

    technologiesLogo: 'Des technologies solides et connues',
    projectsList: {
      ontitle: 'Réalisations',
      title: 'Mes projets',
      subtitle:
        "Qu'ils soient personnels, réalisés seule ou en équipe, ou bien professionnels, voici une sélection de mes projets.",
      cta: 'Découvrir davantage de projets',
    },
    statistics: {
      title: 'Des chiffres ?',
      subtitle:
        "Parce que les statistiques, on peut leur faire dire ce qu'on veut et qu'elles n'ont parfois aucun sens, autant les mettre ici.",
    },
    contact: {
      title: 'Me contacter',
      subtitle:
        "Si vous avez une question ou des propositions de projets, n'hésitez pas !",
    },
    fields: {
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi en cours',
      characters: 'caractères',
      currently: 'Actuellement',
      more: 'En savoir plus',
    },
  })
}
