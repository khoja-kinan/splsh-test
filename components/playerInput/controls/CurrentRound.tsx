import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import championIcon from "../../../public/icons/champion.png";
import { PlayerContext } from "../../../context/playerContext";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#15191F",
    color: "#fff",
    borderBottom: 0,
    fontSize: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#191F27",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#222832",
  },
  // hide last border
  "& td, & th": {
    border: 0,
  },
  "& .MuiTableCell-root": {
    color: "#fff",
  },
}));

export default function CurrentRound() {
  const { username, currentPoints, multiplier, otherPlayers, isRunning } =
    React.useContext(PlayerContext);

  return (
    <Box sx={{ "&.MuiBox-root": { width: "100%" } }}>
      <Stack
        direction={"row"}
        alignItems={"flex-end"}
        spacing={2}
        marginBottom={1}
      >
        <Image src={championIcon} alt="Ranking Icon" width={25} height={25} />
        <Typography
          sx={{ flex: "1 1 100%", color: "#fff" }}
          variant="subtitle1"
        >
          Current Round
        </Typography>
      </Stack>
      <TableContainer
        component={Paper}
        sx={{
          border: "2px solid #20232D",
          overflow: "auto",
        }}
      >
        <Table aria-label="customized table" size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">points</StyledTableCell>
              <StyledTableCell align="center">multiplier</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {otherPlayers.length > 0 ? (
              <StyledTableRow style={{ backgroundColor: "#3F4657" }}>
                <StyledTableCell component="th" scope="row">
                  {username ? "You" : "-"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {currentPoints ? currentPoints : "-"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {multiplier ? multiplier : "-"}
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              <StyledTableRow style={{ backgroundColor: "#3F4657" }}>
                <StyledTableCell component="th" scope="row">
                  {"-"}
                </StyledTableCell>
                <StyledTableCell align="center">{"-"}</StyledTableCell>
                <StyledTableCell align="center">{"-"}</StyledTableCell>
              </StyledTableRow>
            )}
            {otherPlayers.length > 0 &&
              otherPlayers.map((player, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {player.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {player.points}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {player.multiplier}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
