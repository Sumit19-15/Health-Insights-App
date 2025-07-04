import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-b-[#e7edf4] px-10 py-3">
      {/* Left Logo and Brand */}
      <div className="flex items-center gap-4 text-[#0d141c]">
        <div className="size-4">
          {/* You can replace this with your SVG logo or icon */}
          <div className="w-4 h-4 bg-[#248bf3] rounded-full"></div>
        </div>
        <Link
          to="/"
          className="text-[#0d141c] text-lg font-bold"
        >
        <h2>Health Insights</h2>
        </Link>
        
      </div>

      {/* Right Navigation and Buttons */}
      <div className="flex flex-1 justify-end gap-8 items-center">
        {/* Nav links */}
        <div className="flex items-center gap-9">
          <a className="text-[#0d141c] text-sm font-medium" href="#">
            About
          </a>
          <a className="text-[#0d141c] text-sm font-medium" href="#">
            Services
          </a>
          <a className="text-[#0d141c] text-sm font-medium" href="#">
            Contact
          </a>
        </div>

        {/* Buttons + Globe + Avatar */}
        <div className="flex items-center gap-2">
          <Link
            to="/upload"
            className="flex flex-1 items-center justify-center h-10 px-4 rounded-xl bg-[#0c7ff2] text-slate-50 text-sm font-bold tracking-[0.015em]"
          >
            Analyze Your Blood Test
          </Link>

          {/* Link to /login */}
          <Link
            to="/login"
            className="h-10 px-4 rounded-lg bg-[#e7edf4] text-[#0d141c] text-sm font-bold flex items-center justify-center"
          >
            Login
          </Link>

          {/* Globe Icon Button */}
          <button className="flex h-10 px-2.5 rounded-lg bg-[#e7edf4] text-[#0d141c] gap-2 text-sm font-bold tracking-[0.015em] min-w-0 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128..." />
            </svg>
          </button>

          {/* Avatar */}
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYkcV9l1g9Aigafs2LCqHAaWLHlwTNC9xf7qXc31a99W1KF2qorhTIMkE5_e-RTDL3owcxbvCjOWqHtMf0zWgW3ZLvKnFRVToNK7YiIcITW3kcm_JUemHpfwdQ-8otMi9aTc4CMD1PlROQ5dh4-43pYCeTPNR3dNFjQyBHkaF00WaLgC3rz5s_zfveOfYif5BqrEeWJ3hIC1OPk_6SE1z_8ltEQ30bZb_X88bnv5cKpqRbx9-uTFZxoLmCoNCDj08Ccr9bpJ2XwdI")',
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
