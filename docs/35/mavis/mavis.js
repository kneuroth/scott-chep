async function catSpeakSequence() {
  // let min = 0;
  // let max = 9;
  // let rand = Math.floor(Math.random() * (max - min + 1)) + min;
  // const catTalk = new Audio(`mavin-speak-${rand}.mp3`);

  const img = document.getElementsByClassName("mavis");
  const audio = new Audio(`mavis/mavis-audio-${getRandomInt(1, 2)}.mp3`);

  let toggle = false;
  const images = ["mavis/mavis-talk-1.png", "mavis/mavis-talk-2.png"];

  // Swap every 100ms
  const interval = setInterval(() => {
    toggle = !toggle;
    img.src = images[+toggle];
  }, 100);

  audio.play();

  // Stop swapping when audio ends
  audio.addEventListener("ended", () => {
    clearInterval(interval);
    img.src = `mavis/mavis-${getRandomInt(1, 2)}.png`;
  });

  //   const catTalk = new Audio("door-knock-compressed.mp3");
  //   await playPromise(catTalk);
  //   document.getElementById("mavis").src = "mavis-2.png";

  //   await playPromise(catTalk);
  //   document.getElementById("mavis").src = "mavis-3.png";
  //   audio.play();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playPromise(audio) {
  return new Promise((resolve) => {
    audio.onended = resolve;
    audio.play();
  });
}
