import { motion } from "framer-motion";
import { ICON_MAP } from "./IconRegistry";

const HexagonOutline = ({
  iconKey,
  size = 300,
  iconSize = 150,
  stroke = "#e293faff",
  strokeWidth = 1,
}) => {
  const iconSrc = ICON_MAP[iconKey];

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
      >
        <motion.path
          d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z"
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </svg>

      {iconSrc && (
        <img
          src={iconSrc}
          alt={iconKey}
          className="relative z-10 -translate-y-0.5 -translate-x-0.5 animate-pulse"
          style={{ width: iconSize, height: iconSize }}
          draggable={false}
        />
      )}
    </div>
  );
};

export default HexagonOutline;
