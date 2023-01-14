/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState, useMemo } from "react";
import {
  PropsContext,
  MaxUidContext,
  MinUidContext,
  MaxVideoView,
} from "agora-react-uikit";

export default function AgoraGridView() {
  const { styleProps, rtcProps } = useContext(PropsContext);
  const { gridVideoCells, gridVideoContainer } = styleProps || {};
  const max = useContext(MaxUidContext);
  const min = useContext(MinUidContext);
  const users =
    rtcProps.role === "audience"
      ? [...max, ...min].filter((user) => user.uid !== 0)
      : [...max, ...min];
  const parentRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const columns = useMemo(() => {
    const unit = "minmax(0, 1fr) ";
    const isLandscape = width > height;
    const lmap = [
      [9, 4],
      [4, 3],
      [1, 2],
    ];

    const pmap = [
      [8, 3],
      [2, 2],
    ];

    const repeat =
      (isLandscape ? lmap : pmap).find((x) => users?.length > x[0])?.[1] || 1;

    return unit.repeat(repeat);
  }, [users?.length, width, height]);

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
    <div
      ref={parentRef}
      style={{
        ...{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: columns,
        },
        ...gridVideoContainer,
      }}
    >
      {/* {users.map((user) => (
        <MaxVideoView
          user={user}
          style={{ ...{ height: "100%", width: "100%" }, ...gridVideoCells }}
          key={user.uid}
        />
      ))} */}
    </div>
  );
}
