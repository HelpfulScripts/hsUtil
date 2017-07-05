/**
 * Router implementation, allows dynamic routing with the pattern
 * '/api/:lib/:field', where `lib` designates the library and `field` 
 * the id of the element to show.
 */

/** */
import { m }        from '../../mithril';
import { HsSite }   from './view/Site';

/**
 * route function, attaches the single-page app to `document.body`and
 * routes requests to HsSite
 */
export function route() {
    m.route(document.body, '/api/', {
        '/api/':            HsSite,   // defines `http://localhost/#!/api/
        '/api/:lib/':       HsSite,   // defines `http://localhost/#!/api/:hsLib
        '/api/:lib/:field': HsSite    // defines `http://localhost/#!/api/:hsLib/:id
    });
}

