import React from 'react';

const WelcomeScreen = () => {
    return (
        <div className="w-full max-w-4xl flex flex-col items-center gap-16 animate-in fade-in zoom-in duration-700">

            {/* Header Section */}
            <header className="flex flex-col items-center text-center space-y-8">
                {/* Logo and Title Group */}
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-6">
                        {/* Geometric Hive Logo Placeholder */}
                        <div className="w-24 h-14 bg-orange-300 rounded-sm clip-path-hexagon flex items-center justify-center">
                            <div className="w-20 h-10 border-2 border-[#5b284e] opacity-50" />
                        </div>
                        <div className="text-left">
                            <h1 className="text-5xl font-light tracking-widest text-orange-100 uppercase leading-none">
                                Design <br /> <span className="font-black text-6xl">Hive</span>
                                <span className="text-xl font-normal ml-3 opacity-70">2025</span>
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Subtitle and Description */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-[0.3em] text-orange-200 uppercase">
                        AI Archetype Booth
                    </h2>
                    <div className="space-y-1 opacity-80">
                        <p className="text-sm tracking-widest text-orange-50/70 uppercase">Answer Scenarios on Camera</p>
                        <p className="text-sm tracking-widest text-orange-50/70 uppercase font-semibold">Your Expressions Reveal Your Archetype</p>
                    </div>
                </div>
            </header>

            {/* 2. Main Visual Area (Center - for future popups/content) */}
            <div className="flex-1 w-full flex items-center justify-center">
                {/* This space is reserved for the "new buttons and popups" you'll add later */}
            </div>
        </div>
    );
};

export default WelcomeScreen;
