import React, { useState, useEffect } from 'react';

const SecondPage = ({ onNext }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const intervalTime = 20;
        const increment = (intervalTime / duration) * 100;

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + increment;
            });
        }, intervalTime);

        if (progress >= 100) {
            const timeout = setTimeout(() => {
                if (onNext) onNext();
            }, 500);
            return () => clearTimeout(timeout);
        }

        return () => clearInterval(timer);
    }, [progress, onNext]);

    return (
        <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-12 animate-in fade-in zoom-in duration-700">

            {/* Profile Image Area */}
            <div className="relative">
                <div className="w-64 h-64 rounded-full border-2 border-orange-300/30 p-2 animate-pulse">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-orange-300 shadow-[0_0_50px_rgba(253,186,116,0.4)]">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                            alt="Profile Placeholder"
                            className="w-full h-full object-cover grayscale contrast-125"
                        />
                    </div>
                </div>

                {/* Decorative Rings */}
                <div className="absolute -inset-4 border border-orange-200/20 rounded-full animate-[spin_8s_linear_infinite]" />
                <div className="absolute -inset-8 border border-white/5 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
            </div>

            <div className="flex flex-col items-center gap-2">
                <h2 className="text-4xl font-black text-orange-100 uppercase tracking-[0.3em]">
                    Step Closer
                </h2>
                <div className="flex items-center gap-4 text-orange-200/60 font-medium tracking-[0.2em] text-sm italic">
                    <span className="w-12 h-px bg-orange-200/20" />
                    ANALYZING BIOMETRICS
                    <span className="w-12 h-px bg-orange-200/20" />
                </div>
            </div>

            {/* Loading Visual */}
            <div className="w-96 flex flex-col items-center gap-4 mt-4">
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div
                        className="h-full bg-orange-300 transition-all duration-75 ease-linear shadow-[0_0_15px_rgba(253,186,116,0.6)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-orange-50/60 text-[10px] tracking-[0.4em] uppercase font-bold">
                    Detecting presence...
                </p>
            </div>

            {/* Visual Button Placeholder */}
            <div className="opacity-40 grayscale pointer-events-none">
                <button className="px-12 py-4 rounded-full border-2 border-orange-200/30 text-orange-100 font-bold uppercase tracking-widest text-sm">
                    Activate Camera
                </button>
            </div>
        </div>
    );
};

export default SecondPage;
