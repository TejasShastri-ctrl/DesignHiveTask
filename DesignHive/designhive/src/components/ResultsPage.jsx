import { motion } from "framer-motion";
import { ICON_MAP } from "./registry/IconRegistry";
import HexagonOutline from "./reusables/HexIcon"
import { popItem } from "../motion/animations";

const ResultsPage = ({ iconKey = "idea" }) => {
  const downloadPNG = () => {
    const svgUrl = ICON_MAP[iconKey];
    if (!svgUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const size = 512;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);

      canvas.toBlob((blob) => {
        if (!blob) return;

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${iconKey}.png`;
        a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    };

    img.src = svgUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <motion.div
        variants={popItem}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
      >
        <HexagonOutline iconKey={iconKey} />
      </motion.div>

      <motion.div
        variants={popItem}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.45 }}
        className="text-center mt-10 max-w-2xl"
      >
        <h2 className="text-[#FFB347] mb-4">You are the Flow Thinker!</h2>
        <p className="text-[#F3E9D2] text-xl">Systems thinking</p>
      </motion.div>

      <motion.button
        variants={popItem}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
        onClick={downloadPNG}
        className="px-8 py-4 mb-10 rounded-xl uppercase tracking-wider text-sm transition-transform hover:scale-105"
        style={{
          backgroundColor: "rgb(233, 168, 106)",
          color: "rgb(74, 31, 62)",
        }}
      >
        Download Result
      </motion.button>
    </div>
  );
};

export default ResultsPage;
