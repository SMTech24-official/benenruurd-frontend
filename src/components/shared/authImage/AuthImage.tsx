"use client";

import Image from "next/image";

interface AuthImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  containerClassName?: string;
  imageClassName?: string;
}

const AuthImage = ({
  src = "/authenticationImg.png",
  alt = "Login Illustration",
  width = 563,
  height = 922,
  containerClassName = "",
  imageClassName = "",
}: AuthImageProps) => {
  return (
    <div
      className={`flex flex-1 items-center justify-center bg-[#EEF8FF] px-8 ${containerClassName}`}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={`object-contain w-full h-screen ${imageClassName}`}
      />
    </div>
  );
};

export default AuthImage;
