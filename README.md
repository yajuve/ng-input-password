
# ng-input-password
Component for ionic 2 show/hide a value of password field

1            |  2          |  3
:-------------------------:|:-------------------------:|:-------------------------:
![](https://github.com/yajuve/ng-input-password/raw/master/screenshot/1.png)  |  ![](https://github.com/yajuve/ng-input-password/raw/master/screenshot/2.png) |  ![](https://github.com/yajuve/ng-input-password/raw/master/screenshot/3.png)


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

Open terminal in the root of your ionic 2 project 
```shell
npm install --save ng-input-password
```

# How to use

### I) Normal use
1- Import the library **NgInputPasswordComponent** in your src/app/app.module.ts
```javascript
...
import { NgInputPasswordComponent } from 'ng-input-password/ng-input-password';
...
```
2- In the same file (src/app/app.module.ts) add **NgInputPasswordComponent** in @NgModule
```javascript
...
@NgModule({
  declarations: [
    NgInputPasswordComponent,
    ...
  ]
...
```
### II) Lazy loading
1- Go in your yourpage.module.ts and add import 
```javascript
...
import { NgInputPasswordComponent } from 'ng-input-password/ng-input-password';
...
```

2- Then add NgInputPasswordComponent in declarations
```javascript
@NgModule({
  declarations: [
    ...
    NgInputPasswordComponent
  ],
  imports: [
    ...
  ],
```


III)- Simply use **ng-input-password** tag in your code
```javascript
...
<ng-input-password></ng-input-password>
...
```
# Attributes 


Attribute     | Description                                     | Type   | Default
------------- | ----------------------------------------------- | ------ | -------------
[(ngModel)]   | Bind data, value of the password input.          | any    | /
placeholder   | The HTML placeholder attribute.                 | string | Password
icon          | The icon of button show/hide password.          | string | eye
color         | the color of icon (if password is **visible**). | string | primary
hideColor     | the color of icon (if password is **hidden**).  | string | dark
label         | The text of label.                              | string | not actived
labelStyle    | Style of lable (floating / fixed).              | string | /

NB: you can find icon list in ionic2 doc

# Example
```javascript
...
<ng-input-password 
    [(ngModel)] = "value" 
    placeholder = "password" 
    icon = "eye"
    color = "danger"
    hideColor = "secondary"
    label = "Password"
    labelStyle = "fixed" >
</ng-input-password>
...

```
NB: It is not necessary to use all attributes, (**value** is a variable in .ts file).
