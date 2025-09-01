const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Contact",
      link: "#contact",
    },
    // {
    //   name: "Testimonials",
    //   link: "#testimonials",
    // },
  ];
  
  // const words = [
  //   { id: 'w-ideas-1', text: "Ideas", imgPath: "/images/ideas.svg" },
  //   { id: 'w-concepts-1', text: "Concepts", imgPath: "/images/concepts.svg" },
  //   { id: 'w-designs-1', text: "Designs", imgPath: "/images/designs.svg" },
  //   { id: 'w-code-1', text: "Code", imgPath: "/images/code.svg" },
  //   { id: 'w-ideas-2', text: "Ideas", imgPath: "/images/ideas.svg" },
  //   { id: 'w-concepts-2', text: "Concepts", imgPath: "/images/concepts.svg" },
  //   { id: 'w-designs-2', text: "Designs", imgPath: "/images/designs.svg" },
  //   { id: 'w-code-2', text: "Code", imgPath: "/images/code.svg" },
  // ];
  
  const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 1000, suffix: "+", label: "Satisfied Clients" },
    { value: 25, suffix: "%+", label: "Revenue Increase" },
    { value: 90, suffix: "%+", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Engineering Excellence",
      desc: "Building full-stack systems that improve performance, scale reliably, and cut costs through smart engineering",
    },
    {
      imgPath: "/images/chat.png",
      title: "Clear Collaboration",
      desc: "Working across teams and functions to align goals, improve workflows, and deliver measurable business impact",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Results",
      desc: "Driving projects from design to deployment on schedule, improving efficiency and ensuring quality outcomes",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Product Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "Master of Science in Computer Science, Specialization in Artificial Intelligence",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Ubliss Medical Aesthetics - Founding Software Developer",
      date: "July 2023 - Present",
      responsibilities: [
        "Led the full product lifecycle, working cross-functionally with the founder, UI/UX designer, SEO marketer, and software engineer, resulting in a 20% increase in company revenue.",
        "Integrated AI-powered APIs to enable multilingual translations, contributing to a 25% improvement in customer retention.",
        "Spearheaded the adoption of a SaaS EMR solution, optimizing patient record management, curtailing workflow bottlenecks and curtailing external costs by 30%.",
        "Revamped booking and checkout systems across Frontend and Backend based on Google Analytics insights, resulting in a 30% increase in user visits and 20% uplift in bookings.",
      ],
    },
    {
      review: "Full Stack Software Engineering, Bootcamp Certification",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Saleo - Software Engineer Intern",
      date: "January 2025 - April 2025",
      responsibilities: [
        "Implemented optimized text search and replace functionalities utilizing Advanced Data Structures and Algorithms, resulting in a 30% increase in use efficiency and application performance.",
        "Developed and integrated GraphQL APIs to streamline data fetching, reducing client-server requests by 20% and improving frontend performance and responsiveness.",
        "Overhauled Backend Infrastructure, achieving a 10% reduction in backend response latency and reinforcing platform stability for enterprise deployments.",
      ],
    },
    {
      review: "Bachelor of Business Administration in Finance and Mathematics",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "Flexport - Financial Data Analyst",
      date: "July 2021 - June 2023",
      responsibilities: [
        "Conducted analyses on over $1 million in financial transactions using SQL and created Data Visualizations that yielded actionable insights for strategic decision-making.",
        "Partnered closely with the software engineering team, supplying essential freight data that enhanced the internal quoting system’s efficiency by over 20% by eliminating redundant data.",
        "Executed daily Data Cleaning and Reporting, improving the accuracy of time and location data by 99% and providing clients with consistently reliable information",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "Github",
      imgPath: "/images/github.png",
      link: "https://github.com/allonhnam",
    },
    {
      name: "LinkedIn",
      imgPath: "/images/linkedin.png",
      link: "https://www.linkedin.com/in/allonnam/",
    },
  ];
  
  export {
    // words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };