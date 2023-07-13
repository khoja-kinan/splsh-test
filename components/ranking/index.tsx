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
import rankingIcon from "../../public/icons/rankingIcon.png";
import { PlayerContext } from "../../context/playerContext";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#15191F",
    color: "#fff",
    borderBottom: 0,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

function createData(no: number, name: string, score: number) {
  return { no, name, score };
}

const rows = [
  createData(1, "kinan", 6.0),
  createData(2, "khoja", 9.0),
  createData(3, "khoja", 9.0),
  createData(4, "khoja", 9.0),
  createData(5, "khoja", 9.0),
];

export default function Ranking() {
  const { otherPlayers, username, points } = React.useContext(PlayerContext);
  function createData(no: number, name: string, score: number) {
    return { no, name, score };
  }

  let rows = [createData(1, username, points)];

  otherPlayers.map((item, index) => {
    rows.push(createData(index, item.name, item.points));
  });

  function compare(a: any, b: any) {
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
    return 0;
  }
  return (
    <Box sx={{ flex: 0.5 }}>
      <Stack
        direction={"row"}
        alignItems={"flex-end"}
        spacing={2}
        marginBottom={1}
      >
        <Image src={rankingIcon} alt="Ranking Icon" width={25} height={25} />
        <Typography sx={{ flex: "1 1 100%", color: "#fff" }} variant="body1">
          Ranking
        </Typography>
      </Stack>
      <TableContainer
        component={Paper}
        sx={{
          border: "2px solid #20232D",
          maxHeight: "205px",
          overflow: "auto",
        }}
      >
        <Table aria-label="customized table" size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Score</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.no}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  sx={{
                    backgroundColor: row.name === username ? "#3F4657" : "",
                  }}
                >
                  {row.no}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{
                    backgroundColor: row.name === username ? "#3F4657" : "",
                  }}
                >
                  {row.name}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{
                    backgroundColor: row.name === username ? "#3F4657" : "",
                  }}
                >
                  {row.score}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
