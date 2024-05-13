import { useLoaderData } from "react-router-dom";
import MyPost from "./MyPost";

const ManageVolunteer = () => {
    const myPosts = useLoaderData();
    console.log(myPosts);
    
    return (
        <div>
           <h2 className="text-3xl font-semibold text-poppins text-center mt-10 mb-10">My Posts</h2> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-2 md:px-6">
            {
                myPosts.map((post)=><MyPost key={post._id} post={post}></MyPost>)
            }
           </div>
        </div>
    );
};

export default ManageVolunteer;
