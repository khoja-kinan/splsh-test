import React, { createContext, useState } from "react";

type initRandomPlayers = {
  points: number;
  name: string;
  multiplier: number;
  messages: string;
};

type RandomPlayers = initRandomPlayers[];

interface PlayerContextValue {
  username: string;
  points: number;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  currentTime: string;
  setCurrentTime: React.Dispatch<React.SetStateAction<string>>;
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  otherPlayers: RandomPlayers;
  setOtherPlayers: React.Dispatch<React.SetStateAction<RandomPlayers>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  chartData: number[];
  setChartData: React.Dispatch<React.SetStateAction<number[]>>;
  multiplier: number;
  setMultiplier: React.Dispatch<React.SetStateAction<number>>;
  currentPoints: number;
  setCurrentPoints: React.Dispatch<React.SetStateAction<number>>;
  lastValue: number;
  setLastValue: React.Dispatch<React.SetStateAction<number>>;
}

const initialRandomPlayers: RandomPlayers = [
  { points: 100, name: "CPU 1", multiplier: 2, messages: "Hi all CPU 1" },
  { points: 90, name: "CPU 2", multiplier: 1.75, messages: "Hi all CPU 2" },
  { points: 110, name: "CPU 3", multiplier: 1.25, messages: "Hi all CPU 3" },
  { points: 80, name: "CPU 4", multiplier: 2.25, messages: "Hi all CPU 4" },
];

const initialContextValue: PlayerContextValue = {
  username: "",
  points: 0,
  multiplier: 0,
  currentTime: "",
  speed: 1,
  otherPlayers: initialRandomPlayers,
  isRunning: false,
  count: 0,
  chartData: [],
  currentPoints: 0,
  lastValue: 0,
  setUserName: () => {},
  setPoints: () => {},
  setMultiplier: () => {},
  setCurrentTime: () => {},
  setSpeed: () => {},
  setOtherPlayers: () => {},
  setIsRunning: () => {},
  setCount: () => {},
  setChartData: () => {},
  setCurrentPoints: () => {},
  setLastValue: () => {},
};

export const PlayerContext =
  createContext<PlayerContextValue>(initialContextValue);

export const PlayerContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [username, setUserName] = useState("");
  const [points, setPoints] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [speed, setSpeed] = useState(1);
  const [otherPlayers, setOtherPlayers] = useState<RandomPlayers>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [chartData, setChartData] = useState<number[]>([]);
  const [currentPoints, setCurrentPoints] = useState<number>(0);
  const [lastValue, setLastValue] = useState<number>(0);

  return (
    <PlayerContext.Provider
      value={{
        username,
        setUserName,
        points,
        setPoints,
        currentTime,
        setCurrentTime,
        speed,
        setSpeed,
        otherPlayers,
        setOtherPlayers,
        isRunning,
        setIsRunning,
        count,
        setCount,
        chartData,
        setChartData,
        multiplier,
        setMultiplier,
        currentPoints,
        setCurrentPoints,
        lastValue,
        setLastValue,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
