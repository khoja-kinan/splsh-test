import { Button, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import PointsComponent from "./PointsComponent";
import CurrentRound from "./CurrentRound";
import SpeedSlider from "./SpeedSlider";
import { PlayerContext } from "../../../context/playerContext";

const UserControls = () => {
  const {
    setCount,
    setChartData,
    setIsRunning,
    isRunning,
    setPoints,
    points,
    setMultiplier,
    setCurrentPoints,
    setOtherPlayers,
  } = useContext(PlayerContext);

  const handleStart = () => {
    const initialRandomPlayers = [
      { points: 100, name: "CPU 1", multiplier: 2, messages: "Hi all CPU 1" },
      { points: 90, name: "CPU 2", multiplier: 1.75, messages: "Hi all CPU 2" },
      {
        points: 110,
        name: "CPU 3",
        multiplier: 1.25,
        messages: "Hi all CPU 3",
      },
      { points: 80, name: "CPU 4", multiplier: 2.25, messages: "Hi all CPU 4" },
    ];

    setCount(0);
    setChartData([]);
    setIsRunning(true);
    setPoints(points - pointsinput);
    setMultiplier(multiplierinput);
    setCurrentPoints(pointsinput);
    setOtherPlayers(initialRandomPlayers);
  };
  const [pointsinput, setPointsinput] = useState(50);
  const [multiplierinput, setmMultiplierinput] = useState(1.0);

  return (
    <Stack
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      spacing={2}
      sx={{
        flex: 0.25,
        padding: "0.5rem",
        borderRadius: "8px",
      }}
    >
      <Stack direction={"row"} spacing={1}>
        <PointsComponent
          pointsinput={pointsinput}
          setPointsinput={setPointsinput}
          type="points"
        />
        <PointsComponent
          pointsinput={multiplierinput}
          setPointsinput={setmMultiplierinput}
          type="multiplier"
        />
      </Stack>
      <Button
        disabled={isRunning}
        variant="outlined"
        sx={{
          width: "100%",
          color: "#fff",
          borderColor: "#8f969d",
          "&:hover": {
            borderColor: "#8f969d",
          },
          backgroundImage: "linear-gradient(to right, #E53C7A, #FD5D47)",
        }}
        onClick={handleStart}
      >
        Start
      </Button>
      <CurrentRound />
      <SpeedSlider />
    </Stack>
  );
};

export default UserControls;
