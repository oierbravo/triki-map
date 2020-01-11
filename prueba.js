var convert = require('.')

//var note = trikiNotes.numberToName(8,'Ireki')
;
//console.log('numberToName: 8 Ireki',trikiNotes.numberToName(8,'Ireki'));
//console.log(note,'note');
//console.log('nameToNumber: F4,',trikiNotes.nameToNumber('F4'));
//console.log('numberToMidi: 10',trikiNotes.numberToMidi(10));

console.log("midi:",convert.midi(50));

console.log("triki:",convert.triki("7"));