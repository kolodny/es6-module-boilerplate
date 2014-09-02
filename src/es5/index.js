"use strict";
require('traceur/bin/traceur-runtime');
var gen = $traceurRuntime.initGeneratorFunction(function $__2() {
  return $traceurRuntime.createGeneratorInstance(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          $ctx.state = 2;
          return 1;
        case 2:
          $ctx.maybeThrow();
          $ctx.state = 4;
          break;
        case 4:
          $ctx.state = 6;
          return 2;
        case 6:
          $ctx.maybeThrow();
          $ctx.state = 8;
          break;
        case 8:
          $ctx.state = 10;
          return 3;
        case 10:
          $ctx.maybeThrow();
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, $__2, this);
})();
for (var $__0 = gen[Symbol.iterator](),
    $__1; !($__1 = $__0.next()).done; ) {
  var i = $__1.value;
  {
    console.log(i);
  }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzgiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8yIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzYiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8zIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzUiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEFBQUksRUFBQSxDQUFBLEdBQUUsRUFBSSxDQ0FWLGVBQWMsc0JBQXNCLEFBQUMsQ0RBM0IsY0FBVSxBQUFDO0FFQXJCLE9BQU8sQ0NBUCxlQUFjLHdCQUF3QixBREFkLENFQXhCLFNBQVMsSUFBRyxDQUFHO0FBQ1QsVUFBTyxJQUFHOzs7O0FDRGhCLGVMQ08sRUFBQSxDS0RnQjs7QUNBdkIsYUFBRyxXQUFXLEFBQUMsRUFBQyxDQUFBOzs7OztBREFoQixlTEVPLEVBQUEsQ0tGZ0I7O0FDQXZCLGFBQUcsV0FBVyxBQUFDLEVBQUMsQ0FBQTs7Ozs7QURBaEIsZUxHTyxFQUFBLENLSGdCOztBQ0F2QixhQUFHLFdBQVcsQUFBQyxFQUFDLENBQUE7Ozs7QUNBaEIsZUFBTyxDQUFBLElBQUcsSUFBSSxBQUFDLEVBQUMsQ0FBQTs7QUhDbUIsRUFDL0IsT0ZBNkIsS0FBRyxDQUFDLENBQUM7QUZFdEMsQ0NKdUQsQURJdEQsRUFBQyxDQUFDO0FRSEssSUFBUyxHQUFBLE9BQ0EsQ1JJSCxHQUFFLENRSm1CLE1BQUssU0FBUyxDQUFDLEFBQUMsRUFBQztBQUNuQyxPQUFnQixDQUNwQixFQUFDLENBQUMsTUFBb0IsQ0FBQSxTQUFxQixBQUFDLEVBQUMsQ0FBQyxLQUFLLEdBQUs7SVJFNUQsRUFBQTtBQUFVO0FBQ2xCLFVBQU0sSUFBSSxBQUFDLENBQUMsQ0FBQSxDQUFDLENBQUM7RUFDZjtBUURRO0FBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2VuID0gZnVuY3Rpb24gKigpIHtcblx0eWllbGQgMTtcblx0eWllbGQgMjtcblx0eWllbGQgMztcbn0oKTtcblxuZm9yICh2YXIgaSBvZiBnZW4pIHtcblx0Y29uc29sZS5sb2coaSk7XG59IiwiJHRyYWNldXJSdW50aW1lLmluaXRHZW5lcmF0b3JGdW5jdGlvbigkX19wbGFjZWhvbGRlcl9fMCkiLCJyZXR1cm4gJF9fcGxhY2Vob2xkZXJfXzAoXG4gICAgICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18xLFxuICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMiwgdGhpcyk7IiwiJHRyYWNldXJSdW50aW1lLmNyZWF0ZUdlbmVyYXRvckluc3RhbmNlIiwiZnVuY3Rpb24oJGN0eCkge1xuICAgICAgd2hpbGUgKHRydWUpICRfX3BsYWNlaG9sZGVyX18wXG4gICAgfSIsInJldHVybiAkX19wbGFjZWhvbGRlcl9fMCIsIiRjdHgubWF5YmVUaHJvdygpIiwicmV0dXJuICRjdHguZW5kKCkiLCJcbiAgICAgICAgZm9yICh2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPVxuICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMVtTeW1ib2wuaXRlcmF0b3JdKCksXG4gICAgICAgICAgICAgICAgICRfX3BsYWNlaG9sZGVyX18yO1xuICAgICAgICAgICAgICEoJF9fcGxhY2Vob2xkZXJfXzMgPSAkX19wbGFjZWhvbGRlcl9fNC5uZXh0KCkpLmRvbmU7ICkge1xuICAgICAgICAgICRfX3BsYWNlaG9sZGVyX181O1xuICAgICAgICAgICRfX3BsYWNlaG9sZGVyX182O1xuICAgICAgICB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9