import { useRef } from "react";

const UploadBox = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // open file dialog
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log("Selected files:", files);
    // TODO: upload or preview logic
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-[#cedbe8] px-6 py-14">
        <div className="flex max-w-[480px] flex-col items-center gap-2">
          <p className="text-[#0d141c] text-lg font-bold text-center">
            Drag and drop your blood test report here
          </p>
          <p className="text-[#0d141c] text-sm font-normal text-center">
            Supported formats: PDF, JPG, PNG. Maximum file size: 10MB
          </p>
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf, .jpg, .jpeg, .png"
          className="hidden"
        />

        {/* Styled button */}
        <button
          onClick={handleButtonClick}
          className="flex min-w-[120px] max-w-[480px] h-10 px-5 items-center justify-center rounded-lg bg-[#248bf3] hover:bg-[#0c7ff2] text-white text-sm font-bold tracking-[0.015em] transition duration-200 shadow-sm"
        >
          <span className="truncate">Browse Files</span>
        </button>
      </div>
    </div>
  );
};

export default UploadBox;
