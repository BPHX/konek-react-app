import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(subject, time, day, section, create) {
  return { subject, time, day, section, create };
}

const rows = [
  createData("Mathematics", "7:00-8:00 AM", "Monday-Friday", "Apple, Banana"),
  createData("Science", "8:00-9:00 AM", "Monday-Friday"),
  createData("Filipino", "9:00-10:00 AM", "Monday-Friday"),
  createData("English", "10:30-11:30 AM", "Monday-Friday"),
  createData("Hekasi", "11:30-12:30 PM", "Monday-Friday"),
];

export default function CustomizedTables() {
  const theme = useTheme();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Subject</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Day</StyledTableCell>
            <StyledTableCell align="center">Section</StyledTableCell>
            <StyledTableCell align="center">Create Meeting</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.subject}
              </StyledTableCell>
              <StyledTableCell align="center">{row.time}</StyledTableCell>
              <StyledTableCell align="center">{row.day}</StyledTableCell>
              <StyledTableCell align="center">{row.section}</StyledTableCell>
              <StyledTableCell align="center">
                {row.create}
                <Button
                  variant="outlined"
                  sx={{
                    fontWeight: "600",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.common.white,
                    "&:hover": {
                      color: theme.palette.primary.main,
                      backgroundColor: "#eee",
                    },
                  }}
                >
                  <VideoCallIcon sx={{ marginRight: "2px" }} />
                  meeting
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
