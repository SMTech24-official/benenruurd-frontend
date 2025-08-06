"use client";

import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import ScheduledLeft from "../shared/scheduled-left/Scheduled-left";
import { motion, AnimatePresence } from "framer-motion";

const ScheduledSingleRun = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<Date | null>(new Date());
  // switch button 
  const [enabled, setEnabled] = useState<boolean>(false);
  const [selectedRepeat, setSelectedRepeat] = useState<string>(
    "Custom (every 2 days)"
  );
  const [customNumber, setCustomNumber] = useState<string>("2");
  const [customUnit, setCustomUnit] = useState<string>("days");

  const repeatOptions = ["Custom (every 2 days)", "Daily", "Weekly", "Monthly"];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      selectedDate,
      selectedTime,
      selectedRepeat,
      customNumber:
        selectedRepeat === "Custom (every 2 days)" ? customNumber : undefined,
      customUnit:
        selectedRepeat === "Custom (every 2 days)" ? customUnit : undefined,
    });
  };
  return (
    <AnimatePresence>
      <motion.div
        key="trigger-panel"
        initial={{ y: "-30px", opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}       
        exit={{ y: "-20px", opacity: 0 }} 
        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }} 
        className="min-h-screen py-6"
      >
        {/* <div className="min-h-screen py-6"> */}
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Panel */}
            <div className="w-full md:w-1/2 space-y-4">
              <ScheduledLeft
                title="Add a step to turn on the workflow"
                stepNumber={1}
                iconSrc="/dashboardIcons/scheduled.svg"
                frequencyText="Every 2 days"
                enabled={enabled}
                onToggle={() => setEnabled(!enabled)}
              />

              <button
                type="button"
                className="w-full text-[#217AFC] font-semibold border-2 border-dotted border-[#217AFC] bg-blue-50 py-2 rounded-lg text-center hover:bg-blue-100 transition"
              >
                + Add Step
              </button>
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-1/2 border rounded-lg bg-white shadow-sm">
              <div className="flex items-center justify-between p-4 border-b border-[#D5D6E2] bg-[#FCFCFD] rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="border p-1 rounded">
                    <Image
                      src="/dashboardIcons/scheduled.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                  <span className="text-gray-800 font-medium">
                    Start run on a schedule
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center gap-2 text-sm border border-[#D5D6E2] px-2 py-1 rounded-lg"
                    style={{
                      boxShadow: "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)"
                    }}
                  >
                    <span className="text-xs font-semibold">Run as</span>
                    <Image
                      src="/dashboardIcons/profileImage.jpg"
                      width={16}
                      height={16}
                      alt="Profile"
                      className="rounded-full"
                    />
                  </div>

                  <Link href="/dashboard/workflow">
                    <button type="button">
                      <RxCross2 className="text-[#8588AB] w-4 h-4 cursor-pointer" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {/* First Instance */}
                <div>
                  <label className="block text-sm font-medium text-[#22222F] mb-1">
                    First Instance
                  </label>
                  <div className="flex gap-2">
                    {/* Date Picker */}
                    <div className="w-1/2 relative">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        className="w-full px-3 py-1 pr-8 border border-[#D5D6E2] rounded-lg text-sm text-[#22222F] font-medium focus:outline-none"
                        dateFormat="dd MMM yyyy"
                        placeholderText="Select date"
                      />
                      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#22222F]  text-xs pointer-events-none" />
                    </div>

                    {/* Time Picker */}
                    <div className="w-1/2 relative">
                      <DatePicker
                        selected={selectedTime}
                        onChange={(date) => setSelectedTime(date)}
                        className="w-full px-3 py-1 pr-8 border border-[#D5D6E2] rounded-lg text-sm text-[#22222F] font-medium focus:outline-none"
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        placeholderText="Select time"
                      />
                      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#22222F] text-xs pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Repeats */}
                <div>
                  <label className="block text-sm font-medium text-[#22222F] mb-1">
                    Repeats
                  </label>
                  <div className="relative">
                    <select
                      value={selectedRepeat}
                      onChange={(e) => setSelectedRepeat(e.target.value)}
                      className="w-full px-3 py-1 pr-8 border border-[#D5D6E2] rounded-lg text-sm text-[#22222F] font-medium focus:outline-none appearance-none bg-white"
                    >
                      {repeatOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-3 text-[#22222F] top-1/2 transform -translate-y-1/2 text-xs pointer-events-none" />
                  </div>
                </div>

                {/* Conditional Inputs */}
                {selectedRepeat === "Custom (every 2 days)" && (
                  <div className="flex gap-2 relative">
                    <input
                      type="text"
                      placeholder="2"
                      readOnly
                      value={customNumber}
                      onChange={(e) => setCustomNumber(e.target.value)}
                      className="w-1/2 px-3 py-1 pr-8 border border-[#D5D6E2] rounded-lg text-sm text-[#22222F] font-medium focus:outline-none"
                    />
                    <div className="relative w-1/2">
                      <select
                        value={customUnit}
                        onChange={(e) => setCustomUnit(e.target.value)}
                        className="w-full appearance-none px-3 py-1 pr-8 border border-[#D5D6E2] rounded-lg text-sm text-[#22222F] font-medium focus:outline-none bg-white"
                      >
                        <option value="days">days</option>
                        <option value="weeks">weeks</option>
                        <option value="months">months</option>
                      </select>
                      <FaChevronDown className="absolute right-3 text-[#22222F] top-1/2 transform -translate-y-1/2 text-xs pointer-events-none" />
                    </div>
                  </div>
                )}
              </div>

              <Separator />

              <div className="text-right p-4">
                <button
                  className="bg-[#217AFC] py-[5px] border border-[#0D5AE8] text-[#FFFFFF] text-sm font-semibold px-3 rounded-lg cursor-pointer"
                  style={{
                    boxShadow: "0px 1px 1px 0px rgba(100, 102, 241, 0.12), 0px 2px 2px 0px rgba(100, 102, 241, 0.12)"
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </form>
        {/* </div> */}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScheduledSingleRun;
