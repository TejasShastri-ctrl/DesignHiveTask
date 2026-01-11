import { motion } from "framer-motion";
import figmaLogo from "../assets/figmalogo.svg";
import { container, popItem, fadeOnly } from "../motion/animations";

const FourthPage = ({ screenKey, onSelect, selectedReaction }) => {
  const reactions = [
    { id: "amused", label: "AMUSED", icon: "😆" },
    { id: "frustrated", label: "FRUSTRATED", icon: "😤" },
    { id: "neutral", label: "NEUTRAL", icon: "😐" },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full h-full flex flex-col items-center justify-center gap-16 p-8"
    >
      {/* HEADER */}
      <motion.div
        variants={popItem}
        className="flex flex-col items-center gap-8"
      >
        <img
          src={figmaLogo}
          alt="Figma Logo"
          className="w-[150px] scale-75 drop-shadow-[0_0_60px_rgba(10,207,131,0.35)] select-none animate-figma-wobble animate-crash-pulse"
        />

        <motion.h1
          variants={fadeOnly}
          className="text-6xl font-black text-orange-100 uppercase tracking-[0.2em] drop-shadow-lg text-center"
        >
          Figma Crashed
        </motion.h1>
      </motion.div>

      {/* REACTIONS */}
      <motion.div
        variants={container}
        className="flex flex-col items-center gap-10"
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
          className="flex flex-wrap justify-center gap-10"
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
                className="px-8 py-4 backdrop-blur-sm border rounded-full uppercase tracking-wider flex items-center gap-2 transition-colors"
                style={{
                  backgroundColor: "rgba(90, 38, 80, 0.8)",
                  borderColor: isSelected
                    ? "rgba(233, 168, 106, 0.7)"
                    : "rgba(233, 168, 106, 0.3)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <span className="text-2xl">{reaction.icon}</span>
                <span className="text-sm font-normal">
                  {reaction.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FourthPage;
