import { motion } from "framer-motion";
import { container, popItem, fadeOnly } from "../motion/animations";
import { REACTIONS } from "./registry/reactions";

const EighthPage = ({
  screenKey,
  onSelect,
  selectedReaction,
  previousReaction,
}) => {
  const scenarioCards = [
    { id: 1, text: "FIX A TYPO OR REDESIGN?" },
    { id: 2, text: "WHEN PIXELS MISALIGN...?" },
    { id: 3, text: "DO YOU RENAME LAYER" },
  ];

  const reactionIds = ["amused", "confused", "neutral"];
  const reactions = reactionIds.map((id) => REACTIONS[id]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full h-full flex flex-col items-center justify-center gap-6 p-8 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='%23ead3c0' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: "56px 100px",
        }}
      />

      <motion.h2
        variants={fadeOnly}
        className="text-[40px] text-[rgb(244,216,184)]"
      >
        Bonus Round!
      </motion.h2>

      {/* SCENARIO CARDS */}
      <motion.div
        variants={container}
        className="flex justify-center gap-4 w-full max-w-4xl mb-6"
      >
        {scenarioCards.map((card) => (
          <motion.button
            key={card.id}
            variants={popItem}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 25px rgba(233,168,106,0.25)",
            }}
            whileTap={{ scale: 0.96 }}
            type="button"
            className="bg-[#5A2650]/60 backdrop-blur-sm border border-[#E9A86A]/30 rounded-xl p-8 text-center flex items-center justify-center min-h-[120px]"
          >
            <span className="text-[#F4D8B8] uppercase tracking-wide">
              {card.text}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* REACTION SELECT */}
      <motion.div
        variants={container}
        className="flex flex-col items-center gap-6 w-full max-w-2xl"
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
          className="flex justify-center gap-8"
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

      <motion.div variants={popItem} className="mt-6">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-4 rounded-xl uppercase tracking-wider text-sm"
          style={{
            backgroundColor: "rgb(233,168,106)",
            color: "rgb(74,31,62)",
          }}
        >
          Complete Analysis
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default EighthPage;
