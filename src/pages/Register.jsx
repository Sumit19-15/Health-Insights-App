import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleRegister = () => {
    if (!agree) {
      alert("You must agree to the terms to register.");
      return;
    }
    console.log("Registering:", { name, email, password });
    // TODO: Connect to backend
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
            <h2 className="text-[#0d141c] text-[28px] font-bold text-center pb-3 pt-5">
              Create Account
            </h2>

            {/* Name */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d141c] text-base font-medium pb-2">Name</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input rounded-xl border border-[#cedbe8] bg-slate-50 h-14 px-[15px] text-base text-[#0d141c] placeholder:text-[#49739c] focus:border-[#cedbe8] focus:outline-0"
                />
              </label>
            </div>

            {/* Email */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d141c] text-base font-medium pb-2">Email</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input rounded-xl border border-[#cedbe8] bg-slate-50 h-14 px-[15px] text-base text-[#0d141c] placeholder:text-[#49739c] focus:border-[#cedbe8] focus:outline-0"
                />
              </label>
            </div>

            {/* Password */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0d141c] text-base font-medium pb-2">Password</p>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input rounded-xl border border-[#cedbe8] bg-slate-50 h-14 px-[15px] text-base text-[#0d141c] placeholder:text-[#49739c] focus:border-[#cedbe8] focus:outline-0"
                />
              </label>
            </div>

            {/* Terms Checkbox */}
            <div className="flex px-4 py-3 items-center gap-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="accent-[#248bf3] size-4"
              />
              <label className="text-sm text-[#0d141c]">
                I agree to the{" "}
                <a href="#" className="text-[#248bf3] underline">
                  terms & conditions
                </a>
              </label>
            </div>

            {/* Register Button */}
            <div className="flex px-4 py-3">
              <button
                onClick={handleRegister}
                className="flex flex-1 items-center justify-center h-10 px-4 rounded-xl bg-[#0c7ff2] text-slate-50 text-lg font-bold tracking-[0.015em]"
              >
                Create Account
              </button>
            </div>

            {/* Already have account */}
            <p className="text-m text-center text-[#49739c] px-4">
              Already have an account?{" "}
              <Link to="/login" className="text-[#248bf3] underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
