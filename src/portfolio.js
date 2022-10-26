/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

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

    achievementsCards: [{
        title: "Virtual Experience Program Participant",
        subtitle: "JPMorgan Chase & Co.",
        image: "./assets/images/jpmorgen.jpg",
        footerLink: [{
            name: "Certification",
            url: "https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_pa5777T5Ecqkxnx9L_completion_certificate.pdf"
        }
        ]
    },
    {
        title: "Arctic Code Vault Contributor",
        subtitle: "GitHub",
        image: "./assets/images/github-arctic.png",
        footerLink: [
            { name: "Visit Profile", url: "https://github.com/ImAliSheraz" }
        ]
    },
    {
        title: "DSC Co-Lead",
        subtitle: "Google Developers",
        image: "./assets/images/dsc.png",
        footerLink: [
            { name: "Certification", url: "https://dsc-certify.web.app/coreteam/68979542CACA503" }
        ]
    },
    {
        title: "Enterprise Design Thinking Practitioner",
        subtitle: "IBM",
        image: "./assets/images/IBM-Practitioner.png",
        footerLink: [{
            name: "Certification",
            url: "https://www.credly.com/badges/8a763169-6739-4bbd-9fcf-0359b73712ec"
        }]
    },
    {
        title: "IBM Blockchain Essentials V2",
        subtitle: "IBM",
        image: "./assets/images/IBM-Blockchain.png",
        footerLink: [
            { name: "Certification", url: "https://www.youracclaim.com/badges/4d31406e-4dfe-45b8-bbb3-d10b965287bc" }
        ]
    },
    {
        title: "Object-Oriented Programming with Java",
        subtitle: "Coursera",
        image: "./assets/images/Coursera.jpg",
        footerLink: [
            { name: "Certification", url: "https://www.coursera.org/account/accomplishments/certificate/S3FAWYUSVCSY" }
        ]
    },

    {
        title: "Cloud SQL",
        subtitle: "Google Cloud Platform Certified",
        image: "./assets/images/gcp.png",
        footerLink: [
            { name: "Certification", url: "https://google.qwiklabs.com/public_profiles/1bdcb1ee-7159-46e9-99e3-de31ab1636c3" }
        ]
    },
    {
        title: "Building Conversational Experiences with Dialogflow",
        subtitle: "Coursera & Google Cloud",
        image: "./assets/images/Coursera.jpg",
        footerLink: [
            { name: "Certification", url: "https://www.coursera.org/account/accomplishments/verify/2B2T3ARA5XJT" }
        ]
    }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [{
        url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
        title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
        description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
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
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+92-3174248414",
    email_address: "imalisheraz@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    workExperiences,
    educationInfo,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    techStack,
    contactInfo,
    twitterDetails
};