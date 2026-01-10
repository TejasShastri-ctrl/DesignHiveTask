import figmaLogo from "../assets/figmalogo.svg";

const FourthPage = ({ screenKey, onSelect, selectedReaction }) => {
  const reactions = [
    { id: "amused", label: "AMUSED", icon: "😆" },
    { id: "frustrated", label: "FRUSTRATED", icon: "😤" },
    { id: "neutral", label: "NEUTRAL", icon: "😐" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-16 p-8 animate-in fade-in zoom-in duration-700">

      <div className="flex flex-col items-center gap-8">
        <img
          src={figmaLogo}
          alt="Figma Logo"
          className="w-[150px] scale-75 animate-figma-wobble animate-crash-pulse drop-shadow-[0_0_60px_rgba(10,207,131,0.35)] will-change-transform select-none"
        />

        <h1 className="text-6xl font-black text-orange-100 uppercase tracking-[0.2em] drop-shadow-lg text-center">
          Figma Crashed
        </h1>
      </div>


      <div className="flex flex-col items-center gap-10">
        <p
          className="uppercase tracking-[0.2em] text-sm"
          style={{ color: "rgb(212, 181, 200)", opacity: 0.7 }}
        >
          Select Reaction
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {reactions.map((reaction) => {
            const isSelected = selectedReaction === reaction.id;


            return (
              <button
                key={reaction.id}
                onClick={() => onSelect(screenKey, reaction.id)}
                className={`
    px-8 py-4 backdrop-blur-sm border rounded-full transition-all uppercase tracking-wider flex items-center gap-2 ${isSelected ? "scale-105" : ""}
  `}
                style={{
                  backgroundColor: "rgba(90, 38, 80, 0.8)",
                  borderColor: isSelected
                    ? "rgba(233, 168, 106, 0.6)"
                    : "rgba(233, 168, 106, 0.3)",
                  color: "rgb(255, 255, 255)",
                }}
              >
                <span className="text-2xl">
                  {reaction.icon}
                </span>

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

export default FourthPage;
