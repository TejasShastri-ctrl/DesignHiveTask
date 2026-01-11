import { motion } from "framer-motion";
import { container, popItem, fadeOnly } from "../motion/animations";
import { REACTIONS } from "./registry/reactions";

const FifthPage = ({
  screenKey,
  onSelect,
  selectedReaction,
  previousReaction,
}) => {
  const reactionIds = ["confused", "smile", "eyeball"];
  const reactions = reactionIds.map((id) => REACTIONS[id]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full h-full flex flex-col items-center p-8"
    >

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
        className="mt-0 text-[170px] font-medium uppercase tracking-normal drop-shadow-2xl will-change-transform"
      >
        Make it pop!
      </motion.h1>

      {/* DETECTED REACTION */}
      <motion.div
        variants={fadeOnly}
        className="flex flex-col items-center mt-20"
      >
        <p className="text-[#F3E9D2] text-md">
          Detected:
          <span className="ml-2">
            {REACTIONS[previousReaction]?.emoji || "❓"}{" "}
            {REACTIONS[previousReaction]?.label || previousReaction}
          </span>
        </p>
      </motion.div>

      {/* REACTION SELECT */}
      <motion.div
        variants={container}
        className="mt-8 flex flex-col items-center gap-4 w-full max-w-2xl"
      >
        <motion.p
          variants={fadeOnly}
          className="uppercase tracking-[0.2em] mb-2 text-sm"
          style={{ color: "rgb(212, 181, 200)", opacity: 0.7 }}
        >
          Select Reaction
        </motion.p>

        <motion.div
          variants={container}
          className="flex flex-wrap justify-center gap-8"
        >
          {reactions.map((reaction) => {
            const isSelected = selectedReaction === reaction.id;

            return (
              <motion.button
                key={reaction.id}
                variants={popItem}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 30px rgba(233,168,106,0.35)",
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onSelect(screenKey, reaction.id)}
                className="px-10 py-5 backdrop-blur-sm border rounded-full uppercase tracking-wider flex items-center gap-2 transition-colors"
                style={{
                  backgroundColor: "rgba(90, 38, 80, 0.8)",
                  borderColor: isSelected
                    ? "rgba(233, 168, 106, 0.7)"
                    : "rgba(233, 168, 106, 0.3)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <span className="text-2xl">{reaction.emoji}</span>
                <span className="text-sm font-normal">{reaction.label}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FifthPage;
