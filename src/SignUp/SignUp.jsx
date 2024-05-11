import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const photo = formData.get("photo");
    // password validation here
    const passwordCheckerUpper = /^(?=.*[A-Z]).*$/;
    const passwordCheckerLower = /^(?=.*[a-z]).*$/;

    if (password.length < 6) {
      Swal.fire({
        title: "error!",
        text: "Password Length Must be more then 6",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }
    else if (!passwordCheckerUpper.test(password)) {
      Swal.fire({
        title: "error!",
        text: "Password must contain at least one uppercase letter",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }
    else if (!passwordCheckerLower.test(password)) {
      Swal.fire({
        title: "error!",
        text: "Password must contain at least one lowercase letter",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }

    //Authentication here
    createUser(email, password, name, photo)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: "success!",
          text: "User SignUp successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          title: "error!",
          text: "Something went wrong. Try again!",
          icon: "error",
          confirmButtonText: "Okay",
        });
      })
  }
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
          <h2 className="text-3xl text-center text-purple-950 font-poppins mt-4 lg:mt-0 font-bold">
            Register Now
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control w-full mx-auto">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="rounded-lg text-xl input-bordered border-purple-500 border-2 "
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
                className="rounded-lg text-xl input-bordered border-purple-500 border-2 "
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
                className="rounded-lg text-xl input-bordered border-purple-500 border-2 "
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
                className="rounded-lg text-xl input-bordered border-purple-500 border-2 "
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