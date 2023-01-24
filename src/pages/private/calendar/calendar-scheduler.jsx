import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar-style.css";

const locales = {
  "en-US": import("date-fns/locale/en-US").then((locale) => locale),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 0, 1),
    end: new Date(2023, 0, 5),
  },
  {
    title: "Vacation",
    start: new Date(2023, 1, 7),
    end: new Date(2023, 1, 10),
  },
  {
    title: "Conference",
    start: new Date(2023, 1, 20),
    end: new Date(2023, 1, 23),
  },
];

function CalendarScheduler() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("Note: Notes Overlapping");
        break;
      }
    }

    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ padding: 3, fontWeight: 600 }}>
          My Calendar
        </Typography>
        <div className="App">
          <Typography variant="h5" sx={{ padding: 3, fontWeight: 600 }}>
            Add New Event
          </Typography>
          <div>
            <input
              className="title"
              type="text"
              placeholder="Add Title"
              style={{ width: "20%", marginRight: "10px" }}
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <div className="datepickers">
              <DatePicker
                className="start"
                placeholderText="Start Date"
                style={{ marginRight: "10px" }}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <DatePicker
                className="end"
                placeholderText="End Date"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
            </div>
            <Button
              className="btn"
              variant="contained"
              onClick={handleAddEvent}
              color="success"
              sx={{ marginRight: "10px" }}
            >
              <AddIcon sx={{ mr: 1 }} />
              Add Event
            </Button>
          </div>
          <Calendar
            localizer={localizer}
            events={allEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default CalendarScheduler;
