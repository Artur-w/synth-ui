import * as Tone from "tone";

// const recorder = new Tone.Recorder();
var chunks = []

const volSlider = document.getElementById('volume-slider')
// var volume = volSlider.value

var volume = 20
const vol = new Tone.Volume(volume).toDestination();


export function isrecording(recording,recorder) {
  if (recording == true){
    recorder.start()
  }
}

// TODO: have to be async?
export function play() {
    // await Tone.start()
    Tone.start()
    console.log('context started')
}
export function reverb(note,duration) {
    const reverb = new Tone.JCReverb(0.4).toDestination();
    console.log(Tone.Destination.blockTime);
    const delay = new Tone.FeedbackDelay(0.2);
    // connecting the synth to reverb through delay
    const synth = new Tone.DuoSynth().chain(delay, reverb);
    synth.triggerAttackRelease(note, duration);
  }
export function loopSound(note,duration){
  const synth = new Tone.Synth().toDestination()
  // synth.connect(recorder)
  // synth.triggerAttackRelease(note, duration);

  const loop = new Tone.Loop((time) => {
    synth.triggerAttackRelease(note, duration);
  }, '8n').start(0);
  Tone.Transport.clear() // do nothing?
  Tone.Transport.toggle()
}

export function kick(note, duration) {
    const vol = new Tone.Volume(0).toDestination();
    const synth = new Tone.MembraneSynth().chain(vol)//.toDestination()
    // synth.connect(recorder)
    synth.triggerAttackRelease(note, duration);
}

export function kickloop(note,duration,tempo) {
  const synth = new Tone.MembraneSynth().toDestination()
  const loop = new Tone.Loop((time) => {
    synth.triggerAttackRelease(note, duration);
  }, tempo).start(0);
  Tone.Transport.clear() // do nothing?
  Tone.Transport.toggle()
}
export function bass(note, duration) {
  const vol = new Tone.Volume(volume-10).toDestination();
  const synth = new Tone.Synth().chain(vol)
  synth.triggerAttackRelease(note,duration)
}

export function deepBass (note,duration) {
  const dist = new Tone.Distortion(0.8).toDestination();
  const fm = new Tone.FMSynth().connect(dist);
  fm.triggerAttackRelease(note, duration);
}

export function notquirebass(){
  const synth = new Tone.PolySynth().toDestination();
  synth.set({ detune: -1600 });
  // synth.sync()
  synth.triggerAttackRelease(["C4", "E4", "A4"], 1);
  const bassEnvelope = new Tone.AmplitudeEnvelope({
    attack: 0.01,
    decay: 0.12,
    sustain: 0,
  }).toDestination();

  const bassFilter = new Tone.Filter({
    frequency: 800,
    Q: 8
  });

  const bass = new Tone.PulseOscillator("A2", 0.4).chain(bassFilter, bassEnvelope);
  bass.start();

  const bassPart = new Tone.Part(((time, note) => {
    bass.frequency.setValueAtTime(note, time);
    bassEnvelope.triggerAttack(time);
  }), [["0:0", "A1"],
    ["0:2", "G1"],
    ["0:2:2", "C2"],
    ["0:3:2", "A1"]]).start(0);
  bassPart.start()
}

function idkfoo(){
  const vol = new Tone.Volume(5).toDestination();
  const osc = new Tone.Oscillator().connect(vol).start();
  // create a new cheby
  const cheby = new Tone.Chebyshev(50).toDestination();
  // create a monosynth connected to our cheby
  // const synth = new Tone.MonoSynth().connect(vol,cheby);
  // synth.sync()
  synth.triggerAttackRelease("C2", 0.4);

  const synth = new Tone.MembraneSynth().toDestination();
  synth.triggerAttackRelease("C2", "8n");
}

export function AutoWah (note, duration) {
  const autoWah = new Tone.AutoWah(50, 6, -30).toDestination();
  // initialize the synth and connect to autowah
  const synth = new Tone.Synth().connect(autoWah);
  // Q value influences the effect of the wah - default is 2
  autoWah.Q.value = 6;
  // more audible on higher notes
  synth.triggerAttackRelease(note, duration);
}

// BitCrusher
export function BitCrusher(note, duration) {
    // initialize crusher and route a synth through it
    const crusher = new Tone.BitCrusher(4).toDestination();
    const synth = new Tone.Synth().connect(crusher);
    synth.triggerAttackRelease(note, duration);
    // "D2", 0.1
  }

export  function Chebymosth(note,duration) {
  const vol = new Tone.Volume(volume-20).toDestination();
    // cheby on monosynth
    const cheby = new Tone.Chebyshev(1).toDestination();
    // monosynth connected to cheby
    const synth = new Tone.MonoSynth().chain(cheby, vol);
    synth.triggerAttackRelease(note, duration);
  }

  // Chorus
export function Chorus() {
    // create a new cheby
    const cheby = new Tone.Chebyshev(50).toDestination();
    // create a monosynth connected to our cheby
    const synth = new Tone.MonoSynth().connect(cheby);
    synth.triggerAttackRelease("C2", 0.4);
  }

  // Distortion
export function Distortion () {
    const dist = new Tone.Distortion(0.8).toDestination();
    const fm = new Tone.FMSynth().connect(dist);
    fm.triggerAttackRelease("A1", "8n");
  }

  // FeedbackDelay
export function FeedbackDelay(note,duration) {
    const feedbackDelay = new Tone.FeedbackDelay("8n", 0.1).toDestination();
    const tom = new Tone.MembraneSynth({
      octaves: 4,
      volume: 5,
      pitchDecay: 0.1
    }).connect(feedbackDelay);
      tom.triggerAttackRelease(note, duration);
  }

  // Freeverb
export function Freeverb() {
    const freeverb = new Tone.Freeverb().toDestination();
    freeverb.dampening = 1000;
    // routing synth through the reverb
    const synth = new Tone.NoiseSynth().connect(freeverb);
    synth.triggerAttackRelease(0.05);
  }

export function highhead() {
        // High-head
    var tom = new Tone.MembraneSynth();
    var snare = new Tone.NoiseSynth({

    noise  : {
    type  : "brown"
    },
        envelope  : {
        attack  : 0.003 ,
        decay  : 0.1 ,
        sustain  : 0.02
        }
    }
    )

    var reverb = new Tone.Freeverb({
    roomSize  : 0.7 ,
    dampening  : 8000
    });
    var feedbackDelay = new Tone.FeedbackDelay({
    delayTime  : "32n",
    feedback : 0.25
    });
    var gate = new Tone.Gate(-50)
    var compressor = new Tone.MidSideCompressor();
    var gain = new Tone.Gain();

    snare.chain(reverb, gate, compressor, gain);
    snare.chain( gate, compressor, gain);

    //tom.chain(reverb, gate, compressor, gain);
    tom.chain( gate, compressor, gain);


    gain.chain(Tone.Master); // dry

    snare.triggerAttackRelease("8n");
    tom.triggerAttackRelease("C1","8n");
}

export function breakbeat() {
  const breakbeatPlayer = new Tone.Player().toDestination()
  const samplesBuffer = new Tone.ToneAudioBuffers({
    urls: {
      // gong: "berklee/gong_1.mp3",
      // chime: "berklee/chime_1.mp3",
      // voice: "berklee/femalevoices_aa2_A5.mp3",
      // ahntone_c3: "berklee/ahntone_c3.mp3",
      breakbeat: "drum-samples/breakbeat.mp3",
      // hunddrum_loop: "drum-samples/handdrum-loop.mp3",
      // conga_rhythm: "drum-samples/conga-rhythm.mp3"
    },
    onload: () => console.log('Buffer Loaded'),
    baseUrl: "https://tonejs.github.io/audio/"
})
  breakbeatPlayer.buffer = samplesBuffer.get("breakbeat")
  breakbeatPlayer.start()
  breakbeatPlayer.loop = true;
  breakbeatPlayer.autostart= true
  breakbeatPlayer.toggle()
}
