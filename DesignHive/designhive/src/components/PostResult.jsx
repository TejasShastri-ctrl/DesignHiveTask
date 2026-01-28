import HexagonOutline from "./reusables/HexIcon"
import { ICON_MAP } from "./registry/IconRegistry";

const PostResult = ({ iconKey, onReset }) => {
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
      <h2 className="text-[#F4D8B8] uppercase tracking-tight text-4xl mt-10 animate-pulse">
        Share Badge
      </h2>

      <div className="flex flex-row items-center space-x-40 justify-center mt-5">
        <HexagonOutline iconSize={60} size={170} iconKey={iconKey} />

        <div className="flex flex-col items-center justify-center p-[2px] border border-purple-200 border-[3px] rounded-[10px]">
          <div className="flex flex-col items-center justify-center pt-5 px-5 pb-2 border border-purple-200 border-[3px] rounded-[10px]">
            <div className="bg-white rounded border border-[3px]">
              <img
                src={ICON_MAP["qr"]}
                alt="qr"
                className="relative z-10 -translate-y-0.5 -translate-x-0.5 animate-pulse"
                style={{ width: 100, height: 100 }}
                draggable={false}
              />
            </div>
            <p className="text-white mt-2 font-medium text-[10px]">
              Scan to share
            </p>
          </div>
        </div>
      </div>

      <div
        className="inline-block px-6 py-3 backdrop-blur-sm border rounded-full text-xs uppercase mt-10 tracking-widest"
        style={{
          backgroundColor: "rgba(90, 38, 80, 0.6)",
          borderColor: "rgba(233, 168, 106, 0.3)",
          color: "rgb(212, 181, 200)",
        }}
      >
        📸 Download or Share
      </div>


      <div className="flex gap-4 mt-4">
        <button
          onClick={downloadPNG}
          className="px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-sm shadow-lg"
          style={{
            backgroundColor: "rgb(233, 168, 106)",
            color: "rgb(74, 31, 62)",
          }}
        >
          Download
        </button>

        <button
          onClick={onReset}
          className="px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider text-sm shadow-lg"
          style={{
            backgroundColor: "rgb(233, 168, 106)",
            color: "rgb(74, 31, 62)",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PostResult;
