import { motion } from "framer-motion";
import { container, popItem } from "../../motion/animations";
import logo from "../../assets/logo.svg";

const WelcomeScreen = ({ onNext }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-4xl flex flex-col items-center gap-16"
    >
      <header className="flex flex-col items-center text-center space-y-8">
        <motion.div variants={popItem} className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-30 h-auto z-50 pointer-events-none"
          />

          <div className="text-left">
            <h1
              className="uppercase tracking-[0.02em] text-[64px] leading-[0.6]"
              style={{
                fontFamily: `"JetBrains Mono", monospace`,
                color: "#f4b17a",
              }}
            >
              <span className="block font-thin">DESIGN</span>
              <span className="font-black text-6xl">Hive</span>
              <span className="text-[30px] font-normal ml-3 opacity-70">
                2025
              </span>
            </h1>
          </div>
        </motion.div>

        <motion.div
          variants={popItem}
          className="text-center flex flex-col items-center"
        >
          <p className="text-[#F4D8B8] text-2xl mb-2 uppercase tracking-wide">
            AI Archetype Booth
          </p>
        </motion.div>

        <motion.div variants={popItem} className="space-y-1 opacity-80">
          <p className="text-sm tracking-widest text-orange-50/70 uppercase">
            Answer Scenarios on Camera
          </p>
          <p className="text-sm tracking-widest text-orange-50/70 uppercase font-semibold">
            Your Expressions Reveal Your Archetype
          </p>
        </motion.div>

        <motion.button
          variants={popItem}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="px-8 py-4 mt-20 rounded-xl uppercase tracking-wider text-sm"
          style={{
            backgroundColor: "rgba(252, 179, 95, 1)",
            color: "rgb(74,31,62)",
          }}
        >
          Begin
        </motion.button>
      </header>

      <div className="flex-1 w-full flex items-center justify-center" />
    </motion.div>
  );
};

export default WelcomeScreen;
