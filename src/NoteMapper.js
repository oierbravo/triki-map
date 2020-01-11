//import MidiMap from './MidiMap';
import * as TrikiNotes from './maps/Triki.json';
import {default as MidiNotes} from './maps/Midi.json';
import * as KeyboardNotes from './maps/Keyboard.json';
var _ = require('lodash');

var tunning = 'BbEb'
var input = '';

// DEVOLVER OBj To con las funciones necesarias.
var to = function(input){
  return {
    input: input,
    midi: function() {
      
    }
  }
}

export function toMidi(note){
  var midis =  MidiNotes.filter(function(el,index){
    if(el.name == note){
      return el;
    }
  });
  return midis.map(function(el){
    return el.midi;
  });
}

export function midi(midi){
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

export function toTriki(note){
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

export function triki(triki){
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


export function nameToMidi(name) {
  for (let key in MidiNotes){
   if(MidiNotes.hasOwnProperty(key)){
     if(MidiNotes[key] === name){
       return key
     }
   }
  }
  return false;
}
export function midiToName(midi) {
  for (let key in MidiNotes){
   if(MidiNotes.hasOwnProperty(key)){
     if(key == midi){
       return MidiNotes[key]
     }
   }
  }
  return false;
}
export function midiToNumber(midi) {
  var name =  Object.keys(MidiNotes).reduce((el)=> (
    (el == midi) ?  MidiNotes[el] : false
   ))
  // console.log(name);
   return midi
}
export function numberToMidi(number,direction = 'all',tuning = 'BbEb'){
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
export function numberToName(number,direction = 'all',tuning = 'BbEb'){
  if(direction === 'all') {
    return  TrikiNotes[tuning][number]
  }
  return TrikiNotes[tuning][number][direction]
}
export function nameToNumber(name,direction = 'all',tuning = 'BbEb'){
  var numbersIreki =  Object.values(TrikiNotes[tuning]).filter((el)=> (
    (el.Ireki == name) ? el : false
   ))
   var numbersItxi =  Object.values(TrikiNotes[tuning]).filter((el)=> (
    (el.Itxi == name) ?  el : false
   ))

  if(direction === 'all') {
    return  {Itxi:numbersItxi,ireki:numbersIreki}
  }
  return (direction == 'Itxi') ? numbersItxi : numbersIreki;
}