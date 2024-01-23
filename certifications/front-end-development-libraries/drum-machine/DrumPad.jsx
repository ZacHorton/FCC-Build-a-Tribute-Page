const Drum = ({ audioClip }) => {
    const playSound = (clip) => {
      document.getElementById(clip.keyTrigger).play().catch(console.error);
      document.getElementById("display").innerText = clip.description;
    };
  
    return (
      <button
        className="drum-pad"
        id={`drum-${audioClip.keyTrigger}`}
        onClick={() => playSound(audioClip)}
      >
        <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
        {audioClip.keyTrigger}
      </button>
    );
  };
  
  export default Drum;