import React from "react";

import { MdRemoveRedEye } from "react-icons/md";


const EmotionDataCard = ({ reactions }) => {
    const reactionEmojis = {
        amused: "😆",
        frustrated: "😤",
        neutral: "😐",
        smile: "😊",
        eyeball: "🙄",
        confused: "😕",
        relaxed: "😌",
        happy: "😊",
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

    // Convert reactions object to an array of reaction IDs
    const reactionList = Object.values(reactions);

    return (
        <div className="fixed top-6 right-6 z-50 animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="w-72 bg-[#3d243a]/85 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl overflow-hidden relative group">

                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-300/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="flex items-center gap-3 mb-6 px-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-orange-200/30 transition-colors">
                        <MdRemoveRedEye
                            className="
      text-orange-300
      text-lg
      drop-shadow-[0_0_6px_rgba(253,186,116,0.4)]
    "
                        />
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-[0.3em] text-orange-200/80">
                        Emotion Data
                    </span>
                </div>

                {/* Scrollable Container */}
                <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
                    {reactionList.length === 0 ? (
                        <div className="py-4 text-center">
                            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
                                Waiting for data...
                            </p>
                        </div>
                    ) : (
                        reactionList.map((reaction, index) => (
                            <div
                                key={index}
                                className="bg-black/20 rounded-2xl p-4 border border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-500"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">
                                        Test {index + 1}
                                    </span>
                                    <span className="text-[10px] font-black tracking-[0.1em] text-orange-300">
                                        {90 - index * 10}%
                                    </span>
                                </div>

                                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-4">
                                    <div
                                        className="h-full bg-orange-300/60 shadow-[0_0_10px_rgba(253,186,116,0.3)] rounded-full"
                                        style={{ width: `${90 - index * 10}%` }}
                                    />
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-2xl filter drop-shadow-md">
                                        {reactionEmojis[reaction] || "❓"}
                                    </span>
                                    <span className="text-xs font-bold text-orange-100/90 tracking-[0.1em] uppercase">
                                        {reactionLabels[reaction] || reaction}
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-300/20 to-transparent" />
            </div>

            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(253, 186, 116, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(253, 186, 116, 0.4);
        }
      `}</style>
        </div>
    );
};

export default EmotionDataCard;
