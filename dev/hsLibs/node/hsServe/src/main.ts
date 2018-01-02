const os      	= require("os");
import { log }      from "hsnode";
import { ms }       from "hsutil";
import { server }   from "./server";

log.prefix('main');
let   gServer:any;

const LOG_NAME_CHECK = 1; // hours between logfile name checks
						  // A new log file will be set if the logfile name has changed

function setLogFile() {
	log.logFile(__dirname+'/serverlogs/' + os.hostname() + '-%YYYY-%MM-%DD.txt'); // local to the script source
	setTimeout(setLogFile, ms.fromHours(LOG_NAME_CHECK));
}

export function start() {
	if (!gServer) {
		const PORT = process.argv[3]? parseInt(process.argv[3]) : 8888;
        switch (process.argv[2]?process.argv[2].toUpperCase():"INFO") {
            case 'DEBUG': log.level(log.DEBUG); break;
            case 'INFO':  log.level(log.INFO); break;
            case 'WARN':  log.level(log.WARN); break;
            case 'ERROR': log.level(log.ERROR); break;
            default:      log.level(log.INFO); 
        }
		setLogFile();
		log.info('starting server on port ' + PORT);

		gServer = server.start(PORT);
	}
}

export function stop() {
	server.stop(gServer);
	gServer = undefined;
	log.info('stopped server');
}

start();


