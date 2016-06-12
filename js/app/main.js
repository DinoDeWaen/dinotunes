"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require("./app.component");
var router_1 = require('@angular/router');
platform_browser_dynamic_1.bootstrap(app_component_1.default, [
    http_1.HTTP_PROVIDERS, router_1.ROUTER_DIRECTIVES, router_1.ROUTER_PROVIDERS
]);
//# sourceMappingURL=main.js.map