'use strict';

var DoFa = {
	"1": {
		Zenbakia: 1,
		Itxi: "G5",
		Ireki: "D5"
	},
	"2": {
		Zenbakia: 2,
		Itxi: "A5",
		Ireki: "E5"
	},
	"3": {
		Zenbakia: 3,
		Itxi: "E5",
		Ireki: "B4"
	},
	"4": {
		Zenbakia: 4,
		Itxi: "F5",
		Ireki: "D5"
	},
	"5": {
		Zenbakia: 5,
		Itxi: "C5",
		Ireki: "A4"
	},
	"6": {
		Zenbakia: 6,
		Itxi: "C5",
		Ireki: "Bb4"
	},
	"7": {
		Zenbakia: 7,
		Itxi: "G4",
		Ireki: "F4"
	},
	"8": {
		Zenbakia: 8,
		Itxi: "A4",
		Ireki: "G4"
	},
	"9": {
		Zenbakia: 9,
		Itxi: "E4",
		Ireki: "D4"
	},
	"10": {
		Zenbakia: 10,
		Itxi: "F4",
		Ireki: "E4"
	},
	"11": {
		Zenbakia: 11,
		Itxi: "C4",
		Ireki: "B3"
	},
	"12": {
		Zenbakia: 12,
		Itxi: "C4",
		Ireki: "D4"
	},
	"13": {
		Zenbakia: 13,
		Itxi: "G3",
		Ireki: "A3"
	},
	"14": {
		Zenbakia: 14,
		Itxi: "A3",
		Ireki: "Bb3"
	},
	"15": {
		Zenbakia: 15,
		Itxi: "E3",
		Ireki: "F3"
	},
	"16": {
		Zenbakia: 16,
		Itxi: "F3",
		Ireki: "G3"
	},
	"17": {
		Zenbakia: 17,
		Itxi: "C3",
		Ireki: "D3"
	},
	"18": {
		Zenbakia: 18,
		Itxi: "C3",
		Ireki: "E3"
	},
	"19": {
		Zenbakia: 19,
		Itxi: "G2",
		Ireki: "B2"
	},
	"20": {
		Zenbakia: 20,
		Itxi: "Eb4",
		Ireki: "Cs4"
	},
	"21": {
		Zenbakia: 21,
		Itxi: "Fs3",
		Ireki: "Gs3"
	},
	"22": {
		Zenbakia: 22,
		Itxi: "Fs4",
		Ireki: "Gs4"
	},
	"23": {
		Zenbakia: 23,
		Itxi: "Eb3",
		Ireki: "Cs3"
	}
};
var BbEb = {
	"1": {
		Zenbakia: 1,
		Ireki: "C5",
		Itxi: "F5"
	},
	"2": {
		Zenbakia: 2,
		Ireki: "D5",
		Itxi: "G5"
	},
	"3": {
		Zenbakia: 3,
		Ireki: "A4",
		Itxi: "D5"
	},
	"4": {
		Zenbakia: 4,
		Ireki: "C5",
		Itxi: "Eb5"
	},
	"5": {
		Zenbakia: 5,
		Ireki: "G4",
		Itxi: "Bb4"
	},
	"6": {
		Zenbakia: 6,
		Ireki: "Gs4",
		Itxi: "Bb4"
	},
	"7": {
		Zenbakia: 7,
		Ireki: "Eb4",
		Itxi: "F4"
	},
	"8": {
		Zenbakia: 8,
		Ireki: "F4",
		Itxi: "G4"
	},
	"9": {
		Zenbakia: 9,
		Ireki: "C4",
		Itxi: "D4"
	},
	"10": {
		Zenbakia: 10,
		Ireki: "D4",
		Itxi: "Eb4"
	},
	"11": {
		Zenbakia: 11,
		Ireki: "A3",
		Itxi: "Bb3"
	},
	"12": {
		Zenbakia: 12,
		Ireki: "C4",
		Itxi: "Bb3"
	},
	"13": {
		Zenbakia: 13,
		Ireki: "G3",
		Itxi: "F3"
	},
	"14": {
		Zenbakia: 14,
		Ireki: "Gs3",
		Itxi: "G3"
	},
	"15": {
		Zenbakia: 15,
		Ireki: "Eb3",
		Itxi: "D3"
	},
	"16": {
		Zenbakia: 16,
		Ireki: "F3",
		Itxi: "Eb3"
	},
	"17": {
		Zenbakia: 17,
		Ireki: "C3",
		Itxi: "Bb2"
	},
	"18": {
		Zenbakia: 18,
		Ireki: "D3",
		Itxi: "Bb2"
	},
	"19": {
		Zenbakia: 19,
		Ireki: "A3",
		Itxi: "F2"
	},
	"20": {
		Zenbakia: 20,
		Ireki: "B3",
		Itxi: "Cs4"
	},
	"21": {
		Zenbakia: 21,
		Ireki: "Fs3",
		Itxi: "E3"
	},
	"22": {
		Zenbakia: 22,
		Ireki: "Fs4",
		Itxi: "E4"
	},
	"23": {
		Zenbakia: 23,
		Ireki: "B2",
		Itxi: "Cs3"
	}
};
var Notak = {
	DoFa: DoFa,
	BbEb: BbEb
};

var TrikiNotes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DoFa: DoFa,
  BbEb: BbEb,
  'default': Notak
});

var MidiNotes = {
	"41": "F2",
	"42": "Fs2",
	"43": "G2",
	"44": "Gs2",
	"45": "A2",
	"46": "Bb2",
	"47": "B2",
	"48": "C3",
	"49": "Cs3",
	"50": "D3",
	"51": "Eb3",
	"52": "E3",
	"53": "F3",
	"54": "Fs3",
	"55": "G3",
	"56": "Gs3",
	"57": "A3",
	"58": "Bb3",
	"59": "B3",
	"60": "C4",
	"61": "Cs4",
	"62": "D4",
	"63": "Eb4",
	"64": "E4",
	"65": "F4",
	"66": "Fs4",
	"67": "G4",
	"68": "Gs4",
	"69": "A4",
	"70": "Bb4",
	"71": "B4",
	"73": "C5",
	"74": "Cs5",
	"75": "D5",
	"76": "Eb5",
	"77": "E5",
	"78": "F5",
	"79": "Fs5",
	"80": "G5",
	"81": "Gs5",
	"82": "A5",
	"83": "Bb5",
	"84": "B5"
};

//import MidiMap from './MidiMap';


function nameToMidi(name) {
  //console.log( MidiNotes);
  for (let key in MidiNotes){
   if(MidiNotes.hasOwnProperty(key)){
     if(MidiNotes[key] === name){
       return key
     }
   }
  }
  return false;
}
function midiToName(midi) {
  for (let key in MidiNotes){
   if(MidiNotes.hasOwnProperty(key)){
     if(key == midi){
       return MidiNotes[key]
     }
   }
  }
  return false;
}
function midiToNumber(midi) {
  var name =  Object.keys(MidiNotes).reduce((el)=> (
    (el == midi) ?  MidiNotes[el] : false
   ));
  // console.log(name);
   return midi
}
function numberToMidi(number,direction = 'all',tuning = 'BbEb'){

}
function numberToName(number,direction = 'all',tuning = 'BbEb'){
  if(direction === 'all') {
    return  TrikiNotes[tuning][number]
  }
  return TrikiNotes[tuning][number][direction]
}
function nameToNumber(name,direction = 'all',tuning = 'BbEb'){
  var number =  Object.keys(TrikiNotes[tuning]).reduce((el)=> (
    (el.Ireki == name) ?  TrikiNotes[tuning][el] : false
   ));
  if(direction === 'all') {
    return  number
  }
  return number
}

var NoteMapper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  nameToMidi: nameToMidi,
  midiToName: midiToName,
  midiToNumber: midiToNumber,
  numberToMidi: numberToMidi,
  numberToName: numberToName,
  nameToNumber: nameToNumber
});

module.exports = NoteMapper;
