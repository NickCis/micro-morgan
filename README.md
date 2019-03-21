# micro-morgan

> [Morgan](https://github.com/expressjs/morgan) HTTP request logger middleware for Zeit's [Micro](https://github.com/zeit/micro) framework.

## Install

```
$ npm install --save micro-morgan
```

## Usage

```js
const { send } = require('micro');
const morgan = require('micro-morgan');

module.exports = morgan('tiny')(async (req, res) => {
  send(res, 200, 'Hello from micro')
});
```

Arguments are passed directly to morgan. For more information about formats, please check [morgan docs](https://github.com/expressjs/morgan)

## License

MIT © [Nicolas Cisco](https://nckweb.com.ar)

