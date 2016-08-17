# defaultconfig [![Build Status](https://travis-ci.org/benjick/defaultconfig.js.svg?branch=master)](https://travis-ci.org/benjick/defaultconfig.js)

Create a configuration factory

## Usage

```js
import defaultconfig from '../';

const config = {
  user: {
    firstName: 'max',
    lastName: 'malm',
  }
}

const configFactory = defaultconfig(config);
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
