
# ng-input-password
Component for ionic 2 to use input type password with button show/hide a value of password

* [Supported platforms](#supported-platforms)
* [Instalation](#instalation)
* [Attributes](#attributes)
* [Example](#example)

# Supported platforms
* Android 
* Browser
* iOS
* Windows


# Instalation

Open terminal in the root of your project and type
```shell
npm install --save ng-input-password
```

# How to use

Import your library **ng-input-password** in your src/app/app.module.ts
```javascript
...
import { InputPasswordComponent } from 'ng-input-password/ng-input-password';
...
```
in the same file add the component **InputPasswordComponent** in @NgModule
```javascript
...
@NgModule({
  declarations: [
    InputPasswordComponent,
    ...
  ]
...
```


Use **ng-input-password** tag it in your code
```javascript
...
<ng-input-password [(ngModel)]="value" ></ng-input-password>
...
```
# Attributes 
Attribute  | Description | Type | Default values
------------- | ------------- | -------------- | --------------
placeholder  | Text to show inside input  | Text | Password
icon  | The icon of button hide/show password | Text | eye
color  | the color of icon (if password is **visible**) | Text | primary
hideColor  | the color of icon (if password is **hidden**) | Text | dark

NB : you can find icon list in ionic2 doc

# Example
```javascript
...
<ng-input-password 
    [(ngModel)] = "value" 
    placeholder = "password" 
    icon = "eye"
    color = "danger"
    hideColor = "secondary" >
</ng-input-password>
...