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
/**
 * Created by blueyes on 2016/9/29.
 */
var core_1 = require('@angular/core');
var TestComponent = (function () {
    function TestComponent() {
        this.items = ['a', 'b', 'c'];
    }
    __decorate([
        core_1.ContentChild(core_1.TemplateRef), 
        __metadata('design:type', Object)
    ], TestComponent.prototype, "itemTemplate", void 0);
    TestComponent = __decorate([
        core_1.Component({
            selector: 'test',
            template: "\n  <ul>\n      <li *ngFor=\"let item of items\">\n        <template [ngOutletContext]=\"{item:item}\" [ngTemplateOutlet]=\"itemTemplate\">\n        </template>\n      </li>\n  </ul>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map