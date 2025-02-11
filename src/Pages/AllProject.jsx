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
    "title": "Learning and Assignment Taking Website",
    "image": "https://i.ibb.co.com/yF3QQF5H/aElaven.png ",
    "detailsImage": "https://i.ibb.co.com/yF3QQF5H/aElaven.png",
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
    "image": " https://i.ibb.co.com/QvJP0RW1/aTen.png",
    "detailsImage": "https://i.ibb.co.com/QvJP0RW1/aTen.png",
    "liveLink": "https://croud-funding-2024.web.app/",
    "githubLink": "https://github.com/programming-hero-web-course2/b10-a10-client-side-ahanaf607307",
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
    <div id="projects" className="max-w-7xl mx-auto relative z-30 py-10 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 justify-center items-center">
        {projectAll?.map((project) => (
          <div
            key={project?.id}
            className="h-[480px] flex flex-col border hover:scale-105 duration-1000 hover:border-blue-800 cursor-pointer rounded-xl "
          >
            <img src={project?.image} className="h-80 w-full rounded-t-xl" alt="" />
            <div className="flex-1 py-3 px-2">
              <h1 className="text-2xl">{project?.title}</h1>
            </div>
            <div className="flex justify-around items-center my-3">
              <Link to={project?.liveLink} target="_blank">
                <button className="rounded-md border px-5 py-1 hover:bg-blue-500 text-white">
                  Live
                </button>
              </Link>
              <button
                className="rounded-md border px-5 py-1 hover:bg-blue-500 text-white"
                onClick={() => handleOpenModal(project)}
              >
                Details
              </button>
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
            <h1 className='text-md flex px-3 justify-around my-3'> {selectedProject?.mainTechonology?.map(main => <button className='border-2 border-blue-950 shadow-2xl shadow-blue-700 font-bold text-blue-400 hover:scale-105 duration-200 px-3 py-1 rounded-md '>{main}</button>)}</h1>
            
            <h1 className='text-md text-white'> {selectedProject?.description}</h1>
            <h1 className='text-xl my-3 text-white'> Potential Improvements & Future Plans : </h1>
            
            <ul className='text-md list-disc pl-5 text-white '>  {selectedProject?.improvements?.map(improve => <li>{improve}</li> )}</ul>
            </div>
            <div className="flex items-center justify-around pb-5">
             <Link className='btn bg-transparent text-white/90 px-10 hover:bg-[#181838] hover:shadow-2xl hover:shadow-blue-700 duration-150 ' target="_blank" to={selectedProject?.liveLink}>Live</Link>
             <Link className='btn bg-transparent text-white/90 px-10 hover:bg-[#181838] hover:shadow-2xl hover:shadow-blue-700 duration-150 ' to={selectedProject?.githubLink} target="_blank">GitHub Repo</Link>
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
  );
};

export default MyComponent;
