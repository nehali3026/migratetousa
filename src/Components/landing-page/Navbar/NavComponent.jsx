/* eslint-disable react/prop-types */
const NavComponent = ({
  scrollToSection,
  heroRef,
  worksRef,
  paymentRef,
  activeSection,
}) => {
  return (
    <>
      <header className="sticky top-0 z-50 ">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between ">
          <a
            className={`flex items-center gap-2 bg-(--bg-main) py-1 px-2 rounded-full`}
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" h-6 w-6 mr-2 font-thin"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            <span className="font-bold text-xl">
              MoveToUSA<span className="text-purple-600">.co</span>
            </span>
          </a>
        </div>
      </header>
      <div className="fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 h-10">
        <div className="flex items-center gap-3 shadow-lg rounded-full p-1 menu-main">
          <a
            className={`relative group cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors hover:text-(--text-primary-hover) bg-muted text-(--text-primary) hover:bg-(--bg-gray) ${
              activeSection === "demo"
                ? "text-(--text-primary-hover) bg-(--bg-gray)"
                : "  "
            }`}
            onClick={() => scrollToSection("demo", heroRef)}
          >
            <span className="hidden md:inline whitespace-nowrap">Demo</span>
            <span className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            </span>
            <div
              className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
              style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
            >
              <div
                className={`"group-hover:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-(--text-primary-hover) rounded-b-full ${
                  activeSection === "demo" ? "block" : "hidden"
                }`}
              >
                <div className="absolute w-4 h-4  rounded-full  bottom-0 left-2"></div>
              </div>
            </div>
          </a>
          <a
            className={`relative group cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors hover:text-(--text-primary-hover) bg-muted text-(--text-primary) hover:bg-(--bg-gray) ${
              activeSection === "howItWorks"
                ? "text-(--text-primary-hover) bg-(--bg-gray)"
                : "  "
            }`}
            onClick={() => scrollToSection("howItWorks", worksRef)}
          >
            <span className="hidden md:inline whitespace-nowrap">
              How it works
            </span>
            <span className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
            <div
              className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
              style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
            >
              <div
                className={`group-hover:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-(--text-primary-hover) rounded-b-full ${
                  activeSection === "howItWorks" ? "block" : "hidden"
                }`}
              >
                <div className="absolute w-4 h-4  rounded-full  bottom-0 left-2"></div>
              </div>
            </div>
          </a>
          <a
            className={`relative group cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors hover:text-(--text-primary-hover) bg-muted text-(--text-primary) hover:bg-(--bg-gray) ${
              activeSection === "pricing"
                ? "text-(--text-primary-hover) bg-(--bg-gray)"
                : "  "
            }`}
            onClick={() => scrollToSection("pricing", paymentRef)}
          >
            <span className="hidden md:inline whitespace-nowrap">Pricing</span>
            <span className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-briefcase"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
            </span>
            <div
              className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
              style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
            >
              <div
                className={`group-hover:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-(--text-primary-hover) rounded-b-full ${
                  activeSection === "pricing" ? "block" : "hidden"
                }`}
              >
                <div className="absolute w-4 h-4  rounded-full  bottom-0 left-2"></div>
              </div>
            </div>
          </a>
          <a
            className="relative group cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors hover:text-(--text-primary-hover) bg-muted text-(--text-primary) hover:bg-(--bg-gray) "
            href="/pro"
          >
            <span className="hidden md:inline whitespace-nowrap">Login</span>
            <span className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </span>
            <div
              className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
              style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
            >
              <div className="group-hover:block hidden absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-(--text-primary-hover) rounded-b-full">
                <div className="absolute w-4 h-4  rounded-full  bottom-0 left-2"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavComponent;
