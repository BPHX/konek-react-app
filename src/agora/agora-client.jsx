import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import AgoraRTC from "agora-rtc-sdk-ng";

// const INITIAL_PARAMS = {
//   localAudioTrack: null,
//   localVideoTrack: null,
//   remoteAudioTrack: null,
//   remoteVideoTrack: null,
//   remoteUid: null,
// };

const options = {
  appId: "eecd5b05fd7f4fe99b91a90af5661fc3",
  channel: "some-channel",
  token:
    "007eJxTYFDqV3+eXCUoLnkkWP3GHAPj0pwlQazzls2w+rPMQPFxr70CQ2pqcoppkoFpWop5mklaqqVlkqVhoqVBYpqpmZlhWrJxZ93+5IZARgbdW51MjAwQCOLzMBTn56bqJmck5uWl5jAwAADPQyGA",
  uid: "some-uuid-here",
};

function AgoraApp() {
  const [client, setClient] = React.useState(null);
  const videoRef = React.createRef();

  const publish = () =>
    new Promise((resolve) => {
      client
        .join(options.appId, options.channel, options.token, options.uid)
        .then(() => {
          const audio = AgoraRTC.createMicrophoneAudioTrack();
          const video = AgoraRTC.createCameraVideoTrack();
          Promise.all([audio, video]).then(([a, v]) => {
            const localAudioTrack = a;
            const localVideoTrack = v;

            client
              .publish([localAudioTrack, localVideoTrack])
              .then(() => resolve([a, v]));
          });
        });
    });

  useEffect(() => {
    const engine = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    // engine.on("user-published", (user, mediaType) => {
    //   engine.subscribe(user, mediaType).then(() => {
    //     console.log(user, mediaType);
    //     if (mediaType === "video") {
    //       user.remoteVideoTrack.play(videoRef);
    //     } else if (mediaType === "audio") {
    //       user.remoteAudioTrack.play();
    //     }
    //   });
    // });
    // engine.on("user-unpublished", (user) => {
    //   console.log(user, "left");
    // });
    setClient(engine);
  }, []);

  const handleJoin = () => {
    publish().then(([, v]) => {
      v.play(videoRef.current);
    });
  };

  const handleLeave = () => {};

  return (
    <Box>
      <Box ref={videoRef} sx={{ width: 300, height: 300 }}>
        SomeText
      </Box>
      <Button onClick={handleJoin}>Join</Button>
      <Button onClick={handleLeave}>Leave</Button>
    </Box>
  );
}

export default AgoraApp;
