import { CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";
const NeedPostCardSingle = ({sortPost}) => {
    const {postTitle,thumbnail,date , category} = sortPost;
    return (
        <div className=" p-3 md:p-6 border-2 rounded-lg shadow-lg">
            <div className="text-center mb-10 border-2 rounded-lg">
                <img className="h-[300px] w-[300px] p-2 md:p-4 rounded-lg mx-auto" src={thumbnail} alt="" />
            </div>
            <div>
                <div className="flex justify-between mt-10">
                <h2 className="text-sm md:text-xl mb-5 font-semibold">Post Title:{" "}{postTitle}</h2>
                <h2 className="text-sm md:text-xl mb-5 font-semibold">Category:{" "}{category}</h2>
                </div>
            </div>
            <hr className="mt-4 mb-8 border-[1px]" />
            <div className="flex justify-between mb-5 md:mb-0">
                <div className="flex gap-3">
                    <CiTimer className=" text-lg md:text-3xl inline text-purple-500" />
                    <p className="text-sm md:text-xl font-semibold">{date}</p>
                </div>
                <Link to={`/details/${sortPost._id}`}><button className="btn btn-sm md:btn-md btn-primary ">View Details</button></Link>
            </div>
        </div>
    );
};

export default NeedPostCardSingle;