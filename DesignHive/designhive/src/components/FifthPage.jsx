import React from "react";

const FifthPage = ({ screenKey, onSelect, selectedReaction, previousReaction }) => {
    const reactions = [
        { id: "smile", label: "SMILE", icon: "😊" },
        { id: "eyeball", label: "EYE ROLL", icon: "🙄" },
        { id: "confused", label: "CONFUSED", icon: "😕" },
    ];

    const reactionEmojis = {
        amused: "😆",
        frustrated: "😤",
        neutral: "😐",
        smile: "😊",
        eyeball: "🙄",
        confused: "😕",
    };

    const reactionLabels = {
        amused: "Amused",
        frustrated: "Frustrated",
        neutral: "Neutral",
        smile: "Smile",
        eyeball: "Eye Roll",
        confused: "Confused",
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 p-8 animate-in fade-in zoom-in duration-700">

            {/* Main Heading */}
            <h1
  className="
    text-8xl
    font-black
    uppercase
    tracking-tighter
    drop-shadow-2xl
    animate-pop-color
    will-change-transform
  "
>
  Make it pop!
</h1>


            {/* Detected Reaction Info */}
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="text-xs font-bold text-orange-200/50 uppercase tracking-[0.3em]">
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
            <div className="flex flex-col items-center gap-8 mt-12 w-full max-w-2xl">
                <h2 className="text-sm font-bold text-orange-200/40 uppercase tracking-[0.5em]">
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
                  group flex items-center gap-5 px-10 py-6 rounded-3xl border-2 transition-all duration-500
                  ${isSelected
                                        ? "bg-orange-300 border-orange-300 scale-110 shadow-[0_0_50px_rgba(253,186,116,0.5)]"
                                        : "bg-[#3d243a]/60 backdrop-blur-md border-orange-200/10 hover:border-orange-200/40 hover:scale-105"
                                    }
                `}
                            >
                                <span className="text-4xl transition-transform duration-300 group-hover:scale-125">
                                    {reaction.icon}
                                </span>
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

export default FifthPage;
