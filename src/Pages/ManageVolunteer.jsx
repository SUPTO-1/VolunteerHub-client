import {  useParams } from "react-router-dom";
import MyPost from "./MyPost";
import { useEffect, useState } from "react";
import MyRequestPost from "./MyRequestPost";

const ManageVolunteer = () => {
    const {email} = useParams();
    const [posts, setPosts] = useState([]);
    const [volunteerRequest , setVolunteerRequest] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/volunteers/user/${email}`)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    useEffect(()=>{
        fetch(`http://localhost:5000/requests/${email}`)
        .then(res=>res.json())
        .then(data=>setVolunteerRequest(data))
    },[])
    
    return (
        <div>
           <h2 className="text-3xl font-semibold text-poppins text-center mt-10 mb-10">My Posts</h2> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-10 px-2 md:px-6 border-2 rounded-lg shadow-lg md:p-10">
            {
                posts.map((post)=><MyPost key={post._id} posts={posts} setPosts={setPosts} post={post}></MyPost>)
            }
           </div>

           <h2 className="text-3xl font-semibold text-poppins text-center mt-10 mb-10">My Volunteer Requests</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-10 px-2 md:px-6 border-2 rounded-lg shadow-lg md:p-10">
            {
                volunteerRequest.map((request)=><MyRequestPost key={request._id} volunteerRequest={volunteerRequest} setVolunteerRequest={setVolunteerRequest} request={request}></MyRequestPost>)
            }
           </div>
        </div>
    );
};

export default ManageVolunteer;
