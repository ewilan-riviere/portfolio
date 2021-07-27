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
      title: 'Current occupation',
      text: 'I am currently working at Useweb, a web agency creating custom websites with technologies such as NuxtJS, Laravel or Flutter.',
      date: 'Since 2019',
      location: 'Rennes in Bretagne, France',
    },
    features: {
      coding: {
        title: 'Developement',
        text: 'Always look back at what has been coded to see if it can be improved, comments and refactoring allow to always improve the code.',
      },
      'front-end': {
        title: 'Front-end & design',
        text: 'The front-end is the basis for mastering the integration of a model, either with a CSS framework or by hand.',
      },
      deployment: {
        title: 'Deployments',
        text: 'Deploy projects on VPS servers, in HTTPS, HTTP 2 on NGINX with databases are often in MySQL.',
      },
      framework: {
        title: 'Frameworks',
        text: 'Without a framework, coding is interesting but it takes time for basic things, mastering a framework allows to save time and productivity.',
      },
      seo: {
        title: 'SEO',
        text: "Whether it's setting up <head> metadata, open graph, redirects, traffic analysis or ecodesign, SEO is important in every project.",
      },
      'operating-system': {
        title: 'Operating systems',
        text: 'Preferring Linux for its flexibility, developing on other systems like OS X or Windows is quite possible if you have the tools to do it.',
      },
    },
    featuresHighlight: {
      title: {
        eyebrow: 'Features',
        title: 'Highlight',
        text: "I love some frameworks more than other, that's why.",
      },
      one: {
        title: 'Laravel',
        badge: 'Works with PHP',
        text: "I like PHP but I love Laravel which is an MVC framework for PHP. It's really fast to create an API with collection of data, details of specified data or even search. I love Laravel's models features, seeders & factory for fake data. Blade for embedded front-end is really playful but it's really easy to add Vue.js for advanced front-end.",
      },
      two: {
        title: 'NuxtJS',
        badge: 'Works with JS/TS',
        text: 'If I like Vue.js a lot, NuxtJS is so nice to use with all the Vue.js features embedded in a very easy to use framework with its dynamic router, its SSR system for big projects or static for small ones but also a very active community offering modules for most of the useful libraries.',
      },
      three: {
        title: 'Flutter',
        badge: 'Works with Dart',
        text: 'I come from the web and I always wanted to enter the mobile world because everything is different there. Flutter offers a very solid and practical framework to reach smartphones with applications that have performance close to native applications and allowing to use the same code base for Android and iOS and even applications for Windows, Linux and macOS.',
      },
      discover: 'Discover',
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
    project: {
      date_start: 'Start to',
      team: 'Team',
      context: 'Context',
      discover: 'Discover demo',
      demo: 'Demo',
      repository: 'Repository',
      technologies: 'Technologies',
      coming_soon: 'Coming soon',
    },
    notification: {
      success: 'Success',
      failed: 'Error',
      contact_success_text: "You've send your message!",
      contact_failed_text: 'An error happened, try again in some hours.',
    },
  })
}
