import React from "react";
import { MdAccessTime } from "react-icons/md";
import { motion } from "framer-motion";
import { BsEmojiSmile, BsEmojiNeutral } from "react-icons/bs";
import { RiEmotionLine, RiSparkling2Fill, RiSparklingFill } from "react-icons/ri";
import { BsEmojiSunglasses } from "react-icons/bs";
import { Sparkles } from "lucide-react";

const SeventhPage = ({ screenKey, onSelect, selectedReaction, previousReaction }) => {

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
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-8 animate-in fade-in zoom-in duration-700">

            {/* Animated Clock Icon */}
            <div className="relative">
                <div className="absolute inset-0 bg-transparent blur-3xl rounded-full scale-150 animate-pulse" />
                {/* <motion.div
                    className="relative z-10 inline-block will-change-transform"
                    animate={{
                        y: [0, 14, 6, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Sparkles className="text-[180px] size-50 text-yellow-500 drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]" />
                </motion.div> */}
                <div className="animate-[sparkle_3s_ease-in-out_infinite]">
                    <Sparkles className="text-[180px] size-50 text-yellow-500 drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]" />
                </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl font-black text-[#ead3c0] text-center uppercase tracking-tight drop-shadow-2xl">
                Prototype Works
            </h1>

            {/* Detected Reaction Info */}
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="text-[10px] font-bold text-orange-200/50 uppercase tracking-[0.3em]">
                        Detected:
                    </span>
                    {previousReaction && (
                        <div className="flex items-center gap-2">
                            <span className="text-xl">{reactionEmojis[previousReaction] || "❓"}</span>
                            <span className="text-sm font-black text-orange-200 uppercase tracking-widest">
                                {reactionLabels[previousReaction] || previousReaction}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Interaction Area */}
            <div className="flex flex-col items-center gap-8 mt-4 w-full max-w-2xl">
                <h2 className="text-[10px] font-bold text-orange-200/40 uppercase tracking-[0.5em]">
                    Select Reaction
                </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {reactions.map((reaction) => {
                        const isSelected = selectedReaction === reaction.id;

                        return (
                            <button
                                key={reaction.id}
                                onClick={() => onSelect(screenKey, reaction.id)}
                                className={`
                  group flex items-center gap-5 px-10 py-6 rounded-[2rem] border-2 transition-all duration-500
                  ${isSelected
                                        ? "bg-orange-300 border-orange-300 scale-110 shadow-[0_0_50px_rgba(253,186,116,0.5)]"
                                        : "bg-[#3d243a]/60 backdrop-blur-md border-orange-200/10 hover:border-orange-200/40 hover:scale-105"
                                    }
                `}
                            >
                                <div className={`
                  transition-transform duration-300 group-hover:scale-125
                  ${isSelected ? "text-[#3d243a]" : "text-orange-300"}
                `}>
                                    {reaction.icon}
                                </div>
                                <span
                                    className={`
                    font-black tracking-[0.2em] text-sm
                    ${isSelected ? "text-[#3d243a]" : "text-white/90"}
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

export default SeventhPage;
