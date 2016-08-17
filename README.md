# defaultconfig [![Build Status](https://travis-ci.org/benjick/defaultconfig.js.svg?branch=master)](https://travis-ci.org/benjick/defaultconfig.js)

Create a configuration factory

## Usage

`npm install --save defaultconfig`

```js
import defaultconfig from 'defaultconfig';

// create a function factory with a default config
const configFactory = defaultconfig({
  user: {
    firstName: 'max',
    lastName: 'malm',
  }
});

// supply the changes you wish to merge into your default config
const config = configFactory({
  user: {
    lastName: 'smith',
  }
})
```

config is now

```js
{
  user: {
    firstName: 'max',
    lastName: 'smith',
  }
}
```
