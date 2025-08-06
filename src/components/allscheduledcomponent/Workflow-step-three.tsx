"use client";

import { useState } from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { Button } from "../ui/button";
import DatePicker from "react-datepicker";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

const WorkflowStepThreeError = () => {
  const [enabled, setEnabled] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date("2025-06-30T08:29:00+06:00")
  );
  const [error, setError] = useState<string>("No assignee selected");

  const people = [
    { name: "Ruben Vaalt", avatar: "/dashboardIcons/profileImage.jpg" },
    { name: "John Doe", avatar: "/dashboardIcons/profileImage.jpg" },
    { name: "Jane Smith", avatar: "/dashboardIcons/profileImage.jpg" },
  ];

  const [selectedPerson, setSelectedPerson] = useState<{ name: string; avatar: string } | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!selectedPerson) {
      setError("No assignee selected");
    } else {
      setError("");
      console.log("Form submitted successfully with assignee:", selectedPerson.name);
    }
  };

  const handleSelectPerson = (person: { name: string; avatar: string }) => {
    setSelectedPerson(person);
    setError(""); // Clear error on selection
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen py-6">
      <form className="max-w-4xl mx-auto px-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="border rounded-lg shadow-sm bg-[#FCFCFD]">
              <h3 className="p-4 text-gray-800 font-medium border-b">
                Add a step to turn on the workflow
              </h3>
              <div className="flex items-center justify-between px-4 py-3 bg-[#FFFFFF] rounded-b-lg">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#8588AB]">1</span>
                  <div className="border p-1 rounded text-gray-600">
                    <MdOutlineWatchLater />
                  </div>
                  <span className="text-sm text-[#22222F] font-semibold">
                    Every 2 days
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEnabled(!enabled)}
                    className={`cursor-pointer w-12 h-7 rounded-full flex items-center transition duration-300 ${enabled ? "bg-[#217AFC] border border-[#0D5AE8] justify-end p-1 shadow-[0_0_0_3px_rgba(59,130,246,0.3)]" : "bg-transparent border border-[#D5D6E2] justify-start"
                      }`}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center border border-[#D5D6E2] shadow-[2px_2px_5px_rgba(0,0,0,0.2)]">
                      {
                        enabled && (
                          <div className="w-2 h-2 bg-[#217AFC] rounded-full"></div>
                        )
                      }
                    </div>
                  </button>
                  <BsThreeDotsVertical className="text-gray-400" />
                </div>
              </div>
            </div>

            <div
              className={`flex items-center justify-between px-4 py-3 border rounded-lg ${!selectedPerson ? "border-[#D94F4F] text-[#8588AB] shadow-[0px_0px_0px_2px_#FECACA]" : "border-[#217AFC] shadow-[0px_0px_0px_2px_#B5E6FF,0px_1px_1px_0px_rgba(0,2,2,0.08)]"
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#8588AB]">2</span>
                <div className="border p-1 rounded text-gray-600">
                  <Image src="/dashboardIcons/like.svg" width={14} height={14} alt="like image" />
                </div>
                <span className="text-sm text-[#22222F] font-semibold">
                  Get approval to continue
                </span>
              </div>
              {!selectedPerson ? (
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-sm -mr-1"
                  >
                    Not assigned
                  </Button>
                  <BsThreeDotsVertical className="text-gray-400" />
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-sm -mr-1"
                  >
                    <Image
                      src={selectedPerson.avatar}
                      width={20}
                      height={20}
                      alt="Profile"
                      className="rounded-full"
                    />
                    <span>{selectedPerson.name}</span>
                  </Button>
                  <BsThreeDotsVertical className="text-gray-400" />
                </div>
              )}
            </div>

            <button
              type="button"
              className="w-full text-blue-600 font-semibold border-2 border-dotted hover:border-blue-500 border-blue-400 bg-blue-50 py-2 rounded-lg text-center hover:bg-blue-100 transition cursor-pointer"
            >
              + Add Step
            </button>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 bg-[#FFFFFF]">
            <div className="rounded-br-lg rounded-lg shadow w-full p-0 border border-[#D5D6E2]">
              <div className="p-3 flex items-center justify-between border-b border-[#D5D6E2] bg-[#FCFCFD] rounded-t-lg">
                <div className="flex items-center gap-2">
                  <div className="border rounded p-1">
                    <Image src="/dashboardIcons/like.svg" width={14} height={14} alt="like image" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#22222F]">
                    Get approval to continue
                  </h3>
                </div>
                <Link href="/dashboard/workflowsteptwo">
                  <button type="button" className="flex items-center gap-2">
                    <BsThreeDotsVertical className="text-[#8588AB]" />
                    <RxCross2 className="cursor-pointer" />
                  </button>
                </Link>
              </div>
              <Separator className="bg-[#D5D6E2]" />
              {/* Description */}

              {/* Email Dropdown */}
              <div className="w-full pt-4 px-4 pb-3">
                <h4 className="text-[#22222F] text-sm font-semibold mb-2">
                  Send approval request over
                </h4>
                <div className="relative">
                  <select
                    className="w-full px-3 py-1 border border-[#D5D6E2] rounded-[8px] text-sm font-semibold appearance-none bg-white pr-10 cursor-pointer"
                  >
                    <option>Email</option>
                    <option>Slack</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#22222F]">
                    <Image src="/dashboardIcons/arrow.svg" width={16} height={16} alt="arrow icon" className="text-[#22222F]" />
                  </div>
                </div>
              </div>

              {/* Assignee */}
              <div className="w-full px-4 pb-3">
                <label className="text-sm font-medium text-[#22222F] mb-1 block">
                  Assignee
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`cursor-pointer w-full flex items-center gap-2 border rounded-md px-3 py-1 bg-white text-sm font-medium ${!selectedPerson ? "border-[#D94F4F] text-[#8588AB] shadow-[0px_0px_0px_2px_#FECACA]" : "border-[#D5D6E2] text-[#22222F]"
                      }`}
                  >
                    {selectedPerson ? (
                      <>
                        <Image
                          src={selectedPerson.avatar}
                          width={24}
                          height={24}
                          alt="Profile"
                          className="rounded-full"
                        />
                        <span>{selectedPerson.name}</span>
                      </>
                    ) : (
                      <span>Not assigned</span>
                    )}
                    <Image src="/dashboardIcons/arrow.svg" width={16} height={16} alt="arrow icon" className="ml-auto -mr-1 text-[#22222F]" />
                  </button>

                  {isOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-[#D5D6E2] rounded-md shadow-md">
                      {people.map((person, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelectPerson(person)}
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#22222F] cursor-pointer hover:bg-gray-100"
                        >
                          <Image
                            src={person.avatar}
                            width={24}
                            height={24}
                            alt="Profile"
                            className="rounded-full"
                          />
                          <span>{person.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {error && <p className="text-[#D94F4F] text-sm font-medium mt-1">{error}</p>}
              </div>

              {/* Message */}
              <div className="px-4 pb-3">
                <h4 className="text-[#22222F] text-sm font-semibold mb-2">
                  Message
                </h4>
                <textarea
                  placeholder="Add instructions for the assignee"
                  className="w-full px-3 py-2 border border-[#D5D6E2] rounded-[8px] text-sm text-[#8588AB] font-medium h-24 resize-none"
                />
              </div>

              {/* Due date and Reminder */}
              <div className="px-4 flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#22222F] mb-1">
                    Due date
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      className="w-full px-3 py-1 border border-[#D5D6E2] rounded-[8px] text-sm text-[#22222F] font-medium cursor-pointer"
                      dateFormat="dd-MM-yyyy"
                      minDate={new Date("2025-06-30T08:53:00+06:00")}
                      placeholderText="Select date"
                    />
                    <Image src="/dashboardIcons/arrow.svg" width={16} height={16} alt="arrow icon" className="text-[#22222F] absolute right-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#22222F] mb-1">
                    Remind after notification
                  </label>
                  <div className="relative">
                    <select className="w-full px-3 py-1 border border-[#D5D6E2] rounded-[8px] text-sm font-medium text-[#22222F] appearance-none bg-white pr-10 cursor-pointer">
                      <option>2 days after initial notification</option>
                      <option>1 day after initial notification</option>
                      <option>3 days after initial notification</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <Image src="/dashboardIcons/arrow.svg" width={16} height={16} alt="arrow icon" className="text-[#22222F]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="mx-4 mb-4">
                <div className="p-3 mt-4 bg-blue-50 rounded-[8px]">
                  <h4 className="text-sm font-semibold text-[#22222F] mb-2">
                    Preview
                  </h4>
                  <p className="text-sm text-[#8588AB] font-medium mb-4">
                    Send yourself an example of the approval notification
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-[#D5D6E2] rounded-[8px] text-sm font-semibold text-[#22222F]"
                    style={{
                      boxShadow:
                        "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)",
                    }}
                  >
                    Send preview to yourself
                  </button>

                </div>
              </div>
              {/* Done Button */}
              <div className="px-4 py-3 text-right border-t border-[#D5D6E2]">
                <button
                  type="submit"
                  className="bg-[#217AFC] text-[#FFFFFF] border border-[#0D5AE8] px-3 py-1.5 text-sm font-semibold rounded-[8px] cursor-pointer"
                  style={{
                    boxShadow:
                      "0px 1px 1px 0px rgba(100, 102, 241, 0.12), 0px 2px 2px 0px rgba(100, 102, 241, 0.12)",
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkflowStepThreeError;







