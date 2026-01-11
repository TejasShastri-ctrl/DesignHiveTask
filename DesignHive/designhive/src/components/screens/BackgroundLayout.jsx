import hexback from '../../assets/hexback.png';

const BackgroundLayout = ({ children }) => {
  const THEME_YELLOW = "#c4a000";

  const ornaments = [
    { top: '15%', left: '10%', size: '80px', delay: '0s' },
    { top: '20%', left: '75%', size: '120px', delay: '1.5s' },
    { top: '60%', left: '15%', size: '100px', delay: '3s' },
    { top: '75%', left: '80%', size: '90px', delay: '0.5s' },
    { top: '40%', left: '40%', size: '150px', delay: '2s' },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#401F3E]">

      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, #531b3cff 0%, #4c1837ff 50%, #481835ff 100%)',
          zIndex: 0
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundColor: THEME_YELLOW,
          maskImage: `url(${hexback})`,
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          maskSize: 'cover',

          WebkitMaskImage: `url(${hexback})`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          WebkitMaskSize: 'cover',

          zIndex: 1
        }}
      />

      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] z-[2]" />

      <div className="absolute inset-0 pointer-events-none z-[3]">
        {ornaments.map((item, index) => (
          <div
            key={index}
            className="absolute rounded-full border border-white/5 overflow-hidden animate-float"
            style={{
              top: item.top,
              left: item.left,
              width: item.size,
              height: item.size,
              animationDelay: item.delay,
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              boxShadow: '0 0 40px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src="https://picsum.photos/200"
              alt=""
              className="w-full h-full object-cover opacity-10 grayscale mix-blend-screen"
            />
          </div>
        ))}
      </div>

      <main className="relative z-50 flex flex-col items-center justify-center min-h-screen p-6">
        {children}
      </main>
    </div>
  );
};

export default BackgroundLayout;