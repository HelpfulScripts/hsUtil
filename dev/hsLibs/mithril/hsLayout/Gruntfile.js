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
                    src:['**/*'], dest:'node_modules/<%= pkg.name %>/' },
                { expand:true, cwd: './', 
                    src:['./package.json'], dest:'node_modules/<%= pkg.name %>/'
                }
            ]},
            docs:   { expand:true, cwd: '_dist/docs', 
                src:['**/*'], dest:'node_modules/<%= pkg.name %>/docs' 
            },
		    test: { files: [
                { expand:true, cwd:'_dist/',    
                    src:['*.js', '*.css', '*.html'], dest:'test/'
                },
//                { cwd:'example/', expand:true, src:['*.json'], dest:'test/'}
            ]}
		},
		
        less: {
            options: {
                sourceMap: true
            },
            css: {
                files: {
                    '_dist/src/<%= pkg.name %>.css': 'src/css/*.less'
                }
            },
            example: {
                files: {
                    '_dist/example/<%= pkg.name %>.css': 'src/example/<%= pkg.name %>.less'
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
                    json:   '_dist/docs/<%= pkg.name %>.json',
                    out:    '_dist/docs',
                    mode:   'modules',
                    name:   '<%= pkg.name %>'
                },
                src: ['src/**/*.ts']
            }
        },

        webpack: {
            prod: { // webpack options 
                entry: './_example/example/start.js',
                output: {
                    filename: '<%= pkg.name %>.js',
                    path: path.resolve(__dirname, '_dist/example')
                }
            },
            develop: { // webpack options 
                entry: './_example/example/start.js',
                devtool: "inline-source-map",
                output: {
                    filename: '<%= pkg.name %>.js',
                    path: path.resolve(__dirname, '_dist/example')
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
    grunt.loadNpmTasks('grunt-typedoc');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('ospec', () => {
        require('child_process').spawnSync('npm', ['test'], {stdio: 'inherit'}); 
    });
    grunt.registerTask('doc', ['clean:docs', 'typedoc', 'copy:docs']);
    grunt.registerTask('stage', ['copy:deploy']);
    grunt.registerTask('build-html', ['copy:build']);
    grunt.registerTask('build-css', ['less']);
    grunt.registerTask('build-example', ['clean:example', 'copy:example', 'ts:example', 'webpack:develop']);
    grunt.registerTask('build-js', ['tslint:src', 'ts:src']);
    grunt.registerTask('build-spec', ['tslint:spec', 'ts:test']);
    grunt.registerTask('test', ['clean:test', 'copy:test', 'build-spec', 'ospec'/*'karma'*/ ]);
    grunt.registerTask('build', ['clean:src', 'build-html', 'build-css', 'build-js', 'build-example']);
	grunt.registerTask('make', ['build', 'test', 'doc', 'stage']);
    grunt.registerTask('default', ['make', 'watch']);	
};
