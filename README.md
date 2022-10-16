# Thorn kit

Pure CSS UI kit for quick prototyping.
<br>
<a href="https://evgenii-d.github.io/thorn-kit/" target="_blank">Examples</a>

## Usage
Just add [thorn-kit.css](https://github.com/evgenii-d/thorn-kit/blob/main/css/thorn-kit.css) to your page and you are good to go
<br>
`<link rel=stylesheet href=thorn-kit.css>`
<br>

You can customize colors through CSS custom properties:
- --thorn-base-color
- --thorn-text-color
- --thorn-ui-back-color
- --thorn-ui-text-color
- --thorn-scrollbar-track
- --thorn-scrollbar-thumb


## Supported HTML Elements
### \<input\>
|Type|Syntax|Example|
|---|---|---|
|type=checkbox|is=thorn-checkbox|`<label><input is=thorn-checkbox type=checkbox> checkbox</label>`|
|type=radio|is=thorn-radio|`<label><input is=thorn-radio type=radio>radio button</label>`|
|type=range|is=thorn-range|`<input is=thorn-range type=range>`|
|type=text|is=thorn-text|`<input is=thorn-text type=text value="User input">`|
|type=button|is=thorn-button|`<input is=thorn-button type=button value="Button">`|
<br>

### \<button\>
|Syntax|Example|
|---|---|
|is=thorn-button|`<button is=thorn-button>Button</button>`|
<br>

### \<fieldset\>
|Syntax|Example|
|---|---|
|is=thorn-fieldset|`<fieldset is=thorn-fieldset><legend>Legend</legend></fieldset>`|

To show loading animation add `data-loading=true` to \<fieldset\>
```
<fieldset is=thorn-fieldset data-loading=true>
     <legend>Field Set</legend>
</fieldset>
```
<br>

### \<table\>
|Syntax|Example|
|---|---|
|is=thorn-table|`<table is=thorn-table>...</table>`|

To create a striped table add `class=stripe` to \<table\>
```
<table is=thorn-table class=stripe>...</table>
```
To hover table rows add `class=hover` to \<table\>
```
<table is=thorn-table class=hover>...</table>
```
<br>

Or use both
```
<table is=thorn-table class="stripe hover">...</table>
```
<br>

### Scrollbar
To show custom scrollbar add `class="thorn-scrollbar"`
```
<div class="thorn-scrollbar">...<\div>
```
