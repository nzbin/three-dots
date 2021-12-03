# Three Dots

[![npm](https://img.shields.io/npm/v/three-dots.svg)](https://www.npmjs.com/package/three-dots)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/nzbin/three-dots)
[![Financial Contributors on Open Collective](https://opencollective.com/three-dots/all/badge.svg?label=financial+contributors)](https://opencollective.com/three-dots) 

Three Dots is a set of CSS loading animations made with just single element. I think the project can not only enhance your CSS skills but also improve your imagination.

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
$dot-width: 10px;
$dot-height: 10px;
$dot-radius: $dot-width/2;

$dot-color: #9880ff;
$dot-bg-color: $dot-color;
$dot-before-color: $dot-color;
$dot-after-color: $dot-color;

$dot-spacing: $dot-width + $dot-width/2;
```

3. Compile Sass files

```bash
$ npm run build
```

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/nzbin/three-dots/graphs/contributors"><img src="https://opencollective.com/three-dots/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/three-dots/contribute)]

#### Individuals

<a href="https://opencollective.com/three-dots"><img src="https://opencollective.com/three-dots/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/three-dots/contribute)]

<a href="https://opencollective.com/three-dots/organization/0/website"><img src="https://opencollective.com/three-dots/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/three-dots/organization/1/website"><img src="https://opencollective.com/three-dots/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/three-dots/organization/2/website"><img src="https://opencollective.com/three-dots/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/three-dots/organization/3/website"><img src="https://opencollective.com/three-dots/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/three-dots/organization/4/website"><img src="https://opencollective.com/three-dots/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/three-dots/organization/5/website"><img src="https://opencollective.com/three-dots/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/three-dots/organization/6/website"><img src="https://opencollective.com/three-dots/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/three-dots/organization/7/website"><img src="https://opencollective.com/three-dots/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/three-dots/organization/8/website"><img src="https://opencollective.com/three-dots/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/three-dots/organization/9/website"><img src="https://opencollective.com/three-dots/organization/9/avatar.svg"></a>

## License

MIT
