/*global module:false*/
module.exports = function(grunt) {
    const sgc  = require('../../sharedGruntConfig')(grunt, __dirname, ['hsLayout', 'hsWidget', 'hsGraph', 'hsData', 'hsUtil'], 'app');
	grunt.initConfig(sgc); 
};
