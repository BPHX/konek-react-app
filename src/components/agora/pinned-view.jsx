/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  PropsContext,
  MaxVideoView,
  MinVideoView,
  MaxUidContext,
  MinUidContext,
} from "agora-react-uikit";
import { Box, List, Paper } from "@mui/material";
import styles from "./agora-styles.css";
import UserContainer from "./user-container";

export default function AgoraPinnedView() {
  const { styleProps, rtcProps } = useContext(PropsContext);
  const {
    minViewContainer,
    pinnedVideoContainer,
    maxViewContainer,
    scrollViewContainer,
  } = styleProps || {};
  // eslint-disable-next-line prettier/prettier
  const parentRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const isLandscape = width > height;
  const maxUsers = useContext(MaxUidContext);
  const minUsers = useContext(MinUidContext);

  useEffect(() => {
    const handleResize = () => {
      if (parentRef.current) {
        setWidth(parentRef.current.offsetWidth);
        setHeight(parentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    if (parentRef.current) {
      setWidth(parentRef.current.offsetWidth);
      setHeight(parentRef.current.offsetHeight);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      px={2}
      py={2}
      boxSizing="border-box"
    >
      {minUsers?.length && (
        <Box
          width="100%"
          height="180px"
          sx={{
            overflowX: "auto",
            overflowY: "hidden",
            whiteSpace: "nowrap",
            boxSizing: "border-box",
          }}
          className="vertical-scroll"
        >
          {minUsers.map((user) => (
            <UserContainer sx={{ mx: 1 }} key={user.uid}>
              <MinVideoView user={user} />
            </UserContainer>
          ))}
        </Box>
      )}

      <Box
        width="98%"
        flexGrow={1}
        position="relative"
        display="flex"
        height="100%"
        mt={1}
        mx={1}
      >
        <MaxVideoView user={maxUsers[0]} />
      </Box>
    </Box>
  );
}
