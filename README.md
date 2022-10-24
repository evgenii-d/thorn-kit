# Thorn kit

Pure CSS UI kit for quick prototyping.
<br>
<a href="https://evgenii-d.github.io/thorn-kit/" target="_blank">Examples</a>

## Usage
- Add [thorn-kit.css](https://github.com/evgenii-d/thorn-kit/blob/main/css/thorn-kit.css) to your page `<link rel=stylesheet href=thorn-kit.css>`
- Add `class=thorn-kit` to supported HTML Elements
- Сustomize colors through CSS custom properties:
   - --thorn-base-color
   - --thorn-text-color
   - --thorn-ui-back-color
   - --thorn-ui-text-color
   - --thorn-scrollbar-track
   - --thorn-scrollbar-thumb


## Supported HTML Elements
### \<input\>
|Type|Example|
|---|---|
|type=checkbox|`<label><input class=thorn-kit type=checkbox> checkbox</label>`|
|type=radio|`<label><input class=thorn-kit type=radio>radio button</label>`|
|type=range|`<input class=thorn-kit type=range>`|
|type=text|`<input class=thorn-kit type=text value="User input">`|
|type=button|`<input class=thorn-kit type=button value="Button">`|
<br>

### \<button\>
|Example|
|---|
|`<button class=thorn-kit >Button</button>`|
<br>

### \<fieldset\>
|Example|
|---|
|`<fieldset class=thorn-kit ><legend>Legend</legend></fieldset>`|

To show loading animation add `data-loading=true` to \<fieldset\>
```
<fieldset class=thorn-kit data-loading=true>
     <legend>Field Set</legend>
</fieldset>
```
<br>

### \<table\>
|Example|
|---|
|`<table class=thorn-kit >...</table>`|

To create a striped table add `class=stripe` to \<table\>
```
<table class="thorn-kit stripe" >...</table>
```
To hover table rows add `class=hover` to \<table\>
```
<table class="thorn-kit hover" >...</table>
```
<br>

Or use both
```
<table class="thorn-kit stripe hover" >...</table>
```
<br>

### Scrollbar
To show custom scrollbar add `class=thorn-scrollbar`
```
<div class=thorn-scrollbar >...<\div>
```
