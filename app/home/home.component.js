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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var index_1 = require("../_services/index");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, renderer) {
        this.userService = userService;
        this.renderer = renderer;
        this.admins = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (_id) {
        var _this = this;
        this.userService.delete(_id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        if (this.currentUser.nombres == "root" && this.currentUser.apellidos == "root") {
            this.userService.getAll().subscribe(function (admins) { _this.admins = admins; });
            this.renderer.setAttribute(this.Boton.nativeElement, "style", "display:compact");
            this.renderer.setAttribute(this.Div.nativeElement, "style", "display:compact");
        }
        else {
        }
    };
    __decorate([
        core_1.ViewChild("LinkRegAdmin"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "Boton", void 0);
    __decorate([
        core_1.ViewChild("gestionarAdmins"),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "Div", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home.component.html',
        }),
        __metadata("design:paramtypes", [index_1.UserService, core_2.Renderer2])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map