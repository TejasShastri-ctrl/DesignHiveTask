import React from "react";
import figmaLogo from "../assets/figmalogo.svg";

const FourthPage = ({ screenKey, onSelect, selectedReaction }) => {
  const reactions = [
    { id: "amused", label: "AMUSED", icon: "😆" },
    { id: "frustrated", label: "FRUSTRATED", icon: "😤" },
    { id: "neutral", label: "NEUTRAL", icon: "😐" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-8 animate-in fade-in zoom-in duration-700">

      {/* Logo + Title */}
      <div className="flex flex-col items-center gap-8">
        <img
          src={figmaLogo}
          alt="Figma Logo"
          className="
            w-[150px]
            scale-75
            animate-figma-wobble
            animate-crash-pulse
            drop-shadow-[0_0_60px_rgba(10,207,131,0.35)]
            will-change-transform
            select-none
          "
        />

        <h1 className="text-6xl font-black text-orange-100 uppercase tracking-[0.2em] drop-shadow-lg text-center">
          Figma Crashed
        </h1>
      </div>

      {/* Reactions */}
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-xl font-bold text-orange-100/60 uppercase tracking-[0.5em]">
          Select Reaction
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {reactions.map((reaction) => {
            const isSelected = selectedReaction === reaction.id;


            return (
              <button
                key={reaction.id}
                onClick={() => onSelect(screenKey, reaction.id)}
                className={`
                  group flex items-center gap-6 px-12 py-8 rounded-[2rem] border-2 transition-all duration-500
                  ${
                    isSelected
                      ? "bg-orange-300 border-orange-300 scale-110 shadow-[0_0_40px_rgba(253,186,116,0.4)]"
                      : "bg-[#3d243a]/80 backdrop-blur-md border-orange-200/20 hover:border-orange-200/60 hover:bg-[#4a2d46] hover:scale-110 hover:shadow-2xl"
                  }
                `}
              >
                <span className="text-5xl transition-transform duration-500 group-hover:rotate-12">
                  {reaction.icon}
                </span>

                <span
                  className={`
                    font-black tracking-[0.2em] text-lg
                    ${isSelected ? "text-[#3d243a]" : "text-orange-100"}
                  `}
                >
                  {reaction.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
