import { ControlValueAccessor } from '@angular/forms';
/**
 * Generated class for the NgInputPasswordComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
export declare class NgInputPasswordComponent implements ControlValueAccessor {
    placeholder: string;
    color: string;
    hideColor: string;
    icon: string;
    label: string;
    labelStyle: string;
    private isShow;
    private typeInput;
    constructor();
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
    private hasLabel();
    private isLabelStyle(style);
    /**
     *
     */
    showHidePass(): void;
    /**
     *
     */
    toggleColor(): string;
    value: any;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
