/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CircularProgress, Typography, TextField, Box } from "@mui/material";
import useToken from "../../../hooks/auth/use-token";

export default function ParticipantInfo({ user, loading }) {
  const token = useToken();
  const [name, setName] = React.useState("Guest");

  if (!token)
    return (
      <Box mt={3}>
        <Typography>You are joining as:</Typography>
        <TextField value={name} onChange={(evt) => setName(evt.target.value)} />
      </Box>
    );

  if (loading) return <CircularProgress />;

  return (
    <>
      <Typography>You are joining as:</Typography>
      <Typography>{user?.firstname}</Typography>
    </>
  );
}
