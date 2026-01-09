import React from 'react';

const ProgressBar = ({ currentStep, totalSteps = 12, onNext, onPrev }) => {
  const dots = Array.from({ length: totalSteps });

  return (
    <div className="flex items-center gap-4 w-full max-w-[30%] px-4">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={currentStep === 0}
        className="group relative flex items-center justify-center w-8 h-8 rounded-full border border-yellow-400/20 bg-white/5 hover:bg-white/10 disabled:opacity-10 transition-all duration-300 flex-shrink-0"
      >
        <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-yellow-100/70 group-hover:stroke-yellow-100" fill="none" strokeWidth="3">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Main Pill Container - Smaller height and yellow border */}
      <div className="relative flex-1 h-15 bg-[#531b3cff]/80 backdrop-blur-2xl border border-yellow-400/50 rounded-full px-6 flex items-center justify-between">

        {/* The connecting horizontal line - Base Layer */}
        <div className="absolute left-6 right-6 h-[1px] bg-white/5 top-1/2 -translate-y-1/2 z-0">
          {/* Highlighted segment for completed progress */}
          <div
            className="h-full bg-yellow-400/60 transition-all duration-500 shadow-[0_0_10px_rgba(250,204,21,0.4)]"
            style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
          />
        </div>

        {dots.map((_, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              {/* The Dot */}
              <div
                className={`transition-all duration-500 rounded-full
                  ${isActive
                    ? 'w-2 h-2 bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.6)] border border-white/40'
                    : isCompleted
                      ? 'w-1.5 h-1.5 bg-yellow-400/80 shadow-[0_0_6px_rgba(250,204,21,0.3)]'
                      : 'w-1.5 h-1.5 bg-white/10'}
                `}
              />

              {/* Step Counter Text */}
              <div
                className={`absolute top-4 whitespace-nowrap text-[8px] font-black tracking-widest transition-all duration-500
                  ${isActive ? 'opacity-100 translate-y-0 text-yellow-100' : 'opacity-0 -translate-y-1'}
                `}
              >
                {currentStep + 1}/{totalSteps}
              </div>
            </div>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
        className="group relative flex items-center justify-center w-8 h-8 rounded-full border border-yellow-400/20 bg-white/5 hover:bg-white/10 disabled:opacity-10 transition-all duration-300 flex-shrink-0"
      >
        <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-yellow-100/70 group-hover:stroke-yellow-100" fill="none" strokeWidth="3">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default ProgressBar;
