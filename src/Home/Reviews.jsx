import first from "../../public/images/review1.png";
import second from "../../public/images/review2.png";
import third from "../../public/images/review3.png";
const Reviews = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-poppins text-center mt-10">
        Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:flex gap-10 mt-10 bg-[#d3dae4] p-5 rounded-lg shadow-lg">
          <div className="">
            <img className="rounded-full" src={first} alt="" />
          </div>
          <div className="p-3 bg-[#42424c] rounded-lg">
            <p className="text-xs md:text-[14px] font-poppins text-white">
              Volunteers from VolunteerHub recently undertook a beach cleanup,
              making a significant impact by removing debris and litter. Their
              hard work not only beautified the area but also helped protect
              marine life.
            </p>
            <div className="text-center mt-5">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
              </div>
            </div>
            <p className="text-white text-center mt-2">- John Doe</p>
            <hr className="border-[1px] border-dashed w-1/2 mx-auto" />
            <p className="text-white text-center">Outreach Coordinator</p>
          </div>
        </div>
        <div className="md:flex gap-10 mt-10 bg-[#d3dae4] p-5 rounded-lg shadow-lg">
          <div className="">
            <img className="rounded-full" src={second} alt="" />
          </div>
          <div className="p-3 bg-[#42424c] rounded-lg">
            <p className="text-xs md:text-[14px] font-poppins text-white">
            Volunteers from VolunteerHub recently dedicated their time to an animal shelter, providing care and support for the animals. Their efforts greatly enhanced the shelter environment.
            </p>
            <div className="text-center mt-5">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
              </div>
            </div>
            <p className="text-white text-center mt-2">- John Wick</p>
            <hr className="border-[1px] border-dashed w-1/2 mx-auto" />
            <p className="text-white text-center">CEO of High Table</p>
          </div>
        </div>
        <div className="md:flex gap-10 mt-10 bg-[#d3dae4] p-5 rounded-lg shadow-lg">
          <div className="">
            <img className="rounded-full" src={third} alt="" />
          </div>
          <div className="p-3 bg-[#42424c] rounded-lg">
            <p className="text-xs md:text-[14px] font-poppins text-white">
            Volunteers from VolunteerHub recently provided shelter to homeless individuals, offering much-needed support and care. Their compassionate efforts significantly improved the lives of those in need.
            </p>
            <div className="text-center mt-5">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-[#f8be10] mr-2"
                />
              </div>
            </div>
            <p className="text-white text-center mt-2">- Alex Johnson</p>
            <hr className="border-[1px] border-dashed w-1/2 mx-auto" />
            <p className="text-white text-center">Mayor of High Table</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
