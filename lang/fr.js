export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Bienvenue',
    title: "Portfolio d'Ewilan Rivière",
    currentAbtract: 'Développeuse web & mobile chez Useweb, France',
    projectsTitle: 'Projets',
    projectsAbstract: 'La liste de mes projets personnels et profesionnels',
  })
}
