import React, { useEffect, useState } from "react";
import BackgroundLayout from "./components/BackgroundLayout";
import ProgressBar from "./components/ProgressBar";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import SeventhPage from "./components/SeventhPage";
import EighthPage from "./components/EighthPage";
import EmotionDataCard from "./components/EmotionDataCard";
import AnalysisPage from "./components/AnalysisPage";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectionMode, setSelectionMode] = useState(null);
  const [reactions, setReactions] = useState({});

  const handleNext = () => {
    if (currentStep < screens.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReactionSelect = (screenKey, choice) => {
    setReactions(prev => ({
      ...prev,
      [screenKey]: choice
    }));
    handleNext();
  };

  useEffect(() => {
    console.log(reactions);
    console.log(currentStep);
  }, [reactions])

  const screens = [
    <WelcomeScreen key="welcome" />,

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
      onSelect={handleReactionSelect}
      selectedReaction={reactions.eighth}
    />,
    <AnalysisPage
      key="analysis"
      reactions={reactions}
    />
  ];

  return (
    <BackgroundLayout>
      {/* Emotion Data Card - Visible from Step 4 onwards */}
      {currentStep >= 3 && <EmotionDataCard reactions={reactions} />}

      <div className="flex-1 w-full flex items-center justify-center">
        {screens[currentStep]}
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