const path = require('path');

const basePath = '../';
const paths = [
    ['hsApps/', 'hsDoc/'],
    ['hsLibs/mithril/', 'hsLayout/'],
    ['hsLibs/mithril/', 'hsWidgets/'],
    ['hsLibs/mithril/', 'hsGraph/'],
    ['hsLibs/mithril/', 'hsConfig/'],
    ['hsLibs/node/',    'hsNode/']
];

/*global module:false*/
module.exports = function(grunt) {
    const staging = '../../staging/apps/';

	// Project configuration.
	grunt.initConfig({
		copy: {
            stage: { files: 
                // program files
                [{
                    expand: true, 
                    cwd: basePath+'hsApps/hsDoc/_dist/', 
                    src: ['*.js', '*.css*', '*.html', '!mithril.js'], 
                    dest: staging+'hsDoc/'
                },{
                    expand: true, 
                    cwd: basePath+'hsApps/hsDoc/_dist/example', 
                    src: ['*.json'], 
                    dest: staging+'hsDoc/data/' 
                }]
                // doc files
                .concat(paths.map(p => { return {
                    expand: true, 
                    cwd: basePath+p[0]+p[1]+'_dist/docs/', 
                    src: ['*.json'], 
                    dest: staging+'hsDoc/data/' 
                }}))
                // example files in docs
                .concat(paths.map(p => { return { 
                    expand: true, 
                    cwd: basePath+p[0]+p[1]+'_dist/example/', 
                    src: ['*.js', '*.css', '*.html', '*.json'], 
                    dest: staging+'hsDoc/example/' 
                }}))
                // data files
                .concat(paths.map(p => { return {
                    expand: true, 
                    cwd: basePath+p[0]+p[1]+'_dist/data/', 
                    src: ['*.*'], 
                    dest: staging+'hsDoc/data/' 
                }}))
            }
        }, 
        
        sourceCode: { 
            main: { files:
                paths.map(p => { return {
                    expand: true, 
                    cwd: basePath+p[0]+p[1]+'src/', 
                    src: ['**/*.ts'], 
                    dest: staging+'hsDoc/src/'+p[1] 
                }})
            }
        },

		watch: { 
			gruntfile: {
                files: ['Gruntfile.js'],
				tasks: ['stage']
			},
			stage: { 
                files:  paths.map(p => basePath+p[0]+p[1]+'_dist/**/*'),
				tasks: ['stage']
			},
		}
	}); 
	
	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerMultiTask('sourceCode', function() {  
        // returns a 4-character, right aligned. line number
        function lineNum(num) { return ('    '+(num)).substr(-4).replace(/( )/g, '&nbsp;'); }
        function destFile(file, destDir) { return destDir+file.replace('.ts', '.html'); }
        function wrapLine(line, i) {  
            return `<span id=${i+1} class="line">${lineNum(i+1)}</span>${line}<br>`;
        }
        function comment(content) { return `<comment>${content}</comment>`; }
        function module(content) { return `<module>${content}</module>`; }
        function processFile(srcDir, file, destDir) {
            let content = grunt.file.read(srcDir+file)
                .replace(/( )/g, '&nbsp;')              // preserve whitespaces
                .split('\n')                            // array of lines
                .map(wrapLine)                          // wrap each line into some formatting
                .join('\n')                             // join lines into a complete string
                .replace(/(\/\/.*?)<\/code>/g, comment) // color code some syntax
                .replace(/\/\*[\s\S]*?\*\//g, comment) // color code some syntax
                ;
            grunt.file.write(destFile(file, destDir), `
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
        this.data.files.map(entry => {
            let files = grunt.file.expand({cwd:entry.cwd}, entry.src);
            files.map(file => processFile(entry.cwd, file, entry.dest));
        });
    });

    grunt.registerTask('stage', ['copy:stage', 'sourceCode']);
    grunt.registerTask('default', ['stage', 'watch']);	
};
