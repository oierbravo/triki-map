var trikiNotes = require('../.')
import chai, { expect,assert } from 'chai';
import chaiJsonPattern from 'chai-json-pattern';

chai.use(chaiJsonPattern);

import {default as MidiNotes} from './maps/Midi.json';

describe('Module',function(){
  it('should return object',function(){
    assert.isObject(trikiNotes, 'is an object.');
  })
})

describe('Module.maps',function(){
  it('Format',function(){
    assert.isObject(trikiNotes, 'is an object.');
  })
})