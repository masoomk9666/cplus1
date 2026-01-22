import Lightning from "../layout/Lightning";
export default function WorkflowAutomation() {
  return (
    <section className="w-full py-16 px-4">
      {/* <div className="relative max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#000000] via-[#041414] to-[#020b0b]"> */}
      <div className="relative max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-black">
        {/* Right Side Background Image */}
        <div className="absolute -top-110 -right-125 w-full h-full hidden lg:block">
          <Lightning hue={120} xOffset={0} speed={0.5} intensity={1} size={1} />
        </div>
        <div className="absolute -bottom-30 -right-220 w-full h-full hidden lg:block z-100">
          <img
            src="/images/workflowAutomation/bg1.png"
            alt="Background Lightning"
            fill
            className="object-cover opacity-90 h-full z-100 filter drop-shadow-[0_40px_40px_rgba(34,197,94,0.90)]"
            priority
          />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10 items-center px-16 py-16">
          {/* Left Content */}
          <div className="text-white space-y-6 z-10">
            {/* Sub Heading */}
            <p className="text-[16px] uppercase tracking-widest text-white">
              Low-code & No-code Automation
            </p>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal leading-tight">
              Workflow Automation For Technical Teams
            </h2>

            {/* Workflow Image */}
            <div className="relative pt-6 -mt-10 h-90">
              <img
                src="/images/workflowAutomation/animation.gif"
                alt="Workflow Automation Diagram"
                className="absolute -bottom-20 -left-10 scale-150 w-full max-w-full -z-10"
              />
              <p className="absolute top-58 left-2 text-[12px] text-white w-25 text-center">
              On create user from submission
            </p>
            <p className="absolute top-58 left-35 text-[12px] text-white w-30 text-center">
              Create user in google workspace
            </p>
            <p className="absolute top-42 left-85 text-[12px] text-white w-25 text-center">
              In Manager ?
            </p>
            <p className="absolute top-88 left-84 text-[12px] text-white w-30 text-center">
              Create Slack user
            </p>
            <p className="absolute top-30 left-145 text-[12px] text-white w-30 text-center">
              Create jira admin
            </p>
            <p className="absolute top-59 left-145 text-[12px] text-white w-30 text-center">
              Create jira member
            </p>
            <p className="absolute top-87 left-145 text-[12px] text-white w-30 text-center">
              Update slack profile
            </p>
            </div>
            
          </div>

          {/* Empty column to balance background image */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
