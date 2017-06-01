A power Mangodb client for Node.js

## Usage

```JavaScript
db = require('mangodb-client')();

// Write something
db.put('key', 'value').then(() => console.log('cool'));

// Read something
db.get('key').then(({value}) => console.log(`Got ${value}`));
```

