"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiPlus } from "react-icons/hi";
import { motion } from "framer-motion";

type WorkflowStatus = "Active" | "Inactive";
type IssueStatus = "error" | "none";

interface WorkflowItem {
  workflow: string;
  icon: string;
  lastRun: string;
  issue: string;
  issueStatus: IssueStatus;
  status: WorkflowStatus;
}

// interface InfoCardProps {
//   title: string;
//   description: string;
//   icon: string;
// }

function Dashboard() {
  const workflows: WorkflowItem[] = [
    {
      workflow: "Gmail - Email Received",
      icon: "/dashboardIcons/gmail.svg",
      lastRun: "23-06-2025 10:21",
      issue: "Missing connection",
      issueStatus: "error",
      status: "Active",
    },
    {
      workflow: "Gmail - Email Received",
      icon: "/dashboardIcons/gmail.svg",
      lastRun: "23-06-2025 10:21",
      issue: "Missing connection",
      issueStatus: "error",
      status: "Inactive",
    },
    {
      workflow: "Gmail - Email Received",
      icon: "/dashboardIcons/gmail.svg",
      lastRun: "23-06-2025 10:21",
      issue: "Missing connection",
      issueStatus: "error",
      status: "Active",
    },
  ];

  const mostRecentWorkflo = [
    {
      icon: "/dashboardIcons/gmail.svg",
      workflow: "Gmail - Email Received",
      lastUpdated: "23-06-2025 10:21",
      lastRun: "23-06-2025 10:21",
      status: "Active",
    },
    {
      icon: "/dashboardIcons/gmail.svg",
      workflow: "Gmail - Email Received",
      lastUpdated: "23-06-2025 10:21",
      lastRun: "23-06-2025 10:21",
      status: "Inactive",
    },
    {
      icon: "/dashboardIcons/gmail.svg",
      workflow: "Gmail - Email Received",
      lastUpdated: "23-06-2025 10:21",
      lastRun: "23-06-2025 10:21",
      status: "Active",
    },
  ];

  const mostWorkflowsRn = [
    {
      icon: "/dashboardIcons/gmail.svg",
      workflow: "Gmail - Email Received",
      run: "Name of the run here",
      lastUpdate: "23-06-2025 10:21",
      interactions: "84",
      status: "Completed",
    },
    {
      icon: "/dashboardIcons/gmail.svg",
      workflow: "Gmail - Email Received",
      run: "Name of the run here",
      lastUpdate: "23-06-2025 10:21",
      interactions: "84",
      status: "Not completed",
    },
    {
      icon: "/dashboardIcons/gmail.svg",
      workflow: "Gmail - Email Received",
      run: "Name of the run here",
      lastUpdate: "23-06-2025 10:21",
      interactions: "84",
      status: "Completed",
    },
  ];

  // const infoCards: InfoCardProps[] = [
  //   {
  //     title: "Documentation",
  //     description: "Learn about the best practices and check all functions of the platform.",
  //     icon: "/dashboardIcons/documentation.svg",
  //   },
  //   {
  //     title: "Templates",
  //     description: "Explore pre-built workflows for common use cases.",
  //     icon: "/dashboardIcons/documentation.svg",
  //   },
  //   {
  //     title: "Community",
  //     description: "Get support from other users and exchange ideas for new workflows and functions.",
  //     icon: "/dashboardIcons/documentation.svg",
  //   },
  // ];

  return (
    <motion.div
      key="trigger-panel"
      initial={{ y: "-10px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-20px", opacity: 0 }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      className="w-full px-10 py-4 bg-[#FCFCFD]"
    >
      {/* <div className="w-full px-10 py-4 bg-[#FCFCFD]"> */}
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Image
          src="/dashboardIcons/messageImg.svg"
          width={40}
          height={40}
          alt="Message"
          className="cursor-pointer"
        />
        <Link href="/dashboard/dashboard">
          <button className="bg-[#217AFC] hover:bg-[#217AFC] border border-[#0D5AE8] flex items-center gap-2 font-semibold text-sm cursor-pointer text-[#FFFFFF] px-3 py-[5px] rounded-[8px]"
            style={{
              boxShadow: "0px 1px 1px 0px rgba(100, 102, 241, 0.12), 0px 2px 2px 0px rgba(100, 102, 241, 0.12)"
            }}
          >
            <HiPlus /> New workflow
          </button>

        </Link>
      </div>

      {/* ================= Workflows that need attention ================= */}
      <div className="mb-24">
        <h3 className="text-xl text-[#22222F] font-semibold mb-3">Workflows that need attention</h3>
        <div className="w-full overflow-x-auto rounded-xl border border-[#D8D8DF]" style={{ boxShadow: "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)" }}>
          <table className="w-full table-auto min-w-[768px]">
            <thead style={{ borderBottom: "1px solid var(--border-colors-dark-blue-200, #D8D8DF)" }}>
              <tr>
                <th className="px-3 py-2 text-left text-[#8588AB] font-semibold text-sm">Workflow</th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Last run</th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Issue</th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {workflows.map((item, i) => (
                <tr key={i} className="hover:bg-[#FAFAFA] cursor-pointer transition" style={{ borderTop: "1px solid var(--border-colors-dark-blue-200, #D5D6E2)" }}>
                  <td className="px-3 py-2 flex items-center gap-2 font-semibold text-[#22222F]">
                    <Image src={item.icon} width={24} height={24} alt="icon" className="border border-[#D5D6E2] p-1 rounded-[3px]" />
                    <span className="text-sm">{item.workflow}</span>
                  </td>
                  <td className="px-6 py-2 text-[#707187] font-semibold text-sm">{item.lastRun}</td>
                  <td className="px-6 py-2">
                    <span className="bg-[#FEF2F2] text-[#D94F4F] font-semibold text-sm px-3 py-1 rounded-full">{item.issue}</span>
                  </td>
                  <td className="px-6 py-2">
                    {item.status === "Active" ? (
                      <span className="bg-[#D1FAE5] text-[#059669] font-semibold text-sm px-3 py-1 rounded-full">Active</span>
                    ) : (
                      <span className="bg-[#EEEDF1] text-[#26252C] font-semibold text-sm px-3 py-1 rounded-full">Inactive</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= Most recent workflows ================= */}
      <div className="mb-24">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl text-[#22222F] font-semibold">Most recent workflows</h3>
          <Link href="/dashboard/workflow">
            <Button
              variant="outline"
              className="text-sm font-semibold cursor-pointer border rounded-md hover:bg-transparent hover:text-inherit"
              style={{
                boxShadow:
                  "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)",
              }}
            >
              See all workflows
            </Button>


          </Link>
        </div>
        <div className="w-full overflow-x-auto rounded-xl border border-[#D8D8DF]" style={{ boxShadow: "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)" }}>
          <table className="w-full table-auto min-w-[768px]">
            <thead style={{ borderBottom: "1px solid var(--border-colors-dark-blue-200, #D8D8DF)" }}>
              <tr>
                <th className="px-3 py-2 text-left text-[#8588AB] font-semibold text-sm">Workflow</th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Last updated</th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Last run</th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {mostRecentWorkflo.map((item, i) => (
                <tr key={i} className="hover:bg-[#FAFAFA] cursor-pointer transition" style={{ borderTop: "1px solid var(--border-colors-dark-blue-200, #D5D6E2)" }}>
                  <td className="px-3 py-2 flex items-center gap-2 font-semibold text-[#22222F]">
                    <Image src={item.icon} width={24} height={24} alt="icon" className="border border-[#D5D6E2] p-1 rounded-[3px]" />
                    <span className="text-sm">{item.workflow}</span>
                  </td>
                  <td className="px-6 py-2 text-[#707187] font-semibold text-sm">{item.lastUpdated}</td>
                  <td className="px-6 py-2 text-[#707187] font-semibold text-sm">{item.lastRun}</td>
                  <td className="px-6 py-2">
                    {item.status === "Active" ? (
                      <span className="bg-[#D1FAE5] text-[#059669] font-semibold text-sm px-3 py-1 rounded-full">Active</span>
                    ) : (
                      <span className="bg-[#EEEDF1] text-[#26252C] font-semibold text-sm px-3 py-1 rounded-full">Inactive</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= Most recent runs ================= */}
      <div className="mb-24">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl text-[#22222F] font-semibold">Most recent runs</h3>
          <Link href="/dashboard/runsoverview">
            <Button
              variant="outline"
              className="text-sm font-semibold cursor-pointer border rounded-md hover:bg-transparent hover:text-inherit"
              style={{
                boxShadow:
                  "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)",
              }}
            >
              See all runs
            </Button>

          </Link>
        </div>
        <div className="w-full overflow-x-auto rounded-xl border border-[#D8D8DF]" style={{ boxShadow: "0px 1px 1px 0px rgba(18, 25, 44, 0.06), 0px 1px 1px 0px rgba(18, 25, 44, 0.04)" }}>
          <table className="w-full table-auto min-w-[768px]">
            <thead style={{ borderBottom: "1px solid var(--border-colors-dark-blue-200, #D8D8DF)" }}>
              <tr>
                <th className="px-3 py-2 text-left text-[#8588AB] font-semibold text-sm">Workflow</th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Run</th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Last update</th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Interactions used</th>
                <th className="px-6 py-2 text-left text-[#8588AB] font-semibold text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {mostWorkflowsRn.map((item, i) => (
                <tr key={i} className="hover:bg-[#FAFAFA] cursor-pointer transition" style={{ borderTop: "1px solid var(--border-colors-dark-blue-200, #D5D6E2)" }}>
                  <td className="px-3 py-2 flex items-center gap-2 font-semibold text-[#22222F]">
                    <Image src={item.icon} width={24} height={24} alt="icon" className="border border-[#D5D6E2] p-1 rounded-[3px]" />
                    <span className="text-sm">{item.workflow}</span>
                  </td>
                  <td className="px-6 py-2 text-[#707187] font-semibold text-sm">{item.run}</td>
                  <td className="px-6 py-2 text-[#707187] font-semibold text-sm">{item.lastUpdate}</td>
                  <td className="px-6 py-2 text-[#217AFC] font-semibold text-sm">{item.interactions}</td>
                  <td className="px-6 py-2">
                    {item.status === "Completed" ? (
                      <span className="bg-[#D1FAE5] text-[#059669] font-semibold text-sm px-3 py-1 rounded-full">Completed</span>
                    ) : (
                      <span className="bg-[#FEF2F2] text-[#D94F4F] font-semibold text-sm px-3 py-1 rounded-full">Not completed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= Explore Section ================= */}
      {/* <div className="my-24">
        <h3 className="text-xl text-[#22222F] font-semibold mb-3">Explore</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCards.map((item, index) => (
            <div key={index} className="flex items-start gap-3 rounded-xl border border-[#D5D6E2] bg-white p-4 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-center border border-[#D5D6E2] rounded-[3px] bg-[#FCFCFD]">
                <Image src={item.icon} width={24} height={24} alt={item.title || "icon"} className="p-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">{item.title}</h3>
                <p className="text-sm text-[#8588AB] mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="my-24">
        <h3 className="text-xl text-[#22222F] font-semibold mb-3">Explore</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-3 rounded-xl border border-[#D5D6E2] bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-center border border-[#D5D6E2] rounded-[3px] bg-[#FCFCFD]">
              <img src="/dashboardIcons/documentation.svg" alt="" className="p-1"/>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Documentation</h3>
              <p className="text-sm text-[#8588AB] mt-1">Learn about the best practices and check all functions of the platform.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-[#D5D6E2] bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-center border border-[#D5D6E2] rounded-[3px] bg-[#FCFCFD]">
              <img src="/dashboardIcons/documentation.svg" alt="" className="p-1"/>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Templates</h3>
              <p className="text-sm text-[#8588AB] mt-1">Explore pre-built workflows for common use cases.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-[#D5D6E2] bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="flex items-center justify-center border border-[#D5D6E2] rounded-[3px] bg-[#FCFCFD]">
              <img src="/dashboardIcons/documentation.svg" alt="" className="p-1"/>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">Community</h3>
              <p className="text-sm text-[#8588AB] mt-1">Get support from other users and exchange ideas for new workflows <br /> and functions.</p>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
}

export default Dashboard;

