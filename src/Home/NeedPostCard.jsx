import { useEffect, useState } from "react";
import NeedPostCardSingle from "./NeedPostCardSingle";
import { Link } from "react-router-dom";

const NeedPostCard = () => {
    const [sortPosts , setSortPosts] = useState([]);
    useEffect(()=>{
        fetch('https://volunteer-hub-server-eight.vercel.app/volunteers/sort')
        .then(res=>res.json())
        .then(data=>setSortPosts(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-semibold text-poppins text-center mt-10 mb-10">Volunteer Need Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:px-6">
                {
                    sortPosts.slice(0,6).map(sortPost=><NeedPostCardSingle key={sortPost._id} sortPost={sortPost}></NeedPostCardSingle>)
                }
            </div>
            <div className="text-center mt-10">
            <Link to={'/need'}><button className="btn btn-primary text-lg px-6">View All</button></Link>
            </div>
        </div>
    );
};

export default NeedPostCard;