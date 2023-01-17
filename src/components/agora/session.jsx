/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React from "react";

import {
  PropsContext,
  RtcConfigure,
  TracksConfigure,
  LocalUserContext,
  RtmConfigure,
  RemoteMutePopUp,
} from "agora-react-uikit";
import AgoraPinnedView from "./pinned-view";
import AgoraGridView from "./grid-view";
import { LocalUserProvider } from "./local-user-context";

export default function AgoraSession(props) {
  const { rtcProps } = props;
  return (
    <PropsContext.Provider value={props}>
      {rtcProps.role === "audience" ? (
        <VideoCall />
      ) : (
        <TracksConfigure enableVideo={false}>
          <VideoCall />
        </TracksConfigure>
      )}
    </PropsContext.Provider>
  );
}

function VideoCall({ ...props }) {
  const { rtcProps } = React.useContext(PropsContext);
  return (
    <RtcConfigure callActive={rtcProps.callActive}>
      <LocalUserContext>
        <LocalUserProvider>
          <RtmConfigure>
            {rtcProps.disableRtm ? (
              <>
                {rtcProps?.layout === 1 ? (
                  <AgoraGridView />
                ) : (
                  <AgoraPinnedView />
                )}
              </>
            ) : (
              <RtmConfigure>
                <RemoteMutePopUp />
                {rtcProps?.layout === 1 ? (
                  <AgoraGridView />
                ) : (
                  <AgoraPinnedView />
                )}
              </RtmConfigure>
            )}
          </RtmConfigure>
        </LocalUserProvider>
      </LocalUserContext>
    </RtcConfigure>
  );
}
