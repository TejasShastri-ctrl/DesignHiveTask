import React from "react";
import { MdAccessTime } from "react-icons/md";
import { motion } from "framer-motion";
import { BsEmojiSmile, BsEmojiNeutral } from "react-icons/bs";
import { RiEmotionLine } from "react-icons/ri";
import { BsEmojiSunglasses } from "react-icons/bs";

const SixthPage = ({ screenKey, onSelect, selectedReaction, previousReaction }) => {

  const reactions = [
    { id: "relaxed", label: "RELAXED", icon: "😌" },
    { id: "happy", label: "HAPPY", icon: "😊" },
    { id: "stoic", label: "STOIC", icon: "😐" },
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
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8 animate-in fade-in zoom-in duration-700">

      {/* Animated Clock Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150 animate-pulse" />
        <motion.div
  className="relative z-10 inline-block will-change-transform"
  animate={{
    y: [0, 14, 6, 0],
    rotate: [0, 10, -10, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  }}
>

          <MdAccessTime className="text-[180px] text-blue-500 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]" />
        </motion.div>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl font-small text-[#F3E9D2] text-center tracking-[0.01em] drop-shadow-2xl">
        Deadline extended by a week!
      </h1>

      {/* Detected Reaction Info */}
      {previousReaction && (
        <div className="text-center">
          <p className="text-[#F3E9D2] mt-8 text-md">
            Detected:{" "}
            <span className="ml-1">
              {reactionEmojis[previousReaction] || "❓"}{" "}
              {reactionLabels[previousReaction] || previousReaction}
            </span>
          </p>
        </div>
      )}


      {/* Interaction Area */}
      <div className="flex flex-col items-center gap-2 w-full max-w-2xl">
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
            px-10 py-4.5
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

export default SixthPage;
