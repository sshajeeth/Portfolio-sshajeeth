/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Shajeeth",
  logo_name: "//sshajeeth()",
  nickname: "sshajeeth / picleric",
  full_name: "Shajeeth Suwarnarajah",
  subTitle:
    "Software Engineer, Who is excited to develop software based solutions for problems.",
  resumeLink:
    "https://drive.google.com/file/d/1uBvIAlvrz0fl2AoaLIyRgMXeEcF0FjNN/view?usp=sharing",
  mail: "mailto:sshajeeth@hotmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sshajeeth",
  linkedin: "https://www.linkedin.com/in/sshajeeth/",
  gmail: "sshajeeth@hotmail.com",
  gitlab: " ",
  facebook: "https://facebook.com/sshajeeth",
  twitter: "https://twitter.com/sshajeeth",
  instagram: "https://www.instagram.com/sshajeeth/",
};

const skills = {
  data: [
    {
      title: "Software Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend in Python & Java",
        "⚡ Developing mobile applications using native Android and native IOS",
        "⚡ Creating automation framework to automate the test cases using pytest-bdd",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "logos-android-icon",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Selenium",
          fontAwesomeClassname: "logos:selenium",
          style: {
            color: "#e3e3e3",
          },
        },
        {
          skillName: "Swift",
          fontAwesomeClassname: "logos:swift",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#a30000",
          },
        },    
        {
          skillName: "HTML5",
          fontAwesomeClassname: "logos:html-5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "logos:css-3",
          style: {
            color: "#E34F26",
          },
        },
       
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },    
        // {
        //   skillName: "MySQL",
        //   fontAwesomeClassname: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "logos:github-octocat",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "logos:bitbucket",
          style: {
            color: "#1069de",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "logos:jira",
          style: {
            color: "#1069de",
          },
        },
        {
          skillName: "Travis CI",
          fontAwesomeClassname: "logos:travis-ci",
          style: {
            color: "#1069de",
          },
        },
        
      ],
    },
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Certifications by deeplearning.ai and Stanford Online",
    //     "⚡ Experience with 10+ Projects",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Pandas",
    //       fontAwesomeClassname: "simple-icons:pandas",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#6E6E6E",
    //       },
    //     },
    //   ],
    // },
//     {
//       title: "Cloud Infra-Architecture",
//       fileName: "CloudInfraImg",
//       skills: [
//         "⚡ Experience working on multiple cloud platforms",
//         "⚡ Experience hosting and managing websites",
//         "⚡ Deploying deep learning models on cloud to use on mobile devices",
//         "⚡ Experience with Continuous Integration",
//       ],
//       softwareSkills: [
//         {
//           skillName: "GCP",
//           fontAwesomeClassname: "simple-icons:googlecloud",
//           style: {
//             color: "#4285F4",
//           },
//         },
//         {
//           skillName: "AWS",
//           fontAwesomeClassname: "simple-icons:amazonaws",
//           style: {
//             color: "#FF9900",
//           },
//         },
//         {
//           skillName: "Netlify",
//           fontAwesomeClassname: "simple-icons:netlify",
//           style: {
//             color: "#38AFBB",
//           },
//         },
//         {
//           skillName: "Heroku",
//           fontAwesomeClassname: "simple-icons:heroku",
//           style: {
//             color: "#6863A6",
//           },
//         },
//         {
//           skillName: "Firebase",
//           fontAwesomeClassname: "simple-icons:firebase",
//           style: {
//             color: "#FFCA28",
//           },
//         },
//         {
//           skillName: "PostgreSQL",
//           fontAwesomeClassname: "simple-icons:postgresql",
//           style: {
//             color: "#336791",
//           },
//         },
//         {
//           skillName: "MongoDB",
//           fontAwesomeClassname: "simple-icons:mongodb",
//           style: {
//             color: "#47A248",
//           },
//         },
//         {
//           skillName: "Docker",
//           fontAwesomeClassname: "simple-icons:docker",
//           style: {
//             color: "#1488C6",
//           },
//         },
//       ],
//     },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Westminster",
      subtitle: "BEng Software Engineering",
      logo_path: "westminster.jpg",
      alt_name: "IIT",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also studied OOP, Web Development, Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Software Engineering course. ",
      ],
      website_link: "https://www.westminster.ac.uk/",
    },
  ],
};

const certifications = {
  certifications: [
//     {
//       title: "Deep Learning Specialization",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
//       alt_name: "deeplearning.ai",
//       color_code: "#47A048",
//     },
//     {
//       title: "Sequence Models",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
//       alt_name: "deeplearning.ai",
//       color_code: "#F6B808",
//     },
//     {
//       title: "Convolutional Neural Networks",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
//       alt_name: "deeplearning.ai",
//       color_code: "#2AAFED",
//     },
//     {
//       title: "Structuring Machine Learning Projects",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
//       alt_name: "deeplearning.ai",
//       color_code: "#E2405F",
//     },
//     {
//       title: "Machine Learning",
//       subtitle: "deeplearning.ai",
//       logo_path: "stanford_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
//       alt_name: "Stanford University",
//       color_code: "#8C151599",
//     },
//     {
//       title: "Neural Networks and Deep Learning",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
//       alt_name: "Google",
//       color_code: "#7A7A7A",
//     },
//     {
//       title: "Improving Deep Neural Networks",
//       subtitle: "deeplearning.ai",
//       logo_path: "deeplearning_ai_logo.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
//       alt_name: "Google",
//       color_code: "#0C9D5899",
//     },
//     {
//       title: "Android Developer Nanodegree",
//       subtitle: "Part of Google India Scholarship Program",
//       logo_path: "100.png",
//       certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
//       alt_name: "Google",
//       color_code: "#C5E2EE",
//     },
//     {
//       title: "Google Summer of Code 2019",
//       subtitle: "Google / Sugar Labs",
//       logo_path: "google_logo.png",
//       certificate_link: " ",
//       alt_name: "Google",
//       color_code: "#ffc475",
//     },
//     {
//       title: "Google Code-In Student",
//       subtitle: "2014-2017",
//       logo_path: "google_logo.png",
//       certificate_link: " ",
//       alt_name: "Google",
//       color_code: "#1e70c1",
//     },
//     {
//       title: "Google Summer of Code Mentor",
//       subtitle: "2017 / 2018 / 2020",
//       logo_path: "google_logo.png",
//       certificate_link: " ",
//       alt_name: "Google",
//       color_code: "#ffbfae",
//     },
//     {
//       title: "InOut 4.0 Winner #2",
//       subtitle: "2017",
//       logo_path: "ino.png",
//       certificate_link: " ",
//       alt_name: "InOut",
//       color_code: "#fffbf3",
//     },
//     {
//       title: "Google Code-In Mentor",
//       subtitle: "2017 / 2018 / 2019",
//       logo_path: "google_logo.png",
//       certificate_link: " ",
//       alt_name: "Google",
//       color_code: "#b190b0",
//     },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Freelancing",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for software engineer job.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Vetstoria (Pvt) Ltd",
          company_url: "https://www.vetstoria.com/",
          logo_path: "vetstoria.png",
          duration: "July 2019 - May 2019",
          location: "Colombo",
          description:
            "I worked on creating an automation framework to automate the testcaes using pytest-bdd and worked on automating test case creation process on JIRA and zephyr plugin.",
          color: "#ee3c26",
        },
        // {
        //   title: "Android App Developer Intern",
        //   company: "IAS4Sure",
        //   company_url: " ",
        //   logo_path: "buld.jpg",
        //   duration: "December 2019 - February 2020",
        //   location: "Work From Home",
        //   description:
        //     "Internship task was to make a native Android application. ",
        //   color: "#0071C5",
        // },
        // {
        //   title: "Web Developer",
        //   company: "Wrighter Writing Solutions",
        //   company_url: " ",
        //   logo_path: "wrighter.jpg",
        //   duration: "August 2020",
        //   location: "",
        //   description: "Develop a website using PHP and jQuery.",
        //   color: "#56A4D3",
        // },
        // {
        //   title: "Front-End Developer",
        //   company: "VJ TechServe",
        //   company_url: " ",
        //   logo_path: "vjt.png",
        //   duration: "September 2020",
        //   location: "",
        //   description: "Develop a portfolio website using ReactJS",
        //   color: "#800000",
        // },
      ],
    },
    {
      title: "Freelancing",
      experiences: [
        {
          title: "Online Pizza Shop",
          company: "Ginos Famous Pizza",
          company_url: "https://ginosfamouspizza.net/",
          logo_path: "ginos.jpg",
          duration: "2021",
          location: " ",
          description:
            "Worked on developing a website for online pizza shop using wordpress content management system",
          color: "#4285F4",
        },
        {
          title: "Charity Official Website",
          company: "Needy Economic and Environment Development",
          company_url: "http://neem.lk/",
          logo_path: "neemlogo.png",
          duration: "2021",
          location: " ",
          description:
            "Worked on creating the official fund raising website for Needy Economic and Environment Development.",
          color: "#D83B01",
        },
        
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Mobile Application projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilePic.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@sshajeeth",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Genesis",
      url: "https://github.com/sshajeeth/Genesis-Mobile-Application",
      description: "Simple water meter android application implemented using native android for cutting edge 2018",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
       
      ],
    },
    {
      id: "1",
      name: "HomeOutlook",
      url: " ",
      description:
        "Apartment recommendation system which is recommend apartment based on the user interested nearby places.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Vue",
          iconifyClass: "logos-vue",
        },
      ],
    },
    {
      id: "2",
      name: "HFM",
      url: "https://github.com/sshajeeth/hfm-v2",
      description:
        "The live radio streaming android native mobile application.",
      languages: [
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        
      ],
    },
    {
      id: "12",
      name: "Jira Automation",
      url: "https://github.com/sshajeeth/Jira-Automation",
      description:
        "Developed a program to create issues in Jira, update issue fields in Jira and delete issue from Jira using jira-python library.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        
      ],
    },
    // {
    //   id: "13",
    //   name: "Video Summarization (WIP)",
    //   url: "https://github.com/Hrishi1999/Video-Summarization",
    //   description:
    //     "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   id: "3",
    //   name: "Dashboard Activity",
    //   url: "https://github.com/Hrishi1999/Dashboard.activity",
    //   description:
    //     "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "4",
    //   name: "Project Pickle",
    //   url: " ",
    //   description:
    //     "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
    //   languages: [
    //     {
    //       name: "Java",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "5",
    //   name: "Project Health Card",
    //   url: "",
    //   description:
    //     "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "Food Classifier",
    //   url: " ",
    //   description:
    //     "A food classifier app using tflite which classfier over 50 Indian Dishes.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "Dart",
    //       iconifyClass: "logos-dart",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Image Clustering",
    //   url: " ",
    //   description:
    //     "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Antivirus",
    //   url: " ",
    //   description:
    //     "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Sugar on Windows",
    //   url: " ",
    //   description:
    //     "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "Object + Face Detection",
    //   url: " ",
    //   description: "2017 project. Object detection + accurate face detection.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Image Captioning with Visual Attention",
    //   url: " ",
    //   description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
