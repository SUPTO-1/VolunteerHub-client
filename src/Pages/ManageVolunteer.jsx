import {  useParams } from "react-router-dom";
import MyPost from "./MyPost";
import { useEffect, useState } from "react";

const ManageVolunteer = () => {
    const {email} = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/volunteers/user/${email}`)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    console.log(posts);
    
    return (
        <div>
           <h2 className="text-3xl font-semibold text-poppins text-center mt-10 mb-10">My Posts</h2> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-2 md:px-6">
            {
                posts.map((post)=><MyPost key={post._id} posts={posts} setPosts={setPosts} post={post}></MyPost>)
            }
           </div>
        </div>
    );
};

export default ManageVolunteer;
