const UploadBox = () => {
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
        <button className="flex min-w-[84px] max-w-[480px] h-10 px-4 items-center justify-center rounded-lg bg-[#e7edf4] text-[#0d141c] text-sm font-bold tracking-[0.015em]">
          <span className="truncate">Browse Files</span>
        </button>
      </div>
    </div>
  );
};

export default UploadBox;
