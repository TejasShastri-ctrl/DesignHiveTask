import React from "react";
import { motion } from "framer-motion";

const EighthPage = ({ onSelect, selectedReaction }) => {
    const scenarioCards = [
        { id: 1, text: "FIX A TYPO OR REDESIGN?" },
        { id: 2, text: "WHEN PIXELS MISALIGN...?" },
        { id: 3, text: "DO YOU RENAME LAYER" },
    ];

    const reactions = [
        { id: "thoughtful", label: "THOUGHTFUL", icon: "🤔" },
        { id: "amused", label: "AMUSED", icon: "😅" },
        { id: "guilty", label: "GUILTY", icon: "😬" },
    ];

    return (
        // Reduced main gap from gap-8 to gap-6 to tighten the layout
        <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8 animate-in fade-in zoom-in duration-700 relative overflow-hidden">

            {/* Hexagon Pattern Background Overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23ead3c0' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '56px 100px'
                }}
            />

            <h1 className="text-6xl font-black text-[#ead3c0] text-center uppercase tracking-tight drop-shadow-2xl mb-2">
                Bonus Round!
            </h1>

            {/* Top Scenario Cards - Made Smaller */}
            {/* Reduced max-width (max-w-5xl -> max-w-4xl) and margin-bottom (mb-8 -> mb-6) */}
            <div className="flex justify-center gap-4 w-full max-w-4xl mb-6">
                {scenarioCards.map((card) => (
                    <div
                        key={card.id}
                        // Reduced padding (p-8 -> p-6) and height (h-48 -> h-32)
                        className="flex-1 bg-[#3d243a]/60 backdrop-blur-md border border-orange-200/20 rounded-2xl p-6 flex items-center justify-center text-center h-32"
                    >
                        {/* Reduced text size (text-lg -> text-sm) */}
                        <span className="text-orange-100 font-black tracking-widest text-sm uppercase leading-tight">
                            {card.text}
                        </span>
                    </div>
                ))}
            </div>

            {/* Select Reaction Section */}
            <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
                <h2 className="text-[10px] font-bold text-orange-200/40 uppercase tracking-[0.5em]">
                    Select Reaction
                </h2>

                <div className="flex justify-center gap-8">
                    {reactions.map((reaction) => {
                        const isSelected = selectedReaction === reaction.id;

                        return (
                            <button
                                key={reaction.id}
                                onClick={() => onSelect && onSelect("eighth", reaction.id)}
                                className={`
    group flex items-center gap-3 px-6 py-4 rounded-full border-2
    transition-all duration-300 ease-out
    ${isSelected
                                        ? "bg-orange-300 border-orange-300 scale-105 shadow-[0_0_28px_rgba(253,186,116,0.35)]"
                                        : `bg-[#3d243a]/35 backdrop-blur-sm border-orange-200/15
           hover:bg-[#3d243a]/55
           hover:border-orange-200/40
           hover:shadow-[0_0_22px_rgba(253,186,116,0.25)]
           hover:scale-105`
                                    }
  `}
                            >
                                {/* Emoji — always colored */}
                                <div
                                    className={`
      text-2xl transition-transform duration-300
      group-hover:scale-110
    `}
                                >
                                    {reaction.icon}
                                </div>

                                <span
                                    className={`
      font-black tracking-[0.18em] text-[10px]
      transition-colors duration-300
      ${isSelected ? "text-[#3d243a]" : "text-white/85"}
    `}
                                >
                                    {reaction.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Complete Analysis Button - Lifted, Pill-shaped, Smaller */}
            {/* Reduced margin-top (mt-12 -> mt-6) to lift it up */}
            <div className="mt-6">
                <button className="bg-orange-300 hover:bg-orange-400 text-[#3d243a] font-black 
                py-3 px-8 /* Smaller padding */
                rounded-full /* Pill shape */
                text-sm /* Smaller text size */
                uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg">
                    Complete Analysis
                </button>
            </div>
        </div>
    );
};

export default EighthPage;