import React, { useContext } from "react";
import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import Image from "next/image";
import MedalIcon from "../../public/icons/medal.png";
import PersonIcon from "../../public/icons/person.png";
import ClockIcon from "../../public/icons/clock.png";
import { PlayerContext } from "../../context/playerContext";
import GestureGameChart from "./GestureGameChart";

interface GameBoardContainerProps {
  username: string;
  points: number;
  timer: string;
}

const GameBoardContainer: React.FC<GameBoardContainerProps> = ({}) => {
  const { username, points, currentTime } = useContext(PlayerContext);
  return (
    <Box sx={{ flex: 0.75 }}>
      <Stack direction={"row"} alignItems={"center"} spacing={2} width={"100%"}>
        <TextField
          disabled
          value={points}
          sx={{
            flex: 1,
            "& .MuiInputBase-root": {
              backgroundImage: "linear-gradient(to right, #161A20, #323A46)",
              borderRadius: "12px",
            },
            "& .MuiInputBase-input": {
              WebkitTextFillColor: "#fff",
              textAlign: "center",
              fontSize: "1.2rem",
            },
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: "#fff",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src={MedalIcon}
                  alt="medal icon"
                  width={35}
                  height={35}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          sx={{
            flex: 1,
            "& .MuiInputBase-root": {
              backgroundImage: "linear-gradient(to right,#161A20, #323A46)",
              borderRadius: "12px",
            },
            "& .MuiInputBase-input": {
              WebkitTextFillColor: "#fff",
              textAlign: "center",
              fontSize: "1.2rem",
            },
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: "#fff",
            },
          }}
          value={username}
          disabled
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src={PersonIcon}
                  alt="person icon"
                  width={35}
                  height={35}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          disabled
          value={currentTime}
          sx={{
            flex: 1,
            "& .MuiInputBase-root": {
              backgroundImage: "linear-gradient(to right,#161A20, #323A46)",
              borderRadius: "12px",
            },
            "& .MuiInputBase-input": {
              WebkitTextFillColor: "#fff",
              textAlign: "center",
              fontSize: "1.2rem",
            },
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: "#fff",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image
                  src={ClockIcon}
                  alt="Clock icon"
                  width={35}
                  height={35}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Stack>
      <GestureGameChart />
    </Box>
  );
};

export default GameBoardContainer;
