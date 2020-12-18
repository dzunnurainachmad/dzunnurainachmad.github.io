function playAudio(f) {
  let audio = new Audio(f);
  audio.play();
}

//on click
let snare = document.getElementById("snare");
snare.addEventListener("click", () => {
  playAudio("audio/snare.wav");
});
let kick = document.getElementById("kick");
kick.addEventListener("click", () => {
  playAudio("audio/kick.wav");
});
let tom = document.getElementById("tom");
tom.addEventListener("click", () => {
  playAudio("audio/tom.wav");
});
let hihat = document.getElementById("hihat");
hihat.addEventListener("click", () => {
  playAudio("audio/hihat.wav");
});
let crash = document.getElementById("crash");
crash.addEventListener("click", () => {
  playAudio("audio/crash.wav");
});
let hihatOpen = document.getElementById("hihatOpen");
hihatOpen.addEventListener("click", () => {
  playAudio("audio/hihatOpen.wav");
});

//on keys
let textBox = document.getElementById("keyboard");
textBox.addEventListener("keydown", (event) => {
  //   console.log(`key=${event.key},code=${event.code}`);
  switch (event.key) {
    case "j":
      playAudio("audio/tom.wav");
      break;
    case "k":
      playAudio("audio/snare.wav");
      break;
    case "l":
      playAudio("audio/kick.wav");
      break;
    case "a":
      playAudio("audio/hihat.wav");
      break;
    case "s":
      playAudio("audio/hihatOpen.wav");
      break;
    case "d":
      playAudio("audio/crash.wav");
      break;

    default:
      break;
  }
});
