// import React from "react";
import "./payment.css";
import {
  eyeIcon,
  rightArrowIcon,
  rightClickIcon,
  timeIcon,
  timeIconBlack,
} from "../../../assets";

const Payment = () => {
  const handleUnlockAllJobs = () => {
    window.location.href = import.meta.env.VITE_APP_PAYMENT_URL;
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-4 py-16 gap-16">
      <div className="text-center mb-4 max-w-xl">
        <h3>
          <span className="tracking-tight pb-3 bg-clip-text text-transparent bg-gradient-to-t from-neutral-500 to-neutral-600 text-balance text-3xl sm:text-4xl lg:text-5xl font-bold">
            You Miss 100% of the shots you don&apos;t take
          </span>
        </h3>
        <div className="pt-8">
          <h3 className="tracking-tight pb-3 bg-clip-text text-transparent bg-gradient-to-t from-neutral-700 to-neutral-800 text-balance text-base sm:text-lg lg:text-lg font-thin">
            Start your journey to the US today, get unlimited access to the
            database and get your first job in the US
          </h3>
        </div>
        <div className="mt-4">
          <ul className="text-center space-y-2">
            <li>✅ Largest database of visa-sponsoring jobs</li>
            <li>✅ Direct access to recruiters, no middlemen</li>
            <li>✅ Weekly updates with fresh opportunities</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-2">Unbeatable Value</h3>
          <p className="text-lg mb-4">
            ₹899 investment → potential $100K+ salary
          </p>
          <table className="w-full border-collapse border border-gray-300 max-w-md mx-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Method</th>
                <th className="border border-gray-300 p-2">Cost</th>
                <th className="border border-gray-300 p-2">Success Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Our Database</td>
                <td className="border border-gray-300 p-2">₹899</td>
                <td className="border border-gray-300 p-2 text-green-600">
                  High
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Job Boards</td>
                <td className="border border-gray-300 p-2">Free - ₹5000+</td>
                <td className="border border-gray-300 p-2 text-yellow-600">
                  Medium
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Desi Consultancies
                </td>
                <td className="border border-gray-300 p-2">₹1,00,000+</td>
                <td className="border border-gray-300 p-2 text-red-600">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="rounded-xl border border-(--border-light-gray) text-(--text-primary-opacity) w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col space-y-1.5 p-6 text-center">
          <div className="tracking-tight text-2xl font-bold">
            Your Gateway to US Jobs
          </div>
          <p className="text-gray-600">Costs Less than 2 pizzas</p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="text-center flex flex-col items-center">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-medium text-gray-400 line-through">
                  ₹1499
                </span>
                <span className="text-4xl font-bold">₹899</span>
              </div>
              <span className="text-xl font-medium text-gray-500 ml-2">
                only
              </span>
            </div>
            <div className="text-sm font-semibold text-yellow-600 mt-2 flex items-center">
              <img src={timeIcon} alt="timeIcon" className="w-4 h-4 mr-1" /> 40%
              off Limited time offer!
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-green-600 font-medium mt-1">
                One-time payment • Lifetime access
              </span>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 px-4">
            <span className="flex items-center">
              <img
                src={timeIconBlack}
                className="w-4 h-4 mr-1"
                alt="timeIconBlack"
              />
              127 new jobs today
            </span>
            <span className="flex items-center">
              <img src={eyeIcon} className="w-4 h-4 mr-1" alt="timeIconBlack" />
              43 people viewing
            </span>
          </div>
          <h3 className="font-bold text-base mt-6 mb-2 text-center">
            What You Get
          </h3>
          <ul className="space-y-3 pl-8 mt-4">
            <li className="flex items-center space-x-3">
              <img
                src={rightClickIcon}
                alt="rightClickIcon"
                className="text-green-500 flex-shrink-0 h-5 w-5"
              />
              <span className="text-sm text-gray-700">
                600,000+ verified US jobs with visa sponsorship
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src={rightClickIcon}
                alt="rightClickIcon"
                className="text-green-500 flex-shrink-0 h-5 w-5"
              />
              <span className="text-sm text-gray-700">
                Direct recruiter emails - no intermediaries
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src={rightClickIcon}
                alt="rightClickIcon"
                className="text-green-500 flex-shrink-0 h-5 w-5"
              />
              <span className="text-sm text-gray-700">
                Actual salary ranges from $80K to $200K+
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src={rightClickIcon}
                alt="rightClickIcon"
                className="text-green-500 flex-shrink-0 h-5 w-5"
              />
              <span className="text-sm text-gray-700">
                Companies actively hiring Indians now
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src={rightClickIcon}
                alt="rightClickIcon"
                className="text-green-500 flex-shrink-0 h-5 w-5"
              />
              <span className="text-sm text-gray-700">
                H-1B & Green Card positions verified by US govt
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src={rightClickIcon}
                alt="rightClickIcon"
                className="text-green-500 flex-shrink-0 h-5 w-5"
              />
              <span className="text-sm text-gray-700">
                New opportunities added every week
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <img
                src={rightClickIcon}
                alt="rightClickIcon"
                className="text-green-500 flex-shrink-0 h-5 w-5"
              />
              <span className="text-sm text-gray-700">
                Free email templates (Bonus)
              </span>
            </li>
          </ul>
          <div className="bg-green-100 p-4 rounded-lg mt-6">
            <p className="text-green-800 font-semibold text-center">
              653 people found US jobs this month!
            </p>
          </div>
        </div>
        <div className="p-6 flex flex-col items-center gap-2 mt-0 pt-0">
          <button
            className="rainbow-button text-xs  md:text-base"
            onClick={handleUnlockAllJobs}
          >
            Unlock Your US Career Now
            <img
              className="w-5 md:h-6 h-5 md:w-6"
              src={rightArrowIcon}
              alt="rightArrowIcon"
            />
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Instant Access • No Hidden Fees
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
