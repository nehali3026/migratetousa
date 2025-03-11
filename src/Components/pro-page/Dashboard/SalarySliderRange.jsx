/* eslint-disable react/prop-types */
import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

const SalarySliderRange = ({ attribute, setFilter }) => {
  const [salaryRange, setSalaryRange] = useState([7, 500000]);

  const handleChange = (value) => {
    setSalaryRange(value);
  };

  const handleValueCommit = (value) => {
    setSalaryRange(value);
    setFilter(`${attribute}:>=${value[0]} && ${attribute}:<=${value[1]}`);
  };

  return (
    <div className="bg-blue-50/75 p-6 rounded-lg shadow-sm">
      <h3 className="font-medium text-gray-900 mb-4">Salary Range</h3>
      <div className="px-2 py-4 flex flex-col gap-3">
        <div className="flex justify-between text-sm text-gray-600">
          <span>${salaryRange[0].toLocaleString("en-IN")}</span>
          <span>${salaryRange[1].toLocaleString("en-IN")}</span>
        </div>
        <Slider.Root
          className="relative flex !mb-0 items-center select-none touch-none"
          min={7}
          max={500000}
          step={1000}
          value={salaryRange}
          onValueChange={handleChange}
          onValueCommit={handleValueCommit}
        >
          <Slider.Track className="relative grow-[1] bg-[#e5e7eb] h-[3px] rounded-full">
            <Slider.Range className="absolute bg-[#2563eb] h-full" />
          </Slider.Track>
          <Slider.Thumb className="relative block w-[20px] h-[20px] bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]" />
          <Slider.Thumb className="relative block w-[20px] h-[20px] bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]" />
        </Slider.Root>
      </div>
    </div>
  );
};

export default SalarySliderRange;
