const lyrics = [
    { time: 1, text: "....." },
    { time: 5, text: "To the tempo of your uptight Is the flicker of a streetlight" },
    { time: 10, text: "You know this moment, don't you?" },
    { time: 14, text: "And time is strangely calm now 'Cause everybody's gone"}, 
    { time: 18, text: "It's just you and your anger"},
    { time: 22, text: "Oh, golden boy, don't act like you were kind" },
    { time: 27, text: "You were mine, but you were awful every time" },
    { time: 30, text: "So don't tell them what you told me" },
    { time: 33, text: "Don't hold me like you know me" },
    { time: 35.5, text: "I would rather burn forever" },
    { time: 39, text: "But you should know that I died slow" },
    { time: 44, text: "Running through the halls of your haunted home" },
    { time: 48, text: "And the toughest part is that we both know What happened to you" },
    { time: 54, text: "Why you're out on your own" },
    { time: 58, text: "Merry christmas, please don't call" },
    { time: 61, text: "dengerin aja dah gua males ngetik lagi"},
    { time: 68, text: "ntar di akhir ada lagi liriknya hmz"},
    { time: 72, text: "......"},
    { time: 142, text: "But you should know that I died slow" },
    { time: 146, text: "Running through the halls of your haunted home" },
    { time: 150, text: "And the toughest part is that we both know What happened to you" },
    { time: 155, text: "Why you're out on your own" },
    { time: 159, text: "Merry christmas, please don't call" },
    { time: 162, text: "Merry christmas, I'm not yours at all" },
    { time: 165, text: "Merry christmas, please don't call me" },
    { time: 168, text: "Please don't call me.." }
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

let playing = false;

playBtn.addEventListener("click", () => {

    if (!playing) {
        audio.play();
        playBtn.innerHTML = "⏸ Pause";
        playing = true;
    } else {
        audio.pause();
        playBtn.innerHTML = "▶ Play";
        playing = false;
    }

});
audio.addEventListener("ended", () => {
    playBtn.innerHTML = "▶ Play";
    playing = false;
});
const lyric = document.getElementById("lyric");

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;

    for (let i = lyrics.length - 1; i >= 0; i--) {
        if (currentTime >= lyrics[i].time) {
            lyric.innerText = lyrics[i].text;
            break;
        }
    }
});