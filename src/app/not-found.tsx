"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiArrowLeft } from "react-icons/hi";

export default function Custom404() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-6">
      {/* Back button top-left */}
      <div className="absolute top-6 left-6">
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
            <HiArrowLeft size={20} />
            Go Home
          </Button>
        </Link>
      </div>

      <h1 className="text-[5rem] font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="mb-8 max-w-md">
        Sorry, the page you are looking for doesn’t exist.
      </p>
    </div>
  );
}
