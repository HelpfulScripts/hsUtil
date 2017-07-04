
/*global module:false*/
module.exports = function(grunt) {
    const staging = '../../../../srv/node/';

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

		clean: {
            all:   ['dist', 'docs'],
			src:   ['dist/src'],
			spec:  ['dist/spec'],
            docs:  ['docs'],
            test:  ['docs/tests']
		},
		
		// Task configuration.
		copy: {
		    pre: {},
			stage: {
	            files: [{
	                expand: true, cwd: 'dist/',
	                src: ['*.js'], dest: staging+'hsNode/'
	            }]
            }
		},
		
        tslint: {
            options: {
                configuration: 'tslint.json',
                force:  false,
                fix:    false
            },
            src: {
                src: ["src/**/*.ts", "!src/**/*.spec.ts"]
            },
            spec: {
                src: ["src/**/*.spec.ts"]
            }
        },

        ts: {
            options: {
                module:             "commonjs",
                moduleResolution:   "node"
            },
            src : {
                outDir:     "dist",
                src: ["src/**/*.ts", "!src/**/*.spec.ts"],
                tsconfig:   true,
            },
            spec : {
                outDir:     "dist/spec",
                src: ["src/**/*.spec.ts"],
                tsconfig:   true,
            }
        },

        typedoc: {
            code: {
                options: {
                    target: 'es6',
                    tsconfig: 'typedoc.json',
                    module: 'commonjs',
                    json:   './docs/hsNode.json',
                    out:    './docs',
                    mode:   'modules',
//                    listInvalidSymbolLinks: true,
//                    theme:  'themes/hs',
                    name:   'hsNode',
                    readme: 'readme.txt'
                },
                src: ['src/**/*.ts', '!src/**/*.spec.ts']
            }
        },

		jasmine_node: {
			options: { forceExit: true },
			all: {
				options: {
                    projectRoot: 'dist',
					coverage: {
						reportDir: 'docs/tests',
                        relativize: true,
						includeAllSources: true,
						report: ['html']
					},
					jasmine: {
						spec_dir: '',
						spec_files: [
						    'dist/spec/*.spec.js'
						]
					}
				},
				src: ['dist/**/*.js'] 
			}
		},

		watch: {
			gruntfile: {
                files: ['Gruntfile.js'],
				tasks: ['make']
			},
			js: {
				files: ['src/**/*.ts', '!src/**/*.spec.ts'],
				tasks: ['build']
			},
			specs: {
				files: ['src/**/*.spec.ts'],
				tasks: ['test']
			}
		}
	});
	
	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-jasmine-node-coverage');
    grunt.loadNpmTasks('grunt-typedoc');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('doc', ['clean:docs', 'typedoc']);
    grunt.registerTask('test', ['clean:spec', 'tslint:spec', 'ts:spec', 'jasmine_node']);
    grunt.registerTask('build', ['clean:src', 'tslint:src', 'ts:src']);
    grunt.registerTask('stage', ['copy:stage']);
	grunt.registerTask('make', ['build', 'test', 'doc']);
    grunt.registerTask('watch', ['clean', 'make', 'watch']);	
    grunt.registerTask('default', ['clean', 'make']);	
};