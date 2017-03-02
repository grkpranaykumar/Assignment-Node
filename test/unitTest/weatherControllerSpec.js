import chai from 'chai';
import server from '../../server';
import {
    addPath
} from 'app-module-path';
addPath(__dirname);
import weatherController from '../../app/services/weather/controller/weatherController';
var expect = chai.expect;


describe('Test case for App Transformer with empty Array', function() {
    it('it should build proper response object', function() {
       // expect(weatherController.transform([])).to.deep.equal([])
    });

})

