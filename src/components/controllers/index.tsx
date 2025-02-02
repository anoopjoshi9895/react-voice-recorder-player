/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/// <reference types="vite-plugin-svgr/client" /> // this imports the vite-plugin-svgr declaration file
import { forwardRef, useEffect, useState, useImperativeHandle } from "react";
import { useAudio, useUserProps } from "../../context";
import { ReactComponent as Pause } from "../../assets/pause.svg";
import { ReactComponent as Play } from "../../assets/play.svg";
import { ReactComponent as Record } from "../../assets/record.svg";
import { ReactComponent as Redo } from "../../assets/redo.svg";
import { ReactComponent as Download } from "../../assets/download.svg";
import Stop from "./Stop";
import "../../styles/controllers.scss";
import { useStopwatch } from "react-timer-hook";

const INITIAL_BUTTON_STATUSES = {
  showRecordBtn: false,
  showPlayBtn: false,
  showPauseBtn: false,
  showStopBtn: false,
  showRedoBtn: false,
};

const Controllers = forwardRef(
  (
    props: {
      onTimerUpdated: (timeDetails: Timer) => void;
      onStatusChange: (status: string) => void;
    },
    ref
  ) => {
    const { audioStatus, updateAudioStatus, audioRecording } = useAudio();
    const {
      controllerContainerStyle,
      controllerStyle,
      downloadable,
      onAudioDownload,
    } = useUserProps();
    const [buttonStatuses, setButtonStatuses] = useState<
      Record<string, boolean>
    >(INITIAL_BUTTON_STATUSES);

    const { seconds, minutes, hours, start, pause, reset } = useStopwatch({
      autoStart: false,
    });
    useEffect(() => {
      if (audioStatus === RECORDING) {
        props.onTimerUpdated({ hours, minutes, seconds });
      }
    }, [seconds, minutes, hours]);
    useEffect(() => {
      if (audioStatus === RECORDING) {
        start();
      } else if (
        audioStatus === PAUSED_PLAYING ||
        audioStatus === PAUSED_RECORDING
      ) {
        pause();
      } else {
        reset();
      }
    }, [audioStatus]);

    const formatTime = (time: number) =>
      time.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

    useImperativeHandle(ref, () => ({
      start() {
        requestMicrophone();
      },
      pause() {
        updateAudioStatus(
          audioStatus === RECORDING ? PAUSED_RECORDING : PAUSED_PLAYING
        );
      },
      stop() {
        updateAudioStatus(STOPPED);
      },
      download() {
        downloadBlob();
      },
    }));

    const renderControl = ({
      svg,
      disabled,
      status,
      onClick,
      applyCircularStyles = true,
      display = true,
    }: ControllerType) => {
      if (!status) return null;
      if (!display) return null;

      const className = `${
        applyCircularStyles ? "voice-recorder_control" : ""
      } voice-recorder_controlgeneric`;

      return (
        <button
          onClick={onClick}
          disabled={disabled}
          className={className}
          style={controllerStyle}
        >
          {svg}
        </button>
      );
    };

    const updateAudio = (status: string) => () => {
      updateAudioStatus(status);
    };

    const requestMicrophone = () => {
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: false })
        .then(updateAudio(RECORDING))
        .catch(() =>
          alert("Please allow acccess to your microphone to continue.")
        );
    };

    useEffect(() => {
      const maincontainer = document.querySelector(
        ".voice-recorder_maincontainer"
      ) as HTMLElement;
      const controlcontainer = document.querySelector(
        ".voice-recorder_controlscontainer"
      ) as HTMLElement;

      if (maincontainer && controlcontainer) {
        const { height } = maincontainer.getBoundingClientRect();
        controlcontainer.style.height = `${height / 3}px`;
      }
    }, []);

    const downloadBlob = () => {
      const { blob = "" } = audioRecording || {};
      if (!blob) return null;
      const url = URL.createObjectURL(blob);
      const aElem = document.querySelector(
        ".voice-recorder_downloadfile"
      ) as HTMLAnchorElement;
      aElem.href = url;
      aElem.download = "audio.wav";
      aElem.click();
    };

    useEffect(() => {
      if (audioRecording) {
        const { blob = "" } = audioRecording || {};
        if (!blob || !onAudioDownload) return;
        onAudioDownload(blob);
      }
    }, [audioRecording]);

    useEffect(() => {
      switch (audioStatus) {
        case "":
          setButtonStatuses({
            ...INITIAL_BUTTON_STATUSES,
            showRecordBtn: true,
          });
          break;
        case RECORDING:
          setButtonStatuses({
            ...INITIAL_BUTTON_STATUSES,
            showPauseBtn: true,
            showStopBtn: true,
          });
          break;
        case PAUSED_RECORDING:
          setButtonStatuses({
            ...INITIAL_BUTTON_STATUSES,
            showStopBtn: true,
            showRecordBtn: true,
          });
          break;
        case PAUSED_PLAYING:
          setButtonStatuses({
            ...INITIAL_BUTTON_STATUSES,
            showPlayBtn: true,
            showPauseBtn: true,
            showRedoBtn: true,
          });
          break;
        case PLAYING:
        case STOPPED:
          setButtonStatuses({
            ...INITIAL_BUTTON_STATUSES,
            showPauseBtn: true,
            showPlayBtn: true,
            showRedoBtn: true,
          });

          break;
        default:
          setButtonStatuses(INITIAL_BUTTON_STATUSES);
      }
      if (audioStatus) {
        props.onStatusChange(audioStatus);
      }
    }, [audioStatus]);
    return (
      <>
        <a
          download
          style={{ display: "none" }}
          className="voice-recorder_downloadfile"
        />
      </>
    );
    return (
      <div
        className="voice-recorder_controlscontainer"
        style={controllerContainerStyle}
      >
        <div className="voice-recorder_controls">
          {renderControl({
            svg: <Record />,
            disabled: false,
            status: buttonStatuses.showRecordBtn,
            onClick: requestMicrophone,
          })}
          {renderControl({
            svg: <Pause />,
            disabled:
              audioStatus === STOPPED ||
              audioStatus === PAUSED_RECORDING ||
              audioStatus === PAUSED_PLAYING,
            status: buttonStatuses.showPauseBtn,
            onClick: updateAudio(
              audioStatus === RECORDING ? PAUSED_RECORDING : PAUSED_PLAYING
            ),
          })}
          {renderControl({
            svg: <Play />,
            disabled: false,
            status: buttonStatuses.showPlayBtn,
            onClick: updateAudio(PLAYING_REQUESTED),
          })}
          {renderControl({
            svg: <Stop />,
            disabled: false,
            status: buttonStatuses.showStopBtn,
            onClick: updateAudio(STOPPED),
            applyCircularStyles: false,
          })}
          {renderControl({
            svg: <Redo />,
            disabled: false,
            status: buttonStatuses.showRedoBtn,
            onClick: updateAudio(""),
          })}
          <div className="voice-recorder_download">
            {renderControl({
              svg: <Download />,
              disabled: false,
              status: buttonStatuses.showRedoBtn,
              onClick: downloadBlob,
              display: downloadable,
            })}
          </div>
        </div>
        <a
          download
          style={{ display: "none" }}
          className="voice-recorder_downloadfile"
        />
      </div>
    );
  }
);

export default Controllers;
