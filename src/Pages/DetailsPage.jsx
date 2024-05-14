import { Link, useLoaderData } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import men from '../../public/images/men.png';
import { MdOutlineMail } from "react-icons/md";
import { Helmet } from "react-helmet";
const DetailsPage = () => {
    const newNeed = useLoaderData();
    const { postTitle , category , thumbnail , description , location, date , organizationName , organizationEmail , volunteers } = newNeed;
    return (
        <div>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <h2 className="text-3xl font-semibold text-poppins text-center mt-10">Details of {category}</h2>
            <div className=" p-2 md:p-10 w-3/4 mx-auto font-montserrat mt-10 border-2 rounded-lg shadow-lg mb-5">
        <div className="md:flex gap-10">
           <div className="">
            <img className="w-full md:h-[400px] md:w-[400px]" src={thumbnail} alt="" />
           </div>
           <div>
            <div className="md:flex justify-between">
            <h2 className="text-lg md:text-2xl font-montserrat mb-5 font-semibold">Post Title:{" "}{postTitle}</h2>
            <h2 className="text-lg md:text-2xl mb-5 font-semibold">Category:{" "}{category}</h2>
            </div>
            <p className="text-[12px] w-11/12 md:text-xl">{description}</p>
            <div className="mt-6">
                <h2 className="text-lg md:text-xl text-gray-700 mb-5 font-semibold">Volunteers Need:{" "}{volunteers}</h2>
            </div>
            <div className="md:flex mt-10 justify-between">
                <div className="flex gap-2 -ml-2 md:ml-0">
                    <img src={men} className="h-[50px] w-[50px]" alt="" />
                    <h2 className=" text-sm md:text-xl mt-2 md:text-2x mb-5 font-semibold">{organizationName}</h2>
                </div>
                <div className="flex gap-2 mt-2">
                    <MdOutlineMail className="text-xl md:text-3xl inline" />
                    <p className="text-sm md:text-xl font-semibold">{organizationEmail}</p>
                </div>
            </div>
           </div>
        </div>
        <hr className="mt-4 mb-5 border-[1px]" />
        <div className="flex justify-between">
            <div className="flex gap-2">
                <div><IoLocationOutline className="text-xl md:text-3xl inline text-purple-500" /></div>
                <div><p className="text-sm md:text-xl font-semibold">{location}</p></div>
            </div>
            <div className="flex gap-2">
                <div><CiTimer className="text-xl md:text-3xl inline text-purple-500" /></div>
                <div><p className="text-sm md:text-xl font-semibold">{date}</p></div>
            </div>
        </div>
        <Link to={`/be-a-volunteer/${newNeed._id}`}><button className="btn w-full mt-5 bg-purple-400">Be a Volunteer</button></Link>
    </div>
        </div>
    );
};

export default DetailsPage;