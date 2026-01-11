const StepIndicator = ({ current, total }) => {
  return (
    <div className="fixed top-8 right-12 flex items-center gap-4 text-orange-100/60 font-medium tracking-widest text-sm z-50">
      <span className="opacity-80">
        {current + 1} / {total}
      </span>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
        <span>LIVE</span>
      </div>
    </div>
  );
};

export default StepIndicator;
