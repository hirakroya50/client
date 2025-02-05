import React from "react";
import { DragEvent, ChangeEvent } from "react";
import { StepForward } from "lucide-react";

const UploadPart = () => {
  return (
    <div className=" text-center flex justify-center flex-col gap-2 my-12">
      <span>
        <StepForward className="m-auto mt-6 h-10 w-10" />
      </span>{" "}
      <h1 className="text-[3.5rem]">Generative Fill</h1>
      <p className="text-gray-300">
        Replace, remove & fix any element from your pictures
      </p>
      <div className=" flex justify-center items-center mt-14">
        <FileUpload />
      </div>
    </div>
  );
};

export default UploadPart;

function FileUpload() {
  const [file, setFile] = React.useState<File | null>(null);

  // Handle file drop
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  // Handle file selection via input
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Prevent default drag behavior
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#1c60f6] p-3 rounded-lg h-[14rem] w-[95vw]">
      <div
        className="flex justify-center items-center rounded-lg border-dashed border-2 hover:bg-blue-400 border-white w-full  h-full"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file-upload"
          className="text-white font-bold text-lg flex flex-col items-center"
        >
          {file ? (
            <span>{file.name}</span>
          ) : (
            <>
              <p className="cursor-pointer">
                Click, paste, or drop a file here to start.
              </p>
            </>
          )}
        </label>
      </div>
    </div>
  );
}
