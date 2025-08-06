"use client";

import { Separator } from "@/components/ui/separator";
import { MdKeyboardArrowRight } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ScheduledLeft from "../shared/scheduled-left/Scheduled-left";

const WorkflowStepOne = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="min-h-screen py-6">
      <form className="max-w-4xl mx-auto px-4">
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
          <div className="w-full md:w-1/2">
            <div className="rounded-br-lg rounded-lg shadow w-full p-0 border bg-[#FFFFFF]">
              <Link href="/dashboard/batchrunscheduled">
                <div className="p-3 flex items-center justify-between bg-[#FCFCFD] rounded-t-lg">
                  <div className="bg-[#FCFCFD]">
                    <h3 className="text-sm font-semibold text-[#22222F]">
                      Add a step
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
                  placeholder="Search integrations and actions"
                  className="w-full pl-10 pr-4 px-4 py-3 focus:outline-none text-[#8588AB] text-sm"
                />
              </div>
              <Separator className="bg-[#D5D6E2]" />

              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 cursor-pointer transition rounded">
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
                      <h3 className="text-sm font-semibold text-[#22222F]">
                        Integrations
                      </h3>
                      <p className="text-xs text-[#8588AB]">
                        Automate actions in apps like Slack, Gmail and Linear
                      </p>
                    </div>
                  </div>
                  <MdKeyboardArrowRight className="text-[#8588AB]" size={20} />
                </div>

                <div className="flex justify-between items-center p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                  <div className="flex items-center gap-3">
                    <div>
                      <Image
                        src="/flowcontrol.svg"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#22222F]">
                        Flow Control
                      </h3>
                      <p className="text-xs text-[#8588AB]">
                        Add logic like paths and waiting
                      </p>
                    </div>
                  </div>
                  <MdKeyboardArrowRight className="text-[#8588AB]" size={20} />
                </div>

                <div className="flex justify-between items-center p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                  <div className="flex items-center gap-3">
                    <div className="border p-1 rounded">
                      <Image src="/ai.svg" width={16} height={16} alt="" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#22222F]">
                        AI
                      </h3>
                      <p className="text-xs text-[#8588AB]">
                        Use AI to make actions like summarizing
                      </p>
                    </div>
                  </div>
                  <MdKeyboardArrowRight className="text-[#8588AB]" size={20} />
                </div>

                <Link href="/dashboard/workflowsteptwo">
                  <div className="flex justify-between items-center p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                    <div className="flex items-center gap-3">
                      <div className="border p-1 rounded">
                        <Image src="/human.svg" width={14} height={14} alt="" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#22222F]">
                          Human Steps
                        </h3>
                        <p className="text-xs text-[#8588AB]">
                          Wait for someone to do something
                        </p>
                      </div>
                    </div>
                    <MdKeyboardArrowRight
                      className="text-[#8588AB]"
                      size={20}
                    />
                  </div>
                </Link>
              </div>

              <Separator className="bg-[#D5D6E2]" />
              <h4 className="text-xs font-semibold text-[#8588AB] px-4 py-3 pl-4 bg-[#FCFCFD]">
                Connected Integrations
              </h4>
              <Separator className="bg-[#D5D6E2] mb-1" />
              <div>
                <div className="p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="border p-1 rounded">
                        <Image
                          src="/dashboardIcons/gmail.svg"
                          width={16}
                          height={16}
                          alt="Gmail image"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Gmail
                      </h3>
                    </div>
                    <MdKeyboardArrowRight
                      className="text-[#8588AB]"
                      size={20}
                    />
                  </div>
                </div>

                <div className="p-3 hover:bg-gray-50 cursor-pointer transition rounded">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="border p-1 rounded">
                        <Image
                          src="/dashboardIcons/googleCalendar.svg"
                          width={16}
                          height={16}
                          alt="Gmail image"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Google Calendar
                      </h3>
                    </div>
                    <MdKeyboardArrowRight
                      className="text-[#8588AB]"
                      size={20}
                    />
                  </div>
                </div>

                <div className="p-3 hover:bg-gray-50 cursor-pointer transition rounded-b-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="border p-1 rounded">
                        <Image
                          src="/dashboardIcons/slack.svg"
                          width={16}
                          height={16}
                          alt="Gmail image"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Slack
                      </h3>
                    </div>
                    <MdKeyboardArrowRight
                      className="text-[#8588AB]"
                      size={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkflowStepOne;
