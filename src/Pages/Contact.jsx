// import React from 'react'

// function Contact() {
//   return (
//     <div id='contact' className='my-20'>
//       <h1 className='text-5xl font-semibold text-center'>Contact Now</h1>
//       <div>
//         {/* send message */}
//         <div>
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//       <form className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" placeholder="Email" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Message</span>
//           </label>
//           <textarea type="text" placeholder="Write Your Message Here" className="input input-bordered" required />
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Send Message</button>
//         </div>
//       </form>
//     </div>
//         </div>

//         {/* info */}
//         <div>
          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { MdAddCall, MdOutlineMailOutline } from 'react-icons/md'

function Contact() {
  return (
    <div id='contact' className='my-20 border-2 py-10 rounded-xl md:mx-5 lg:mx-0'>
      <div  class="p-5 lg:p-20 grid grid-cols-1 md:grid-cols-2 md:gap-20">
        <div class=" flex flex-col gap-y-5" >
          <h1 className='text-5xl font-semibold'>Lets Connect</h1>
          <p class="my-3">
            Please fill out the form on this section to contact with me or call
            between 9:00 A.M and 8.00 P.M ET, Monday through Friday.
          </p>
          <div className='flex gap-x-2 font-medium text-md my-3 text-white/80'><IoLocationSharp className='text-3xl'/> <p>  Rangpur , Bangladesh</p></div>
          <div className='flex gap-x-2 font-medium text-md my-3 text-white/80'><MdOutlineMailOutline className='text-3xl'/> <p>  ahanaf607307@gmail.com</p></div>
          <div className='flex gap-x-2 font-medium text-md my-3 text-white/80'><MdAddCall className='text-3xl'/> <p>  01609961661</p></div>
          <div className='flex gap-x-2 font-medium text-md my-3 text-white/80'><FaWhatsapp className='text-3xl'/> <p>  01609961661</p></div>
        </div>
        <div class="" >
          <h1 className='text-3xl font-semibold'>Let’s Message me</h1>
          <form action="mailto:ahanaf607307@gmail.com" method="post" enctype="text/plain">
            <input
              type="text"
              name="name"
          className='w-full my-5 py-3 px-5 rounded-xl text-gray-500'
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              name="email"
          className='w-full my-5 py-3 px-5 rounded-xl text-gray-500'
              placeholder="Enter Your Email"
              required
            />
            <textarea
              type="text"
              name="massage"
              className='w-full min-h-24 my-5 py-3 px-5 rounded-xl text-gray-500'
              placeholder="Enter Your Massage"
            />
            <input type="submit" value="Submit" class="submit bg-orange-500 w-full py-3 rounded-xl text-md font-semibold cursor-pointer" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
