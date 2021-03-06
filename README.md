### mocha-tnv
- run your tests on multiple processes
- run your tests with query magic
- basic set of util functions


### Config
Override defaults with --config=path-to-json
```
{
  processes: 8  // run tests in parallel with 8 processes
}
```


### Utils

Define your own utils.js or use existing set (or override path in your config json)
```
  export.connect = ...
  export.request = ...
```

In test file:
```
  describe('test', function(tnv) {
    // use your own utils fns
    tnv.connect()
    // use existing utils fns
    tnv.clearCache()
  });
```


### Usage
````
node_modules/mocha-tnv/bin/tnv
node_modules/mocha-tnv/bin/tnv --config=test/tnv.json
node_modules/mocha-tnv/bin/tnv --config=test/tnv.json --query=login
node_modules/mocha-tnv/bin/tnv --config=test/tnv.json --query=login --folder=user
node_modules/mocha-tnv/bin/tnv --config=test/tnv.json --folder=user --exclude=card
````
