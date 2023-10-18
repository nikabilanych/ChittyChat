"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "serverImage" | "messageFile";
}
 
export const FileUpload = ({onChange, value, endpoint}: FileUploadProps) => {
  const fileType = value?.split(".").pop();
  if (value && fileType !== "pdf" ) {
    return (
      <div className="relative h-20 w-20">
        <Image
          fill
          src={value}
          alt="upload image"
          layout="fill"

          className="rounded-full"
        />

      </div>
    )
  }
  return (
    <UploadDropzone
    endpoint={endpoint}
    onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
    }}
    onUploadError={(error:Error) => {
      console.log(error);
    }}
  />
)};

    