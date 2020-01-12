//import MidiMap from './MidiMap';
import * as TrikiNotes from './maps/Triki.json';
import {default as GuitarNotes} from './maps/Guitar.json';
import {default as MidiNotes} from './maps/Midi.json';
import * as KeyboardNotes from './maps/Keyboard.json';
var _ = require('lodash');

var tunning = 'BbEb'
var input = '';

var to = function(input){
  return {
    input:input,
    note: function() {
      return input;
    },
    midi: function() {
      var midis =  MidiNotes.filter(function(el,index){
        if(el.note == input){
          return el;
        }
      });
      return midis.map(function(el){
        return el.midi;
      });
    },
    triki: function(){
      var zenbakiak =  TrikiNotes[tunning].filter(function(el,index){
        if(el.Ireki == input || el.Itxi == input){
          return el;
        }
      });
      return zenbakiak.map(function(el){
        if(el.Ireki == input){
          return "+" + el.Zenbakia;
        }
        if(el.Itxi == input){
          return `${el.Zenbakia}`;
        }
        return el;
      });
    
    },
    guitar: function(){
      var strings =  GuitarNotes.filter(function(el,index){
        if(el.note == input){
          return el;
        }
      });
      return strings.map(function(el){
        return el.str;
      });
    
    }
  }
}

export function midi(midi){
  //console.log(MidiNotes);
  var midis =  MidiNotes.filter(function(el,index){
    if(el.midi == midi){
      return el;
    }
  });
  var notes = midis.map(function(el){
    return el.note;
  });
  return to(notes);
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
  var output = zenbakiak.map(function(el){
    var note = el[direction];
    return note;
  });
  return to(output);
}
export function guitar(input){
  var strings =  GuitarNotes.filter(function(el,index){
    if(el.str == input){
      return el;
    }
  });
  var notes = strings.map(function(el){
    return el.note;
  });
  return to(notes);
}