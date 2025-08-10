// import { SidebarTrigger } from '@/components/ui/sidebar'
// import Image from 'next/image'
// import React from 'react'
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

// function WorkflowTopbar() {
//     return (

//         <div className="relative flex flex-wrap items-center justify-between px-4 md:px-8 py-2 md:py-0 h-auto md:h-[60px] bg-[#FFFFFF]">
//             {/* Center Section */}
//             <div className="w-full md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center">
//                 <div className="flex items-center gap-2 p-2">
//                     <Image
//                         src="/dashboardIcons/gmail.svg"
//                         width={30}
//                         height={30}
//                         alt="Gmail icon"
//                         className="border p-1 rounded-[3px]"
//                     />
//                     <div className="flex flex-col">
//                         <p className="text-sm font-semibold text-[#22222F]">
//                             Gmail - Email received
//                         </p>
//                     </div>
//                     <Image src="/dashboardIcons/star.svg" width={20} height={20} alt="star icon" className="text-[#8588AB] cursor-pointer" />
//                     <MdOutlineKeyboardArrowDown className="text-[#8588AB] cursor-pointer -ml-1" />
//                 </div>
//             </div>

//             {/* Top Right Icons */}
//             <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
//                 <Image
//                     src="/dashboardIcons/messageImg.svg"
//                     width={20}
//                     height={20}
//                     alt="Message image"
//                     className="cursor-pointer"
//                 />
//                 {/* "trigger icon" */}
//                 <SidebarTrigger className="text-[#8588AB] hover:text-[#8588AB] cursor-pointer" />
//             </div>

//             {/* Bottom Right Icons */}
//             <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">
//                 <Image
//                     src="/notifications.svg"
//                     width={30}
//                     height={30}
//                     alt=""
//                     className="border p-0.5 text-sm rounded-sm cursor-pointer"
//                 />
//                 <Image
//                     src="/share.svg"
//                     width={30}
//                     height={30}
//                     alt=""
//                     className="border p-0.5 text-sm rounded-sm cursor-pointer"
//                 />
//                 <Image
//                     src="/help.svg"
//                     width={30}
//                     height={30}
//                     alt=""
//                     className="border p-0.5 text-sm rounded-sm cursor-pointer"
//                 />
//                 <Image
//                     src="/dots.svg"
//                     width={30}
//                     height={30}
//                     alt=""
//                     className="border p-0.5 text-sm rounded-sm cursor-pointer"
//                 />
//             </div>
//         </div>
//     )
// }

// export default WorkflowTopbar


"use client"
import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoNotificationsOffOutline, IoNotificationsOutline } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";


import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

function WorkflowTopbar() {
    const [value, setValue] = useState<string>("On");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (

        // this is common compnent from workflow page 
        <div className="relative flex flex-wrap items-center justify-between px-4 md:px-8 py-2 md:py-0 h-auto md:h-[60px] bg-[#FFFFFF]">
            {/* Center Section */}
            <div className="w-full md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center">
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
                    <Image src="/dashboardIcons/star.svg" width={20} height={20} alt="star icon" className="text-[#8588AB] cursor-pointer" />
                    <MdOutlineKeyboardArrowDown className="text-[#8588AB] cursor-pointer -ml-1" />
                </div>
            </div>

            {/* Top Right Icons */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
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

            {/* Bottom Right Icons */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end">
                {/* notifications  */}
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger>
                        <Image
                            src="/notifications.svg"
                            width={30}
                            height={30}
                            alt=""
                            className="border p-0.5 text-sm rounded-sm cursor-pointer"
                            style={{
                                filter: value === "On"
                                    ? 'invert(77%) sepia(85%) saturate(521%) hue-rotate(1deg) brightness(102%) contrast(102%)'
                                    : 'none'
                            }}
                        />
                    </DialogTrigger>
                    <DialogContent className='p-6 w-[400px]'>
                        <DialogHeader>
                            <DialogTitle className='mt-4 text-center'>Notification settings</DialogTitle>
                            <div className='flex items-center gap-4 border border-yellow-500 rounded-lg p-2 mt-6'>
                                <IoNotificationsOutline className="text-yellow-500 text-xl" />
                                {
                                    value === "On" ? (
                                        <p className='text-sm text-gray-500'>
                                            Turn on notifications in settings to receive <br /> error notifications about this workflow.
                                        </p>
                                    ) : (
                                        <p className='text-sm text-gray-500'>
                                            No one is receiving error notifications for <br /> this workflow.
                                        </p>
                                    )
                                }
                            </div>
                            <div className='flex justify-between items-center my-4'>
                                <div className='flex items-center gap-2'>
                                    <Image
                                        src="/dashboardIcons/profileImage.jpg"
                                        width={30}
                                        height={30}
                                        alt="Profile"
                                        className="rounded-full"
                                    />
                                    <h4 className='text-sm text-gray-500'>You</h4>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button className="pr-7 pl-2 py-1 border border-gray-300 rounded-md cursor-pointer">

                                            <div className="relative w-12 flex items-center justify-between">
                                                {
                                                    value === "On" ? (
                                                        <IoNotificationsOutline className="text-gray-500 text-lg" />
                                                    ) : (
                                                        <IoNotificationsOffOutline className="text-gray-500 text-lg" />
                                                    )
                                                }
                                                {value}

                                                <MdOutlineKeyboardArrowDown size={20} className="text-gray-500 pointer-events-none absolute -right-6 top-1/2 transform -translate-y-1/2" />

                                            </div>
                                        </button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent
                                        className="bg-white rounded-md shadow-lg p-2 w-28"
                                        sideOffset={5}
                                    >
                                        <DropdownMenuItem
                                            className="flex items-center justify-between px-2 py-1 rounded cursor-pointer hover:bg-blue-100 text-sm"
                                            onSelect={() => setValue("On")}
                                        >
                                            On
                                            {value === "On" && <IoCheckmarkSharp size={20} className="text-green-500 ml-2" />}
                                        </DropdownMenuItem>

                                        <DropdownMenuItem
                                            className="flex items-center justify-between px-2 py-1 rounded cursor-pointer hover:bg-blue-100 text-sm"
                                            onSelect={() => setValue("Off")}
                                        >
                                            Off
                                            {value === "Off" && <IoCheckmarkSharp size={20} className="text-green-500 ml-2" />}
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>




                            </div>
                            <div className="text-right">
                                <button onClick={() => setIsOpen(false)}
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
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

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
    )
}

export default WorkflowTopbar