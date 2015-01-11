"use strict";
require("core-js/shim");
require("regenerator/runtime");
var gen = regeneratorRuntime.mark(function callee$0$0() {
  return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return 1;
      case 2:
        context$1$0.next = 4;
        return 2;
      case 4:
        context$1$0.next = 6;
        return 3;
      case 6:
      case "end":
        return context$1$0.stop();
    }
  }, callee$0$0, this);
})();

for (var _iterator = gen[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
  var i = _step.value;
  console.log(i);
}
//# sourceMappingURL=index.js.map