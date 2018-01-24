# mangodb-client

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

A powerful [MangoDB](https://github.com/dcramer/mangodb) client for Node.js

Most users just want to get started quickly without getting weighed down by features. The mangodb-client brings a whole new level of simplicity. Happy sharting!

## Installation

```shell
npm install --save mangodb-client
```

## Usage

```javascript
// Node auto-discovery. Or use any config format of your own invention!
const db = require('mangodb-client')();

// Write something (guaranteed consistency)
db.put('key', 'value', error => {
    if (error) {
      // Not even worried
    } else {
      console.log('cool')
    }
});

// And with Promises
db.put('key', 'value').then(() => console.log('yep'));



// Read something (predictive result, which will self-correct
// if the server sends a more accurate response).
db.get('key', (error, {key, value}) => {
  if (error) {
    // Still not worried
  } else {
    console.log(`Got ${value} at ${key}`)
  }
});

// And with Promises
db.get('key').then(({key, value}) => console.log(`Got ${value} at ${key}`));
```

[travis-url]: https://travis-ci.org/joeledwards/node-mangodb-client
[travis-image]: https://img.shields.io/travis/joeledwards/node-mangodb-client/master.svg
[npm-url]: https://www.npmjs.com/package/mangodb-client
[npm-image]: https://img.shields.io/npm/v/mangodb-client.svg
