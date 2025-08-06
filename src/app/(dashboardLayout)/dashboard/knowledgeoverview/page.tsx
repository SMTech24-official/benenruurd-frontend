"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog"
import { DialogCloseContent } from '../../../../components/AddKnoledge-modal';
import { motion } from 'framer-motion';

interface KnowledgeItem {
    id: number;
    icon: string;
    name: string;
    size: string;
    usedIn: string;
    lastSynced: string;
    status: "Synced" | "Syncing";
}

const KnowledgePage = () => {
    const knowledgeItems: KnowledgeItem[] = [
        {
            id: 1,
            icon: "/dashboardIcons/knoledgeIcon1.svg",
            name: "Briefing_PDF_Document.pdf",
            size: "4.12 MB",
            usedIn: "3 workflows",
            lastSynced: "27-06-2025 02:53",
            status: "Syncing",
        },
        {
            id: 2,
            icon: "/dashboardIcons/knoledgeIcon2.svg",
            name: "Untitled text",
            size: "2.31 B",
            usedIn: "1 workflow",
            lastSynced: "27-06-2025 02:53",
            status: "Synced",
        },
        {
            id: 3,
            icon: "/dashboardIcons/knoledgeIcon1.svg",
            name: "Briefing_PDF_Document.pdf",
            size: "11.32 MB",
            usedIn: "0 workflows",
            lastSynced: "27-06-2025 02:53",
            status: "Synced",
        },
        {
            id: 4,
            icon: "/dashboardIcons/knoledgeIcon2.svg",
            name: "Sample_Doc.pdf",
            size: "5.67 MB",
            usedIn: "2 workflows",
            lastSynced: "27-06-2025 02:53",
            status: "Synced",
        },
        {
            id: 5,
            icon: "/dashboardIcons/knoledgeIcon1.svg",
            name: "Note.txt",
            size: "1.23 KB",
            usedIn: "1 workflow",
            lastSynced: "27-06-2025 02:53",
            status: "Syncing",
        },
        {
            id: 6,
            icon: "/dashboardIcons/knoledgeIcon2.svg",
            name: "Report_Final.pdf",
            size: "7.45 MB",
            usedIn: "4 workflows",
            lastSynced: "27-06-2025 02:53",
            status: "Synced",
        },
        {
            id: 7,
            icon: "/dashboardIcons/knoledgeIcon1.svg",
            name: "Summary.docx",
            size: "2.11 MB",
            usedIn: "2 workflows",
            lastSynced: "27-06-2025 02:53",
            status: "Synced",
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 3;

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const filteredItems = knowledgeItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    //add knowledge modal 
    const [open, setOpen] = useState<boolean>(false)


    return (
        <motion.div
            key="trigger-panel"
            initial={{ y: "-10px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-20px", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="w-full px-6 py-4 bg-[#FCFCFD] h-screen"
        >
            {/* <div className="w-full px-6 py-4 bg-[#FCFCFD] h-screen"> */}
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
                <h1 className="text-xl md:text-2xl font-bold">Knowledge</h1>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full md:w-auto">
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-[#217AFC] hover:bg-[#217AFC] border border-[#0D5AE8] flex items-center gap-2 font-semibold text-sm cursor-pointer text-[#FFFFFF] px-3 py-[5px] rounded-[8px]"
                        style={{
                            boxShadow: "0px 1px 1px 0px rgba(100, 102, 241, 0.12), 0px 2px 2px 0px rgba(100, 102, 241, 0.12)"
                        }}
                    >
                        + Add knowledge
                    </button>

                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogCloseContent />
                    </Dialog>

                    <div className="relative sm:w-64 py-1.5">
                        <input
                            type="text"
                            placeholder="Search knowledge"
                            className="w-full border border-[#D5D6E2] text-[#8588AB] font-medium rounded-lg pl-10 pr-3 py-1.5 text-sm outline-none bg-transparent"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <Image src="/dashboardIcons/search.svg" width={24} height={24} alt="search icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8588AB]" />
                    </div>
                </div>
            </div>


            {/* Table */}
            <div className="w-full overflow-x-auto rounded-xl border border-[#D8D8DF]" style={{ boxShadow: "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)" }}>
                <table className="w-full table-auto min-w-[768px]">
                    <thead style={{ borderBottom: "1px solid #D8D8DF" }}>
                        <tr>
                            <th className="px-3 py-2 text-left text-[#8588AB] font-semibold text-sm">
                                File name
                            </th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">
                                File size
                            </th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">
                                Used in
                            </th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">
                                Last synced
                            </th>
                            <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">
                                Status
                            </th>
                            <th className="px-6 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr
                                key={item.id}
                                className="hover:bg-[#FAFAFA] cursor-pointer transition"
                                style={{ borderTop: "1px solid #D5D6E2" }}
                            >
                                <td className="px-3 py-1 flex items-center gap-2 font-semibold text-[#22222F]">
                                    <Image
                                        src={item.icon}
                                        width={24}
                                        height={24}
                                        alt="icon"
                                        className="border border-[#D5D6E2] p-1 rounded-[3px]"
                                    />
                                    <span className="text-[#22222F] text-sm font-medium">
                                        {item.name}
                                    </span>
                                </td>
                                <td className="px-6 py-1 text-[#707187] font-medium">{item.size}</td>
                                <td className="px-6 py-1 text-[#707187] font-medium">{item.usedIn}</td>
                                <td className="px-6 py-1 text-[#707187] font-medium">{item.lastSynced}</td>
                                <td className="px-6 py-1 text-[#707187] font-medium">
                                    <span
                                        className={
                                            item.status === "Syncing"
                                                ? "bg-[#EEF2FF] px-2 py-1 rounded-full text-[#6466F1] text-sm font-semibold"
                                                : "text-[#26252C] text-sm bg-[#EEEDF1] px-2 py-1 rounded-full font-semibold"
                                        }
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-1">
                                    <button className="text-red-500 hover:text-red-700 cursor-pointer">
                                        <Image
                                            src="/dashboardIcons/delete.svg"
                                            width={24}
                                            height={24}
                                            alt="delete icon"
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="px-2 md:px-[12px] py-[5px] border border-gray-300 rounded-[8px] flex items-center gap-1 cursor-pointer text-[#22222F] font-semibold focus:outline-none shadow-[0px_1px_1px_0px_rgba(18,25,44,0.06),0px_1px_1px_0px_rgba(18,25,44,0.04)]"
                    disabled={currentPage === 1}
                >
                    <Image src="/dashboardIcons/leftArrow.svg" width={24} height={24} alt="right arrow icon" className="text-[#22222F] font-semibold -t-0.5" />
                    Previous
                </button>

                <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 text-sm rounded-sm font-medium cursor-pointer ${page === currentPage
                                ? "border border-gray-300 text-[#22222F]"
                                : "border border-transparent text-[#8588AB]"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="px-2 md:px-[12px] py-[5px] border border-gray-300 rounded-[8px] flex items-center gap-1 cursor-pointer text-[#22222F] font-semibold focus:outline-none shadow-[0px_1px_1px_0px_rgba(18,25,44,0.06),0px_1px_1px_0px_rgba(18,25,44,0.04)]"
                    disabled={currentPage === totalPages}
                >
                    Next
                    <Image src="/dashboardIcons/rightArrow.svg" width={24} height={24} alt="right arrow icon" className="text-[#22222F] font-semibold -mb-0.5" />
                </button>
            </div>
            {/* </div> */}
        </motion.div>
    );
};

export default KnowledgePage;














