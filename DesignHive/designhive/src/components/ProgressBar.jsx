
const ProgressBar = ({ currentStep, totalSteps = 12, onNext, onPrev }) => {
  const steps = Array.from({ length: totalSteps });

  return (
    <div className="flex items-center gap-4 w-full justify-center">
      {/* prev */}
      <button
        onClick={onPrev}
        disabled={currentStep === 0}
        className="group relative flex items-center justify-center w-8 h-8 rounded-full border border-[#E9A86A]/30 bg-[#4A1F3E]/40 hover:bg-[#5A2650]/70 disabled:opacity-20 transition-all"
      >
        <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-[#E9A86A]" fill="none" strokeWidth="3">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* actual */}
      <div className="flex items-center gap-3 bg-[#5A2650]/80 backdrop-blur-md border-2 border-[#E9A86A]/30 rounded-full px-6 py-3 shadow-xl">
        {steps.map((_, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isLast = index === totalSteps - 1;

          return (
            <div key={index} className="flex flex-col items-center gap-1 relative">
              <button className={`relative transition-all duration-300 
                ${isActive ? "w-3 h-3" : "w-2 h-2"}
              `}>
                {/* ACTIVE GLOW */}
                {isActive && (
                  <div className="absolute inset-0 -m-2 bg-[#E9A86A] rounded-full blur-md opacity-40 scale-150" />
                )}

                {/* THE DOTS */}
                <div
                  className={`
                    relative w-full h-full rounded-full transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#E9A86A] border-2 border-[#F4D8B8] shadow-lg shadow-[#E9A86A]/50"
                        : isCompleted
                        ? "bg-[#E9A86A] border-2 border-[#E9A86A]"
                        : "bg-[#4A1F3E] border border-[#6B2D5C]/50 hover:border-[#E9A86A]/60 hover:bg-[#5A2650]"
                    }
                  `}
                >
                  {isCompleted && !isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#4A1F3E] rounded-full" />
                    </div>
                  )}
                </div>

                {!isLast && (
                  <div
                    className={`
                      absolute left-full top-1/2 -translate-y-1/2 h-0.5 w-3 transition-all
                      ${isCompleted ? "bg-[#E9A86A]" : "bg-[#6B2D5C]/30"}
                    `}
                  />
                )}
              </button>

              {isActive && (
                <span className="text-[#E9A86A] text-[10px] uppercase tracking-wider">
                  {currentStep + 1}/{totalSteps}
                </span>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
        className="group relative flex items-center justify-center w-8 h-8 rounded-full border border-[#E9A86A]/30 bg-[#4A1F3E]/40 hover:bg-[#5A2650]/70 disabled:opacity-20 transition-all"
      >
        <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-[#E9A86A]" fill="none" strokeWidth="3">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default ProgressBar;
