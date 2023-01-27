import React from "react";
import { Card, Grid, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Page({ children, title, left, right, ...props }) {
  return (
    <Card>
      <Box
        border={4}
        borderLeft={0}
        borderRight={0}
        borderColor="primary.main"
        sx={{ p: 2 }}
        {...props}
      >
        <Grid container sx={{ mb: 1 }}>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {title}
              </Typography>
              {left}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: { xs: 1, md: 0 } }}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="flex-end"
              gap={1}
              justifyContent="flex-end"
              height="100%"
            >
              {right}
            </Box>
          </Grid>
        </Grid>
        <Box py={1}>{children}</Box>
      </Box>
    </Card>
  );
}

Page.defaultProps = {
  left: null,
  right: null,
  title: null,
  children: null,
};

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  left: PropTypes.node,
  right: PropTypes.node,
};
