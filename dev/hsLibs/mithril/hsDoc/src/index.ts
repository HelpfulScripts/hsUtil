/**
 * Progam entry point. Initiates loading the docsets and setting up a router structure
 */

/** */
import { Modules }  from './Modules';
import { route }    from './Router';


Modules.loadList().then(route);

