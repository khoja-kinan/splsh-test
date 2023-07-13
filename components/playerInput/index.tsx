import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { PlayerContext } from "../../context/playerContext";
import UserControls from "./controls";

const PlayerInputs: React.FC = () => {
  const { username, setUserName, setPoints, setCurrentTime } =
    useContext(PlayerContext);
  const [userNameInput, setUserNameInput] = useState("");

  const submitUserName = () => {
    setUserName(userNameInput);
    setPoints(1000);
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const formattedTime = `${currentHour
      .toString()
      .padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
    setCurrentTime(formattedTime);
  };
  return username === "" ? (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      sx={{
        flex: 0.25,
        backgroundColor: "#202632",
        padding: "2rem",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5">Welcome</Typography>
      <Typography variant="caption">Please insert your name</Typography>
      <TextField
        value={userNameInput}
        onChange={(e) => setUserNameInput(e.target.value)}
        variant="outlined"
        sx={{
          "& .MuiInputBase-input": {
            padding: "0.5rem",
          },
          "&.MuiFormControl-root": { width: "100%" },
          "& .MuiOutlinedInput-input": {
            color: "#8f969d",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#8f969d",
            },
            "&:hover fieldset": {
              borderColor: "#8f969d",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#8f969d",
            },
          },
        }}
      />
      <Button
        variant="outlined"
        disabled={userNameInput.length === 0}
        sx={{
          width: "100%",
          color: "#fff",
          borderColor: "#8f969d",
          "&:hover": {
            borderColor: "#8f969d",
          },
          backgroundImage:
            userNameInput.length === 0
              ? "linear-gradient(to right, #7C859A, #7C859A)"
              : "linear-gradient(to right, #E53C7A, #FD5D47)",
        }}
        onClick={submitUserName}
      >
        Accept
      </Button>
    </Stack>
  ) : (
    <UserControls />
  );
};

export default PlayerInputs;
