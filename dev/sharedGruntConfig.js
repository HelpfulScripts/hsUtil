const path = require('path');
const webpack = require("webpack");

module.exports = (grunt, dir, dependencies, type) => {
    const pkg = grunt.file.readJSON(dir+'/package.json');
    const lib = pkg.name;
    const libPath = lib.toLowerCase();
    console.log(dir);    

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
    if (type === 'app') { grunt.registerTask('stage', ['copy:stageApp']); }
                   else { grunt.registerTask('stage', ['copy:deployLib']); } 
    grunt.registerTask('build-html', ['copy:build']);
    grunt.registerTask('build-css', ['less']);
    grunt.registerTask('build-example', ['clean:example', 'copy:example', 'ts:example', 'webpack:exDev']);
    grunt.registerTask('build-app',     ['copy:example', 'webpack:appDev']);
    grunt.registerTask('build-js', ['tslint:src', 'ts:src']);
    grunt.registerTask('build-spec', ['tslint:spec', 'ts:test']);
    if (type === 'node') { 
        grunt.loadNpmTasks('grunt-jasmine-node-coverage');
        grunt.registerTask('test', ['clean:test', 'copy:test', 'build-spec', 'jasmine_node' ]); }
    else { 
        grunt.registerTask('test', ['clean:test', 'copy:test', 'build-spec', 'ospec' ]); 
    }
    
    if (type === 'lib') { grunt.registerTask('build', ['clean:src', 'build-html', 'build-css', 'build-js', 'build-example']); }
    if (type === 'app') { grunt.registerTask('build', ['clean:src', 'build-html', 'build-css', 'build-js', 'build-app']); }
    if (type === 'util') { grunt.registerTask('build', ['clean:src', 'build-html', 'build-css', 'build-js']); }
    if (type === 'node') { grunt.registerTask('build', ['clean:src', 'build-html', 'build-css', 'build-js', 'copy:example']); }
	grunt.registerTask('make', ['build', 'test', 'doc', 'stage']);
    grunt.registerTask('once', ['make']);	
    grunt.registerTask('default', ['make', 'watch']);	
    
    return {
        pkg: grunt.file.readJSON(dir+'/package.json'),
        libPath: grunt.config.process(lib).toLowerCase(),
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
        copy: {
            build:  { expand:true, cwd:'src/', 
                src:['*.html'], dest:'_dist/' 
            },
            example:{ expand:true, cwd: 'src/example', 
                src:['**/*', '!**/*.ts'], dest:'_dist/example' 
            },
            deployLib: { files: [
                { expand:true, cwd: '_dist/src', 
                    src:['**/*'], dest:`node_modules/${libPath}/` },
                { expand:true, cwd: './', 
                    src:['./package.json'], dest:`node_modules/${libPath}/` }
            ]},
            stageApp: { files: [
                { expand:true, cwd: '_dist/src', 
                    src:['**/*.css*'], dest:'_dist' },
                { expand:true, cwd: './', 
                    src:['./package.json'], dest:`node_modules/${libPath}/` }
            ]},
            docs:   { expand:true, cwd: '_dist/docs', 
                src:['**/*'], dest:`node_modules/${libPath}/docs`
            },
		    test: { files: [
//                { expand:true, cwd:'_dist/',    
//                    src:['*.js', '*.css', '*.html'], dest:'test/'
//                },
//                { cwd:'example/', expand:true, src:['*.json'], dest:'test/'}
            ]}
        },
        less: {
            options: {
                sourceMap: true
            },
            css: {
                files: {
                    '_dist/src/<%= pkg.name %>.css': 'src/css/<%= pkg.name %>.less'
                }
            },
            example: {
                files: {
                    '_dist/example/<%= pkg.name %>.css': `src/example/${libPath}.less`
                }
            }
        },
        tslint: {
            options: {
                configuration: __dirname+'/tslint.json',
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
                tsconfig:   __dirname+'/tsconfig.json'
            },
            example : {
                outDir:     "_example",
                src: ["src/example/*.ts"],
                tsconfig:   __dirname+'/tsconfig.json'
            },
            test : {
                outDir:     "_dist/tests",
                src: ["src/**/*.spec.ts"],
                tsconfig:   __dirname+'/tsconfig.json'
            }
        },
        typedoc: {
            code: {
                options: {
                    target: 'es6',
                    module: 'commonjs',
                    moduleResolution: "node",
                    json:   `_dist/docs/${lib}.json`,
                    out:    '_dist/docs',
                    mode:   'modules',
                    name:   `${lib}`
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

        webpack: {
            appProd: { 
                entry: './_dist/src/index.js',
                output: {
                    filename: `${lib}.js`,
                    path: path.resolve(dir, './_dist')
                },
                plugins: [
					new webpack.optimize.UglifyJsPlugin()
                ]
            },
            appDev: {
                entry: './_dist/src/index.js',
                devtool: "inline-source-map",
                output: {
                    filename: `${lib}.js`,
                    path: path.resolve(dir, './_dist')
                }
            },

            exProd: { 
                entry: './_example/example/start.js',
                output: {
                    filename: `${lib}.js`,
                    path: path.resolve(dir, '_dist/example')
                }
            },
            exDev: { 
                entry: './_example/example/start.js',
                devtool: "inline-source-map",
                output: {
                    filename: `${lib}.js`,
                    path: path.resolve(dir, '_dist/example')
                }
            }
        },
        watch: {
            dependencies: {
                files: dependencies.map(d => `./node_modules/${d.toLowerCase()}/*.*`),
				tasks: ['make']
            },
			gruntfile: {
                files: ['Gruntfile.js', __dirname+'/sharedGruntConfig.js'], 
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
    }
};

