import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="mx-2 md:mx-8 font-roboto mt-24 lg:flex flex-row-reverse gap-5 border-2 rounded-lg shadow-xl">
        <div className="flex-1 bg-purple-500 md:rounded-l-[150px] rounded-r-lg ">
        <div className=" text-center p-6 md:p-0 flex justify-center items-center h-full">
          <h2 className="text-3xl font-bold text-white block">
            Welcome To Our Website!! <br></br>{" "}
            <span className="text-xl pt-4 inline-block">
              Already Have An Account?
              <Link to="/login">
                <button className="btn btn-outline text-xl border-none">
                  Login
                </button>
              </Link>
            </span>{" "}
          </h2>
        </div>
      </div>
        <div className="flex-1 md:px-16 py-10  ">
          <h2 className="text-3xl text-center font-poppins mt-4 lg:mt-0 font-bold">
            Register Now
          </h2>
          <form className="card-body">
            <div className="form-control w-full mx-auto">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
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
                <span className="label-text text-xl">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Give Photo Url"
                className="input input-bordered"
                name="photo"
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
            <div className="form-control w-full mt-6 mb-2 mx-auto">
              <button className="btn bg-purple-500">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignUp;