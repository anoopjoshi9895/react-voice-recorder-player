import PropTypes from "prop-types";
import Waveform from "./components/waveform";
import Controllers from "./components/controllers";
import { AudioProvider, UserPropsProvider } from "./context";
import "./styles/voice-recorder.scss";
import { forwardRef, useRef, useImperativeHandle } from "react";

export const VoiceRecorder = forwardRef((props: VoiceRecorderProps, ref) => {
  const { mainContainerStyle, height, width, ...rest } = props;

  const mainContainerStyleComplete = {
    ...mainContainerStyle,
    height,
    width,
  };
  const controllerRef: any = useRef();
  useImperativeHandle(ref, () => ({
    start() {
      controllerRef?.current?.start();
    },
    pause() {
      controllerRef?.current?.pause();
    },
    stop() {
      controllerRef?.current?.stop();
    },
    download() {
      controllerRef?.current?.download();
    },
  }));
  return (
    <AudioProvider>
      <UserPropsProvider userPropsValue={rest}>
        <div
          className="voice-recorder_maincontainer"
          style={mainContainerStyleComplete}
        >
          <Waveform
            onStop={(audioData) => {
              props.onStop?.(audioData.blob);
            }}
          />
          <Controllers
            onStatusChange={(status) => {
              props.onStatusChange?.(status);
            }}
            onTimerUpdated={(timer: Timer) => {
              console.log(timer);
              props.onTimerUpdated?.(timer);
            }}
            ref={controllerRef}
          />
        </div>
      </UserPropsProvider>
    </AudioProvider>
  );
});

VoiceRecorder.propTypes = {
  mainContainerStyle: PropTypes.object,
  height: PropTypes.string || PropTypes.number,
  width: PropTypes.string || PropTypes.number,
};
