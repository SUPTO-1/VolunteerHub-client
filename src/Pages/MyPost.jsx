import { IoLocationOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
const MyPost = ({post}) => {
    const {postTitle,thumbnail,description,location,date} = post;
    //console.log(thumbnail);
    return (
        <div>
            <div className="p-2 md:p-5 border-2 rounded-lg shadow-lg mb-5 ">
            <div className="flex gap-5">
               <div className="">
                <img className="h-[150px] w-[150px]" src={thumbnail} alt="" />
               </div>
               <div>
                <h2 className="text-lg md:text-2xl mb-5 font-semibold">Post Title:{" "}{postTitle}</h2>
                <p className="text-[12px] md:text-[18px]">{description}</p>
               </div>
            </div>
            <hr className="mt-4 mb-5 border-[1px]" />
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <div><IoLocationOutline className="text-lg md:text-3xl inline text-purple-500" /></div>
                    <div><p className="text-sm md:text-xl font-semibold">{location}</p></div>
                </div>
                <div className="flex gap-2">
                    <div><CiTimer className=" text-lg md:text-3xl inline text-purple-500" /></div>
                    <div><p className="text-sm md:text-xl font-semibold">{date}</p></div>
                </div>
            </div>
            <div className="flex justify-between mt-5">
               <button className="btn mt-5 bg-purple-400">Delete</button>
               <button className="btn mt-5 bg-purple-400">Update</button>
            </div>
            
        </div>
        </div>
    );
};

export default MyPost;