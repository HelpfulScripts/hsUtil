var m = require("mithril");

import { HsSiteOverview } from './view/SiteOverview';


m.route(document.body, '/api', {
    '/api': HsSiteOverview,   // defines `http://localhost/#!/api
});