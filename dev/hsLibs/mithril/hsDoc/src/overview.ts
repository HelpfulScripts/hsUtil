/**
# hsDoc
___
hsDoc.js is a code documentation viewer for [Typescript](https://www.typescriptlang.org) projects.
It renders JSON documentation files as created by [typedoc](http://typedoc.org).

## Creating the documentation docset
Follow the instruction for typedoc in commenting the code. 

In addition to the documented source files,
`hsDoc` recognizes a special **`overview.ts`** file that will be displayed as a project overview. 
For this to work, `typedoc` requirtes the file to have two sepoarate comment entries.
If the second comment is missing, `typedoc` will not generate a comment in the docset.

Links to items across the docsets can be placed via a link directive: 
- "{@link *docset*:*module*.*item* linked text}", 
where
 - *docset* is the name of the docset
 - *module* is name of the module to link to
 - *item* is the name of the item within the module. 
 - linked text is displayed with a link to path within module
For example, the link to <br> 
 {@link hsDoc:MainComment.returns the `returns` function} is
'{@link hsDoc:MainComment.returns the `returns` function}'

## Configuring typedoc
As an example, we use grunt-typedoc with the following configuration:

### tsconfig.json:
A `tsconfig.json` file seems to be required by typedoc. The file can be empty

### Gruntfile:
<code>module.exports = function(grunt) {
    ...
    typedoc: {
        code: {
            options: {
                tsconfig: 'typedoc.json',
                json:   './docs/hsDocs.json',
                out:    './docs',
                mode:   'modules',
                name:   'hsDoc'
            }
            src: ['src/*.ts', '!src/*.spec.ts']
        }
    },

   ...
   grunt.loadNpmTasks('grunt-typedoc');
   ...
   grunt.registerTask('doc', ['typedoc']);
}
</code>

## Setting up the web app
1. Create an **`index.html`** in the directory to serve from (web-app directory): 
<code>
<html>
<head><link href="styles.css" rel="stylesheet" /></head>
<body class='hs-layout-fill'><script src="./hsDocs.js"></script></body>
</html>
</code>

2. Copy **`hsDocs.js`** and **`styles.css`** into the same directory

3. Create a subdirectory **`data`** and copy the docsets into it, including **`hsDocs.json`**

4. Create a list of docsets to render in a new file **`index.json`** inside **`data`**:
<code>
{
    "docs": [
        "hsDocs.json",
        ...
    ],
    "title": "HS Libraries"   // will be displayed at the top left corner
}</code>

5. Point a browser to the web-app directory

## Dependencies
### For creating the docsets:
- [typedoc](http://typedoc.org)

### For rendering the docsets:
- [Mithril](https://mithril.js.org)
- [showdown](https://github.com/showdownjs/showdown)
- [hsLayout]
- [webpack]

## Structural Code Overview
The main entry point for the web-app is index.ts, which initiates loading the docsets 
and sets up a mithril {@link hsDoc:Router router} 

*/

/** */