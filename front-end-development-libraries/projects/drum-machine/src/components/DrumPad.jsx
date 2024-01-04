import { useRef } from "react";

export default function DrumPad({ drumID, audioID, audioSrc, keyPressed }) {
  const audioRef = useRef(null);

  if (keyPressed == audioID) {
    console.log(keyPressed);
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
