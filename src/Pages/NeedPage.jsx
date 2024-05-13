import { useEffect, useState } from "react";
import NeedCard from "./NeedCard";

const NeedPage = () => {
  const [needs, setNeeds] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/volunteers")
      .then((res) => res.json())
      .then((data) => {
        setNeeds(data);
      });
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.value;
    if (
      search != "All" ||
      search != "" ||
      search != undefined ||
      search != 'all'
    ) {
      fetch(`http://localhost:5000/volunteers/search/${search}`)
        .then((res) => res.json())
        .then((data) => {
          setNeeds(data);
        });
    }
    if (search == "") {
      fetch("http://localhost:5000/volunteers")
        .then((res) => res.json())
        .then((data) => {
          setNeeds(data);
        });
    }
  };
  return (
    <div className="font-poppins">
      <div className="mt-10">
        <fieldset className="w-full ml-[30%] md:ml-[45%] space-y-1  dark:text-gray-800">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              onChange={handleSearch}
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
            />
          </div>
        </fieldset>
      </div>
      <div>
        <h1 className="text-3xl mt-10 text-center font-bold mb-6">
          All Available Volunteer Post
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-6">
          {needs.map((need) => (
            <NeedCard key={need._id} need={need}></NeedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeedPage;
