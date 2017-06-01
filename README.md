A powerful [MangoDB](https://github.com/dcramer/mangodb) client for Node.js

Most users just want to get started quickly without getting weighed down by features. The mangodb-client brings a whole new level of simplicity. Happy sharting!

## Usage

```JavaScript
// Node auto-discovery. Or use any config format of your on invention!
const db = require('mangodb-client')();

// Write something (guaranteed consistency)
db.put('key', 'value').then(() => console.log('cool'));

// Read something (predictive result, which will self-correct
// if the server sends a more accurate response).
db.get('key').then(({value}) => console.log(`Got ${value}`));
```

