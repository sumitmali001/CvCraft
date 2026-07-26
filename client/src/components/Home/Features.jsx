import React from "react";

const Features = () => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div id="features" className="bg-black pt-20">
      {/* Live demo badge */}
      <div className="flex items-center justify-center mb-5 px-5">
        <div className="rainbow relative z-0 bg-[#0077b6]/15 overflow-hidden p-px flex items-center justify-center rounded-full transition duration-300 active:scale-100">
          <div className="flex items-center justify-center gap-3 pl-4 pr-6 py-3 text-white rounded-full font-medium bg-[#0077b6]/80 backdrop-blur">
            <div className="relative flex size-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping duration-300"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#90e0ef]"></span>
            </div>

            <span className="text-xs">Powerful Resume Tools</span>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center max-w-xl mx-auto px-5 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Everything You Need To Build The Perfect Resume
        </h2>

        <p className="mt-3 text-sm md:text-base text-slate-400">
          Create, customize, manage, and share professional resumes with
          powerful tools designed to help you stand out and get noticed.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 px-5 sm:px-6 lg:px-10 pt-6 pb-10 bg-black overflow-x-hidden">
        {/* Image */}
        <img
          className="w-full max-w-lg md:max-w-xl lg:max-w-2xl shrink-0"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="Resume Builder Features"
        />

        {/* Feature Cards */}
        <div
          className="w-full max-w-md px-0"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Card 1 */}
          <div className="w-full group cursor-pointer mb-5">
            <div
              className={`w-full p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl flex gap-4 transition-colors group-hover:bg-white/15 group-hover:border-violet-300/50 ${
                !isHover ? "border-violet-300/50 bg-white/15" : ""
              }`}
            >
              <svg
                className="size-6 stroke-violet-400 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>

              <div>
                <h3 className="text-base font-semibold text-white">
                  Save & Manage Your Resumes
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Create an account to securely save, edit, track, and manage
                  all your resumes anytime from one place.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full group cursor-pointer mb-5">
            <div className="w-full p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl flex gap-4 transition-colors group-hover:bg-white/15 group-hover:border-green-300/50">
              <svg
                className="size-6 stroke-green-400 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
              </svg>

              <div>
                <h3 className="text-base font-semibold text-white">
                  Choose From Professional Templates
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Pick from multiple modern resume templates designed to
                  highlight your skills, experience, and career goals.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full group cursor-pointer mb-10">
            <div className="w-full p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl flex gap-4 transition-colors group-hover:bg-white/15 group-hover:border-orange-300/50">
              <svg
                className="size-6 stroke-orange-400 shrink-0
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>

              <div>
                <h3 className="text-base font-semibold text-white">
                  Download & Share Anywhere
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Create your resume once and instantly download it as a
                  professional PDF or share it with recruiters through a live
                  resume link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;