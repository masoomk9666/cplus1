
export default function WorkflowAutomation() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#000000] via-[#041414] to-[#020b0b]">

        {/* Right Side Background Image */}
        <div className="absolute -bottom-0 -right-125 w-full h-full hidden lg:block">
          <img
            src="/images/workflowAutomation/bg.png"
            alt="Background Lightning"
            fill
            className="object-cover opacity-90 h-full"
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
            <div className="pt-6 -mt-10">
              <img
                src="/images/workflowAutomation/animation1.png"
                alt="Workflow Automation Diagram"
                className="w-full max-w-[88%]"
              />
            </div>
          </div>

          {/* Empty column to balance background image */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
