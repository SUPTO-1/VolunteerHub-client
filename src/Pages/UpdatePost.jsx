import { useContext } from 'react';
import joinUs from '../../public/images/update.jpg';
import { AuthContext } from '../Providers/AuthProvider';
import { useState } from "react";
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2'
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from 'react-router-dom';
const UpdatePost = () => {
    const post = useLoaderData();
    const {thumbnail, postTitle, date, volunteers, category, location, description} = post;
    const {user} = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const handleUpdate = (e) => {
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

        const newPost = {
          organizationName,
          organizationEmail,
          thumbnail,
          postTitle,
          date,
          volunteers,
          category,
          location,
          description
        };
        console.log(newPost);

        //send data to server
    }
    return (
        <div className="mx-2 md:mx-8 font-roboto mt-24 lg:flex  gap-5 border-2 rounded-lg shadow-xl">
      <div className="flex-1 md:rounded-r-[150px] rounded-r-lg ">
        <img src={joinUs} alt="" />
      </div>
      <div className="flex-1 md:px-16 py-10">
        <h2 className="text-3xl text-center text-[#59e4a8] font-poppins md:pt-6 lg:mt-0 font-bold">
          Update Post
        </h2>
        <form onSubmit={handleUpdate} className="card-body bg-[#d5f7e7] rounded-lg mt-10">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-2'>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Organization Name</span>
            </label>
            <input
              type="text"
              placeholder={user?.displayName}
              value={user?.displayName}
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
              value={user?.email}
              placeholder={user?.email}
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
              placeholder={thumbnail}
              className="text-xl bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="thumbnail"
              required
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
              placeholder={postTitle}
              className="text-xl input-bordered  bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="postTitle"
              required
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Category</span>
            </label>
            <input
              type="text"
              placeholder={category}
              className=" text-xl input-bordered bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="category"
              required
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
              placeholder={volunteers}
              className="text-xl input-bordered  bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="volunteers"
              required
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Location</span>
            </label>
            <input
              type="text"
              placeholder={location}
              className=" text-xl input-bordered bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="location"
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Deadline</span>
            </label>
            <DatePicker name='date' className='bg-[#d5f7e7] w-full border-x-0 border-t-0 border-[#59e4a8] border-2 mt-1' selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-lg">Description</span>
            </label>
            <input
              type="text"
              placeholder={description}
              className=" text-xl input-bordered bg-[#d5f7e7] border-[#59e4a8] border-2 border-t-0 border-x-0"
              name="description"
            />
          </div>
          <div className="form-control w-full mt-6 mb-2 mx-auto">
            <button className="btn bg-[#59e4a8] border-[#59e4a8]">Update Post</button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdatePost;