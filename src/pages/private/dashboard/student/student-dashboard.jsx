import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
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
      title: "Kalbo",
      image:
        "https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB",
    },
    {
      id: "2",
      title: "Panot",
      image:
        "https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB",
    },
    {
      id: "3",
      title: "Jude",
      image:
        "https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB",
    },
  ];

  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Widget title="Live Porno" loading={loading} padded>
          <div className="vertical-scroll">
            <div className="card-list">
              {classrooms.map((classroom) => (
                <ClassroomCard
                  key={classroom.id}
                  image={classroom.image}
                  title={classroom.title}
                  description="You will learn how to communicate with monkey"
                  onJoin={() => navigate(`/room/${classroom.id}`)}
                />
              ))}
            </div>
          </div>
        </Widget>
      </Grid>
    </Grid>
  );
}
