const Landing = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-10 py-10 max-w-[960px] mx-auto flex flex-col gap-16">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div
              className="aspect-video bg-cover bg-center rounded-lg w-full md:w-1/2"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/...')",
              }}
            ></div>
            <div className="flex flex-col gap-6 md:w-1/2">
              <h1 className="text-4xl font-black text-[#0d141c]">
                Understand Your Blood Test Results Instantly
              </h1>
              <p className="text-base text-[#0d141c]">
                AI-powered insights for better health decisions.
              </p>
              <button className="bg-[#248bf3] text-white font-bold rounded-lg h-12 px-5 text-base">
                Analyze Your Blood Test
              </button>
            </div>
          </div>

          {/* Empowering Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[#0d141c] text-[32px] font-bold leading-tight max-w-[720px]">
              Empowering Your Health Journey
            </h2>
            <p className="text-[#0d141c] text-base font-normal leading-normal max-w-[720px]">
              Our platform provides quick, personalized, and secure analysis of
              your blood test results, helping you make informed decisions about
              your health.
            </p>
          </div>

          {/* Key Features Section */}
          <div>
            <h2 className="text-[#0d141c] text-[22px] font-bold mb-6">
              Key Features
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-6">
              <FeatureBox
                title="Fast Analysis"
                desc="Get your blood test results analyzed within minutes."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128...Z" />
                    <i class="fa-regular fa-clock"></i>
                    <i class="fa-solid fa-clock"></i>
                  </svg>
                }
              />
              <FeatureBox
                title="Personalized Insights"
                desc="Receive tailored health recommendations based on your unique profile."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,40H136V24a8,8,0,0,0-16,0..." />
                  </svg>
                }
              />
              <FeatureBox
                title="Secure & Private"
                desc="Your data is encrypted and kept confidential."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,40H48A16,16,0,0,0,32,56..." />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureBox = ({ title, desc, icon }) => (
  <div className="border border-[#cedbe8] bg-slate-50 p-4 rounded-lg flex flex-col gap-2">
    <div className="flex items-center space-x-2">
      <span className="text-blue-500 text-xl">{icon}</span>
    </div>
    <h3 className="text-[#0d141c] font-bold text-base">{title}</h3>
    <p className="text-[#49739c] text-sm">{desc}</p>
  </div>
);

export default Landing;
