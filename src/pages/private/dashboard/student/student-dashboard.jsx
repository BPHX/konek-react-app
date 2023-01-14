import { Grid } from "@mui/material";
import React from "react";
import ClassroomCard from "../../../../components/cards/classroom-card";
import Widget from "../../../../components/widget/widget";
import "./index.css";

export default function StudentDashboard() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const classrooms = [
    {
      id: "1",
      title: "Math",
      image:
        "https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB",
    },
    {
      id: "2",
      title: "Science",
      image:
        "https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB",
    },
    {
      id: "3",
      title: "Filipino",
      image:
        "https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Widget title="Classes" loading={loading} padded>
          <div className="vertical-scroll">
            <div className="card-list">
              {classrooms.map((classroom) => (
                <ClassroomCard
                  key={classroom.id}
                  image={classroom.image}
                  title={classroom.title}
                  description="You will learn how to communicate with monkey"
                  link={`/room/${classroom.id}`}
                  linkTarget="_blank"
                />
              ))}
            </div>
          </div>
        </Widget>
      </Grid>
    </Grid>
  );
}
