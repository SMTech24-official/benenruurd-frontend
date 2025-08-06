"use client";

import { Separator } from "@/components/ui/separator";
import { MdKeyboardArrowRight} from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { RxCross2 } from "react-icons/rx";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ScheduledLeft from "../shared/scheduled-left/Scheduled-left";

const WorkflowStepTwo = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="min-h-screen py-6">
      <form className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 space-y-4">
            <ScheduledLeft
              title=" Add a step to turn on the workflow"
              stepNumber={1}
              iconSrc="/dashboardIcons/scheduled.svg"
              frequencyText="Every 2 days"
              enabled={enabled}
              onToggle={() => setEnabled(!enabled)}
            />

            <button
              type="button"
              className="w-full text-[#217AFC] font-semibold border-2 border-dotted border-blue-400 bg-blue-50 py-2 rounded-lg text-center hover:bg-blue-100 transition cursor-pointer"
            >
              + Add Step
            </button>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 bg-[#FFFFFF]">
            <div className="rounded-br-lg rounded-lg shadow w-full p-0 border border-[#D5D6E2]">
              <Link href="/dashboard/workflowstepone">
                <div className="p-3 flex items-center justify-between bg-[#FCFCFD] rounded-t-lg">
                  <div className="flex items-center gap-2">
                    <GoArrowLeft />
                    <h3 className="text-sm font-semibold text-[#22222F]">
                      Human Steps
                    </h3>
                  </div>
                  <button>
                    <RxCross2 className="w-4 h-4 cursor-pointer text-[#8588AB]" />
                  </button>
                </div>
              </Link>
              <Separator className="bg-[#D5D6E2]" />
              <div className="relative w-full">
                <Image src="/dashboardIcons/search.svg" width={20} height={20} alt="search icon" className=" text-[#8588AB] absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Human Steps"
                  className="w-full pl-10 pr-4 py-2 focus:outline-none text-[#8588AB]"
                />
              </div>
              <Separator className="bg-[#D5D6E2]" />
              <div className="space-y-2">
                <Link href="/dashboard/workflowstepthree">
                  <div className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          src="/dashboardIcons/integrations3.svg"
                          width={24}
                          height={24}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-[#22222F]">
                          Get approval to continue
                        </h3>
                        <p className="text-xs text-[#8588AB]">
                          Request approval from the assignee to continue
                        </p>
                      </div>
                    </div>
                    <MdKeyboardArrowRight className="text-gray-400" size={20} />
                  </div>
                </Link>
                <div className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="border p-1 rounded">
                      <Image
                        src="/dashboardIcons/flowcontrol.svg"
                        width={14}
                        height={14}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#22222F]">
                        Get data input
                      </h3>
                      <p className="text-xs text-[#8588AB]">
                        Request data from the assignee to continue
                      </p>
                    </div>
                  </div>
                  <MdKeyboardArrowRight className="text-gray-400" size={20} />
                </div>
                <div className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-50 rounded-b-lg">
                  <div className="flex items-center gap-3">
                    <div className="border p-1 rounded">
                      <Image src="/ai.svg" width={14} height={14} alt="" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-[#22222F]">
                        Complete a task
                      </h3>
                      <p className="text-xs text-[#8588AB]">
                        Use AI to make actions like summarizing
                      </p>
                    </div>
                  </div>
                  <MdKeyboardArrowRight className="text-gray-400" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkflowStepTwo;
