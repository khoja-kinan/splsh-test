import React, { useEffect, useRef, RefObject, useContext } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { PlayerContext } from "../../context/playerContext";

Chart.register(...registerables);

const GestureGameChart: React.FC = () => {
  const {
    count,
    setCount,
    lastValue,
    setLastValue,
    multiplier,
    setMultiplier,
    setPoints,
    currentPoints,
  } = useContext(PlayerContext);
  const { chartData, setChartData } = useContext(PlayerContext);
  const { isRunning, setIsRunning } = useContext(PlayerContext);

  const chartRef: RefObject<Chart<"line", number[], unknown>> = useRef<Chart<
    "line",
    number[],
    unknown
  > | null>(null);

  useEffect(() => {
    if (isRunning) {
      const newCount = Math.random() * (10 - 5.85954) + 0.547;

      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount + newCount);
      }, 100);

      if (count >= 10) {
        setIsRunning(false);
        clearTimeout(timer);
        if (multiplier < lastValue) {
          let addedValue = currentPoints * multiplier;
          setPoints((prev) => prev + addedValue);
        }
      }

      return () => clearTimeout(timer);
    }
  }, [isRunning, count]);

  useEffect(() => {
    if (isRunning && count <= 10) {
      setChartData((prevData) => [...prevData, count]);
    }
    setLastValue(chartData[chartData.length - 1]);
  }, [count, isRunning]);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Gesture Game",
        data: chartData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 10,
      },
    },
  };

  return (
    <div style={{ position: "relative" }}>
      <p
        style={{
          position: "absolute",
          top: "30%",
          left: "20%",
          color: "#fff",
          fontSize: "3rem",
        }}
      >
        {lastValue && `${lastValue?.toFixed(2)}x`}
      </p>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default GestureGameChart;
