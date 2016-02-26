# PostCSS Inline Block [![Build Status][ci-img]][ci]

[PostCSS] plugin for IE6's inline-block bug.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/hszy00232/postcss-inline-block.svg
[ci]:      https://travis-ci.org/hszy00232/postcss-inline-block

```css
.foo {
    display : inline-block;
}
```

```css
.foo {
    display : inline-block;
    *display : inline;
    *zoom : 1;
}
```

## Usage

```js
postcss([ require('postcss-inline-block') ])
```

See [PostCSS] docs for examples for your environment.
