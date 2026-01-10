import { motion } from "framer-motion";

const FifthPage = ({
  screenKey,
  onSelect,
  selectedReaction,
  previousReaction,
}) => {
  const reactions = [
    { id: "confused", label: "CONFUSED", icon: "😕" },
    { id: "smile", label: "SMILE", icon: "😊" },
    { id: "eyeball", label: "EYE ROLL", icon: "🙄" },
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
    <div className="w-full h-full flex flex-col items-center p-8 animate-in fade-in zoom-in duration-700">

      <motion.h1
        animate={{
          scale: [1, 1.06, 1],
          color: ["#60a5fa", "#facc15", "#60a5fa"],
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="mt-40 text-[105px] font-medium uppercase tracking-normal drop-shadow-2xl will-change-transform"
      >
        Make it pop!
      </motion.h1>

      <div className="flex flex-col items-center mt-20">
        <p className="text-[#F3E9D2] text-md">
          Detected:
          <span className="ml-2">
            {reactionEmojis[previousReaction] || "❓"}{" "}
            {reactionLabels[previousReaction] || previousReaction}
          </span>
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 w-full max-w-2xl">
        <p
          className="uppercase tracking-[0.2em] mb-2 text-sm"
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
                className={`px-8.5 py-4.5 mb-14 backdrop-blur-sm border rounded-full transition-all uppercase tracking-wider flex items-center gap-2 ${isSelected ? "scale-105" : ""}`}
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

export default FifthPage;
