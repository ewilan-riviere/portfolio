export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Welcome',
    title: "Ewilan Rivière's Portfolio",
    currentAbtract: 'Web developer on Useweb, France',
    projectsTitle: 'Projects',
    projectsAbstract: 'The list of my personal and professional projects',
  })
}
