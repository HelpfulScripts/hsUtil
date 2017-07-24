const path = require('path');


/*global module:false*/
module.exports = function(grunt) {
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
			src:   ['dist/'],
            docs:  ['docs'],
            test:  ['dist/test','docs/test']
		},
		
		// Task configuration.
		copy: {
            build: { files: [
                { cwd:'src/', expand:true, src:['*.html'], dest:'dist/' }
            ]},
		    test: { files: [
                { cwd:'dist/test/', expand:true, src:['*.js', '*.css', '*.html'], dest:'test/'},
                { cwd:'example/',   expand:true, src:['*.json'], dest:'test/'}
            ]}
		},
		
        less: {
            options: {
                sourceMap: true
            },
            css: {
                files: {
                    'dist/hsDocs.css': 'src/css/styles.less'
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
                moduleResolution:   "node",
                allowJs:            true
           },
            src : {
                outDir:     "dist/",
                src: ["src/**/*.ts"],
                tsconfig:   true,
           },
            test : {
                outDir:     "dist/test/",
                src: ["src/**/*.ts"],
                tsconfig:   './tsConfigTest.json'
            }
        },

        typedoc: {
            code: {
                options: {
                    mode:   'modules',
                    out:    './docs',
                    target: 'es6',
                    module: 'commonjs',
                    tsconfig: 'typedoc.json',
                    json:   './docs/hsDocs.json',
                    name:   'hsDoc',
                    readme:   './readme.txt',
                },
                src: ['src/**/*.ts', '!src/**/*.spec.ts']
            }
        },

        karma: {
			options: {
			    basePath: './',
				frameworks: ['jasmine'],
				exclude: [ ], 
				coverageReporter: { 
				   type : 'html',
				   dir : 'test/',
				   subdir: '', 
				   includeAllSources: true
				},
				reporters: ['progress', 'coverage'],
				port: 9876,
				logLevel: 'WARN',  // OFF, ERROR, WARN, INFO, DEBUG
				autoWatch: false,
				singleRun: true
			},
		    Firefox: {
				browsers: ['Firefox'],
				coverageReporter: { subdir: './Firefox' },
			    preprocessors: {
			    	'dist/test/**/*.js': 		['coverage'],
			    },
				files: [
				    {hs:['dist/test/**/*.spec.js']}
				]
			}, 
		    Safari: { 
				browsers: ['Safari'],
				coverageReporter: { subdir: './Safari' },
			    preprocessors: {
			    	'dist/test/**/*.js': 		['coverage'],
			    },
				files: [
				    {hs:['dist/test/**/*.spec.js']}
				]
			},
		},

        webpack: {
            prod: { // webpack options 
                entry: './dist/hsDoc/src/index.js',
                output: {
                    filename: 'hsDocs.js',
                    path: path.resolve(__dirname, './dist')
                }
            },
            develop: { // webpack options 
                entry: './dist/hsDoc/src/index.js',
                devtool: "inline-source-map",
                output: {
                    filename: 'hsDocs.js',
                    path: path.resolve(__dirname, './dist')
                }
            }
		},

		watch: {
			gruntfile: {
                files: ['Gruntfile.js'],
				tasks: ['make']
			},
			libs: {
                files: [
                    '../hsLayout/docs/hsLayout.json', 
                    '../hsWidgets/docs/hsWidgets.json'
                ],
				tasks: ['make']
			},
			js: {
				files: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/**/*.less'],
				tasks: ['make']
			},
			less: {
                files: ['src/**/*.less',
                    '../hsLayout/dist/hsLayoput.css', 
                    '../hsWidgets/dist/hsWidgets.css'
                ],
				tasks: ['build-css']
			},
			html: {
				files: ['src/**/*.html'],
				tasks: ['build-html']
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
    grunt.loadNpmTasks('grunt-karma');
//    grunt.loadNpmTasks('grunt-jasmine-node-coverage');
    grunt.loadNpmTasks('grunt-typedoc');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('doc', ['clean:docs', 'typedoc']);
    grunt.registerTask('stage', ['webpack:develop']);
    grunt.registerTask('build-html', ['copy:build']);
    grunt.registerTask('build-css', ['less']);
    grunt.registerTask('build-js', ['tslint:src', 'ts:src']);
    grunt.registerTask('build-spec', ['tslint:spec', 'ts:test']);
    grunt.registerTask('test', ['clean:test', 'copy:test', 'build-spec', 'karma']);
    grunt.registerTask('build', ['clean:src', 'build-html', 'build-css', 'build-js']);
	grunt.registerTask('make', ['build', /*'test',*/ 'doc', 'stage']);
    grunt.registerTask('default', ['make', 'watch']);	
};
