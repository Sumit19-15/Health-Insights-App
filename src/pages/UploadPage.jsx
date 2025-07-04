import UploadTabs from "../components/uploader/UploadTabs";
import UploadBox from "../components/uploader/UploadBox";

const UploadPage = () => {
  return (
    <div className="flex justify-center w-full px-4 py-8">
      <div className="w-full max-w-[960px] flex flex-col">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3">
          <p className="text-[#0d141c] text-[32px] font-bold leading-tight min-w-72">
            Blood Test Analysis
          </p>
        </div>

        {/* Tabs */}
        <UploadTabs />

        {/* Upload Box */}
        <UploadBox />

        {/* Terms Notice */}
        <p className="text-[#49739c] text-sm font-normal leading-normal text-center underline pt-4">
          By uploading, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default UploadPage;

