/*global module:false*/
module.exports = function(grunt) {
    grunt.my ={ src:'', dest:'', cwd:''};

	// Project configuration.
	grunt.initConfig({
        links: {
            node_modules:[
                { cwd: './dev/hsLibs/node/hsNode/',  src: '../../../../node_modules', dest: '.'},
                { cwd: './dev/hsLibs/node/hsServe/', src: '../../../../node_modules', dest: '.'}
            ],
            hsServe: [
                { cwd: './dev/hsLibs/node/hsServe', src: '../hsNode/src/', dest: 'hsNode'},
            ]
        },
        
		run: {
			link: {
                cmd: 'ln', options: { cwd: '<%= grunt.my.cwd %>'}, 
                args: ['-fhsv', '<%= grunt.my.src %>', '<%= grunt.my.dest %>']
            }
		}
	});
	

	// These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-run');

    grunt.registerMultiTask('links', 'make symbolic links', function() {
        this.data.forEach(o => {
            let cwd = process.cwd();
            grunt.log.writeln(`>> ${o.cwd}`);
            grunt.util.spawn({
                cmd: 'ln', args: ['-fhsv', o.src, o.dest], opts:{cwd: o.cwd}
            }, function(error, result, code) {});
        });
    }); 	
    grunt.registerTask('default', []); 	// no default; top level grunt file => explicitly start tasks: 'grunt link'

};
