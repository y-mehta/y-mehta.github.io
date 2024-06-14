// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'y-mehta', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['y-mehta/ssrf-req-filter', 'y-mehta/vulnalerts'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
       
      ],
    },
  },
  seo: {
    title: 'Yash Mehta',
    description: 'A Security Enthusiast with a deep interest in AppSec, Automation and Software Architecture.',
    imageURL: '',
  },
  social: {
    linkedin: '1yashm',
    twitter: 'YashCMehta',
    mastodon: '',
    researchGate: 'Yash-Mehta-26',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'ymehta',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'yash.mehta@owasp.org',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Application Security',
    'Cloud Security',
    'JavaScript',
    'AWS',
    'Node.js',
    'Kubernetes',
    'Penetration Testing',
    'Security Automation',
    'Terraform'
  ],
  experiences: [
    {
      company: 'Postman',
      position: 'Senior Security Engineer',
      from: 'April 2024',
      to: 'Present',
      companyLink: 'https://postman.com',
    },
    {
      company: 'Postman',
      position: 'Security Engineer II',
      from: 'May 2022',
      to: 'April 2024',
      companyLink: 'https://postman.com',
    },
    {
      company: 'Postman',
      position: 'Security Engineer',
      from: 'October 2020',
      to: 'May 2022',
      companyLink: 'https://postman.com',
    },
    {
      company: 'Postman',
      position: 'Security Engineer, Intern',
      from: 'April 2020',
      to: 'October 2020',
      companyLink: 'https://postman.com',
    },
    {
      company: 'Astra Security',
      position: 'Web Security Intern',
      from: 'May 2019',
      to: 'July 2019',
      companyLink: 'https://getastra.com',
    },
    {
      company: 'Astra Security',
      position: 'Web Security Intern',
      from: 'May 2018',
      to: 'July 2018',
      companyLink: 'https://getastra.com',
    },
    {
      company: 'Cyber Crime Cell, Gurugram Police',
      position: 'Security Intern',
      from: 'June 2017',
      to: 'June 2017',
      companyLink: '',
    },
    {
      company: 'FreeCopy',
      position: 'IT Consultant',
      from: '2017',
      to: '2018',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Security – Specialty',
      body: '',
      year: 'May 2023',
      link: 'https://www.credly.com/badges/c17ed6ae-0319-4e71-8f84-0a9164c00d36/linked_in_profile',
    },
        {
      name: 'AWS Certified Solutions Architect - Associate',
      body: '',
      year: 'April 2022',
      link: 'https://www.credly.com/badges/417bb726-4df1-4985-affa-60b8cd36bf67/public_url',
    },
            {
      name: 'GIAC Web Application Penetration Tester (GWAPT)',
      body: '',
      year: 'August 2021',
      link: '',
    },
    
            {
      name: 'CompTIA Cybersecurity Analyst (CySA+)',
      body: '',
      year: 'March 2019',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Ahmedabad University',
      degree: 'BTech in Information & Communication Technology',
      from: '2016',
      to: '2020',
    }
  ],
  publications: [
    
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'ymehta', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
