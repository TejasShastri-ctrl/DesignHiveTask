const WelcomeScreen = () => {



    return (
        <div className="w-full max-w-4xl flex flex-col items-center gap-16 animate-in fade-in zoom-in duration-700">
            <header className="flex flex-col items-center text-center space-y-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-6">

                        <div className="w-24 h-14 bg-orange-300 rounded-sm clip-path-hexagon flex items-center justify-center">
                            <div className="w-20 h-10 border-2 border-[#5b284e] opacity-50" />
                        </div>

                        <div className="text-left">
                            <h1
                                className="uppercase tracking-[0.02em] text-[64px] leading-[0.6]"
                                style={{
                                    fontFamily: `"JetBrains Mono", monospace`,
                                    color: "#f4b17a",
                                }}
                            >
                                <span className="block font-thin" style={{ fontFamily: `"JetBrains Mono", monospace` }}>DESIGN</span>
                                <span className="font-black text-6xl ">Hive</span>
                                <span className="text-[30px] font-normal ml-3 opacity-70">2025</span>
                            </h1>
                        </div>


                    </div>
                </div>


                <div className="space-y-4">
                    <div className="text-center flex flex-col items-center">
                        <p className="text-[#F4D8B8] text-2xl mb-2 uppercase tracking-wide">AI Archetype Booth</p>

                    </div>
                    <div className="space-y-1 opacity-80">
                        <p className="text-sm tracking-widest text-orange-50/70 uppercase">Answer Scenarios on Camera</p>
                        <p className="text-sm tracking-widest text-orange-50/70 uppercase font-semibold">Your Expressions Reveal Your Archetype</p>

                        <button
                            className="px-8 py-4 mt-20 rounded-xl uppercase tracking-wider text-sm transition-transform hover:scale-105"
                            style={{ backgroundColor: "rgba(252, 179, 95, 1)", color: "rgb(74,31,62)" }}
                        >
                            Begin
                        </button>
                    </div>
                </div>
            </header>
            <div className="flex-1 w-full flex items-center justify-center">
            </div>
        </div>
    );
};

export default WelcomeScreen;
