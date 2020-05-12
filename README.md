# Coverage

## How to test:
1. Clone this repo: `git clone https://github.com/Richardowsky/coverage.git`
2. `npm i`
3. `npm test`

## How to use:
```javascript
const {antennaCoverage} = require('./src/index');
    
    let array = [5, 240, 13, 0, 50, 25, 60, 5, 155, 70, 165, 70]
   

let res = antennaCoverage(array);
console.log(res)
```