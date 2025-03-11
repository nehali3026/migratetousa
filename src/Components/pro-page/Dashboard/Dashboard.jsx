// import React from 'react'

import {
  Configure,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch";
import { countryIcon, proImageMain } from "../../../assets";
import "./Dashboard.css";
import { searchClient } from "../../../utils/typesenseadapter";
import JobCard from "./JobCard";
import SalarySliderRange from "./SalarySliderRange";
import { useState } from "react";

const getVisaLabelWithIcon = (label) => {
  const formattedLabel =
    label.toLowerCase() === "greencard" ? "Green Card" : label;
  const visaIcons = {
    "H-1B": "🌍",
    "Green Card": "🏠",
    "E-3 Australian": "🐂",
    "H-1B1 Chile": "🇨🇱",
    "H-1B1 Singapore": "🇸🇬",
  };

  return (
    <span>
      {formattedLabel}&nbsp;
      {visaIcons[formattedLabel] && (
        <span className="mr-1">{visaIcons[formattedLabel]}</span>
      )}
    </span>
  );
};

const Dashboard = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <header className="sticky top-0 z-50 ">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between ">
          <a
            className="flex items-center gap-2 bg-(--bg-main) py-1 px-2 rounded-full"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" h-6 w-6 mr-2 font-thin"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            <span className="font-bold text-xl">
              MoveToUSA<span className="text-purple-600">.co</span>
            </span>
          </a>
        </div>
      </header>
      <div className="pt-10 min-h-[calc(100vh-190px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 min-h-screen ">
          <div className="relative text-center py-28 px-4 bg-gradient-to-b from-gray-200 to-gray-100 overflow-hidden mb-4 rounded-md">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-[0.2] bg-center object-center"
                src={proImageMain}
                alt="proImageMain"
              />
            </div>
            <div className="container mx-auto relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 max-w-3xl">
                  Welcome to Premium Search
                </h1>
                <img src={countryIcon} className="w-20 h-20 hidden md:block " />
              </div>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto text-balance">
                Unlimited access to 600,000+ verified jobs with visa
                sponsorship. Use the filters below to find your perfect role.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:grid md:grid-cols-4 gap-8">
            <InstantSearch searchClient={searchClient} indexName="job-data">
              <Configure hitsPerPage={13} filters={filter} />
              <div className="space-y-6">
                <div className="bg-blue-50/75 p-6 rounded-[0.5rem] shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-4">Visa Type</h3>
                  <RefinementList
                    attribute="visa_class"
                    transformItems={(items) =>
                      items.map((item) => ({
                        ...item,
                        label: getVisaLabelWithIcon(item.label),
                      }))
                    }
                  />
                </div>
                <SalarySliderRange attribute="salary" setFilter={setFilter} />
                <div className="bg-blue-50/75 p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-4">City</h3>
                  <RefinementList attribute="worksite_city" searchable />
                </div>
                <div className="bg-blue-50/75 p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-4">State</h3>
                  <RefinementList attribute="worksite_state" searchable />
                </div>
                <div className="bg-blue-50/75 p-6 rounded-lg shadow-sm">
                  <h3 className="font-medium text-gray-900 mb-4">Companies</h3>
                  <RefinementList attribute="company_name" searchable />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-4 pr-2 w-full">
                  <SearchBox placeholder="e.g., Software Engineer, Data Scientist" />
                </div>
                <div className="bg-white rounded-lg shadow-sm">
                  <Hits hitComponent={JobCard} />
                </div>
                <div className="mt-8 flex justify-center">
                  <Pagination className="Pagination" />
                </div>
              </div>
            </InstantSearch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
