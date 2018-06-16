const path = require('path');
const webpack = require("webpack");
//const webpackConfig = require('./webpack.config');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function hsCamelCase(name) {
    if (name.indexOf('hs') === 0) {
        name = 'hs' + name.slice(2).charAt(0).toUpperCase() + name.slice(3);
    }
    return name;
}

module.exports = (grunt, dir, dependencies, type) => {
    const pkg = grunt.file.readJSON(dir+'/package.json');
    const slash = pkg.name.lastIndexOf('/');
    const lib = hsCamelCase(slash<0? pkg.name : pkg.name.slice(slash+1));
    const libPath = lib.toLowerCase();
    console.log(`${lib}: ${type}`);    

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-typedoc');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-webpack');

    //------ Add Doc Tasks
    grunt.registerTask('doc', ['clean:docs', 'typedoc', 'copy:docs', 'sourceCode']);

    //------ Add Staging Tasks
    grunt.registerTask('stage', [`${(type === 'app')? 'copy:stageApp': 'copy:deployLib'}`]);
    
    //------ Add Test Tasks
    grunt.registerTask('ospec', () => { require('child_process').spawnSync('npm', ['test'], {stdio: 'inherit'}); });
    if (type === 'node') { 
        grunt.loadNpmTasks('grunt-jasmine-node-coverage');
        grunt.registerTask('test', ['clean:test', 'copy:test', 'build-specES5', 'jasmine_node' ]); }
    else { 
        grunt.registerTask('test', ['clean:test', 'copy:test', 'build-spec' /*, 'ospec' */ ]); 
    }
    
    //------ Add Build Tasks
    grunt.registerTask('build-html',    ['copy:build']);
    grunt.registerTask('build-css',     ['less']);
    grunt.registerTask('build-example', ['clean:example', 'copy:example', 'ts:example', 'less:example', 'webpack:exampleDev']);
    grunt.registerTask('build-appDev',  ['copy:example', 'webpack:appDev']);
    grunt.registerTask('build-appPrd',  ['copy:example', 'webpack:appProd']);
    grunt.registerTask('build-js',      ['tslint:src', 'ts:src']);
    grunt.registerTask('build-jsMin',   ['ts:srcMin']);
    grunt.registerTask('build-es5',     ['tslint:src', 'ts:srcES5']);
    grunt.registerTask('build-spec',    ['tslint:spec', 'ts:test']);    
    grunt.registerTask('build-specES5', ['tslint:spec', 'ts:testES5']);    

    tasks = assembleBuildTasks(type);
    grunt.registerTask('build', tasks[0]);
    grunt.registerTask('buildMin', tasks[1]);
   
    //------ Add other MultiTasks
    grunt.registerTask('make',    ['build', 'test', 'doc', 'stage']);
    grunt.registerTask('once',    ['make']);	
    grunt.registerTask('default', ['make', 'watch']);	
    grunt.registerTask('product', ['buildMin', 'doc', 'stage']);	

    grunt.registerMultiTask('sourceCode', translateSources);  

    //------ Add general help 
    grunt.registerTask('h', 'help on grunt options', printHelp); 	

    //------ Add post to gh-pages 
    grunt.registerTask('ghpages', 'Github post to gh-pages', publish_gh); 	
  
    //------ Add Task Configurations
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
            test:   ['_dist/tests'],
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
                { expand:true, cwd: '_dist/', 
                    src:['*', 'example/**/*'], dest:`node_modules/${libPath}/docs` }, 
                { expand:true, cwd: './', 
                    src:['./package.json'], dest:`node_modules/${libPath}/` }
            ]},
            docs:   { files: [
                { expand:true, cwd: '_dist/docs', 
                    src:['**/*.json'], dest:`node_modules/${libPath}/docs`},
                { expand:true, cwd: '_dist/docs', 
                    src:['**/*.json'], dest:`docs/data`}, 
                { expand:true, cwd: './', 
                    src:['*.md'], dest:`node_modules/${libPath}`}
            ]},
		    test: { files: [
                { expand:true, cwd:'_dist/',    
                    src:['*.js', '*.css', '*.html'], dest:'_dist/test/'
                },
                { cwd:'example/', expand:true, src:['*.json'], dest:'_dist/test/'}
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
                tsconfig:   __dirname+'/tsconfigGrunt.json'
            },
            srcES5 : {
                outDir:     "_dist/src",
                src: ["src/**/*.ts", "!src/**/*.spec.ts", "!src/example/*.ts"],
                tsconfig:   __dirname+'/tsconfigGruntES5.json'
            },
            srcMin : {
                outDir:     "_dist/src",
                src: ["src/**/*.ts", "!src/**/*.spec.ts", "!src/example/*.ts"],
                tsconfig:   __dirname+'/tsconfigProduct.json'
            },
            example : {
                outDir:     "_example",
                src: ["src/example/*.ts"],
                tsconfig:   __dirname+'/tsconfigGrunt.json'
            },
            test : {
                outDir:     "_dist/tests",
                src: ["src/**/*.spec.ts"],
                tsconfig:   __dirname+'/tsconfigGruntES5.json'
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
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            },
            appProd: { 
                entry: './_dist/src/index.js',
                output: {
                    filename: `${lib}.js`,
                    path: path.resolve(dir, './_dist')
                },
                plugins: [
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            ecma: 6,
                            mangle:false
                        }
                    })
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
            test: {
                entry: './_dist/src/index.js',
                output: {
                    filename: `${lib}.js`,
                    path: path.resolve(dir, './_dist')
                }
            },

            exampleProd: { 
                entry: './_example/example/start.js',
                output: {
                    filename: `${lib}.js`,
                    path: path.resolve(dir, '_dist/example')
                }
            },
            exampleDev: { 
                entry: './_example/example/start.js',
                devtool: "inline-source-map",
                output: {
                    filename: `${lib}.js`,
                    path: path.resolve(dir, '_dist/example')
                }
            }
        },
        sourceCode: { 
            main: {  // translate all *.ts files in src *.htmlfilesin doc
                expand: true, 
                cwd: 'src/', 
                src: ['**/*.ts'], 
                dest: 'docs/src/',
                rename: (dest, src) => dest + src.slice(src.lastIndexOf('/')+1).replace('.ts','.html')
            }
        },

        watch: {
            dependencies: {
                files: dependencies.map(d => `./node_modules/${d.toLowerCase()}/index.js`),
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

    function assembleBuildTasks(type) {
        let buildTasks = ['clean:src', 'build-html', 'build-css'];
        let buildProduct;
        switch (type) {
            case 'node': buildProduct = buildTasks = buildTasks.concat(['build-es5', 'copy:example']); 
                        break;
            case 'util': buildTasks = buildTasks.concat(['build-js']); 
                        buildProduct = buildTasks.concat(['build-jsMin']);
                        break;
            case 'app':  buildProduct = buildTasks.concat(['build-jsMin', 'build-appPrd']);
                        buildTasks   = buildTasks.concat(['build-js', 'build-appDev']); 
                        break;
            case 'lib': 
            default:     buildProduct = buildTasks.concat(['build-jsMin', 'build-example']);
                        buildTasks   = buildTasks.concat(['build-js', 'build-example']); 
                        break;
        }
        return [buildTasks, buildProduct];
    }

    function printHelp() {
        grunt.log.writeln(`  grunt: \t make, then watch`);
        grunt.log.writeln(`  grunt once: \t make only, don't watch`);
        grunt.log.writeln(`  grunt make: \t build, test, doc, and stage`);
        grunt.log.writeln(`  grunt product: make optimized, don't watch; relevant for apps only`);
    }

    function translateSources() {  
        // returns a 4-character, right aligned. line number
        function lineNum(num) { return ('    '+(num)).substr(-4).replace(/( )/g, '&nbsp;'); }
//        function destFile(file, destDir) { return destDir+file.replace('.ts', '.html'); }
        function wrapLine(line, i) {  
            return `<span id=${i+1} class="line">${lineNum(i+1)}</span>${line}<br>`;
        }
        function comment(content) { return `<comment>${content}</comment>`; }
        function module(content) { return `<module>${content}</module>`; }
        function processFile(srcFile, destDir) {
            let i = srcFile.lastIndexOf('/');
            let file = (i>=0)? srcFile.slice(i+1) : srcFile;
            let content = grunt.file.read(srcFile)
                .replace(/( )/g, '&nbsp;')              // preserve whitespaces
                .split('\n')                            // array of lines
                .map(wrapLine)                          // wrap each line into some formatting
                .join('\n')                             // join lines into a complete string
                .replace(/(\/\/.*?)<\/code>/g, comment) // color code some syntax
                .replace(/\/\*[\s\S]*?\*\//g, comment) // color code some syntax
                ;
            grunt.file.write(destDir, `
                ${intro}
                <h1>${file}</h1>
                <div class='listing'><code>${content}</code></div>
                ${extro}
            `);
        }

        const style = `
            body { overflow:hidden;}
            h1 { font-family: Arial, sans-serif; font-size: 24px; color: #44a; }
            p { margin:0; padding-top:5px; }
            br  { margin:0; padding:0; }
            .line { margin: 0 5px 0 0; padding-right: 5px; color:#999; background-color:#eef;  }
            comment { color: #080;} module { color: #804;}
            .listing { margin: 10px; border: 1px solid #ccc; 
                    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace;
                    font-size: 14px; line-height: 1.2em; 
                    overflow:scroll;
                    height:90%;
            }
            code { padding: 5px 0;}
        `;
        const intro = `<html><style>${style.trim()}</style></html><body>`;
        const extro = `</body>`;
        let files = this.files;
        files.map(file => processFile(file.src, file.dest));
        writeIndexJson();
        grunt.log.writeln(`converted ${files.length} files`);    
    }

    function writeIndexJson() {
        grunt.file.write('docs/data/index.json', `{"docs": ["${lib}.json"], "title": "HS Libraries"}`);
    }

    function publish_gh() {
        grunt.util.spawn({cmd: './ghpages-push.sh'}, (error, result, code) => console.log(result));
    }
};
