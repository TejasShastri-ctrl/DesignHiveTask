import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnalysisPage = ({ reactions = {}, onComplete }) => {
    const [progress, setProgress] = useState(0);
    const dataPointsCount = Object.keys(reactions).length;

    const THEME_YELLOW = "#c4a000";
    const THEME_GREY = "#4b5563";

    const checkpoints = [
        { id: "initialized", label: "INITIALIZED" },
        { id: "processing", label: "DNA" },
        { id: "analyzing", label: "ANALYZING" },
        { id: "completed", label: "DONE" },
    ];

    useEffect(() => {
        const duration = 4000;
        const interval = 40;
        const increment = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + increment;
            });
        }, interval);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress >= 100 && onComplete) {
            const transitionTimeout = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(transitionTimeout);
        }
    }, [progress, onComplete]);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-end relative overflow-hidden bg-transparent p-8 pb-10">
            <div className="absolute mb-70 inset-0 flex items-center justify-center pointer-events-none">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border-[6px]"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            width: `${i * 100}px`,
                            height: `${i * 100}px`,
                            borderColor: i === 2 ? "#4A6FA5" : i === 3 ? "#A06B4E" : `${THEME_YELLOW}66`,
                            boxShadow: `0 0 30px ${THEME_YELLOW}1A`
                        }}
                    />
                ))}
            </div>

            <div className="z-10 w-full max-w-[600px] flex flex-col items-center gap-8 mb-12">


                {/* Status Texts */}
                <div className="text-center space-y-6">
                    <h2 className="text-[#F4D8B8] mb-2 uppercase tracking-tight text-4xl text-[40px]">Analyzing</h2>

                    <div className="flex flex-col items-center gap-2 space-y-3">
                        <div className={`px-4 py-1.5 rounded-full mt-8 border border-yellow-400 border-[1px] bg-[#3d243a]/60 backdrop-blur-sm animate-pulse duration-500`}>
                            <span className="font-bold tracking-[0.2em] text-[10px] uppercase text-white opacity-60">
                                PROCESSING DNA
                            </span>
                        </div>
                        <span className="text-white/70 font-medium tracking-[0.2em] text-[11px] uppercase">
                            {dataPointsCount} DATA POINTS DETECTED
                        </span>
                    </div>
                </div>

                {/* Progress Bar and Checkpoints */}
                <div className="w-full px-8">
                    <div className="relative h-2.5 w-full bg-[#3d243a]/80 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                            className="absolute top-0 left-0 h-full"
                            style={{
                                width: `${progress}%`,
                                background: `linear-gradient(to right, ${THEME_YELLOW}, ${THEME_GREY})`
                            }}
                        />
                    </div>

                    {/* Checkpoints */}
                    <div className="flex justify-between mt-4">
                        {checkpoints.map((cp, idx) => {
                            const isReached = progress >= (idx * (100 / (checkpoints.length - 1)));
                            return (
                                <div key={cp.id} className="flex flex-col items-center gap-2">
                                    <div
                                        className="w-2 h-2 rounded-full transition-all duration-500"
                                        style={{
                                            backgroundColor: isReached ? THEME_YELLOW : "rgba(255,255,255,0.1)",
                                            boxShadow: isReached ? `0 0 10px ${THEME_YELLOW}99` : "none",
                                            transform: isReached ? "scale(1.1)" : "scale(1)"
                                        }}
                                    />
                                    <span
                                        className="text-[8px] font-black tracking-[0.15em] uppercase transition-colors duration-300"
                                        style={{ color: isReached ? THEME_YELLOW : "rgba(255,255,255,0.2)" }}
                                    >
                                        {cp.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalysisPage;