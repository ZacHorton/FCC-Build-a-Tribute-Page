import { useEffect, useRef } from "react";

export default function DrumPad({
  drumID,
  audioID,
  audioSrc,
  keyPressed,
  keyValue,
}) {
  const audioRef = useRef(null);

  if (keyPressed && keyValue.toUpperCase() === audioID) {
    audioRef.current.play();
  }

  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <div className="drum-pad" id={drumID} onClick={handleClick}>
      {audioID}
      <audio
        ref={audioRef}
        className="clip"
        id={audioID}
        src={audioSrc}
      ></audio>
    </div>
  );
}
