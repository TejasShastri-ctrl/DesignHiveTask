import { motion } from "framer-motion";
import { MdAccessTime } from "react-icons/md";
import { container, popItem, fadeOnly } from "../motion/animations";
import { REACTIONS } from "./registry/reactions";

const SixthPage = ({
  screenKey,
  onSelect,
  selectedReaction,
  previousReaction,
}) => {

  const reactionIds = ["relaxed", "happy", "stoic"];
  const reactions = reactionIds.map((id) => REACTIONS[id]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full h-full flex flex-col items-center justify-center gap-6 p-8"
    >
      {/* CLOCK*/}
      <motion.div variants={popItem} className="relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150" />

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
      </motion.div>


      <motion.h1
        variants={fadeOnly}
        className="text-5xl font-normal text-[#F3E9D2] text-center tracking-[0.01em] drop-shadow-2xl"
      >
        Deadline extended by a week!
      </motion.h1>


      {previousReaction && (
        <motion.div variants={fadeOnly} className="text-center">
          <p className="text-[#F3E9D2] mt-8 text-md">
            Detected:
            <span className="ml-1">
              {REACTIONS[previousReaction]?.emoji || "❓"}{" "}
              {REACTIONS[previousReaction]?.label || previousReaction}
            </span>
          </p>
        </motion.div>
      )}

      <motion.div
        variants={container}
        className="flex flex-col items-center gap-2 w-full max-w-2xl"
      >
        <motion.p
          variants={fadeOnly}
          className="uppercase tracking-[0.2em] text-sm"
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
                className="mt-10 px-10 py-5 backdrop-blur-sm border rounded-full uppercase tracking-wider flex items-center gap-2 transition-colors"
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

export default SixthPage;
