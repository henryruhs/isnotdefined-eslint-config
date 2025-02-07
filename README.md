ESLint Config
=============

> Yet another JavaScript and TypeScript coding standard.

[![NPM Version](https://img.shields.io/npm/v/@isnotdefined/eslint-config.svg)](https://npmjs.com/package/@isnotdefined/eslint-config)
[![License](https://img.shields.io/npm/l/@isnotdefined/eslint-config.svg)](https://npmjs.com/package/@isnotdefined/eslint-config)


Installation
------------

```
npm install @isnotdefined/eslint-config
```


Usage
-----

Refer the coding standard inside your `eslint.config.cjs` file:

```js
module.exports =
[
	...require('@isnotdefined/eslint-config/angular'),
	...require('@isnotdefined/eslint-config/common'),
	...require('@isnotdefined/eslint-config/cypress'),
	...require('@isnotdefined/eslint-config/jest'),
	...require('@isnotdefined/eslint-config/react')
]
```
