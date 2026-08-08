// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Completed Projects both Academic and Work",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-awarded-bachelor-of-engineering-in-robotics-and-automation-psg-college-of-technology",
          title: 'Awarded Bachelor of Engineering in Robotics and Automation, PSG College of Technology',
          description: "",
          section: "News",},{id: "news-awarded-master-of-science-in-automation-and-robotics-technische-universität-dortmund",
          title: 'Awarded Master of Science in Automation and Robotics, Technische Universität Dortmund',
          description: "",
          section: "News",},{id: "projects-master-thesis",
          title: 'Master Thesis',
          description: "Hierarchical Reinforcment Learning for Agile Loco-manipulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-digital-twin-of-vodafone-spot-robot",
          title: 'Digital Twin of Vodafone-Spot Robot',
          description: "Digital Twin of Boston Dynamics quadruped robot, Spot in Isaac sim",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-master-39-s-semester-project",
          title: 'Master&amp;#39;s Semester Project',
          description: "Cooperative Automated Driving",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
