
const ThirdPage = ({ onNext, selectionMode, onSelectionModeChange }) => {
    const handleModeSelection = (selectedMode) => {
        if (onSelectionModeChange) onSelectionModeChange(selectedMode);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in duration-700">

            {/* mock camera */}
            <div className="relative w-full max-w-4xl aspect-video bg-[#3d243a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill-rule=\'evenodd\' stroke=\'%23ffffff\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E")',
                        backgroundSize: '40px 45px'
                    }}
                />

                <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-orange-200/50" />
                <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-orange-200/50" />
                <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-orange-200/50" />
                <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-orange-200/50" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-16 h-16 fill-white opacity-40">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/90">READY</span>
                </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-8 w-full max-w-sm">
                {!selectionMode ? (
                    <>
                        <h2 className="text-xl font-bold text-orange-200 uppercase tracking-[0.3em]">
                            READY?
                        </h2>
                        <div className="flex flex-col w-full gap-4">
                            <button
                                onClick={() => handleModeSelection('Allow')}
                                className="w-full py-4 rounded-xl bg-orange-300 text-[#3d243a] font-black uppercase tracking-widest text-sm hover:bg-orange-200 transition-all shadow-lg hover:scale-[1.02]"
                            >
                                Allow Camera
                            </button>
                            <button
                                onClick={() => handleModeSelection('Demo')}
                                className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-orange-100 font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
                            >
                                Demo Mode
                            </button>
                        </div>
                        <p className="text-xs text-orange-100/40 uppercase tracking-widest">CAMERA ACCESS REQUIRED</p>
                    </>
                ) : (
                    <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-orange-200 text-lg font-bold uppercase tracking-widest">
                                {selectionMode} mode activated
                            </p>
                            <div className="w-12 h-1 bg-orange-300 rounded-full" />
                        </div>
                        <button
                            onClick={onNext}
                            className="px-12 py-4 rounded-full bg-orange-300 text-[#3d243a] font-black uppercase tracking-[0.3em] text-sm hover:bg-orange-200 transition-all shadow-xl hover:scale-105"
                        >
                            Continue
                        </button>
                    </div>
                )}
            </div>

            <div className="fixed top-8 right-12 flex items-center gap-4 text-orange-100/60 font-medium tracking-widest text-sm">
                <span className="opacity-80">3 / 12</span>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    <span>LIVE</span>
                </div>
            </div>
        </div>
    );
};

export default ThirdPage;