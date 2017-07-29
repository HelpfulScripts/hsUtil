const path = require('path');

const basePath = '../hsLibs/mithril/';
const paths = [
    'hsDoc/',
    'hsLayout/',
    'hsWidgets/',
    'hsConfig/'
];

/*global module:false*/
module.exports = function(grunt) {
    const staging = '../../staging/apps/';

	// Project configuration.
	grunt.initConfig({ 
		copy: {
            stage: { files: 
                // program files
                paths.map(p => { return {
                    expand: true, 
                    cwd: basePath+p+'dist/', 
                    src: ['*.js', '*.css', '*.css.map', 'index.html', '!mithril.js'], 
                    dest: staging+p
                }})
                // doc files
                .concat(paths.map(p => { return {
                    expand: true, 
                    cwd: basePath+p+'docs/', 
                    src: ['*.json'], 
                    dest: staging+p+'data/' 
                }}))
                // example files
                .concat(paths.map(p => { return {
                    expand: true, 
                    cwd: basePath+p+'dist/example/', 
                    src: ['*.*'], 
                    dest: staging+p+'example/' 
                }}))
                // data files
                .concat(paths.map(p => { return {
                    expand: true, 
                    cwd: basePath+p+'dist/data/', 
                    src: ['*.*'], 
                    dest: staging+p+'data/' 
                }}))
            }
        },
        
        sourceCode: { 
            main: { files:
                paths.map(p => { return {
                    expand: true, 
                    cwd: basePath+p+'src/', 
                    src: ['**/*.ts'], 
                    dest: staging+p+'src/'+p +'src/' 
                }})
            }
        },

		watch: { 
			gruntfile: {
                files: ['Gruntfile.js'],
				tasks: ['stage']
			},
			stage: { 
                files:      paths.map(p => basePath+p+'dist/*.js')
                    .concat(paths.map(p => basePath+p+'dist/*.css'))
                    .concat(paths.map(p => basePath+p+'docs/*.json')),
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
            return `<span id=${i+1} class=".line">${lineNum(i+1)}</span>${line}<br>`;
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
            grunt.file.write(destFile(file, destDir), intro + content + extro);
        }

        const style = `
            p { margin:0; padding-top:5px; 
                font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace;
                font-size: 12px;}
            span { margin-right: 10px; color:#aaa; }
            comment { color: #080;} module { color: #804;}
        `;
        const intro = `<html><style>${style}</style></html><body><code>`;
        const extro = `</code></body>`;
        this.data.files.map(entry => {
            let files = grunt.file.expand({cwd:entry.cwd}, entry.src);
            files.map(file => processFile(entry.cwd, file, entry.dest));
        });
    });

    grunt.registerTask('stage', ['copy:stage', 'sourceCode']);
    grunt.registerTask('default', ['stage', 'watch']);	
};
