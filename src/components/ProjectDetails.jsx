import { Button, Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const {id} = useParams()
const [projectsDetails, setProjectsDetails] = useState({});

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`/projects.json`);
            const data = await response.json();
            const filterData = data.find(pro => pro.id == id)
            setProjectsDetails(filterData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, [id]);


    return (
        <div className=' md:p-10 lg:p-20 max-w-4xl mx-auto '>
          <Link to='/' className='my-5'><Button>Home </Button></Link>
          
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <Card
className="bg-blue-950"
imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
imgSrc={projectsDetails?.detailsImage}
>
<div className='py-5 px-3'>
<h1 className='text-2xl text-white'> {projectsDetails?.title}</h1>
<h1 className='text-md flex px-3 justify-around my-3'> {projectsDetails?.mainTechonology?.map(main => <button className='border-2 border-blue-950 shadow-2xl shadow-blue-700 font-bold text-blue-400 hover:scale-105 duration-200 px-3 py-1 rounded-md '>{main}</button>)}</h1>

<h1 className='text-md text-white'> {projectsDetails?.description}</h1>
<h1 className='text-xl my-3 text-white'> Potential Improvements & Future Plans : </h1>

<ul className='text-md list-disc pl-5 text-white '>  {projectsDetails?.improvements?.map(improve => <li>{improve}</li> )}</ul>
</div>
<div className="flex items-center justify-around pb-5">
 <Link className='btn bg-transparent text-white/90 px-10 hover:bg-[#181838] hover:shadow-2xl hover:shadow-blue-700 duration-150 ' target="_blank" to={projectsDetails?.liveLink}>Live</Link>
 <Link className='btn bg-transparent text-white/90 px-10 hover:bg-[#181838] hover:shadow-2xl hover:shadow-blue-700 duration-150 ' to={projectsDetails?.githubLink} target="_blank">GitHub Repo</Link>
</div>
</Card> 
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default ProjectDetails;


