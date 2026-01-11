import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BackgroundLayout from "./components/screens/BackgroundLayout";
import ProgressBar from "./components/reusables/ProgressBar";
import EmotionDataCard from "./components/reusables/EmotionDataCard";

import WelcomeScreen from "./components/screens/WelcomeScreen";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import SeventhPage from "./components/SeventhPage";
import EighthPage from "./components/EighthPage";
import AnalysisPage from "./components/AnalysisPage";
import TestingIcons from "./components/screens/TestingIcons";
import ResultsPage from "./components/ResultsPage";
import PostResult from "./components/PostResult";

import StepIndicator from "./components/reusables/StepIndicator";

import logo from "./assets/logo.svg";
import Sparkles from "./motion/Sparkles";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectionMode, setSelectionMode] = useState(null);
  const [reactions, setReactions] = useState({});

  const ICON_KEYS = ["idea", "cloud", "bolt", "puzzle", "paint", "minimal"];
  const [resultIcon] = useState(() => {
    return ICON_KEYS[Math.floor(Math.random() * ICON_KEYS.length)];
  });

  const resetApp = () => {
    setCurrentStep(0);
    setSelectionMode(null);
    setReactions({});
  };

  const handleNext = () => {
    if (currentStep < screens.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReactionSelect = (screenKey, choice) => {
    setReactions((prev) => ({
      ...prev,
      [screenKey]: choice,
    }));
    handleNext();
  };

  useEffect(() => {
    console.log("Reactions:", reactions);
    console.log("Step:", currentStep);
  }, [reactions, currentStep]);

  const screens = [
    <WelcomeScreen key="welcome" onNext={handleNext} />,
    <SecondPage key="second" onNext={handleNext} />,
    <ThirdPage
      key="third"
      onNext={handleNext}
      selectionMode={selectionMode}
      onSelectionModeChange={setSelectionMode}
    />,
    <FourthPage
      key="fourth"
      screenKey="fourth"
      onSelect={handleReactionSelect}
      selectedReaction={reactions.fourth}
    />,
    <FifthPage
      key="fifth"
      screenKey="fifth"
      onSelect={handleReactionSelect}
      selectedReaction={reactions.fifth}
      previousReaction={reactions.fourth}
    />,
    <SixthPage
      key="sixth"
      screenKey="sixth"
      onSelect={handleReactionSelect}
      selectedReaction={reactions.sixth}
      previousReaction={reactions.fifth}
    />,
    <SeventhPage
      key="seventh"
      screenKey="seventh"
      onSelect={handleReactionSelect}
      selectedReaction={reactions.seventh}
      previousReaction={reactions.sixth}
    />,
    <EighthPage
      key="eighth"
      screenKey="eighth"
      onSelect={handleReactionSelect}
      selectedReaction={reactions.eighth}
    />,
    <AnalysisPage key="analysis" reactions={reactions} onComplete={handleNext} />,
    <ResultsPage key="testing" iconKey={resultIcon} />,
    <PostResult key="postResult" onReset={resetApp} iconKey={resultIcon} />,
  ];

  const RESULTS_INDEX = screens.findIndex(
    (screen) => screen.key === "testing"
  );

  return (
    <BackgroundLayout>
      {/* <div className="absolute top-6 left-6 flex items-center gap-4 z-50 pointer-events-none"> */}
      <div className="absolute top-4 left-4 flex items-center gap-1 z-50 pointer-events-none">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-auto z-50 pointer-events-none"
        />
        <div className="text-left">
          <h1
            className="uppercase tracking-[0.02em] text-[64px] leading-[0]"
            style={{
              fontFamily: `"JetBrains Mono", monospace`,
              color: "#f4b17a",
            }}
          >
            <span className="block font-thin text-[22px]">DESIGN</span>
            <span className="font-black text-[20px]">Hive</span>
            <span className="text-[10px] font-normal ml-1 opacity-70">
              2025
            </span>
          </h1>
        </div>
      </div>

      <StepIndicator current={currentStep} total={screens.length} />

      {currentStep >= 3 && <EmotionDataCard reactions={reactions} />}

      <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.35,
                delay: 1,
                ease: "easeInOut",
              },
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            {screens[currentStep]}
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="absolute bottom-12 w-full flex justify-center px-6">
        <ProgressBar
          currentStep={currentStep}
          totalSteps={screens.length}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </footer>
    </BackgroundLayout>
  );
};

export default App;