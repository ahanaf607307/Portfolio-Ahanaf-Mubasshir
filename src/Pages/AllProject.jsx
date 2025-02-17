import { Card } from "flowbite-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const projectAll = [
  {
    "id": 1,
    "title": "Matrimony Website",
    "image": "https://i.ibb.co.com/Vr3jVrH/a12.png",
    "detailsImage": "https://i.ibb.co.com/Vr3jVrH/a12.png",
    "liveLink": "https://marriage-bd.web.app/",
    "githubLink": "https://github.com/ahanaf607307/marriage-bd-client-a12",
    "bgClass": "bg-aTwelve",
    "description": "A matrimonial website where users can find their perfect match.The purpose of the matrimonial website Marriage BD can be Connecting Potential Matches: To create a platform for individuals and families in Bangladesh to find suitable life partners by connecting people with shared values, cultural backgrounds, and interests.onvenience and Accessibility: To offer an easy-to-use online solution where users can browse, communicate, and match with prospective partners from the comfort of their homes.Safe and Secure Platform: To ensure the privacy and security of users' personal information while promoting trust and authenticity in the matchmaking process.",
    "mainTechonology": ["React Js", "Node Js", "MongoDB", "Express Js"],
    "improvements": [
      "Enhanced UI/UX: Improve design with a mobile-friendly,interactive interface.",
      "AI-Powered Matchmaking: Suggest matches based on shared values, interests, and compatibility scores.",
      "Profile Verification:Introduce NID/passport verification for authenticity.",
      "Secure Chat & Video Calls: Enable safe communication between users.",
      "Privacy &Security: Implement encryption, 2FA, and manual profile screening."
    ]
  },
  {
    "id": 2,
    "title": "Assignment Taking Website",
    "image": "https://i.ibb.co.com/tM0C5Jgk/xxx.png",
    "detailsImage": "https://i.ibb.co.com/tM0C5Jgk/xxx.png",
    "liveLink": "https://assignment11-56371.web.app/",
    "githubLink": "https://github.com/programming-hero-web-course2/b10a11-client-side-ahanaf607307",
    "bgClass": "bg-aElaven",
    "description": "An online platform to submit and review assignments.Purpose The purpose of Study Today is to provide an interactive and collaborative platform for group studies. It empowers users to - Create and manage study assignments.Collaborate with friends and track progress.Provide and receive constructive feedback through grading systems.",
    "mainTechonology": ["React Js", "Node Js", "MongoDB", "Express Js"],
    "improvements": [
      "Enhanced UI/UX: Improve design for a more user-friendly and responsive interface.",
      " Real-Time Collaboration: Enable live group discussions and document editing.",
      "Automated Grading System: Implement AI-based grading for quick feedback.",
      "Gamification: Add badges, leaderboards, and rewards for motivation",
      "Mobile App Development: Launch Android & iOS apps for accessibility."
    ]
  },
  {
    "id": 3,
    "title": "Crowdfunding Website",
    "image": " https://i.ibb.co.com/0yvTcZVY/xx.png",
    "detailsImage": "https://i.ibb.co.com/0yvTcZVY/xx.png",
    "liveLink": "https://croud-funding-2024.web.app/",
    "githubLink": "https://github.com/ahanaf607307/client-crowd-found-a10",
    "bgClass": "bg-aTen",
    "description": "A crowdfunding platform for raising funds online Crowdfunding Website: User Authentication & Profiles User Registration Login: Email, Google, or Facebook authentication User Profiles: Separate profiles for backers and campaign creators Campaign Management Create & Manage Campaigns: Title, description, category, and funding goal Media Upload: Option to upload images and videos Campaign Updates: Share updates with backers Payment Integration Secure Payment Gateways: SSLCommerz, Stripe, PayPal, etc. Multiple Payment Options: Credit/debit cards, mobile banking, etc. Refund Management: Refund process if a campaign fails Funding & Rewards System Fixed & Flexible Funding: All-or-nothing or keep-what-you-raise models Rewards & Perks: Offer different reward tiers for backers",
    "mainTechonology": ["React Js", "Node Js", "MongoDB", "Express Js"],
    "improvements": [
      "Enhanced UI/UX: Improve interface for seamless navigation and engagement.",
      "AI-Powered Campaign Suggestions: Recommend campaign strategies based on trends.",
      "Real-Time Analytics: Provide campaign insights, donor trends, and success rates.",
      "Automated Fraud Detection: Implement AI to flag suspicious campaigns.",
      "Recurring Donations: Enable monthly or yearly donation options."
    ]
  }
]



const MyComponent = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    modalRef.current?.showModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="bg-hero-Back2 bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center py-12">
 <h1 className="text-3xl md:text-5xl font-semibold text-center md:text-start pb-8 ">
     Projects
      </h1>
     <div className="max-w-7xl mx-auto relative z-30 py-10 px-2 ">
    
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 justify-center items-center">
        {projectAll?.map((project) => (
          
          <div className="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 shadow-purple-500/50 bg-[#1c1e3a]">
      {/* Project Image */}
      <div className="relative h-72 w-full overflow-hidden rounded-t-2xl">
        <img
          src={project?.image}
          alt={project?.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-5 flex flex-col gap-3 text-white">
        <h2 className="text-xl font-semibold tracking-wide">{project?.title}</h2>
      
        {/* Buttons */}
        <div className="grid grid-cols-3 gap-x-3">
          <Link
            to={project?.liveLink}
            target="_blank"
            className="flex-1 text-center"
          >
            <button  className="hover:bg-purple-600  hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-600 hover:text-white/80 text-white/90 font-semibold hover:text-white py-2 lg:px-4 px-2 border-2 w-full hover:scale-105  rounded-md duration-150  items-center gap-x-1  ">
              Live
            </button>
          </Link>
          
          <Link
            to={project?.githubLink}
            target="_blank"
            className="flex-1 text-center"
          >
            <button  className="hover:bg-purple-600  hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-600 hover:text-white/80 text-white/90 font-semibold hover:text-white py-2 lg:px-4 px-2 border-2 w-full hover:scale-105  rounded-md duration-150  items-center gap-x-1  ">
              GitHub
            </button>
          </Link>
          
          <button
            onClick={() => handleOpenModal(project)}
             className="hover:bg-purple-600  hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-600 hover:text-white/80 text-white/90 font-semibold hover:text-white py-2 lg:px-4 px-2 border-2 w-full hover:scale-105  rounded-md duration-150  items-center gap-x-1  "
          >
            Details
          </button>
        </div>
      </div>
    </div>
        ))}
      </div>

      {/* Modal */}
      <dialog ref={modalRef} className="modal ">
        <div className="modal-box max-w-4xl mx-auto">
          {selectedProject && (
            <Card
            className="bg-blue-950"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={selectedProject?.detailsImage}
            >
            <div className='py-5 px-3'>
            <h1 className='text-2xl text-white'> {selectedProject?.title}</h1>
            <h1 className='text-md flex px-3 justify-around my-3'> {selectedProject?.mainTechonology?.map(main => <button className='border-2 border-blue-950 shadow-2xl shadow-purple-700 font-bold text-blue-400 hover:scale-105 duration-200 px-3 py-1 rounded-md '>{main}</button>)}</h1>
            
            <h1 className='text-md text-white'> {selectedProject?.description}</h1>
            <h1 className='text-xl my-3 text-white'> Potential Improvements & Future Plans : </h1>
            
            <ul className='text-md list-disc pl-5 text-white '>  {selectedProject?.improvements?.map(improve => <li>{improve}</li> )}</ul>
            </div>
           
            </Card> 
          )}
          <div className="modal-action">
            <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </div>
        </div>
      </dialog>
     </div>
    </div>
  );
};

export default MyComponent;
