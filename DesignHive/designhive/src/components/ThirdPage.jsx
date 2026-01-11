import { motion } from "framer-motion";
import { container, popItem, fadeOnly, popDelayed } from "../motion/animations";

const ThirdPage = ({ onNext, selectionMode, onSelectionModeChange }) => {
  const handleModeSelection = (selectedMode) => {
    console.log("Mode Selected:", selectedMode); // Debugging log
    if (onSelectionModeChange) onSelectionModeChange(selectedMode);
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"

      className="w-full h-full flex flex-col items-center justify-start overflow-y-auto p-8 pt-10 pb-40"
    >
      {/* MOCK CAMERA */}
      <motion.div
        variants={popItem}
        className="relative w-[40vw] min-w-[600px] max-w-4xl h-[40vh] max-h-[360px] min-h-[220px] bg-[#3d243a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex-shrink-0 mt-3"
      >

        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill-rule=\'evenodd\' stroke=\'%23ffffff\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E")', backgroundSize: "40px 45px" }} />
        <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-orange-200/50" />
        <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-orange-200/50" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-orange-200/50" />
        <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-orange-200/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
             <svg viewBox="0 0 24 24" className="w-16 h-16 fill-white opacity-40"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/90">READY</span>
        </div>
      </motion.div>

      {/* CONTROLS */}
      <div className="mt-20 flex flex-col items-center gap-6 w-full max-w-sm">
        {!selectionMode ? (
          <>
            <motion.h2 variants={fadeOnly} className="text-xl font-bold text-orange-200 uppercase tracking-[0.3em]">
              READY?
            </motion.h2>

            <div className="flex gap-x-10">
              <button
                onClick={() => handleModeSelection("Allow")}
                className="px-8 py-4 rounded-xl uppercase tracking-wider text-sm shadow-lg transition-all active:scale-95"
                style={{ backgroundColor: "rgb(233, 168, 106)", color: "rgb(74, 31, 62)" }}
              >
                Allow Camera
              </button>

              <button
                onClick={() => handleModeSelection("Demo")}
                className="px-8 py-4 rounded-xl uppercase tracking-wider text-sm shadow-lg transition-all active:scale-95"
                style={{ backgroundColor: "rgb(233, 168, 106)", color: "rgb(74, 31, 62)" }}
              >
                Demo Mode
              </button>
            </div>
          </>
        ) : (
          <motion.div
            key="continue-button"
            variants={popItem}
            initial="hidden" // Forcing re-animation
            animate="show"
            className="flex flex-col items-center gap-2"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-orange-200 text-lg font-bold uppercase tracking-widest">
                {selectionMode} mode activated
              </p>
              <div className="w-12 h-1 bg-orange-300 rounded-full" />
            </div>

            <button
              onClick={onNext}
              className="px-12 py-4 rounded-full bg-orange-300 text-[#3d243a] font-black uppercase tracking-[0.3em] text-sm shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Continue
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ThirdPage;