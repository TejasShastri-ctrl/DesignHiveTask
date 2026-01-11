import { useEffect, useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { motion } from "framer-motion";

const EmotionDataCard = ({ reactions }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);

  const reactionEmojis = { amused: "😆", frustrated: "😤", neutral: "😐", smile: "😊", eyeball: "🙄", confused: "😕", relaxed: "😌", happy: "😊", stoic: "😐", excited: "🤩", focused: "🧐" };
  const reactionLabels = { amused: "Amused", frustrated: "Frustrated", neutral: "Neutral", smile: "Smile", eyeball: "Eye Roll", confused: "Confused", relaxed: "Relaxed", happy: "Happy", stoic: "Stoic", excited: "Excited", focused: "Focused" };

  const reactionList = Object.values(reactions);

  return (
    <div className="absolute top-24 right-6 z-50">
      <div className="bg-[#5A2650]/90 backdrop-blur-md border-2 border-[#E9A86A]/40 rounded-xl p-6 text-[#D4B5C8] max-w-sm shadow-2xl">

        {/* Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E9A86A]/20">
          <MdRemoveRedEye className="w-4 h-4 text-[#E9A86A]" />
          <h4 className="text-[#E9A86A] uppercase tracking-wide text-sm">Emotion Data</h4>
        </div>

        {/* Content */}
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
          {reactionList.length === 0 ? (
            <p className="text-center text-xs text-[#D4B5C8]/50">Waiting for data…</p>
          ) : (
            reactionList.map((reaction, index) => {
              const percent = 90 - index * 10;

              return (
                <div key={index} className="bg-[#4A1F3E]/40 rounded-lg p-3 border border-[#6B2D5C]/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#F4D8B8] uppercase tracking-wide text-xs">Test {index + 1}</span>
                    <span className="text-[#E9A86A] text-xs">{percent}%</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-[#4A1F3E] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#E9A86A] to-[#6B2D5C] rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: percent / 100 }}
                        transition={{
                          duration: 0.9,
                          ease: "easeOut",
                          delay: index * 0.15,
                        }}
                      />
                    </div>
                  </div>


                  <p className="text-[#D4B5C8] text-xs mt-2 capitalize">
                    {reactionEmojis[reaction] || "❓"} {reactionLabels[reaction] || reaction}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default EmotionDataCard;