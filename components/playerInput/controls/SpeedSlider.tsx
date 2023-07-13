import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import speedIcon from "../../../public/icons/speed.png";

const marks = [
  {
    value: 1,
    label: "1x",
  },
  {
    value: 2,
    label: "2x",
  },
  {
    value: 3,
    label: "3x",
  },
  {
    value: 4,
    label: "4x",
  },
  {
    value: 5,
    label: "5x",
  },
];
export default function SpeedSlider() {
  return (
    <Box
      sx={{ width: "100%", "&.MuiBox-root": { margin: "1rem auto 0 auto" } }}
    >
      <Stack
        direction={"row"}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
        spacing={2}
        marginBottom={1}
      >
        <Image src={speedIcon} alt="Speed Icon" width={25} height={25} />
        <Typography
          sx={{ flex: "1 1 100%", color: "#fff" }}
          variant="subtitle1"
        >
          Speed
        </Typography>
      </Stack>
      <Box
        sx={{
          backgroundImage: "linear-gradient(to right, #202632, #202632)",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        <Slider
          aria-label="Speed"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={1}
          marks={marks}
          min={1}
          max={5}
          sx={{
            "& .MuiSlider-markLabel": {
              fontSize: "0.8rem",
              color: "#ED4C61",
            },
            color: "#ED4C61",
            height: 8,
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-thumb": {
              height: 24,
              width: 24,
              backgroundColor: "#ED4C61",
              border: "2px solid currentColor",
              "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "inherit",
              },
              "&:before": {
                display: "none",
              },
            },
            "& .MuiSlider-valueLabel": {
              lineHeight: 1.2,
              fontSize: 12,
              background: "unset",
              padding: 0,
              width: 15,
              height: 15,
              borderRadius: "50% 50% 50% 0",
              backgroundColor: "#ED4C61",
              transformOrigin: "bottom left",
              transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
              "&:before": { display: "none" },
              "&.MuiSlider-valueLabelOpen": {
                transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
              },
              "& > *": {
                transform: "rotate(45deg)",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
