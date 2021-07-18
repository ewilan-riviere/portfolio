export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Bienvenue',
    pages: {
      home: {
        title: "Portfolio d'Ewilan Rivière",
        abstract: "Conceptrice développeuse d'applications",
      },
      projects: {
        title: 'Projets',
        abstract: 'La liste de mes projets personnels et profesionnels',
      },
    },

    projects: 'Projets',
    training: 'Formation',
    bachelor: 'bac',
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
    occupation: {
      title: 'Activité actuelle',
      text: 'Je travaille actuellement chez Useweb, une agence web créant des sites sur mesure avec des technologies comme NuxtJS, Laravel ou Flutter.',
      date: 'Depuis 2019',
      location: 'Rennes en Bretagne, France',
    },
    features: {
      coding: {
        title: 'Développement',
        text: 'Toujours revenir sur ce qui a été codé pour voir si cela peut être amélioré, commentaires et refactoring permettent de toujours améliorer le code.',
      },
      'front-end': {
        title: 'Front-end & design',
        text: "Le front-end est la base pour maîtriser l'intégration d'une maquette, que ce soit avec un framework CSS ou à la main.",
      },
      deployment: {
        title: 'Déploiements',
        text: 'Déployer des projets sur des serveurs VPS, en HTTPS, HTTP 2 sur NGINX avec des bases de données sont souvent en MySQL.',
      },
      framework: {
        title: 'Frameworks',
        text: 'Sans framework, coder est intéressant mais cela prend du temps pour des choses basiques, maîtriser un framework permet de gagner en temps et en productivité.',
      },
      seo: {
        title: 'SEO',
        text: "Que ce soit la mise en place des métadonnées <head>, l'open graph, les redirections, l'analyse de la fréquentation ou l'éco-conception, le SEO est important dans chaque projet.",
      },
      'operating-system': {
        title: "Systèmes d'exploitation",
        text: "Préférant Linux pour sa flexibilité, développer sur d'autres systèmes comme OS X ou Windows est tout à fait possible si on a les outils qui permettent de le faire.",
      },
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
    project: {
      date_start: 'Débuté en',
      team: 'Équipe',
      context: 'Contexte',
      discover: 'Découvrir',
      demo: 'Demo',
      repository: 'Dépôt',
      technologies: 'Technologies',
      coming_soon: 'Bientôt disponible',
    },
    notification: {
      success: 'Succès',
      failed: 'Erreur',
      contact_success_text: 'Votre message a bien été envoyé !',
      contact_failed_text:
        'Une erreur est survenue, veuillez réessayer plus tard.',
    },
  })
}
