/**
 * Progam entry point. Initiates loading the docsets and setting up a router structure
 */

/** */
import { DocSets }  from './DocSets';
import { route }    from './Router';


DocSets.loadList().then(route);

