const path = require('path');

/*global module:false*/
module.exports = function(grunt) {
    const lib = '<%= pkg.name %>';
    const libPath = lib.toLowerCase();
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
			src:    ['_dist'],
            docs:   ['_dist/docs'],
            test:   ['_dist/**/tests'],
            example:['_example', '_dist/example']
		},
		
		// Task configuration.
		copy: {
            build:  { expand:true, cwd:'src/', 
                src:['*.html'], dest:'_dist/'
            },
            example:{ expand:true, cwd: 'src/example', 
                src:['**/*', '!**/*.ts'], dest:'_dist/example' 
            },
            deploy: { files: [
                { expand:true, cwd: '_dist/src', 
                    src:['**/*'], dest:`node_modules/${libPath}/` },
                { expand:true, cwd: './', 
                    src:['./package.json'], dest:`node_modules/${libPath}/`
                }
            ]},
            docs:   { expand:true, cwd: '_dist/docs', 
                src:['**/*'], dest:`node_modules/${libPath}/docs`
            },
		    test: { files: [
                { expand:true, cwd:'_dist/',    
                    src:['*.js', '*.css', '*.html'], dest:'test/'
                },
//                { cwd:'example/', expand:true, src:['*.json'], dest:'test/'}
            ]}
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
            src : {
                outDir:     "_dist/src",
                src: ["src/**/*.ts", "!src/**/*.spec.ts", "!src/example/*.ts"],
                tsconfig:   true,
            },
            example : {
                outDir:     "_example",
                src: ["src/example/*.ts"],
                tsconfig:   true,
            },
            test : {
                outDir:     "_dist/tests",
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
                    json:   `_dist/docs/${libPath}.json`,
                    out:    '_dist/docs',
                    mode:   'modules',
                    name:   `${libPath}`
                },
                src: ['src/**/*.ts']
            }
        },

		jasmine_node: {
			options: { forceExit: true },
			all: {
				options: {
                    projectRoot: '_dist/tests',
					coverage: {
						reportDir: '_dist/docs/tests',
                        relativize: true,
						includeAllSources: true,
						report: ['html']
					},
					jasmine: {
						spec_dir: '',
						spec_files: [
						    '_dist/tests/*.spec.js'
						]
					}
				},
				src: ['_dist/test/**/*.js'] 
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

    grunt.registerTask('doc', ['clean:docs', 'typedoc', 'copy:docs']);
    grunt.registerTask('stage', ['copy:deploy']);
    grunt.registerTask('build-example', ['clean:example', 'copy:example', 'ts:example']);
    grunt.registerTask('build-js', ['tslint:src', 'ts:src']);
    grunt.registerTask('build-spec', ['tslint:spec', 'ts:test']);
    grunt.registerTask('test', ['clean:test', 'copy:test', 'build-spec', 'jasmine_node' ]);
    grunt.registerTask('build', ['clean:src', 'build-js', 'build-example']);
	grunt.registerTask('make', ['build', 'test', 'doc', 'stage']);
    grunt.registerTask('default', ['make', 'watch']);	
};
