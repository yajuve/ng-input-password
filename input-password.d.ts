import { ControlValueAccessor } from '@angular/forms';
export declare class InputPasswordComponent implements ControlValueAccessor {
    placeholder: string;
    color: string;
    hideColor: string;
    icon: string;
    private isShow;
    private typeInput;
    constructor();
    private innerValue;
    private onTouchedCallback;
    private onChangeCallback;
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
