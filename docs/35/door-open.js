async function doorSequence() {
  const doorOpen = new Audio("door-knock-compressed.mp3");
  await playPromise(doorOpen);
  document.getElementById("door").src = "door-open.jpg";

  // TODO const groan = new Audio('groan-compressed.mp3');
  //await playPromise(groan);

  const doorClose = new Audio("door-slam-compressed.mp3");
  await playPromise(doorClose);
  document.getElementById("door").src = "door.png";
}

function playPromise(audio) {
  return new Promise((resolve) => {
    audio.onended = resolve;
    audio.play();
  });
}
