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
var forms_1 = require("@angular/forms");
var noop = function () {
};
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return InputPasswordComponent; }),
    multi: true
};
/*
  InputPassword component.
*/
var InputPasswordComponent = (function () {
    function InputPasswordComponent() {
        this.placeholder = 'Password';
        this.color = 'primary';
        this.hideColor = 'dark';
        this.icon = 'eye';
        this.isShow = false;
        this.typeInput = 'password';
        //The internal data model
        this.innerValue = '';
        //Placeholders for the callbacks which are later providesd
        //by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        console.log('Hello InputPassword Component');
    }
    InputPasswordComponent_1 = InputPasswordComponent;
    /**
     *
     */
    InputPasswordComponent.prototype.showHidePass = function () {
        this.isShow = !this.isShow;
        if (this.typeInput == 'password') {
            this.typeInput = 'text';
        }
        else {
            this.typeInput = 'password';
        }
    }; // showHidePass
    /**
     *
     */
    InputPasswordComponent.prototype.toggleColor = function () {
        if (this.isShow)
            return this.color;
        else
            return this.hideColor;
    }; // toggleColor
    Object.defineProperty(InputPasswordComponent.prototype, "value", {
        //get accessor
        get: function () {
            return this.innerValue;
        },
        //set accessor including call the onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    //Set touched on blur
    InputPasswordComponent.prototype.onBlur = function () {
        this.onTouchedCallback();
    };
    //From ControlValueAccessor interface
    InputPasswordComponent.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    //From ControlValueAccessor interface
    InputPasswordComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    InputPasswordComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    __decorate([
        core_1.Input('placeholder'),
        __metadata("design:type", Object)
    ], InputPasswordComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input('color'),
        __metadata("design:type", String)
    ], InputPasswordComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input('hideColor'),
        __metadata("design:type", String)
    ], InputPasswordComponent.prototype, "hideColor", void 0);
    __decorate([
        core_1.Input('icon'),
        __metadata("design:type", String)
    ], InputPasswordComponent.prototype, "icon", void 0);
    InputPasswordComponent = InputPasswordComponent_1 = __decorate([
        core_1.Component({
            selector: 'ng-input-password',
            template: "\n    <ion-item>\n\n    <ion-input [type]=\"typeInput\" [(ngModel)]=\"value\" [placeholder]=\"placeholder\"  ></ion-input>\n    <button ion-button clear [color]=\"toggleColor()\" type=\"button\" item-right (click)=\"showHidePass()\"> <ion-icon [name]=\"icon\"> </ion-icon> </button>\n    </ion-item>\n    ",
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return InputPasswordComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], InputPasswordComponent);
    return InputPasswordComponent;
    var InputPasswordComponent_1;
}());
exports.InputPasswordComponent = InputPasswordComponent;
//# sourceMappingURL=input-password.js.map