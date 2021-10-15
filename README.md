# deactive

The simplest Reactive Observable for all

# Usage

```javascript
import { deactive } from 'deactive';
// Or
const { deactive } = require('deactive');

const observer = (key, newVal, oldVal) => {
  console.log(`Key ${key} changed to ${newVal}! Old value is ${oldVal}`);
  return newVal;
};

const { ref, $ } = deactive(observer);

ref('aaa', 123);
ref('bbb', 456);

console.log($.aaa, $.bbb);

$.aaa = 789;
$.bbb = 1234;

console.log($.aaa, $.bbb);

```

# License

MIT
