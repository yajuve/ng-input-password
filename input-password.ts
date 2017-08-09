import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


const noop = () => {
};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputPasswordComponent),
    multi: true
};

/*
  InputPassword component.
*/
@Component({
    selector: 'ng-input-password',
    template: `
    <ion-item>

    <ion-input [type]="typeInput" [(ngModel)]="value" [placeholder]="placeholder"  ></ion-input>
    <button ion-button clear [color]="toggleColor()" type="button" item-right (click)="showHidePass()"> <ion-icon [name]="icon"> </ion-icon> </button>
    </ion-item>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputPasswordComponent),
            multi: true
        }
    ]
})

export class InputPasswordComponent implements ControlValueAccessor {

    @Input('placeholder') placeholder = 'Password';
    @Input('color') color: string = 'primary';
    @Input('hideColor') hideColor: string = 'dark';
    @Input('icon') icon: string = 'eye';

    private isShow: boolean = false;
    private typeInput: string = 'password'

    constructor() {

        console.log('Hello InputPassword Component');
    }

    //The internal data model
    private innerValue: any = '';

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;


    /**
     * 
     */
    showHidePass() {

        this.isShow = !this.isShow;

        if (this.typeInput == 'password') {
            this.typeInput = 'text';
        } else {
            this.typeInput = 'password';
        }

    }// showHidePass


    /**
     * 
     */
    toggleColor(): string {
        if (this.isShow)
            return this.color;
        else
            return this.hideColor;
    }// toggleColor

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

}