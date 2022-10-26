/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Ali Sheraz",
    title: "Hi, I'm Ali Sheraz",
    subTitle: emoji(
        "I am Doer 🚀, not Dreamer. I have a passion to lead, explore and experiment with new things. I'm a passionate full-stack engineer with more than 3 years of professional experience in PHP and JavaScript ecosystems. I believe in client satisfaction, honesty, integrity, and smart work. "
    ),
    resumeLink: "https://drive.google.com/drive/folders/13rMJZrQQyHyjVYKgyPlgW4mAXfIY8l-n?usp=sharing",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/ImAliSheraz/",
    linkedin: "https://www.linkedin.com/in/imalisheraz/",
    gmail: "imalisheraz@gmail.com",
    facebook: "https://www.facebook.com/imalisheraz",
    instagram: "https://www.instagram.com/imalisheraz/",
    twitter: "https://twitter.com/imalisheraz",
    // Instagram and Twitter are also supported in the links!
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "Crazy Full Stack Developer who wants to explore every technology stack",
    skills: [
        emoji(
            "⚡ Develop highly interactive Back End / User Interfaces for your web and mobile applications"
        ),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji(
            "⚡ Integration of third party services such as Firebase / GCP / AWS / Digital Ocean"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5"
    },
    {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
        skillName: "Bootstrap",
        fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
    },
    {
        skillName: "jQuery",
        fontAwesomeClassname: "fas fa-code"
    },
    {
        skillName: "PHP",
        fontAwesomeClassname: "fab fa-php"
    },
    {
        skillName: "Laravel",
        fontAwesomeClassname: "fab fa-laravel"
    },
    {
        skillName: "CodeIgniter",
        fontAwesomeClassname: "fas fa-fire-alt"
    },
    {
        skillName: "ReactJs",
        fontAwesomeClassname: "fab fa-react"
    },
    {
        skillName: "NodeJs",
        fontAwesomeClassname: "fab fa-node"
    },
    {
        skillName: "NPM",
        fontAwesomeClassname: "fab fa-npm"
    },
    {
        skillName: "SQL-Database",
        fontAwesomeClassname: "fas fa-database"
    },
    {
        skillName: "AWS",
        fontAwesomeClassname: "fab fa-aws"
    },
    {
        skillName: "Firebase",
        fontAwesomeClassname: "fas fa-fire"
    },
    {
        skillName: "GIT",
        fontAwesomeClassname: "fas fa-code-branch"
    },
    {
        skillName: "GitHub",
        fontAwesomeClassname: "fab fa-github"
    },
    {
        skillName: "docker",
        fontAwesomeClassname: "fab fa-docker"
    }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [{
        schoolName: "Superior University",
        logo: "./assets/images/superior.png",
        subHeader: "Bachelor's degree in Computer Science",
        duration: "September 2017 - August 2021",
        desc: "",
        descBullets: []
    }]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
        Stack: "PHP",
        progressPercentage: "95%"
    },
    {
        Stack: "Codeigniter",
        progressPercentage: "93%"
    },
    {
        Stack: "Laravel", //Insert stack or technology you have experience in
        progressPercentage: "88%" //Insert relative proficiency in percentage
    },
    {
        Stack: "SQL",
        progressPercentage: "85%"
    },
    {
        Stack: "React JS",
        progressPercentage: "50%"
    }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
        role: "Software Engineer",
        company: "Novatore Solutions",
        companylogo: "./assets/images/novatore.png",
        date: "September 2021 – Present",
        desc: " ",
        descBullets: [
            'Integrate user-facing elements developed by front-end developers with server-side logic.',
            'Develop and design RESTful services and APIs.',
            'Build reusable code and libraries for future use.',
            'Develop features and improvements to the ongoing products in a secure, well-tested, and performant way.',
            'Collaborate with Product Management and other stakeholders within Engineering (Frontend, UX, QA, etc.) to maintain a high bar for quality in a fast-paced, iterative environment.',
            'Solve technical problems of moderate scope and complexity.'
        ]
    },
    {
        role: "Software Engineer",
        company: "Mates Technologies",
        companylogo: "./assets/images/mates.png",
        date: "June 2019 – September 2021",
        desc: " ",
        descBullets: [
            'Cooperate with designers to create clean and simple interfaces.',
            'Develop project concepts and maintain optimal workflow.',
            'Work with senior developer to manage large, complex projects for corporate clients.',
            'Control development tasks for different websites as well as challenging back-end server code.'
        ]
    }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [{
        image: "./assets/images/tmc.jpg",
        projectName: "TMC Solicitors",
        projectDesc: "Case Management System",
        footerLink: [{
            name: "Visit Website",
            url: "https://www.leads.tmcsolicitors.co.uk/"
        }
            //  you can add extra buttons here.
        ]
    },
    {
        image: "./assets/images/drs.jpg",
        projectName: "DRS",
        projectDesc: "Resource Management System",
        footerLink: [{
            name: "Visit Website",
            url: "https://demo.mates.pk/drs/"
        }]
    }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
        ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
        url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
        title: "Why REACT is The Best?",
        description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [{
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
    }],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
