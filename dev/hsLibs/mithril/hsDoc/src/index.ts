var m = require("mithril");

import { HsSite } from './view/Site';
import { Modules } from './Modules';


Modules.loadList();

m.route(document.body, '/api', {
    '/api': HsSite,   // defines `http://localhost/#!/api
});

