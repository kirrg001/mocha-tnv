var lib = require(__dirname + '/../lib'),
    path = require('path'),
    chai = require('chai');


global.should = chai.should();
global.expect = chai.expect;
global.assert = chai.assert;


// @TODO: finish this test, right now the purpose of this test is getting a change to debug interactive
describe('UNIT: runner', function() {
    it('los', function (done) {
        this.timeout(1000 * 10);

        lib.runner.run({
            // files: [__dirname + '/assets/test1.js', __dirname + '/assets/test2.js'],
            files: [__dirname + '/assets/test2.js'],
            config: {
                processes: 2,
                nodeModulesPath: path.normalize(__dirname),
                applicationPath: path.normalize(__dirname + '/../'),
                testFolderPath: __dirname + '/assets',
                utilsPath: __dirname + '/assets/utils.js'
            }
        });

        setTimeout(function () {
            done();
        }, 5000);
    });
});