import { useEffect, useState } from "react";
import NeedCard from "./NeedCard";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NeedPage = () => {
  const [needs, setNeeds] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);
  const [tableView, setTableView] = useState(false);
  useEffect(() => {
    fetch("https://volunteer-hub-server-eight.vercel.app/volunteers")
      .then((res) => res.json())
      .then((data) => {
        setNeeds(data);
        setFilterSearch(data);
      });
  }, []);
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   const search = e.target.value;
  //   if (
  //     search != "All" ||
  //     search != "" ||
  //     search != undefined ||
  //     search != 'all'
  //   ) {
  //     fetch(`https://volunteer-hub-server-eight.vercel.app/volunteers/search/${search}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setNeeds(data);
  //       });
  //   }
  //   if (search == " ") {
  //     fetch("https://volunteer-hub-server-eight.vercel.app/volunteers")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setNeeds(data);
  //       });
  //   }
  // };
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.value.trim();
    if (search === "") {
      setFilterSearch(needs);
    } else {
      const filterNeeds = needs.filter((need) => {
        const postTitle = need.postTitle || "";
        return postTitle.toLowerCase().includes(search.toLowerCase());
      });
      const filteredNeeds = filterNeeds;
      setFilterSearch(filteredNeeds);
    }
  };

  const handleView = () => {
    setTableView(!tableView);
  };
  return (
    <div className="font-poppins">
      <Helmet>
        <title>Need Page</title>
      </Helmet>
      <div className="mt-10 flex md:gap-24 justify-center">
        <div>
          <fieldset className="w-full md:ml-[45%] space-y-1 dark:text-gray-800">
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center md:pl-2">
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
                className="w-full md:w-44 py-2 pl-10 text-sm rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
              />
            </div>
          </fieldset>
        </div>
        <div>
          <label className="btn btn-circle swap swap-rotate">
            <input type="checkbox" className="hidden" onChange={handleView} />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
      <div>
        <h1 className="text-3xl mt-10 text-center font-bold mb-6">
          All Available Volunteer Post
        </h1>
        {!tableView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-2 md:px-6">
            {filterSearch.map((need) => (
              <NeedCard key={need._id} need={need}></NeedCard>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th className="font-medium md:text-lg">PostTitle</th>
                  <th className="font-medium md:text-lg">Location</th>
                  <th className="font-medium md:text-lg">Deadline</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filterSearch.map((need) => {
                  return (
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={need.thumbnail}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-medium md:text-lg">{need.postTitle}</div>
                          </div>
                        </div>
                      </td>
                      <td className="font-medium md:text-lg">{need.location}</td>
                      <td className="font-medium md:text-lg">{need.date}</td>
                      <th>
                        <Link to={`/details/${need._id}`}>
                          <button className="btn btn-primary btn-xs md:btn-sm">Details</button></Link>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default NeedPage;
