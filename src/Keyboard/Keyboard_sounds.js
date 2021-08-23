import * as Tone from "tone";
import * as sounds from "../script.js"

const volumeSliderOutput = document.getElementById("volume-slider");

// create new instrument and connect it to speakers
const synth = new Tone.PolySynth({
  oscillator: {
    type: 'sine',
    modulationType: 'square',
    modulationIndex: 3,
    harmonicity: 3,
    detune: 0,
    volume: volumeSliderOutput
  }
}).toDestination();

synth.connect(Tone.Master);

// console.log(Tone.Destination.blockTime)


// a - j = first 7 keys
// shift + a - j = next 7 keys
// shift + k = last key (C5)
const keyboardControls = {
  a: {pressed: false, note: 'C3'},
  w: {pressed: false, note: 'C#3'},
  s: {pressed: false, note: 'D3'},
  e: {pressed: false, note: 'D#3'},
  d: {pressed: false, note: 'E3'},
  f: {pressed: false, note: 'F3'},
  t: {pressed: false, note: 'F#3'},
  g: {pressed: false, note: 'G3'},
  y: {pressed: false, note: 'G#3'},
  h: {pressed: false, note: 'A3'},
  u: {pressed: false, note: 'A#3'},
  j: {pressed: false, note: 'B3'},
  A: {pressed: false, note: 'C4'},
  W: {pressed: false, note: 'C#4'},
  S: {pressed: false, note: 'D4'},
  E: {pressed: false, note: 'D#4'},
  D: {pressed: false, note: 'E4'},
  F: {pressed: false, note: 'F4'},
  T: {pressed: false, note: 'F#4'},
  G: {pressed: false, note: 'G4'},
  Y: {pressed: false, note: 'G#4'},
  H: {pressed: false, note: 'A4'},
  U: {pressed: false, note: 'A#4'},
  J: {pressed: false, note: 'B4'},
  K: {pressed: false, note: 'C5'}
}

window.onload = function (){

const record = document.getElementById("btn_start")
// const audioSave = document.getElementById("audio")
// const mediaRecorder = new mediaRecorder(mediaStreamObj)

const tempoSlider = document.getElementById("metronome-slider");
tempoSlider.value = 80;

const pad0selectNote = document.getElementById("pad0selectNote")
const pad0selectDuration = document.getElementById("pad0selectDur")
const pad1selectNote = document.getElementById("pad1selectNote")
const pad1selectDuration = document.getElementById("pad1selectDur")
const pad2selectNote = document.getElementById("pad2selectNote")
const pad2selectDuration = document.getElementById("pad2selectDur")
const pad3selectNote = document.getElementById("pad3selectNote")
const pad3selectDuration = document.getElementById("pad3selectDur")
const pad4selectNote = document.getElementById("pad4selectNote")
const pad4selectDuration = document.getElementById("pad4selectDur")
const pad5selectNote = document.getElementById("pad5selectNote")
const pad5selectDuration = document.getElementById("pad5selectDur")
const pad5selectTempo = document.getElementById("pad5selectTempo")

document.getElementById("metronome-slider").addEventListener('click', () => {
  const tempo = tempoSlider.value
  console.log(tempo)
  console.log(Tone.Destination.blockTime);
  Tone.Transport.bpm.value = 80;
  //ramp the bpm to 120 over 10 seconds
  Tone.Transport.bpm.rampTo(120, tempo);
})

  // Play Pause
  document.getElementById('play').addEventListener('click', async () => {
    console.log('play')
})
var play =document.getElementById('play')
// recording mic
document.getElementById("btn_start").addEventListener('click',() => {
  const recordAudio = () =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];
    // when get data push it to adudio chunks
    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });
    // start media recorder
    const start = () => mediaRecorder.start();
    // stop media recorder
    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

  (async () => {
    const recorder = await recordAudio();
    recorder.start();
    await sleep(6000);
    const audio = await recorder.stop();
    audio.play();
  })();

})
document.getElementById('play').addEventListener('click', async () => {
  console.log('play')
  // audio.play();
})
const recorder = new Tone.Recorder()
document.getElementById("btn_synthrec").addEventListener('click', async () => {
  console.log("synth rec")

  const synth = new Tone.Synth().connect(recorder)
  // start recording
  recorder.start()
  // var synthBuffer = Tone.context()
  // generate a few notes
  Tone.getContext()
  // Tone.Transport.syncSignal()
  // Tone.Transport.start()
  synth.triggerAttackRelease("C3", 0.5)
  synth.triggerAttackRelease("C4", 0.5, "+1")
  synth.triggerAttackRelease("C5", 0.5, "+2")
  // wait for the notes to end and stop the recording
  // console.log('not saving file')
  setTimeout(async () => {
    // the recorded audio is returned as a blob
    const recording = await recorder.stop()
    // download the recording by creating an anchor element and blob url
    const url = URL.createObjectURL(recording)
    const anchor = document.createElement("a")
    anchor.download = "recording.webm"
    anchor.href = url
    anchor.click()
  }, 4000)
})
const volumeSlider = document.getElementById("volume-slider")
const volume = volumeSlider.value
volumeSlider.value = 5
const vol = new Tone.Volume(volume).toDestination();
document.getElementById("volume-slider").addEventListener('click', (volume) => {
  console.log(volumeSlider.value)
  volume = volumeSlider.value
})

// EFFECTS event listners
document.getElementById("effect0_btn").addEventListener('click', (event) => {
  sounds.highhead()
})

document.getElementById('effect1_btn').addEventListener('click', ()=> {
  sounds.reverb("C4","8n")
})

document.getElementById('effect2_btn').addEventListener('click', () => {
  sounds.reverb("E4","8n")
})

document.getElementById('effect3_btn').addEventListener('click', () => {
  console.log('E3')
})

document.getElementById('effect4_btn').addEventListener('click', () => {
  sounds.Chorus()
})

document.getElementById('effect5_btn').addEventListener('click', () => {
  sounds.BitCrusher()
})

document.getElementById("pad0_btn").addEventListener('click', ()=> {
  var note = pad0selectNote.value
  var duration = pad0selectDuration.value
  console.log(note, duration)
  sounds.kick(note, duration)
})

document.getElementById("pad1_btn").addEventListener('click', () => {
    var note = pad1selectNote.value
    var duration = pad1selectDuration.value
    sounds.bass(note,duration)
})

document.getElementById("pad2_btn").addEventListener('click', () => {
  var note = pad2selectNote.value
  var duration = pad2selectDuration.value
  sounds.deepBass(note, duration)
})

document.getElementById("pad3_btn").addEventListener('click', () => {
  var note = pad3selectNote.value
  var duration = pad3selectDuration.value
  sounds.FeedbackDelay(note,duration) // this one is cool

})

document.getElementById("pad4_btn").addEventListener('click', () => {
  var note = pad4selectNote.value
  var duration = pad4selectDuration.value
  sounds.Chebymosth(note,duration)
})

document.getElementById('pad5_btn').addEventListener('click', (event) => {
  var note = pad5selectNote.value
  var duration = pad5selectDuration.value
  var tempo = pad5selectTempo.value
  sounds.kickloop(note,duration,tempo)

  // "C2", "2n"
})

const blackKeys = document.querySelectorAll(".black-key");
  blackKeys.forEach((key) => {
    key.addEventListener('click', (event) => {
      // console.log(key.id)
      // const screen = document.getElementById("screen");
      // var content = screen.innerText;
      // screen.innerText = key.id + "\n" + content;
      event.stopPropagation()
      event.preventDefault()
      synth.triggerAttackRelease(key.id, '4n');
    });
  });

const whiteKeys = document.querySelectorAll(".white-key");
  whiteKeys.forEach((key) => {
    key.addEventListener('click', (event) => {
      // console.log(key.id)
      // const screen = document.getElementById("screen");
      // var content = screen.innerText;
      // screen.innerText = key.id + "\n" + content;
      // event.stopPropagation()
      // event.preventDefault()
      synth.triggerAttackRelease(key.id, '4n');
    });
  });
};

window.addEventListener("keypress", (event) => {
  var letterKey = event.key.toString()
  console.log(letterKey);
  if (keyboardControls[letterKey]) {
    keyboardControls[letterKey].pressed = false;
  }
});

window.addEventListener("keydown", (event) => {
  var letterKey = event.key.toString();
  //
  // if (letterKey in keyboardControls){
  //   const screen = document.getElementById("screen");
  //   var content = screen.innerText;
  //   screen.innerText = keyboardControls[letterKey].note + "\n" + content;
  // }

  if (keyboardControls[letterKey] && !keyboardControls[letterKey].pressed) {
    keyboardControls[letterKey].pressed = true;
    synth.triggerAttackRelease(keyboardControls[letterKey].note, '4n');
  }
});

window.addEventListener("keyup", (event) => {
  var letterKey = event.key.toString()
  console.log(letterKey);
  if (keyboardControls[letterKey]) {
    keyboardControls[letterKey].pressed = false;
  }
});
