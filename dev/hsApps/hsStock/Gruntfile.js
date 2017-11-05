/*global module:false*/
module.exports = function(grunt) {
    const sgc  = require('../../sharedGruntConfig')(grunt, __dirname, ['hsLayout', 'hsWidget', 'hsGraph'], 'app');
	grunt.initConfig(sgc); 
};
