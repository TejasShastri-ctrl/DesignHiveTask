import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SeventhPage = ({
  screenKey,
  onSelect,
  selectedReaction,
  previousReaction,
}) => {
  const reactions = [
    { id: "excited", label: "EXCITED", icon: "🤩" },
    { id: "happy", label: "HAPPY", icon: "😊" },
    { id: "focused", label: "FOCUSED", icon: "🧐" },
  ];

  const reactionEmojis = {
    amused: "😆",
    frustrated: "😤",
    neutral: "😐",
    smile: "😊",
    eyeball: "🙄",
    confused: "😕",
    relaxed: "😌",
    happy: "😁",
    stoic: "😐",
    excited: "🤩",
    focused: "🧐",
  };

  const reactionLabels = {
    amused: "Amused",
    frustrated: "Frustrated",
    neutral: "Neutral",
    smile: "Smile",
    eyeball: "Eye Roll",
    confused: "Confused",
    relaxed: "Relaxed",
    happy: "Happy",
    stoic: "Stoic",
    excited: "Excited",
    focused: "Focused",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8 animate-in fade-in zoom-in duration-700">
      
      {/* Animated Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-transparent blur-3xl rounded-full scale-150 animate-pulse" />
        <div className="animate-[sparkle_3s_ease-in-out_infinite]">
          <Sparkles className="size-50 text-yellow-500 drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-6xl font-black text-[#ead3c0] text-center uppercase tracking-tight drop-shadow-2xl">
        Prototype Works
      </h1>

      {/* Detected */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-[#F3E9D2] mt-4 text-md">
          Detected:
          <span className="ml-2">
            {reactionEmojis[previousReaction] || "❓"}{" "}
            {reactionLabels[previousReaction] || previousReaction}
          </span>
        </p>
      </div>

      {/* Interaction Area */}
      <div className="flex flex-col items-center w-full max-w-2xl mt-8 gap-3">
        {/* ⬆️ gap-6 controls spacing between label and buttons */}
        <p
          className="uppercase tracking-[0.2em] text-sm"
          style={{ color: "rgb(212, 181, 200)", opacity: 0.7 }}
        >
          Select Reaction
        </p>

        <div className="flex flex-wrap justify-center gap-8">
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
    </div>
  );
};

export default SeventhPage;
