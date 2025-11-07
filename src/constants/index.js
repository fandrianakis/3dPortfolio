import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bnbpro,
    movieland,
    armomikat,
    resumeapp,
    heroimage,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Worpress Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Worpress Developer",
      company_name: "IsHome.gr",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2022-My fist Project",
      points: [
        "Developed the company’s website from scratch, ensuring a modern and efficient foundation.",
        "Ensured cross-browser compatibility and seamless user experience through responsive design.",
        "Created content based on the specific needs and requirements of the client.",
        ],
    },
    {
      title: "Worpress Developer",
      company_name: "IndustrialSafety.gr",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2024",
      points: [
        "Developed the company’s website from scratch, ensuring a modern and efficient foundation.",
        "Ensured cross-browser compatibility and seamless user experience through responsive design.",
        "Created content based on the specific needs and requirements of the client.",
        ],
    },
    {
      title: "Worpress Developer",
      company_name: "Karaglanis.gr",
      icon: shopify,
      iconBg: "#383E56",
      date: "2024",
      points: [
        "Developed maintained the company’s website, ensuring a modern and efficient foundation.",
        "Ensured cross-browser compatibility and seamless user experience through responsive design.",
        "Created content based on the specific needs and requirements of the client.",
        ],
    },
    {
      title: "Full stack | Worpress Developer",
      company_name: "Konne.gr",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jul 2024 - Present",
      points: [
        "Developed maintained the company’s website, ensuring a modern and efficient foundation.",
        "Ensured cross-browser compatibility and seamless user experience through responsive design.",
        "Created content based on the specific needs and requirements of the client.",
        ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: " Premium Olive Oil Producer",
      description:
        "Offers ultra-premium extra virgin olive oil from Pylos, Messinia, Greece, emphasizing traditional cultivation and high polyphenol content for health benefits.",
      tags: [
        {
          name: "WorPress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://karaglanis.gr/",
    },
    {
      name: " Occupational Safety Services",
      description:
        "Specializes in risk management and environmental protection since 1987, offering services like safety engineering, emergency preparedness, and occupational health training.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://industrialsafety.gr/",
    },
    {
      name: "Residential & Commercial Renovation",

      description:
      "Specialize in home and commercial renovations, offering solutions with high aesthetics and durability." ,     
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "pink-text-gradient",
        },
      ],
      image: armomikat,
      source_code_link: "https://armonikat.com/",
    },
    {
      name: "Maritime Community Platform",
      description:
        "A comprehensive platform offering maritime professionals information, services, job listings, and educational resources to support their careers in the shipping industry. ",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "JetEngine",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://konne.gr/",
    },
    {
      name: "Movie Database Application",
      description:
        "A React application for searching and displaying movie information from an external database using the OMDb API.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Axios",
          color: "green-text-gradient",
        },
        {
          name: "OMDb API",
          color: "pink-text-gradient",
        },
      ],
      image: movieland,
      source_code_link: "https://github.com/fandrianakis/MovieLandReactProject.git",
    },
    {
      name: "Booking Management Service",
      description:
        "BnBpro is a professional Airbnb and Booking.com property management service website that helps property owners maximize their rental income while minimizing their time investment. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "React + Vite",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: bnbpro,
      source_code_link: "https://airbnb-management-hub.vercel.app/",
    },
    {
      name: "ATS Resume Checker | API OpenAI",
      description:
        "A modern web application that analyzes uploaded resumes (PDF or DOCX) using AI and delivers detailed feedback. The app helps users understand and improve their resumes based on advanced language processing.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js + Express",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI GPT-4 + pdf-parse, mammoth",
          color: "pink-text-gradient",
        },
      ],
      image: resumeapp,
      source_code_link: "https://github.com/fandrianakis/resume-checker-app.git",
    },
    {
      name: "CrewBot | AI Interview Platform",
      description:
        "CrewBot is an AI-powered web app that helps seafarers prepare for interviews through voice simulations, personalized questions, and automated feedback based on maritime standards.",
      tags: [
        {
          name: "Vapi SDK",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Firebase Database",
          color: "pink-text-gradient",
        },
      ],
      image: heroimage,
      source_code_link: "https://facode-interview-platform.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };