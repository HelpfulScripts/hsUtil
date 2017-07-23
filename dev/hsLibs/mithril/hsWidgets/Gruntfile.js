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
			src:   ['dist/js'],
            docs:  ['docs'],
            test:  ['dist/test','docs/tests']
		},
		
		// Task configuration.
		copy: {
            build: { cwd:'src/', expand:true, src:['*.html'], dest:'dist/' },
		    test: { files: [
                { cwd:'dist/',    expand:true, src:['*.js', '*.css', '*.html'], dest:'test/'},
                { cwd:'example/', expand:true, src:['*.json'], dest:'test/'}
            ]}
		},
		
        less: {
            options: {
                sourceMap: true
            },
            css: {
                files: {
                    'dist/hsWidgets.css': 'src/css/*.less'
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
                outDir:     "dist/js",
                src: ["src/**/*.ts", "!src/**/*.spec.ts"],
                tsconfig:   true,
           },
            test : {
                outDir:     "dist/test",
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
                    json:   './docs/hsWidgets.json',
                    out:    './docs',
                    mode:   'modules',
//                    listInvalidSymbolLinks: true,
//                    theme:  'themes/hs',
                    name:   'hsWidgets',
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
				   dir : 'dist/tests/',
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
				tasks: ['build-css', 'stage']
			},
			html: {
				files: ['src/**/*.html'],
				tasks: ['build-html', 'stage']
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

    grunt.registerTask('doc', ['clean:docs', 'typedoc']);
    grunt.registerTask('stage', []);
    grunt.registerTask('build-html', ['copy:build']);
    grunt.registerTask('build-css', ['less']);
    grunt.registerTask('build-js', ['tslint:src', 'ts:src']);
    grunt.registerTask('build-spec', ['tslint:spec', 'ts:test']);
    grunt.registerTask('test', ['clean:test', 'copy:test', 'build-spec', 'karma']);
    grunt.registerTask('build', ['clean:src', 'build-html', 'build-css', 'build-js']);
	grunt.registerTask('make', ['build', /*'test',*/ 'doc', 'stage']);
    grunt.registerTask('default', ['make', 'watch']);	
};
