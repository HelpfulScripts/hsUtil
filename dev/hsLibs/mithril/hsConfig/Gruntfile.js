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
			src:   ['dist/src'], 
			spec:  ['dist/spec'],
            data:  ['dist/data'],
            docs:  ['docs'],
            test:  ['docs/tests'],
		},
		
		// Task configuration.
		copy: {
            build: { files: [
                { cwd:'src/', expand:true, src:['*.html'], dest:'dist/' }
            ]},
		    test: { files: [
                { cwd:'dist/test/', expand:true, src:['*.js', '*.css', '*.html'], dest:'dist/test/'},
                { cwd:'example/',   expand:true, src:['*.css', '*.html'], dest:'dist/'},
                { cwd:'example/',   expand:true, src:['*.json'], dest:'dist/data/'},
                { cwd:'data/',   expand:true, src:['*.json'], dest:'dist/data/'}
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
                src: ["src/**/*.ts"]
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

        karma: {
			options: {
			    basePath: './',
				frameworks: ['jasmine'],
				exclude: [ ], 
				coverageReporter: { 
				   type : 'html',
				   dir : 'dist/test/',
				   subdir: '', 
				   includeAllSources: true
				},
				reporters: ['progress', 'coverage'],
				port: 9876,
				logLevel: 'WARN',  // OFF, ERROR, WARN, INFO, DEBUG
				autoWatch: false,
				singleRun: true,
                webpack: {
                    module: {
                        loaders: [
                            { test: /\.js/, exclude: /node_modules/ }
                        ]
                    },
                    watch: true
                },
                webpackServer: {
                    noInfo: true
                },
			},
		    Safari: { 
				browsers: ['Safari'],
				coverageReporter: { subdir: './Safari' },
			    preprocessors: {
			    	'dist/test/**/*.js': 		['webpack', 'coverage'],
			    },
				files: [
				    {hs:['dist/test/**/*.spec.js']}
				]
			},
		    Firefox: {
				browsers: ['Firefox'],
				coverageReporter: { subdir: './Firefox' },
			    preprocessors: {
			    	'dist/test/**/*.js': 		['webpack', 'coverage'],
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
                    filename: 'hsConfig.js',
                    path: path.resolve(__dirname, './dist')
                }
            },
            develop: { // webpack options 
                entry: './dist/hsConfig/src/index.js',
                devtool: "inline-source-map",
                output: {
                    filename: 'hsConfig.js',
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
				files: ['src/**/*.ts', '!src/**/*.spec.ts'],
				tasks: ['make']
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
    grunt.registerTask('test', ['clean:test', 'copy:test'/*, 'build-spec', 'karma'*/]);
    grunt.registerTask('build', ['clean:src', 'build-html', 'build-css', 'build-js']);
	grunt.registerTask('make', ['build', 'test', 'doc', 'stage']);
    grunt.registerTask('default', ['make', 'watch']);	
};
