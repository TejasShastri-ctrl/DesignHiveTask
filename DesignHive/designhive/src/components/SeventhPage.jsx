import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { container, popItem, fadeOnly } from "../motion/animations";
import { REACTIONS } from "./registry/reactions";


const SeventhPage = ({
  screenKey,
  onSelect,
  selectedReaction,
  previousReaction,
}) => {

  const reactionIds = ["excited", "happy", "focused"];
  const reactions = reactionIds.map((id) => REACTIONS[id]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full h-full flex flex-col items-center justify-center gap-6 p-8"
    >

      <motion.div variants={popItem} className="relative">
        <div className="absolute inset-0 blur-3xl rounded-full scale-150 bg-yellow-400/10" />

        <motion.div
          className="relative z-10 will-change-transform"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="size-50 text-yellow-500 drop-shadow-[0_0_30px_rgba(250,204,21,0.35)]" />
        </motion.div>
      </motion.div>


      <motion.h1
        variants={fadeOnly}
        className="text-6xl font-medium text-[#F4D8B8] text-center tracking-tight drop-shadow-2xl"
      >
        Prototype Works
      </motion.h1>


      <motion.div variants={fadeOnly} className="flex flex-col items-center">
        <p className="text-[#F3E9D2] mt-4 text-md">
          Detected:
          <span className="ml-2">
            {REACTIONS[previousReaction]?.emoji || "❓"}{" "}
            {REACTIONS[previousReaction]?.label || previousReaction}
          </span>
        </p>
      </motion.div>

      <motion.div
        variants={container}
        className="flex flex-col items-center w-full max-w-2xl mt-8 gap-3"
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

export default SeventhPage;