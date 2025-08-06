"use client";

import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ScheduledLeft from "../shared/scheduled-left/Scheduled-left";
import { motion, AnimatePresence } from "framer-motion";

const ScheduledBatchRun = () => {
  // switch button 
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("flsfksld");
    router.push("/dashboard/workflowstepone");
  };

  const [enabled, setEnabled] = useState<boolean>(false);
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
                className="w-full text-blue-700 font-semibold border-2 border-dotted border-blue-400 bg-blue-50 text-sm py-3 rounded-lg text-center hover:bg-blue-100 transition cursor-pointer"
              >
                + Add Step
              </button>
            </div>

            {/* Right Panel */}
            <div className="w-full md:w-1/2 border border-[#D5D6E2] rounded-lg bg-white shadow-sm">
              <div className="flex items-center justify-between px-4 py-4 border-b border-[#D5D6E2] bg-[#FCFCFD] rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="border border-[#D5D6E2] p-1 rounded">
                    <Image
                      src="/dashboardIcons/batch.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </div>
                  <span className="text-[#22222F] font-semibold text-sm">
                    Start batch of runs on a schedule
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

              <div className="p-4 flex flex-col gap-4">
                {/* When to run dropdown */}
                <div className="flex flex-col gap-1.5 relative">
                  <label
                    htmlFor="whenToRun"
                    className="text-sm font-medium text-[#22222F]"
                  >
                    When to run
                  </label>
                  <select
                    id="whenToRun"
                    className="border border-[#D5D6E2] rounded-lg px-3 py-1 pr-10 text-sm font-medium text-[#22222F] cursor-pointer focus:outline-none focus:ring focus:ring-blue-200 appearance-none"
                  >
                    <option className="text-[#22222F] font-medium]">
                      Automatically start this workflow periodically
                    </option>
                    <option className="text-[#22222F] font-medium]">
                      Manually
                    </option>
                  </select>
                  <Image src="/dashboardIcons/arrow.svg" width={16} height={16} alt="arrow icon" className="absolute right-2 top-8.5 pointer-events-none text-[#22222F]" />
                </div>

                {/* Select integration dropdown */}
                <div className="flex flex-col gap-1.5 relative">
                  <label
                    htmlFor="selectIntegration"
                    className="text-sm font-semibold text-[#22222F]"
                  >
                    Select integration
                  </label>
                  <select
                    id="selectIntegration"
                    className="border border-[#D5D6E2] rounded-lg px-3 py-1 pr-10 text-sm cursor-pointer text-[#8588AB] focus:outline-none focus:ring focus:ring-[#D5D6E2] appearance-none"
                  >
                    <option className="text-[#22222F] font-medium]">
                      Select a resource
                    </option>
                    <option className="text-[#22222F] font-medium]">
                      Integration 1
                    </option>
                    <option className="text-[#22222F] font-medium]">
                      Integration 2
                    </option>
                  </select>
                  <Image src="/dashboardIcons/arrow.svg" width={16} height={16} alt="arrow icon" className="absolute right-2 top-8.5 pointer-events-none text-[#22222F]" />
                </div>

                {/* Done button */}
                <div className="flex justify-end">
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
          </div>
        </form>
      {/* </div> */}
    </motion.div>
    </AnimatePresence >
  );
};

export default ScheduledBatchRun;
