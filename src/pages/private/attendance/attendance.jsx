import React from "react";
import { Grid, Typography, Pagination } from "@mui/material";
import "./attendance.css";

const students = {
  1: { id: 1, name: "Alice" },
  2: { id: 2, name: "Bob" },
  3: { id: 3, name: "Charlie" },
  4: { id: 4, name: "David" },
  5: { id: 5, name: "Eve" },
};

const days = {
  1: { id: 1, name: "Monday" },
  2: { id: 2, name: "Tuesday" },
  3: { id: 3, name: "Wednesday" },
  4: { id: 4, name: "Thursday" },
  5: { id: 5, name: "Friday" },
  6: { id: 6, name: "Monday" },
  7: { id: 7, name: "Tuesday" },
  8: { id: 8, name: "Wednesday" },
  9: { id: 9, name: "Thursday" },
  10: { id: 10, name: "Friday" },
  11: { id: 11, name: "Monday" },
  12: { id: 12, name: "Tuesday" },
  13: { id: 13, name: "Wednesday" },
  14: { id: 14, name: "Thursday" },
  15: { id: 15, name: "Friday" },
  16: { id: 16, name: "Monday" },
  17: { id: 17, name: "Tuesday" },
  18: { id: 18, name: "Wednesday" },
  19: { id: 19, name: "Thursday" },
  20: { id: 20, name: "Friday" },
  21: { id: 21, name: "Monday" },
  22: { id: 22, name: "Tuesday" },
  23: { id: 23, name: "Wednesday" },
  24: { id: 24, name: "Thursday" },
  25: { id: 25, name: "Friday" },
  26: { id: 26, name: "Monday" },
  27: { id: 27, name: "Tuesday" },
  28: { id: 28, name: "Wednesday" },
  29: { id: 29, name: "Thursday" },
  30: { id: 30, name: "Friday" },
};

function AttendanceSheet() {
  const [attendance, setAttendance] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState(1);
  const numberOfDaysPerPage = 10;

  const handleChange = (studentId, dayId) => (evt) => {
    setAttendance({
      ...attendance,
      [studentId]: { ...attendance[studentId], [dayId]: evt.target.checked },
    });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const daysToRender = Object.values(days).slice(
    (currentPage - 1) * numberOfDaysPerPage,
    currentPage * numberOfDaysPerPage
  );

  return (
    <Grid
      container
      spacing={2}
      border={4}
      borderLeft={0}
      borderRight={0}
      borderColor="primary.main"
      mt={0}
    >
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ px: 2, fontWeight: 600, pb: 2 }}>
          Attendance Sheet
        </Typography>
        <table>
          <thead>
            <tr>
              <th>Student</th>
              {daysToRender.map((day) => (
                <th key={day.id}>{day.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(students).map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                {daysToRender.map((day) => (
                  <td key={day.id}>
                    <input
                      type="checkbox"
                      checked={
                        attendance[student.id] && attendance[student.id][day.id]
                      }
                      onChange={handleChange(student.id, day.id)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          sx={{ mt: 2 }}
          count={Math.ceil(Object.values(days).length / numberOfDaysPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
}

export default AttendanceSheet;
