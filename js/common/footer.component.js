/**
 * Created by serrut on 05/06/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FooterComponent = (function () {
    function FooterComponent() {
        this.year = (new Date()).getFullYear();
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-component',
            template: "\n        <footer class=\"footer\">\n          <div class=\"container\">\n            <a class=\"text-muted\" href=\"/\">Dino De Waen, {{ year }}</a>\n            <a class=\"text-muted\" href=\"https://twitter.com/dinodewaen\" target=\"_blank\"><i class=\"fa fa-twitter\"></i> @dinodewaen</a>\n            <a class=\"text-muted\" href=\"https://www.linkedin.com/in/dinodewaen\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i> Linkedin</a>\n          </div>\n        </footer>\n    ",
            styles: ["\n        footer {\n            position: absolute;\n            bottom : 0;\n            width : 100%;\n            height : 60px;\n            background-color: whitesmoke;\n        }\n\n        .container {\n            height : 60px;\n        }\n\n        a {\n            height : 60px;\n            line-height : 60px;\n            margin-right : 5em;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map