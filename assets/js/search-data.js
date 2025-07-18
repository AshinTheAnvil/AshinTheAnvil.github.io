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
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Completed Projects both Academic and Work",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "Please click on the above pdf icon to view a copy of resume in latex pdf",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-fun-interview-with-vodafone-düsseldorf",
        
          title: "Fun Interview with Vodafone Düsseldorf",
        
        description: "A brief interview on favourite food of people",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-cooperative-automated-driving",
        
          title: 'Cooperative Automated Driving <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://x.com/rst_tu/status/1620735143270031363", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-awarded-bachelor-s-degree-in-robotics-and-automation-psg-college-of-technology-anna-university",
          title: 'Awarded Bachelor’s degree in Robotics and Automation, PSG College of Technology, Anna University....',
          description: "",
          section: "News",},{id: "news-successfully-passed-the-master-s-thesis-rst-tu-dortmund",
          title: 'Successfully passed the master’s thesis @ RST, TU Dortmund',
          description: "",
          section: "News",},{id: "news-completed-robotics-internship-vodafone-düsseldorf-innovation-garage",
          title: 'Completed Robotics Internship @ Vodafone Düsseldorf, Innovation Garage',
          description: "",
          section: "News",},{id: "projects-master-thesis",
          title: 'Master Thesis',
          description: "Hierarchical Reinforcment Learning for Agile Loco-manipulation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-digital-twin-of-vodafone-spot-robot",
          title: 'Digital twin of Vodafone-Spot Robot',
          description: "Digital shadow of Boston Dynamics quadruped robot, Spot in Isaac sim",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-master-39-s-semester-project-mini-thesis",
          title: 'Master&amp;#39;s Semester Project(Mini thesis)',
          description: "Cooperative Automated Driving",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-capstone-project-ros-nav",
          title: 'Capstone Project ROS Nav',
          description: "Autonomous Navigation ROS",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
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
