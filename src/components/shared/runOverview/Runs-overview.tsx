
import React, { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

interface Run {
    id: number;
    date: string;
    time: string;
    interactions: number;
}

const runsData: Run[] = [
    { id: 1, date: 'June 1, 2025', time: 'June 1, 20:02', interactions: 10 },
    { id: 2, date: 'June 2, 2025', time: 'June 1, 21:15', interactions: 12 },
    { id: 3, date: 'June 3, 2025', time: 'June 1, 19:45', interactions: 8 },
    { id: 4, date: 'June 4, 2025', time: 'June 1, 22:10', interactions: 15 },
    { id: 5, date: 'June 5, 2025', time: 'June 1, 18:30', interactions: 9 },
    { id: 6, date: 'June 6, 2025', time: 'June 1, 23:05', interactions: 11 },
    { id: 7, date: 'June 7, 2025', time: 'June 1, 17:20', interactions: 7 },
];

function RunsOverview() {
    const [selectedRunId, setSelectedRunId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const filteredRuns = runsData.filter(run =>
        run.date.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const selectedRun = runsData.find(run => run.id === selectedRunId);

    const [checkedRuns, setCheckedRuns] = useState<{ [key: number]: boolean }>({});

    // the functionlity of toggle checkbox on click 
    const handleRunClick = (runId: number) => {
        setSelectedRunId(runId);
        setCheckedRuns(prev => ({
            ...prev,
            [runId]: !prev[runId], // toggle checkbox on click
        }));
    };

    return (
        <AnimatePresence>
            <motion.div
                key="trigger-panel"
                initial={{ y: "-30px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-20px", opacity: 0 }}
                transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                 className="grid grid-cols-1 lg:grid-cols-5 h-screen"
            >
                {/* <div className="grid grid-cols-1 lg:grid-cols-5 h-screen"> */}
                    {/* left side  */}
                    <div className="lg:col-span-1 border-r border-[#D5D6E2] bg-[#FFFFFF]">
                        <div className="bg-[#FCFCFD]">
                            <h3 className="text-sm font-semibold text-[#22222F] px-4 py-3">Runs Overview</h3>
                        </div>
                        <Separator className="bg-[#D5D6E2]" />
                        <div className="relative w-full">
                            <Image src="/dashboardIcons/search.svg" width={20} height={20} alt="search icon" className="w-5 h-5 text-[#8588AB] absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search runs"
                                onChange={(e) => setSearchQuery(e.target.value)}
                                value={searchQuery}
                                className="w-full pl-10 pr-4 py-3 focus:outline-none text-sm text-[#8588AB]"
                            />
                        </div>
                        {/* map*/}
                        {filteredRuns.map(run => (
                            <React.Fragment key={run.id}>
                                <Separator className="bg-[#D5D6E2]" />
                                <div
                                    className={`flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer ${selectedRunId === run.id ? 'bg-gray-50' : ''}`}
                                    // onClick={() => setSelectedRunId(run.id)}
                                    onClick={() => handleRunClick(run.id)} //use this function for toggle handling from parent div
                                >
                                    <div className="flex items-center gap-4">
                                        <Checkbox
                                            checked={!!checkedRuns[run.id]}
                                            onCheckedChange={(checked) =>
                                                setCheckedRuns(prev => ({ ...prev, [run.id]: !!checked }))
                                            }
                                            onClick={(e) => { e.stopPropagation(); setSelectedRunId(run.id) }} // prevent double toggle on checkbox click
                                            className="w-6 h-6 bg-white border border-[#D5D6E2] data-[state=checked]:bg-white data-[state=checked]:text-black data-[state=checked]:border-[#D5D6E2] cursor-pointer"
                                        />
                                        <div className="flex flex-col text-sm">
                                            <span className="text-sm font-semibold text-[#22222F]">
                                                Run on {run.date} at {run.time}
                                            </span>
                                            <span className="text-xs text-[#8588AB]">
                                                {run.interactions} interactions used • {run.date.split(' ')[1]} {run.time}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="ml-auto text-gray-400">
                                        <Image src="/dashboardIcons/arrowRight.svg" width={24} height={24} alt="" />
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                        <Separator className="bg-[#D5D6E2]" />
                    </div>
                    {/* right side  */}
                    <div className="lg:col-span-3 mx-auto space-y-6">
                        {selectedRun ? (
                            <>
                                {/* Summary Card */}
                                <div className="md:w-[446px] rounded-lg border border-[#D5D6E2] mt-6">
                                    <div className="flex items-center justify-between bg-[#F0FDF4] border-b border-[#D5D6E2] rounded-t-lg px-4 py-3">
                                        <span className="text-sm font-semibold text-[#22222F]">
                                            Run on {selectedRun.date} at {selectedRun.time}
                                        </span>
                                        <span className="text-sm font-semibold text-[#059669] bg-[#D1FAE5] px-2 py-1 rounded-full">
                                            Completed
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between py-3 px-4">
                                        <span className="text-sm text-[#8588AB]">
                                            {selectedRun.interactions} interactions used • {selectedRun.date.split(' ')[1]} {selectedRun.time}
                                        </span>
                                        <div className="flex items-center gap-3">
                                            <Button variant="outline" className="text-sm font-semibold text-[#22222F]">
                                                Replay run
                                            </Button>
                                            <BsThreeDotsVertical className="text-[#8588AB]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Step Cards */}
                                <div className="border border-[#D5D6E2] rounded-lg p-3 flex items-center gap-1">
                                    <Image src="/dashboardIcons/integrations3.svg" width={24} height={24} alt="" />
                                    <p className="text-sm font-semibold text-[#22222F]">
                                        Run started on {selectedRun.date.split(' ')[1]} at {selectedRun.time}
                                    </p>
                                </div>

                                <div className="border border-[#D5D6E2] rounded-lg px-5 py-3 flex items-center gap-1">
                                    <p className="text-sm font-semibold text-[#8588AB] mr-2">1</p>
                                    <Image src="/dashboardIcons/integrations3.svg" width={24} height={24} alt="" />
                                    <p className="text-sm font-semibold text-[#22222F]">Run triggered by Ruben Vaalt</p>
                                </div>

                                <div className="border border-[#D5D6E2] rounded-lg px-5 py-3 flex items-center justify-between">
                                    <div className="flex items-center gap-1">
                                        <p className="text-sm font-semibold text-[#8588AB] mr-2">2</p>
                                        <div className="border rounded p-1">
                                            <Image src="/dashboardIcons/like.svg" width={14} height={14} alt="like image" />
                                        </div>
                                        <p className="text-sm font-semibold text-[#22222F]">Get approval to continue</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Button variant="outline" className="flex items-center gap-2 text-sm -mr-1">
                                            <Image
                                                src="/dashboardIcons/profileImage.jpg"
                                                width={20}
                                                height={20}
                                                alt="Profile"
                                                className="rounded-full"
                                            />
                                            <p>Ruben Vaalt</p>
                                            <BsThreeDotsVertical className="text-[#8588AB]" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="border border-[#D5D6E2] rounded-lg p-3 flex items-center gap-1">
                                    <Checkbox
                                        className="w-6 h-6 bg-white border border-[#D5D6E2] data-[state=checked]:bg-white data-[state=checked]:text-black data-[state=checked]:border-[#D5D6E2] cursor-pointer"
                                    />
                                    <span className="text-sm font-semibold text-[#22222F]">
                                        Run completed on {selectedRun.date.split(' ')[1]} at {selectedRun.time}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <p className="mt-20 text-xl md:text-3xl font-semibold text-center text-[#22222F]">Select a run to view details</p>
                        )}
                    </div>
                {/* </div> */}
            </motion.div>
        </AnimatePresence >
    );
}

export default RunsOverview






