const path = require('path');

const paths = [
    '../hsLibs/mithril/hsDoc/',
    '../hsLibs/mithril/hsLayout/',
    '../hsLibs/mithril/hsWidgets/'
];

/*global module:false*/
module.exports = function(grunt) {
    const staging = '../../staging/apps/';

	// Project configuration.
	grunt.initConfig({ 
		copy: {
            stage: { files: 
                paths.map(p => { return {
                    expand: true, 
                    cwd: p+'dist/', 
                    src: ['*.js', '*.css', '*.css.map', 'index.html', '!mithril.js'], 
                    dest: staging 
                }})
                .concat(paths.map(p => { return {
                    expand: true, 
                    cwd: p+'docs/', 
                    src: ['*.json'], 
                    dest: staging+'data/' 
                }}))
            }
		},

		watch: { 
			gruntfile: {
                files: ['Gruntfile.js'],
				tasks: ['stage']
			},
			stage: { 
                files:      paths.map(p => p+'dist/*.js')
                    .concat(paths.map(p => p+'dist/*.css'))
                    .concat(paths.map(p => p+'docs/*.json')),
				tasks: ['stage']
			},
		}
	}); 
	
	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('stage', ['copy:stage']);
    grunt.registerTask('default', ['stage', 'watch']);	
};
