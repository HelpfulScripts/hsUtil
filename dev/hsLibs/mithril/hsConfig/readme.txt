node http server
=================

Runs a node server.
All git references are relative to git@palrtc101.pal.us.bosch.com:pj-dm-minitools.git/nodeTools/

To run, execute any of these scripts from the /srv/ directory:

 > node index		           starts the http server.
 > ./startServer.sh            starts the server as a demon
 > ./stopServer.sh             stops the demon
 

Development File structure:    /dev/server/httpserver/
---------------
- package.json                 package description for the project 
- Gruntfile.js                 validation, compilation, distribution logic
- readme.txt                   this file
- src                          all server app files: *.js
   - pacakge.json                 node package configuration, determines entry point for program
   - boschlib.js                  the main entry point for the server app logic
   - server.js                    core server logic
   - router.js                    logic to route requests
   - requesthandler.js            default request handler
   - hsCLientUtil.js              support functions
   - hsServerUtil.hs              support functions
- dest                         symbolic link to the server space to deploy to
- node_modules                 symbolic link to the required grunt modules
- lib                          symbolic link to required 3rd party libraries


Server File structure:         /srv/bin/http/
---------------
- *.json                       see above
- serverlog                    dated archive files with server log information



Frontend Logic
-------------
- none - 

Backend Logic
-------------
- serves up content contained in /srv/
- Apps live in the space /srv/apps/. 
- An <app>'s client logic is expected to be in the folder /srv/apps/<app>/client/
- An <app> can have specialized server-side request handlers. 
  If present, they are expected to be in the folder /srv/apps/<app>/server/
- An <app> can POST data only to the folder /srv/apps/<app>/data


Development Logic
-----------------
- The development space for this web app is located in git:/dev/server/bin/http/
- running the grunt process there validates and compiles the code and copies the run time versions to /srv/bin/http

 