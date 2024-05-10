import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Login = () => {
  return (
    <div className=" mx-2 md:mx-8 md:mt-24 font-poppins lg:flex gap-5 border-2 rounded-lg shadow-xl">
      <div className="flex-1 bg-purple-500 md:rounded-r-[150px] rounded-l-lg">
        <div className=" text-center p-6 md:p-0 flex justify-center items-center h-full">
          <h2 className="text-3xl font-bold text-white block">
            Welcome To Our Website!! <br></br>{" "}
            <span className="text-xl pt-4 inline-block">
              New To Our Website?
              <Link to="/signup">
                <button className="btn btn-outline text-xl border-none">
                  Register
                </button>
              </Link>
            </span>{" "}
          </h2>
        </div>
      </div>
      <div className="flex-1 md:px-16 md:py-16">
        <h2 className="text-3xl text-center font-poppins mt-4 lg:mt-0 font-bold">
          LogIn Now
        </h2>
        <form className="card-body">
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered"
              name="password"
              required
            />
          </div>
          <div className="form-control w-full mt-6 mx-auto">
            <button className="btn bg-purple-500">Login</button>
          </div>
        </form>
        <div className="flex justify-center items-center gap-5">
          <FcGoogle className="text-3xl"></FcGoogle>
          <FaGithub className="text-3xl"></FaGithub>
          <FaFacebook className="text-3xl"></FaFacebook>
          <FaTwitter className="text-3xl"></FaTwitter>
        </div>
      </div>
    </div>
  );
};

export default Login;
