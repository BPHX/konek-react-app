import React from "react";
import { Box, Skeleton } from "@mui/material";

export default function TableSkeleton() {
  return (
    <Box m={1}>
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        <Skeleton width="200px" height="50px" sx={{ marginRight: 2 }} />
        <Skeleton width="200px" height="50px" sx={{ marginRight: 2 }} />
        <Skeleton width="200px" height="50px" sx={{ marginRight: 2 }} />
        <Skeleton width="200px" height="50px" sx={{ marginRight: 2 }} />
        <Skeleton width="200px" height="50px" sx={{ marginRight: 2 }} />
        <Skeleton width="200px" height="50px" sx={{ marginRight: 2 }} />
        <Skeleton width="200px" height="50px" sx={{ marginRight: 2 }} />
      </Box>
      <Skeleton width="100%" height="70px" />
      <Skeleton width="100%" height="70px" />
      <Skeleton width="100%" height="70px" />
      <Skeleton width="100%" height="70px" />
      <Skeleton width="100%" height="70px" />
      <Skeleton width="100%" height="70px" />
      <Skeleton width="100%" height="70px" />
    </Box>
  );
}
