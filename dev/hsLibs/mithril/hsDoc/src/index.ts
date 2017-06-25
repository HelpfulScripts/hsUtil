var m = require("mithril");

import { HsSite } from './view/Site';
import { Modules } from './Modules';


Modules.loadList()
.then(() => {
    m.route(document.body, '/api/', {
        '/api/':            HsSite,   // defines `http://localhost/#!/api/
        '/api/:lib/':       HsSite,   // defines `http://localhost/#!/api/:hsLib
        '/api/:lib/:field': HsSite    // defines `http://localhost/#!/api/:hsLib/:log
    });
});

