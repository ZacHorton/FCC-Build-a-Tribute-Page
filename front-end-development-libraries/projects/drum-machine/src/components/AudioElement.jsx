import React, { useEffect, useRef } from "react";

export default function AudioElement({ className, id, src, btnClicked }) {
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current.play();
  }, [btnClicked]);

  return (
    <>
      <audio ref={audioRef} className={className} id={id} src={src}></audio>
    </>
  );
}
