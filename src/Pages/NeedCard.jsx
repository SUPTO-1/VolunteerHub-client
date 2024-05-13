import { IoLocationOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";
const NeedCard = ({need}) => {
    const {postTitle,thumbnail,description,location,date} = need;
    //console.log(thumbnail);
    return (
        <div>
            <div className="p-5 border-2 rounded-lg shadow-lg mb-5 ">
            <div className="flex gap-5">
               <div className="">
                <img className="h-[150px] w-[150px]" src={thumbnail} alt="" />
               </div>
               <div>
                <h2 className="text-2xl mb-5 font-semibold">Post Title:{" "}{postTitle}</h2>
                <p className="text-[18px]">{description}</p>
               </div>
            </div>
            <hr className="mt-4 mb-5 border-[1px]" />
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <div><IoLocationOutline className="text-3xl inline text-purple-500" /></div>
                    <div><p className="text-xl font-semibold">{location}</p></div>
                </div>
                <div className="flex gap-2">
                    <div><CiTimer className="text-3xl inline text-purple-500" /></div>
                    <div><p className="text-xl font-semibold">{date}</p></div>
                </div>
            </div>
            <Link to={`/details/${need._id}`}><button className="btn w-full mt-5 bg-purple-400">Need Post Details Page</button></Link>
        </div>
        </div>
    );
};

export default NeedCard;