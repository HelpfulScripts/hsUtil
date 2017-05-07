const path = require('path');

/*global module:false*/
module.exports = function(grunt) {
    const staging = '../../../../staging/apps/';

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
			src:   ['dist/src'],
			spec:  ['dist/spec'],
            docs:  ['docs'],
            test:  ['docs/tests']
		},
		
		// Task configuration.
		copy: {
            build: { cwd:'src/', expand:true, src:['*.html'], dest:'dist/' },
		    test: { files: [
                { cwd:'dist/', expand:true, src:['*.js', '*.css', '*.html'], dest:'test/'}
            ]}, 
			stage: { files: [
                { expand: true, cwd: 'dist/', src: ['*.js', '*.css', '*.html'], dest: staging },
                { src: ['packageDeploy.json'],    dest: staging+'../package.json' },
	            { src: ['packageDeploy.json'],    dest: staging+'../package.json' }
            ]}
		},
		
        less: {
            options: {
                sourceMap: false
            },
            css: {
                files: {
                    'dist/styles.css': 'src/css/styles.less'
                }
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
                moduleResolution:   "node",
                allowJs:            true
           },
            src : {
                outDir:     "dist/js",
                src: ["src/**/*.ts", "!src/**/*.spec.ts"],
                tsconfig:   true,
            },
            spec : {
                outDir:     "dist/js",
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
                    json:   './docs/docs.json',
                    out:    './docs',
                    mode:   'modules',
//                    listInvalidSymbolLinks: true,
//                    theme:  'themes/hs',
                    name:   'hsCrossFrameWork',
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
						    'dist/spec/**/*.spec.js'
						]
					}
				},
				src: ['dist/spec/**/*.js'] 
			}
		},

        webpack: {
            example: { // webpack options 
                entry: './dist/js/index.js',
                output: {
                    filename: 'hsDocs.js',
                    path: path.resolve(__dirname, staging), // string
                }
            }
		},

		watch: {
			gruntfile: {
                files: ['Gruntfile.js'],
				tasks: ['make']
			},
			js: {
				files: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/**/*.less'],
				tasks: ['build']
			},
			less: {
				files: ['src/**/*.less'],
				tasks: ['less', 'stage']
			},
			html: {
				files: ['src/**/*.html'],
				tasks: ['copy:build', 'stage']
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
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-jasmine-node-coverage');
    grunt.loadNpmTasks('grunt-typedoc');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('doc', ['clean:docs', 'typedoc']);
    grunt.registerTask('test', ['clean:spec', 'copy:test', 'tslint:spec', 'ts:spec', 'jasmine_node']);
    grunt.registerTask('build', ['clean:src', 'copy:build', 'less', 'tslint:src', 'ts:src', 'webpack']);
    grunt.registerTask('stage', ['copy:stage']);
	grunt.registerTask('make', ['build', 'test', 'doc']);
    grunt.registerTask('default', ['build', 'test', 'watch']);	
};
