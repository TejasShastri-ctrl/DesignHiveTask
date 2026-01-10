import React from "react";
import { motion } from "framer-motion";

const EighthPage = ({ onSelect, selectedReaction }) => {
    const scenarioCards = [
        { id: 1, text: "FIX A TYPO OR REDESIGN?" },
        { id: 2, text: "WHEN PIXELS MISALIGN...?" },
        { id: 3, text: "DO YOU RENAME LAYER" },
    ];

    const reactions = [
        { id: "amused", label: "AMUSED", icon: "😅" },
        { id: "thoughtful", label: "THOUGHTFUL", icon: "🤔" },
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

            <h2 class="text-[rgb(244,216,184)] text-[40px]">Bonus Round!</h2>

            {/* Top Scenario Cards - Made Smaller */}
            {/* Reduced max-width (max-w-5xl -> max-w-4xl) and margin-bottom (mb-8 -> mb-6) */}

            <div className="flex justify-center gap-4 w-full max-w-4xl mb-6">
                {scenarioCards.map((card) => (
                    <button
                        key={card.id}
                        type="button"
                        className="bg-[#5A2650]/60 backdrop-blur-sm border border-[#E9A86A]/30 rounded-xl p-8 text-center cursor-pointer flex items-center justify-center min-h-[120px] hover:bg-[#5A2650]/80 hover:border-[#E9A86A]/60 hover:scale-105"
                    >
                        <span className="text-[#F4D8B8] uppercase tracking-wide">
                            {card.text}
                        </span>
                    </button>
                ))}
            </div>


            {/* Select Reaction Section */}
            <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
                <p
                    className="uppercase tracking-[0.2em] text-sm"
                    style={{ color: "rgb(212, 181, 200)", opacity: 0.7 }}
                >
                    Select Reaction
                </p>

                <div className="flex justify-center gap-8">
                    {reactions.map((reaction) => {
                        const isSelected = selectedReaction === reaction.id;

                        return (
                            <button
                                key={reaction.id}
                                onClick={() => onSelect(screenKey, reaction.id)}
                                className={`
                  px-10 py-5
                  backdrop-blur-sm
                  border
                  rounded-full
                  transition-all
                  uppercase
                  tracking-wider
                  flex items-center gap-2
                  ${isSelected ? "scale-105" : ""}
                `}
                                style={{
                                    backgroundColor: "rgba(90, 38, 80, 0.8)",
                                    borderColor: isSelected
                                        ? "rgba(233, 168, 106, 0.6)"
                                        : "rgba(233, 168, 106, 0.3)",
                                    color: "rgb(255, 255, 255)",
                                }}
                            >
                                <span className="text-2xl">{reaction.icon}</span>
                                <span className="text-sm font-normal">
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