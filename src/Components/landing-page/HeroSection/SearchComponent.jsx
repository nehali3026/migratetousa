import { Check, CircleAlert, LoaderCircle } from "lucide-react";
import { rightArrowIcon, searchIcon, searchIconWhite } from "../../../assets";
import "./SearchComponent.css";
import { VISA_TYPES_CHECKBOXES } from "../../../utils/data";
import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../../pro-page/Dashboard/JobCard";

const SearchComponent = () => {
  const [searchJson, setSearchJson] = useState({
    query: "",
    visa: ["H-1B"],
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobData, setJobData] = useState();
  const [isDisplayJobs, setIsDisplayJobs] = useState(false);

  useEffect(() => {
    setSearchJson({
      query: "",
      visa: ["H-1B"],
    });
  }, []);

  const handleCheckboxClick = (val) => {
    const checkboxVlaues = [...searchJson.visa];
    if (checkboxVlaues.includes(val)) {
      const index = checkboxVlaues.indexOf(val);
      checkboxVlaues.splice(index, 1);
    } else {
      checkboxVlaues.push(val);
    }
    setSearchJson({
      ...searchJson,
      visa: checkboxVlaues,
    });
  };

  const handleSearchJobClick = async () => {
    if (!searchJson.query) {
      setError("Please enter a job title");
      return;
    }

    setError("");
    setLoading(true);
    setIsDisplayJobs(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BAKEND_URL}/jobs/search?query=${
          searchJson.query
        }&visa=${searchJson.visa}`
      );
      setJobData(response.data);
    } catch (error) {
      setError(error?.message || "Something went wrong");
      setLoading(false);
      return error;
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchJson({
      ...searchJson,
      [name]: value,
    });
  };

  const handleUnlockAllJobs = () => {
    window.location.href = import.meta.env.VITE_APP_PAYMENT_URL;
  };

  return (
    <div className=" bg-white p-2  md:p-8 rounded-2xl space-y-6 border-gray-50 border-2">
      <div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex-1 relative overflow-hidden w-full">
              <img
                src={searchIcon}
                alt="search icon"
                className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              />
              <input
                className="flex bg-transparent px-3 py-1 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#23263b] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 pl-12 h-14 md:text-xl w-full rounded-full border-2 border-indigo-100 focus:border-indigo-300 transition-colors"
                id="job-search"
                placeholder="e.g., Software Engineer, Data Scientist"
                type="text"
                onChange={handleInputChange}
                value={searchJson?.query}
                name="query"
              />
              <div className="border-beam-effect"></div>
            </div>
            <div className="flex flex-row sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full  mt-2">
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm w-24 font-semibold text-gray-700 sm:mr-2">
                Visa Type:
              </label>
              <div className="flex flex-row items-center justify-start w-full gap-4 flex-wrap">
                {VISA_TYPES_CHECKBOXES.map((checkbox) => (
                  <div
                    className="flex items-center space-x-2 cursor-pointer transition-colors"
                    key={checkbox.value}
                  >
                    <button
                      type="button"
                      role="checkbox"
                      value="on"
                      className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer ${
                        searchJson.visa.includes(checkbox.value)
                          ? "bg-(--text-primary-hover)"
                          : "bg-white"
                      }`}
                      id={checkbox.value}
                      aria-checked="true"
                      data-checked="true"
                      onClick={() => handleCheckboxClick(checkbox.value)}
                    >
                      {searchJson.visa.includes(checkbox.value) && (
                        <span
                          data-state="checked"
                          className="flex items-center justify-center text-current"
                        >
                          <Check className="w-4 h-4 text-white" />
                        </span>
                      )}
                    </button>
                    <label
                      className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium cursor-pointer whitespace-nowrap"
                      htmlFor={checkbox.value}
                    >
                      {checkbox.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="min-w-[196px] cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-(--text-primary-hover) text-(--white) shadow hover:bg-(--text-primary-hover)/90 py-2 h-14 mt-4 md:mt-0 px-8 text-lg rounded-full"
            onClick={handleSearchJobClick}
            disabled={loading}
          >
            {loading ? (
              <React.Fragment>
                <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                Searching...
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img src={searchIconWhite} className="mr-2 h-4 w-4" />
                Search Jobs
              </React.Fragment>
            )}
          </button>
        </div>
        <div className="mt-4">
          {error && (
            <div className="text-red-500 text-sm mb-4 text-center">
              <div className="my-2 flex items-center justify-center gap-2 bg-red-50 p-3 rounded-lg border border-red-200">
                <CircleAlert className="w-5 h-5 text-red-500" />
                <span>{error}</span>
              </div>
            </div>
          )}

          {jobData?.length > 0
            ? jobData?.map((job) => (
                <React.Fragment key={job.id}>
                  <JobCard hit={job} isLandinngPage={true} />
                </React.Fragment>
              ))
            : isDisplayJobs &&
              jobData?.length <= 0 && (
                <div className="text-center py-4 text-gray-600 bg-yellow-50 rounded-lg">
                  No results found
                </div>
              )}

          {isDisplayJobs && !loading && (
            <div className="p-6 flex flex-col items-center gap-2 mt-0 pt-0">
              <button
                className="rainbow-button text-xs  md:text-base !rounded-xl"
                onClick={handleUnlockAllJobs}
              >
                Unlock All Jobs
                <img
                  className="w-5 md:h-6 h-5 md:w-6"
                  src={rightArrowIcon}
                  alt="rightArrowIcon"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
