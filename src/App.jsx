import { useInterval } from "use-interval";
import { useState } from "react";
import TimeDisplay from "src/components/TimeDisplay";
import ResetButton from "src/components/ResetButton";
import StartAndStopButton from "src/components/StartAndStopButton";
import DarkAndLightButton from "src/components/DarkAndLightButton";

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useInterval(() => {
    if (running) {
      setTime((t) => t + 0.01);
    }
  }, 10);

  return (
    <div className="antialiased h-screen flex flex-col justify-center items-center dark:bg-gray-900">
      <TimeDisplay time={time} />
      <div className="my-6 flex items-center">
        <DarkAndLightButton
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <StartAndStopButton running={running} setRunning={setRunning} />
        <ResetButton setRunning={setRunning} setTime={setTime} />
      </div>
    </div>
  );
};

export default App;
