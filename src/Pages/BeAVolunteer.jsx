import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import joinUs from '../../public/images/needYou.jpg';
import Swal from 'sweetalert2'
const BeAVolunteer = () => {
    const {user} = useContext(AuthContext);
    const newUser1= useLoaderData();
    const [newUser, setNewUser] = useState(newUser1);
    useEffect(()=>{
        setNewUser(newUser1);
    },[newUser1]);
    const {_id,postTitle,thumbnail , organizationName , organizationEmail , volunteers , category , date ,location , description} = newUser;
    const handleRequest = (e) => {
        e.preventDefault();
        const form = e.target;
        const organizationName = form.organizationName.value;
        const organizationEmail = form.organizationEmail.value;
        const thumbnail = form.thumbnail.value;
        const postTitle = form.postTitle.value;
        const date = form.date.value;
        const volunteers = form.volunteers.value;
        const category = form.category.value;
        const location = form.location.value;
        const description = form.description.value;
        const volunteerName = form.volunteerName.value;
        const volunteerEmail = form.volunteerEmail.value;
        const suggestion = form.suggestion.value;
        const status = form.status.value;
        const newVolunteer = {
            organizationName,
            organizationEmail,
            thumbnail,
            postTitle,
            date,
            volunteers,
            category,
            location,
            description,
            volunteerName,
            volunteerEmail,
            suggestion,
            status
        }
        console.log(newVolunteer);

        //send data to request server

        fetch('http://localhost:5000/requests',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'success!',
              text: 'Request sent successfully',
              icon: 'success',
              confirmButtonText: 'Okay'
            })
            form.reset();
          }
        })


        // update volunteer database


        fetch(`http://localhost:5000/volunteers/requests/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVolunteer)
        })
        .then(res => res.json())
        .then(data => {
          setNewUser(data);
          console.log(data);
        })


    }
    return (
        <div className="mx-2 md:mx-8 font-roboto mt-24 lg:flex  gap-5 border-2 rounded-lg shadow-xl">
      <div className="flex-1 md:rounded-r-[150px] rounded-r-lg ">
        <img src={joinUs} alt="" />
      </div>
      <div className="flex-1 md:px-16 py-10">
        <h2 className="text-3xl text-center text-[#59e4a8] font-poppins lg:mt-0 font-bold">
          Join Us
        </h2>
        <form onSubmit={handleRequest} className="card-body bg-[#d5f7e7] rounded-lg mt-5">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-2'>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Organization Name</span>
            </label>
            <input
              type="text"
              value={organizationName}
              className="text-xl input-bordered  bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="organizationName"
              readOnly
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Organization E-mail</span>
            </label>
            <input
              type="text"
              value={organizationEmail}
              className=" text-xl input-bordered bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="organizationEmail"
              readOnly
            />
          </div>
          </div>
          <div className='mb-2'>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Thumbnail</span>
            </label>
            <input
              type="text"
              value={thumbnail}
              className="text-xl bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="thumbnail"
              readOnly
            />
          </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 mb-2 gap-6'>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Post Title</span>
            </label>
            <input
              type="text"
              value={postTitle}
              className="text-xl input-bordered  bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="postTitle"
              readOnly
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Category</span>
            </label>
            <input
              type="text"
              value={category}
              className=" text-xl input-bordered bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="category"
              readOnly
            />
          </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-2'>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">No of Volunteers</span>
            </label>
            <input
              type="text"
              value={volunteers}
              className="text-xl input-bordered  bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="volunteers"
              readOnly
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Location</span>
            </label>
            <input
              type="text"
              value={location}
              className=" text-xl input-bordered bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="location"
              readOnly
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Deadline</span>
            </label>
            <input
              type="text"
              value={date}
              className=" text-xl input-bordered bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="date"
            />
          </div>
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Description</span>
            </label>
            <input
              type="text"
             value={description}
              className=" text-xl input-bordered bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="description"
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-2'>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Volunteer Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              className="text-xl input-bordered  bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="volunteerName"
              readOnly
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Volunteer E-mail</span>
            </label>
            <input
              type="text"
              value={user?.email}
              className=" text-xl input-bordered bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="volunteerEmail"
              readOnly
            />
          </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-2'>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Suggestion</span>
            </label>
            <input
              type="text"
              placeholder="Suggestion"
              className="text-xl input-bordered  bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="suggestion"
              required
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Status</span>
            </label>
            <input
              type="text"
              placeholder="Requested"
              className=" text-xl input-bordered bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="status"
              required
            />
          </div>
          </div>
          <div className="form-control w-full mt-6 mb-2 mx-auto">
            <button className="btn bg-[#59e4a8] border-[#59e4a8]">Request</button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default BeAVolunteer;