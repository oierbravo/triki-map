import {default as Maps} from './maps/index.js';

var tunning = 'BbEb'

var to = function(input){
  return {
    input:input,
    note: function() {
      return input;
    },
    midi: function() {
      var midis =  Maps.Midi.filter(function(el,index){
        if(el.note == input){
          return el;
        }
      });
      return midis.map(function(el){
        return el.midi;
      });
    },
    triki: function(tune = tunning){
      var zenbakiak =  Maps.Triki[tune].filter(function(el,index){
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
      var strings =  Maps.Guitar.filter(function(el,index){
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
  var midis =  Maps.Midi.filter(function(el,index){
    if(el.midi == midi){
      return el;
    }
  });
  var notes = midis.map(function(el){
    return el.note;
  });
  return to(notes);
}

export function triki(triki,tune = tunning){
  var direction = 'Itxi';
  if(triki.charAt(0) === '+'){
    direction = 'Ireki';
  }
  var zenbakiaRaw = triki.replace('+','').replace('-','');

  var zenbakiak =  Maps.Triki[tunning].filter(function(el,index){
   
    
    
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
  var strings = Maps.Guitar.filter(function(el,index){
    if(el.str == input){
      return el;
    }
  });
  var notes = strings.map(function(el){
    return el.note;
  });
  return to(notes);
}