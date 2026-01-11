import { motion } from "framer-motion";

const sparkles = Array.from({ length: 12 });

const Sparkles = () => {
  return (
    <div className="pointer-events-none absolute top-0 left-0 w-full h-40 overflow-hidden">
      {sparkles.map((_, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            y: -20,
            scale: 0.6,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 30],
            scale: [0.6, 1, 0.8],
          }}
          transition={{
            duration: 1.2,
            delay: i * 0.08,
            ease: "easeOut",
          }}
          className="absolute top-0 left-1/2 w-1 h-1 rounded-full bg-[#f4b17a]"
          style={{
            transform: `translateX(${(Math.random() - 0.5) * 400}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
