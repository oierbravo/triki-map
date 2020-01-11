(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.trikiMap = factory());
}(this, (function () { 'use strict';

  var DoFa = [
  	{
  		Zenbakia: 1,
  		Itxi: "G5",
  		Ireki: "D5"
  	},
  	{
  		Zenbakia: 2,
  		Itxi: "A5",
  		Ireki: "E5"
  	},
  	{
  		Zenbakia: 3,
  		Itxi: "E5",
  		Ireki: "B4"
  	},
  	{
  		Zenbakia: 4,
  		Itxi: "F5",
  		Ireki: "D5"
  	},
  	{
  		Zenbakia: 5,
  		Itxi: "C5",
  		Ireki: "A4"
  	},
  	{
  		Zenbakia: 6,
  		Itxi: "C5",
  		Ireki: "Bb4"
  	},
  	{
  		Zenbakia: 7,
  		Itxi: "G4",
  		Ireki: "F4"
  	},
  	{
  		Zenbakia: 8,
  		Itxi: "A4",
  		Ireki: "G4"
  	},
  	{
  		Zenbakia: 9,
  		Itxi: "E4",
  		Ireki: "D4"
  	},
  	{
  		Zenbakia: 10,
  		Itxi: "F4",
  		Ireki: "E4"
  	},
  	{
  		Zenbakia: 11,
  		Itxi: "C4",
  		Ireki: "B3"
  	},
  	{
  		Zenbakia: 12,
  		Itxi: "C4",
  		Ireki: "D4"
  	},
  	{
  		Zenbakia: 13,
  		Itxi: "G3",
  		Ireki: "A3"
  	},
  	{
  		Zenbakia: 14,
  		Itxi: "A3",
  		Ireki: "Bb3"
  	},
  	{
  		Zenbakia: 15,
  		Itxi: "E3",
  		Ireki: "F3"
  	},
  	{
  		Zenbakia: 16,
  		Itxi: "F3",
  		Ireki: "G3"
  	},
  	{
  		Zenbakia: 17,
  		Itxi: "C3",
  		Ireki: "D3"
  	},
  	{
  		Zenbakia: 18,
  		Itxi: "C3",
  		Ireki: "E3"
  	},
  	{
  		Zenbakia: 19,
  		Itxi: "G2",
  		Ireki: "B2"
  	},
  	{
  		Zenbakia: 20,
  		Itxi: "Eb4",
  		Ireki: "Cs4"
  	},
  	{
  		Zenbakia: 21,
  		Itxi: "Fs3",
  		Ireki: "Gs3"
  	},
  	{
  		Zenbakia: 22,
  		Itxi: "Fs4",
  		Ireki: "Gs4"
  	},
  	{
  		Zenbakia: 23,
  		Itxi: "Eb3",
  		Ireki: "Cs3"
  	}
  ];
  var BbEb = [
  	{
  		Zenbakia: 1,
  		Ireki: "C5",
  		Itxi: "F5"
  	},
  	{
  		Zenbakia: 2,
  		Ireki: "D5",
  		Itxi: "G5"
  	},
  	{
  		Zenbakia: 3,
  		Ireki: "A4",
  		Itxi: "D5"
  	},
  	{
  		Zenbakia: 4,
  		Ireki: "C5",
  		Itxi: "Eb5"
  	},
  	{
  		Zenbakia: 5,
  		Ireki: "G4",
  		Itxi: "Bb4"
  	},
  	{
  		Zenbakia: 6,
  		Ireki: "Gs4",
  		Itxi: "Bb4"
  	},
  	{
  		Zenbakia: 7,
  		Ireki: "Eb4",
  		Itxi: "F4"
  	},
  	{
  		Zenbakia: 8,
  		Ireki: "F4",
  		Itxi: "G4"
  	},
  	{
  		Zenbakia: 9,
  		Ireki: "C4",
  		Itxi: "D4"
  	},
  	{
  		Zenbakia: 10,
  		Ireki: "D4",
  		Itxi: "Eb4"
  	},
  	{
  		Zenbakia: 11,
  		Ireki: "A3",
  		Itxi: "Bb3"
  	},
  	{
  		Zenbakia: 12,
  		Ireki: "C4",
  		Itxi: "Bb3"
  	},
  	{
  		Zenbakia: 13,
  		Ireki: "G3",
  		Itxi: "F3"
  	},
  	{
  		Zenbakia: 14,
  		Ireki: "Gs3",
  		Itxi: "G3"
  	},
  	{
  		Zenbakia: 15,
  		Ireki: "Eb3",
  		Itxi: "D3"
  	},
  	{
  		Zenbakia: 16,
  		Ireki: "F3",
  		Itxi: "Eb3"
  	},
  	{
  		Zenbakia: 17,
  		Ireki: "C3",
  		Itxi: "Bb2"
  	},
  	{
  		Zenbakia: 18,
  		Ireki: "D3",
  		Itxi: "Bb2"
  	},
  	{
  		Zenbakia: 19,
  		Ireki: "A3",
  		Itxi: "F2"
  	},
  	{
  		Zenbakia: 20,
  		Ireki: "B3",
  		Itxi: "Cs4"
  	},
  	{
  		Zenbakia: 21,
  		Ireki: "Fs3",
  		Itxi: "E3"
  	},
  	{
  		Zenbakia: 22,
  		Ireki: "Fs4",
  		Itxi: "E4"
  	},
  	{
  		Zenbakia: 23,
  		Ireki: "B2",
  		Itxi: "Cs3"
  	}
  ];
  var Triki = {
  	DoFa: DoFa,
  	BbEb: BbEb
  };

  var TrikiNotes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DoFa: DoFa,
    BbEb: BbEb,
    'default': Triki
  });

  var MidiNotes = [
  	{
  		name: "F2",
  		midi: "41"
  	},
  	{
  		name: "Fs2",
  		midi: "42"
  	},
  	{
  		name: "G2",
  		midi: "43"
  	},
  	{
  		name: "Gs2",
  		midi: "44"
  	},
  	{
  		name: "A2",
  		midi: "45"
  	},
  	{
  		name: "Bb2",
  		midi: "46"
  	},
  	{
  		name: "B2",
  		midi: "47"
  	},
  	{
  		name: "C3",
  		midi: "48"
  	},
  	{
  		name: "Cs3",
  		midi: "49"
  	},
  	{
  		name: "D3",
  		midi: "50"
  	},
  	{
  		name: "Eb3",
  		midi: "51"
  	},
  	{
  		name: "E3",
  		midi: "52"
  	},
  	{
  		name: "F3",
  		midi: "53"
  	},
  	{
  		name: "Fs3",
  		midi: "54"
  	},
  	{
  		name: "G3",
  		midi: "55"
  	},
  	{
  		name: "Gs3",
  		midi: "56"
  	},
  	{
  		name: "A3",
  		midi: "57"
  	},
  	{
  		name: "Bb3",
  		midi: "58"
  	},
  	{
  		name: "B3",
  		midi: "59"
  	},
  	{
  		name: "C4",
  		midi: "60"
  	},
  	{
  		name: "Cs4",
  		midi: "61"
  	},
  	{
  		name: "D4",
  		midi: "62"
  	},
  	{
  		name: "Eb4",
  		midi: "63"
  	},
  	{
  		name: "E4",
  		midi: "64"
  	},
  	{
  		name: "F4",
  		midi: "65"
  	},
  	{
  		name: "Fs4",
  		midi: "66"
  	},
  	{
  		name: "G4",
  		midi: "67"
  	},
  	{
  		name: "Gs4",
  		midi: "68"
  	},
  	{
  		name: "A4",
  		midi: "69"
  	},
  	{
  		name: "Bb4",
  		midi: "70"
  	},
  	{
  		name: "B4",
  		midi: "71"
  	},
  	{
  		name: "C5",
  		midi: "72"
  	},
  	{
  		name: "Cs5",
  		midi: "73"
  	},
  	{
  		name: "D5",
  		midi: "74"
  	},
  	{
  		name: "Eb5",
  		midi: "75"
  	},
  	{
  		name: "E5",
  		midi: "76"
  	},
  	{
  		name: "F5",
  		midi: "77"
  	},
  	{
  		name: "Fs5",
  		midi: "78"
  	},
  	{
  		name: "G5",
  		midi: "70"
  	},
  	{
  		name: "Gs5",
  		midi: "80"
  	},
  	{
  		name: "A5",
  		midi: "81"
  	},
  	{
  		name: "Bb5",
  		midi: "82"
  	},
  	{
  		name: "B5",
  		midi: "83"
  	}
  ];

  //import MidiMap from './MidiMap';
  var _ = require('lodash');

  var tunning = 'BbEb';

  function toMidi(note){
    console.log(note);
    var midis =  MidiNotes.filter(function(el,index){
      if(el.name == note){
        return el;
      }
    });
    return midis.map(function(el){
      return el.midi;
    });
  }

  function midi(midi){
    //console.log(MidiNotes);
    var midis =  MidiNotes.filter(function(el,index){
      if(el.midi == midi){
        return el;
      }
    });
    var notes = midis.map(function(el){
      return el.name;
    });
    return notes;
  }

  function toTriki(note){
    var zenbakiak =  TrikiNotes[tunning].filter(function(el,index){
      if(el.Ireki == note || el.Itxi == note){
        return el;
      }
    });
    return zenbakiak.map(function(el){
      if(el.Ireki == note){
        return "+" + el.Zenbakia;
      }
      if(el.Itxi == note){
        return `${el.Zenbakia}`;
      }
      return el;
    });

  }

  function triki(triki){
    var direction = 'Itxi';
    if(triki.charAt(0) === '+'){
      direction = 'Ireki';
    }
    var zenbakiaRaw = triki.replace('+','').replace('-','');

    var zenbakiak =  TrikiNotes[tunning].filter(function(el,index){
     
      
      
      if(el.Zenbakia == zenbakiaRaw){
        return el;
      }
    });
    return zenbakiak.map(function(el){
      var note = el[direction];
      return note;
    });
  }


  function nameToMidi(name) {
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
    var triki = TrikiNotes[tuning][number];
    if(direction === 'all') {
      console.log(_.filter(MidiNotes,triki.Itxi));
      console.log(_.findKey(MidiNotes, [triki.Itxi]));
    }
     // console.log(names);
      return triki;
    //}
    
    //return (direction == 'Itxi') ? numbersItxi : numbersIreki;
  }
  function numberToName(number,direction = 'all',tuning = 'BbEb'){
    if(direction === 'all') {
      return  TrikiNotes[tuning][number]
    }
    return TrikiNotes[tuning][number][direction]
  }
  function nameToNumber(name,direction = 'all',tuning = 'BbEb'){
    var numbersIreki =  Object.values(TrikiNotes[tuning]).filter((el)=> (
      (el.Ireki == name) ? el : false
     ));
     var numbersItxi =  Object.values(TrikiNotes[tuning]).filter((el)=> (
      (el.Itxi == name) ?  el : false
     ));

    if(direction === 'all') {
      return  {Itxi:numbersItxi,ireki:numbersIreki}
    }
    return (direction == 'Itxi') ? numbersItxi : numbersIreki;
  }

  var NoteMapper = /*#__PURE__*/Object.freeze({
    __proto__: null,
    toMidi: toMidi,
    midi: midi,
    toTriki: toTriki,
    triki: triki,
    nameToMidi: nameToMidi,
    midiToName: midiToName,
    midiToNumber: midiToNumber,
    numberToMidi: numberToMidi,
    numberToName: numberToName,
    nameToNumber: nameToNumber
  });

  return NoteMapper;

})));
