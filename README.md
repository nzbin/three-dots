# Three Dots

[![npm](https://img.shields.io/npm/v/three-dots.svg)](https://www.npmjs.com/package/three-dots)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/nzbin/three-dots)

The project is a set of CSS loading animations created with three dots which made by just single element. I think the project can not only enhance your CSS skills but also improve your imagination.

> The LESS files are contributed by other people, it's not the newest.

## Installation

```sh
$ npm install three-dots --save
```

## Usage

1. Include the CSS in your file:

```html
<link href="/path/to/three-dots.css" rel="stylesheet">
```

2. Add just one `div` tag:

```html
<div class="dot-elastic"></div>
```

Here’s the list of three-dots classes you can choose from:

```
dot-elastic
dot-pulse
dot-flashing
dot-collision
dot-revolution
dot-carousel
dot-typing
dot-windmill
dot-bricks
dot-floating
dot-fire
dot-spin
dot-falling
dot-stretching
```

## Customization

1. Checkout this repo and

```bash
$ npm install
```

2. Customize the dots size ( color, spacing, etc. ) in the `_variables.scss` file.

```scss
$dotWidth: 10px;
$dotHeight: 10px;
$dotRadius: $dotWidth/2;

$dotColor: #9880ff;
$dotBgColor: $dotColor;
$dotBeforeColor: $dotColor;
$dotAfterColor: $dotColor;

$dotSpacing: $dotWidth + $dotWidth/2;
```

3. Compile Sass files

```bash
$ npm run build
```

## License

MIT