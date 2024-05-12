import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import All from './Pages/All';
import FSD from './Pages/FSD';
import DS from './Pages/DS';
import CyberSecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import NotFound from './Pages/NotFound';

const App = () => {

  let data = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      head:"Full Stack Development",
      title:"Best Full-Stack Development Project Ideas in 2024",
      author:"Isha Sharma",
      date:"25 Mar 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
      head:"Full Stack Development",
      title:"How Long Would It Take to Be a Full Stack Developer?",
      author:"Meghana D",
      date:"26 Mar 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
      head:"Full Stack Development",
      title:"Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024",
      author:"Archana",
      date:"26 Mar 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg",
      head:"Full Stack Development",
      title:"6 Essential Prerequisites For Learning ReactJS",
      author:"Ramkumar",
      date:"25 Mar 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
      head:"Full Stack Development",
      title:"Best Web Development Roadmap for Beginners 2024",
      author:"Isha Sharma",
      date:"16 Apr 2024",
    },
    
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      head:"Data Science",
      title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author:"Isha Sharma",
      date:"16 Apr 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
      head:"Data Science",
      title:"12 Real-World Data Science Examples: Power Of Data Science",
      author:"Lukesh S",
      date:"25 Mar 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-1536x866.png",
      head:"Data Science",
      title:"Roles and Responsibilities of a Data Scientist",
      author:"Jaishree Tomar",
      date:"16 Apr 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-1536x1024.jpg",
      head:"Data Science",
      title:"How to become a Data Scientist after Mechanical Engineering?",
      author:"Lahari Chandana",
      date:"16 Apr 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      head:"Data Science",
      title:"Top Product-Based Companies for Data Science Freshers",
      author:"Jaishree Tomar",
      date:"10 Nov 2023",
    },

    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-768x432.png",
      head:"Cyber Security",
      title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author:"Tushar Vinocha",
      date:"16 Apr 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity-768x480.webp",
      head:"Cyber Security",
      title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author:"Jaishree Tomar",
      date:"26 Mar 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More-768x480.webp",
      head:"Cyber Security",
      title:"What Is Hacking? Types of Hacking & More",
      author:"Meghana D",
      date:"25 Mar 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      head:"Cyber Security",
      title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      author:"Tushar Vinocha",
      date:"04 Oct 2023",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
      head:"Cyber Security",
      title:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      author:"Tushar Vinocha",
      date:"25 Mar 2024",
    },
    
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp",
      head:"Career",
      title:"Career in Animation: Jobs, Salary, Future Scope in India (2024)",
      author:"Saanchi Bhardwaj",
      date:"03 May 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-Tips-to-Stay-Motivated-in-Your-Motion-Graphic-Design-Career.webp",
      head:"Career",
      title:"10 Tips to Stay Motivated in Your Motion Graphic Design Career",
      author:"Saakshi Priyadarshini",
      date:"29 Apr 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2021/07/Blog-1-1-768x402.png",
      head:"Career",
      title:"Is Data Science A Good Career Choice In 2024?",
      author:"Archana",
      date:"16 Apr 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/05/2202.i402.018.S.m004.c13.Devops-engineer-flat-composition-768x591.jpg",
      head:"Career",
      title:"As a Software Engineer, How Do I Shift My Career to DevOps?",
      author:"Lahari Chandana",
      date:"16 Apr 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/ui_ux_salary_guide_is_it_a_high_paying_career_feature_image-768x384.webp",
      head:"Career",
      title:"UI/UX Salary Guide 2024: Is it a High-Paying Career?",
      author:"Srinithi Sankar",
      date:"16 Apr 2024",
    },

  ]
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<All data={data} />} />
          <Route path='/fsd' element={<FSD data={data} />} />
          <Route path='/ds' element={<DS data={data} />} />
          <Route path='/cyber' element={<CyberSecurity data={data} />} />
          <Route path='/career' element={<Career data={data} />} />
          <Route path='*' element={<NotFound />} />        
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;