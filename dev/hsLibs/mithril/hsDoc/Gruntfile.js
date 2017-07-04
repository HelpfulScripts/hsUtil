const path = require('path');
const webpackConfig = require('./webpack.config');


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
			src:   ['dist/'],
            docs:  ['docs'],
            test:  ['dist/test','docs/test']
		},
		
		// Task configuration.
		copy: {
            build: { files: [
                { cwd:'src/', expand:true, src:['*.html'], dest:'dist/' }
            ]},
            docs: { files: [
                { cwd:'docs/', expand:true, src:['*.json'], dest:'example/' }
            ]},
		    test: { files: [
                { cwd:'dist/test/', expand:true, src:['*.js', '*.css', '*.html'], dest:'test/'},
                { cwd:'example/',   expand:true, src:['*.json'], dest:'test/'}
            ]}, 
			stage: { files: [
                { expand: true, cwd: 'dist/', src: ['*.js', '*.css', '*.css.map', '*.html'], dest: staging },
//                { src: ['packageDeploy.json'],    dest: staging+'../package.json' },
	            { expand: true, flatten:true, src: ['example/*.json'],    dest: staging+'data/' }
            ]}
		},
		
        less: {
            options: {
                sourceMap: true
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
                    target: 'es6',
                    tsconfig: 'typedoc.json',
                    module: 'commonjs',
                    json:   './docs/hsDocs.json',
                    out:    './docs',
                    mode:   'modules',
//                    listInvalidSymbolLinks: true,
//                    theme:  'themes/hs',
                    name:   'hsDoc',
                    readme: 'readme.txt'
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
			js: {
				files: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/**/*.less'],
				tasks: ['make']
			},
			less: {
				files: ['src/**/*.less'],
				tasks: ['build-css', 'copy:stage']
			},
			html: {
				files: ['src/**/*.html'],
				tasks: ['build-html', 'copy:stage']
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

    grunt.registerTask('doc', ['clean:docs', 'typedoc', 'copy:docs']);
    grunt.registerTask('stage', ['webpack:develop', 'copy:stage']);
    grunt.registerTask('build-html', ['copy:build']);
    grunt.registerTask('build-css', ['less']);
    grunt.registerTask('build-js', ['tslint:src', 'ts:src']);
    grunt.registerTask('build-spec', ['tslint:spec', 'ts:test']);
    grunt.registerTask('test', ['clean:test', 'copy:test', 'build-spec', 'karma']);
    grunt.registerTask('build', ['clean:src', 'build-html', 'build-css', 'build-js']);
	grunt.registerTask('make', ['build', /*'test',*/ 'doc', 'stage']);
    grunt.registerTask('default', ['make', 'watch']);	
};
