"use client";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import WorkflowStepOne from "@/components/allscheduledcomponent/Workflow-step-one";
import { SidebarTrigger } from "@/components/ui/sidebar";
import RunsOverview from "@/components/shared/runOverview/Runs-overview";

type Tab = "editor" | "runs";

const WorkflowPage = () => {
    const [activeTab, setActiveTab] = useState<Tab>("editor");

    return (
        <div className="bg-[#FCFCFD] h-screen">
            <div className="relative flex items-center justify-between px-8 h-[60px] bg-[#FFFFFF]">
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-2 p-2">
                        <Image
                            src="/dashboardIcons/gmail.svg"
                            width={30}
                            height={30}
                            alt="Gmail icon"
                            className="border p-1 rounded-[3px]"
                        />
                        <div className="flex flex-col">
                            <p className="text-sm font-semibold text-[#22222F]">
                                Gmail - Email received
                            </p>
                        </div>
                        <Image src="/dashboardIcons/star.svg" width={20} height={20} alt="star icon" className="text-[#8588AB]" />
                        <MdOutlineKeyboardArrowDown className="text-[#8588AB] cursor-pointer -ml-1" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Image
                        src="/dashboardIcons/messageImg.svg"
                        width={20}
                        height={20}
                        alt="Message image"
                        className="cursor-pointer"
                    />
                    {/* "trigger icon" */}
                    <SidebarTrigger className="text-[#8588AB] hover:text-[#8588AB] cursor-pointer" />
                </div>
                <div className="flex items-center gap-2">
                    <Image
                        src="/notifications.svg"
                        width={30}
                        height={30}
                        alt=""
                        className="border p-0.5 text-sm rounded-sm cursor-pointer"
                    />
                    <Image
                        src="/share.svg"
                        width={30}
                        height={30}
                        alt=""
                        className="border p-0.5 text-sm rounded-sm cursor-pointer"
                    />
                    <Image
                        src="/help.svg"
                        width={30}
                        height={30}
                        alt=""
                        className="border p-0.5 text-sm rounded-sm cursor-pointer"
                    />
                    <Image
                        src="/dots.svg"
                        width={30}
                        height={30}
                        alt=""
                        className="border p-0.5 text-sm rounded-sm cursor-pointer"
                    />
                </div>
            </div>

            <div className="text-center bg-[#FFFFFF]">
                <Separator className="mb-2 bg-gray-200" />
                <div className="flex justify-center gap-1 border w-[220px] mx-auto py-0.5 rounded-lg">
                    <button
                        onClick={() => {
                            setActiveTab("editor");
                        }}
                        className={`px-8.5 py-0.5 cursor-pointer rounded-[7px] ${activeTab === "editor"
                            ? "bg-[#22222F]  text-sm font-medium text-[#FFFFFF]"
                            : "bg-[#FCFCFD] text-[#8588AB] hover:bg-[#FCFCFD]"
                            }`}
                    >
                        Editor
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab("runs");
                        }}
                        className={`px-8.5 py-0.5 cursor-pointer rounded-[7px] ${activeTab === "runs"
                            ? "bg-[#22222F]  text-sm font-medium text-[#FFFFFF]"
                            : "bg-[#FCFCFD] text-[#8588AB] hover:bg-[#FCFCFD]"
                            }`}
                    >
                        Runs
                    </button>
                </div>
                <Separator className="mt-2 bg-gray-200" />
            </div>

            <div>
                {activeTab === "editor" && <WorkflowStepOne />}
                {activeTab === "runs" && (
                    <div>
                        <RunsOverview/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkflowPage;
