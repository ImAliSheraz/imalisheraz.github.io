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
        "Helping Businesses Thrive 🚀. I'm a software engineer with a passion for solving complex problems and building innovative solutions. In my current role, I work on a team responsible for designing and implementing features for large-scale web applications. I'm skilled at collaborating with cross-functional teams and have a track record of delivering high-quality code on time."
    ),
    resumeLink:
        "https://drive.google.com/drive/folders/13rMJZrQQyHyjVYKgyPlgW4mAXfIY8l-n?usp=sharing",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/ImAliSheraz/",
    linkedin: "https://www.linkedin.com/in/imalisheraz/",
    gmail: "imalisheraz@gmail.com",
    // facebook: "https://www.facebook.com/imalisheraz",
    instagram: "https://www.instagram.com/imalisheraz/",
    twitter: "https://twitter.com/imalisheraz",
    // Instagram and Twitter are also supported in the links!
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle:
        "A software engineer who has passion for building reliable, high availability, and secure applications.",
    skills: [
        emoji(
            "⚡ Develop highly interactive back-end/front-end and APIs for your software."
        ),
        emoji(
            "⚡ Integration of third party services such as Meta / GCP / AWS / Stripe."
        ),
        emoji(
            "⚡ Experienced in developing solutions for a large number of business domains."
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
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
    schools: [
        {
            schoolName: "Superior University",
            logo: "./assets/images/superior.png",
            subHeader: "Bachelor's degree in Computer Science",
            duration: "September 2017 - August 2021",
            desc: "",
            descBullets: [
                "Gain comprehensive knowledge in software development, algorithms, and data structures.",
                "Completed projects in web development, database management, and machine learning."
            ]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Laravel", //Insert stack or technology you have experience in
            progressPercentage: "98%" //Insert relative proficiency in percentage
        },
        {
            Stack: "React.js",
            progressPercentage: "96%"
        },
        {
            Stack: "Node.js",
            progressPercentage: "95%"
        },
        {
            Stack: "PHP",
            progressPercentage: "97%"
        },
        {
            Stack: "AWS",
            progressPercentage: "90%"
        }
    ],
    displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Software Engineer",
            company: "OneClout",
            companylogo: "./assets/images/oneclout.jpeg",
            date: "March 2024 – Present",
            desc: "Laravel | PHP | AWS | SQL",
            descBullets: [
                "Built and maintained web product back-ends with PHP, Laravel, and Node.js using TDD methodology.",
                "Developed and managed databases, optimizing tables, stored procedures, and functions.",
                "Continuously enhanced applications, troubleshooting and resolving bugs for existing products.",
                "Integrated new requirements, features, and third-party platforms (e.g., Meta, ArcGIS, Map APIs, SharePoint, Microsoft, AWS, MFA).",
                "Wrote unit test cases and managed EC2 servers and deployments."
            ]
        },
        {
            role: "PHP Developer",
            company: "TekRevol",
            companylogo: "./assets/images/Tekrevol.png",
            date: "October 2022 – March 2024",
            desc: "Laravel | PHP | React.js | Node.js | Adonis.js | AWS | SQL",
            descBullets: [
                "Built and maintained the back-end of web applications using PHP, Laravel, Node.js, and Adonis.js using the TDD approach.",
                "Integrated the front-end and back-end of web applications using technologies like AJAX, JSON, and RESTful APIs.",
                "Developed and maintained databases, including creating and optimizing tables, stored procedures, and functions.",
                "Implemented user interfaces using HTML, CSS, and React.js.",
                "Continuously improved the application, troubleshooting and fixing bugs.",
                "Achieved a 40% reduction in application development time while ensuring scalability and reliability through the use of a preformatted boilerplate."
            ]
        },
        {
            role: "Software Engineer",
            company: "Novatore Solutions",
            companylogo: "./assets/images/novatore.png",
            date: "September 2021 – October 2022",
            desc: "Laravel | PHP | React.js | AWS | SQL | Bootstrap | CodeIgniter",
            descBullets: [
                "Developed 8+ applications using PHP, Laravel and CodeIgniter using the using the TDD and agile approach.",
                "Integrated frontend components created in React.js with backend logic.",
                "Designed, developed, and maintained APIs for both internal and external applications.",
                "Led a team of 4+ web developers and interns.",
                "Communicated with clients to address and resolve their technical concerns."
            ]
        }
        // {
        //     role: "Software Engineer",
        //     company: "Mates Technologies",
        //     companylogo: "./assets/images/mates.png",
        //     date: "June 2019 – September 2021",
        //     desc: "Laravel | PHP | SQL | Bootstrap | CodeIgniter",
        //     descBullets: [
        //         "Developed over 12 applications within an agile environment, utilizing PHP, Laravel, and CodeIgniter.",
        //         "Designed and developed APIs to enhance the functionality of the client's CMS.",
        //         "Formulated project concepts and optimized workflow processes.",
        //         "Conducted technical and requirements gathering meetings with clients."
        //     ]
        // }
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
    projects: [
        {
            image: "./assets/images/tmc.jpg",
            projectName: "TMC Solicitors",
            projectDesc: "Case Management System",
            footerLink: [
                {
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
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://demo.mates.pk/drs/"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "Back End Development and APIs",
            subtitle: "FreeCodeCamp",
            image: "./assets/images/fcc.png",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://www.freecodecamp.org/certification/imalisheraz/back-end-development-and-apis"
                }
            ]
        },
        {
            title: "Rest API (Intermediate)",
            subtitle: "Coursera",
            image: "./assets/images/hackerrank.jpeg",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://www.hackerrank.com/certificates/0ddb2242f9a1"
                }
            ]
        },
        // {
        //   title: "AWS S3 Basics",
        //   subtitle: "Coursera",
        //   image: "./assets/images/Coursera.jpg",
        //   footerLink: [
        //     {
        //       name: "Certification",
        //       url: "https://www.coursera.org/account/accomplishments/certificate/JMFX8EBX9NQX"
        //     }
        //   ]
        // },
        {
            title: "Foundations of Project Management",
            subtitle: "Coursera",
            image: "./assets/images/Coursera.jpg",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://www.coursera.org/account/accomplishments/certificate/VTPHECCKSP98"
                }
            ]
        },
        {
            title: "Jira Fundamentals Badge",
            subtitle: "Atlassian University",
            image: "./assets/images/jirafundamentals.png",
            footerLink: [
                {
                    name: "Badge",
                    url: "https://university.atlassian.com/student/award/M5LGU7QfuGugP4KdyUD7zuPK"
                }
            ]
        },
        {
            title: "Virtual Experience Program Participant",
            subtitle: "JPMorgan Chase & Co.",
            image: "./assets/images/jpmorgen.jpg",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_pa5777T5Ecqkxnx9L_completion_certificate.pdf"
                }
            ]
        },
        {
            title: "Arctic Code Vault Contributor",
            subtitle: "GitHub",
            image: "./assets/images/github-arctic.png",
            footerLink: [{ name: "Badge", url: "https://github.com/ImAliSheraz" }]
        },
        {
            title: "DSC Co-Lead",
            subtitle: "Google Developers",
            image: "./assets/images/dsc.png",
            footerLink: [
                {
                    name: "Certification",
                    url: "https://dsc-certify.web.app/coreteam/68979542CACA503"
                }
            ]
        },
        {
            title: "Enterprise Design Thinking Practitioner",
            subtitle: "IBM",
            image: "./assets/images/IBM-Practitioner.png",
            footerLink: [
                {
                    name: "Badge",
                    url: "https://www.credly.com/badges/8a763169-6739-4bbd-9fcf-0359b73712ec"
                }
            ]
        },
        {
            title: "IBM Blockchain Essentials V2",
            subtitle: "IBM",
            image: "./assets/images/IBM-Blockchain.png",
            footerLink: [
                {
                    name: "Badge",
                    url: "https://www.youracclaim.com/badges/4d31406e-4dfe-45b8-bbb3-d10b965287bc"
                }
            ]
        }

        // Removed
        // {
        //     title: "Object-Oriented Programming with Java",
        //     subtitle: "Coursera",
        //     image: "./assets/images/Coursera.jpg",
        //     footerLink: [
        //         {
        //             name: "Certification",
        //             url: "https://www.coursera.org/account/accomplishments/certificate/S3FAWYUSVCSY"
        //         }
        //     ]
        // },
        // {
        //     title: "Cloud SQL",
        //     subtitle: "Google Cloud Platform Certified",
        //     image: "./assets/images/gcp.png",
        //     footerLink: [
        //         {
        //             name: "Certification",
        //             url: "https://google.qwiklabs.com/public_profiles/1bdcb1ee-7159-46e9-99e3-de31ab1636c3"
        //         }
        //     ]
        // },
        // {
        //     title: "Building Conversational Experiences with Dialogflow",
        //     subtitle: "Coursera & Google Cloud",
        //     image: "./assets/images/Coursera.jpg",
        //     footerLink: [
        //         {
        //             name: "Certification",
        //             url: "https://www.coursera.org/account/accomplishments/verify/2B2T3ARA5XJT"
        //         }
        //     ]
        // }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://www.linkedin.com/posts/imalisheraz_promises-in-javascript-activity-7150463739232784384-0c3J?utm_source=share&utm_medium=member_desktop",
            title: "✨ Understanding Promises in JavaScript",
            description:
                "A promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous code more organised and readably."
        },
        {
            url: "https://www.linkedin.com/posts/imalisheraz_introduction-to-caching-techniques-in-laravel-activity-7097879754535579648-5Mzq?utm_source=share&utm_medium=member_desktop",
            title: "✨ Caching Techniques in Laravel",
            description:
                "Caching plays a crucial role in optimizing application performance and responsiveness. In this blog, I'll explore various caching strategies and how they can supercharge your Laravel applications."
        },
        {
            url: "https://www.linkedin.com/posts/imalisheraz_7-tips-for-managing-and-scaling-microservices-activity-7027176353351315456-RzJn?utm_source=share&utm_medium=member_desktop",
            title: "✨ 7 Tips for Managing and Scaling Microservices Architecture",
            description:
                "Writing clean and maintainable code is essential for the long-term success of a software project. Here are five tips for writing code that is easy to read, understand, and maintain."
        },
        {
            url: "https://www.linkedin.com/posts/imalisheraz_7-tips-for-managing-and-scaling-microservices-activity-7027176353351315456-RzJn?utm_source=share&utm_medium=member_desktop",
            title: "✨ 9 Steps to set up a LAMP server on an Amazon EC2",
            description:
                "Here are the basic steps to set up a LAMP server on an Amazon EC2 instance. These are general steps, depending on your requirement you may have to do some more configurations."
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ],
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
    number: "+92 317 4248414",
    email_address: "imalisheraz@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
