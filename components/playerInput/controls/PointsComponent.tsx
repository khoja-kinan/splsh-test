import React, { useState } from "react";
import { TextField, Button, Stack, Typography, Box } from "@mui/material";
import UpIcon from "../../../public/icons/up.png";
import DownIcon from "../../../public/icons/down.png";
import Image from "next/image";
interface PointsComponentProps {
  type: string;
  pointsinput: number;
  setPointsinput: React.Dispatch<React.SetStateAction<number>>;
}

const PointsComponent: React.FC<PointsComponentProps> = ({
  type,
  pointsinput,
  setPointsinput,
}) => {
  // const [pointsinput, setPointsinput] = useState(initialPoints);

  const handleIncrement = () => {
    if (type === "points") {
      setPointsinput(pointsinput + 25);
    } else {
      setPointsinput(pointsinput + 0.25);
    }
  };

  const handleDecrement = () => {
    if (pointsinput > 0) {
      if (type === "points") {
        setPointsinput(pointsinput - 25);
      } else {
        setPointsinput(pointsinput - 0.25);
      }
    }
  };

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: "linear-gradient(to right, #161A20, #1C222C)",
          padding: "0.5rem",
          borderRadius: "10px",
        }}
      >
        <Typography variant="caption">{type}</Typography>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={1}
        >
          <Box
            sx={{
              cursor: "pointer",
              border: "1px solid #fff",
              borderRadius: "10px",
              padding: "0.2rem 0.5rem",
            }}
            onClick={handleIncrement}
          >
            <Image src={UpIcon} alt="up" width={10} height={10} />
          </Box>

          <TextField
            value={pointsinput}
            onChange={(e) => setPointsinput(Number(e.target.value))}
            type="number"
            disabled={type === "points"}
            sx={{
              backgroundColor: "#101418",
              borderRadius: "8px",
              "& .MuiInputBase-input": {
                padding: "0.3rem",
              },
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                },
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#fff",
              },
            }}
            inputProps={{ style: { color: "#fff" } }}
          />
          <Box
            sx={{
              cursor: "pointer",
              border: "1px solid #fff",
              borderRadius: "10px",
              padding: "0.2rem 0.5rem",
            }}
            onClick={handleDecrement}
          >
            <Image
              style={{ cursor: "pointer" }}
              src={DownIcon}
              alt="up"
              width={10}
              height={10}
            />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default PointsComponent;
