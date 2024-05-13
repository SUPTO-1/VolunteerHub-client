import { IoLocationOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import Swal from "sweetalert2";
const MyRequestPost = ({request , volunteerRequest , setVolunteerRequest}) => {
    const {_id,postTitle,thumbnail,description,location,status} = request;
    const handleCancel = (_id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to cancel it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/requests/${_id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Cancel Successfully.",
                            icon: "success"
                          });
                        const remaining = volunteerRequest.filter(request => request._id !== _id);
                        setVolunteerRequest(remaining);
                    }
                })
            }
          })
    }
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
                    <div><p className="text-sm md:text-xl font-semibold">{status}</p></div>
                </div>
            </div>
            <div className="flex justify-between mt-5">
               <button onClick={()=>handleCancel(_id)} className="btn w-full mt-5 bg-purple-400">Cancel Request</button>
            </div>
        </div>
        </div>
    );
};

export default MyRequestPost;