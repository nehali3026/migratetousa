/* eslint-disable react/prop-types */
import {
  companyIcon,
  directMsgIcon,
  dollarIcon,
  locationIcon,
  profileIcon,
} from "../../../assets";

const visaTypeIcons = {
  "H-1B": "🌍 H-1B",
  greencard: "🏠 Green Card",
  "E-3 Australian": "E-3 Australian",
  "H-1B1 Chile": "H-1B1 Chile",
  "H-1B1 Singapore": "H-1B1 Singapore",
};

const JobCard = ({ hit, isLandinngPage }) => {
  // Generate mailto link
  const generateMailtoLink = () => {
    const recruiterEmail = hit?.employer_poc_email;
    if (!recruiterEmail) return "#"; // Fallback if email is missing

    const subject = "Are you hiring for Electrophysiology – Cardiology (EP)?";

    const body = `Hi ${hit?.employer_poc_first_name},%0D%0A%0D%0A
I'm ${hit?.employer_poc_first_name}. I'm an ${hit?.job_title} with [Your Experience] years of experience. Here are a few notable achievements of mine:%0D%0A%0D%0A
1. [Achievement 1]%0D%0A
2. [Achievement 2]%0D%0A
3. [Achievement 3]%0D%0A%0D%0A
I've attached my resume. I checked your career page but couldn't find public roles. Are you hiring in this space in the next few months?%0D%0A%0D%0A
Kind regards,%0D%0A
${hit?.employer_poc_first_name}`;

    return `mailto:${recruiterEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <div className={`${isLandinngPage ? "" : "border-b last:border-b-0 p-2"}`}>
      <div className="transition-shadow duration-200 p-4 flex flex-col sm:flex-row gap-5 md:gap-0 items-start justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 ">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-gray-900">
                  {hit?.job_title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-(--bg-gray) text-(--text-primary-hover) hover:bg-secondary/80 text-xs">
                    {visaTypeIcons?.[hit?.visa_class]}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-600 gap-1">
                  <img src={companyIcon} className="w-3 h-3 flex-shrink-0" />
                  <div className="line-clamp-2">{hit?.company_name}</div>
                </div>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <img src={locationIcon} className="w-3 h-3 flex-shrink-0" />
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {hit?.worksite_city}, {hit?.worksite_state}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <img src={dollarIcon} className="w-4 h-4 flex-shrink-0" />
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {hit?.salary?.toLocaleString("en-IN")}/{hit?.pw_unit_of_pay}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-600">
              <span className="w-full sm:w-auto">Recruiter:</span>
              <div className="flex items-center gap-1">
                <img src={profileIcon} className="h-3 w-3" />
                <span>{hit?.employer_poc_first_name}</span>
              </div>
              {/* Email Link */}
              <a
                href={generateMailtoLink()}
                className="group flex items-center gap-1 hover:text-indigo-600 transition-colors font-bold"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a5565"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-[#4a5565] group-hover:stroke-indigo-600"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>{hit?.employer_poc_email?.toLowerCase()}</span>
              </a>
              {/* Phone Number */}
              <a
                href={`tel:${hit?.employer_poc_phone_no}`}
                className="group flex items-center gap-1 hover:text-indigo-600 transition-colors font-bold"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke=""
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-[#4a5565] group-hover:stroke-indigo-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{hit?.employer_poc_phone_no}</span>
              </a>
            </div>
          </div>
        </div>
        <a
          href={generateMailtoLink()}
          className="justify-end flex sm:flex"
          target="_blank"
        >
          <button className="inline-flex items-center justify-center gap-2 min-w-[118px] whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-(--text-primary-hover) text-(--white) shadow hover:bg-[#18181be6] h-8 rounded-md px-3 text-xs font-semibold cursor-pointer">
            <img src={directMsgIcon} className="h-4 w-4" />
            Direct Apply
          </button>
        </a>
      </div>
    </div>
  );
};

export default JobCard;
