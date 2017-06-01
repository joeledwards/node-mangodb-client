A power Mangodb client for Node.js

## Usage

```JavaScript
// Node auto-discovery. Or use any config format of your on invention!
db = require('mangodb-client')();

// Write something (guaranteed consistency)
db.put('key', 'value').then(() => console.log('cool'));

// Read something (predictive result, which will self-correct
// if the server sends a more accurate response).
db.get('key').then(({value}) => console.log(`Got ${value}`));
```

