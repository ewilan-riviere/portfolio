export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Welcome',
    pages: {
      home: {
        title: "Ewilan Rivière's Portfolio",
        abstract: 'Developer designer of applications',
      },
      projects: {
        title: 'Projects',
        abstract: 'The list of my personal and professional projects',
      },
    },

    projects: 'Projects',
    training: 'Training',
    bachelor: 'bachelor',
    cat: 'Cat',
    years: 'years',
    experience: 'Experience',

    testimonial:
      'What matters is not so much the path taken as the one to be taken. And so, this would be a way of saying that a training does not determine a person? Yes. Otherwise we would all be the same.',

    technologiesLogo: 'Solid and known technologies',
    projectsList: {
      ontitle: 'Achievements',
      title: 'My projects',
      subtitle:
        'Whether they are personal, realized alone or in team, or professional, here is a selection of my projects.',
      cta: 'Discover more projects',
    },
    statistics: {
      title: 'Any numbers?',
      subtitle:
        "Because statistics can be made to say whatever you want and sometimes they don't make sense, you might as well put them here.",
    },
    contact: {
      title: "You've send a mail!",
      subtitle: "If you have a question or project proposal, don't hesitate!",
    },
    occupation: {
      text: 'I am currently working at Useweb, a web agency creating custom websites with technologies such as NuxtJS, Laravel or Flutter.',
      date: 'Since 2019',
      location: 'Rennes in Bretagne, France',
    },
    fields: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      characters: 'characters',
      currently: 'Currently',
      more: 'Read more',
    },
  })
}
