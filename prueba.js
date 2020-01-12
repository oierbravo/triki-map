var convert = require('.')

//var note = trikiNotes.numberToName(8,'Ireki')
;
//console.log('numberToName: 8 Ireki',trikiNotes.numberToName(8,'Ireki'));
//console.log(note,'note');
//console.log('nameToNumber: F4,',trikiNotes.nameToNumber('F4'));
//console.log('numberToMidi: 10',trikiNotes.numberToMidi(10));

console.log("midi.note:",convert.midi(50).note());
console.log("midi.triki:",convert.midi(50).triki());



console.log("triki.note:",convert.triki("7").note());
console.log("triki+:.note",convert.triki("+7").note());

console.log("triki.midi:",convert.triki("+7").midi());

console.log("guitar:",convert.guitar("A2").note());
console.log("guitar.midi:",convert.guitar("A2").midi());