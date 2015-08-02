;(function(window) {

angular.module('app', [])

// Define directives here
.directive('tab', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<h2>Hello world!</h2> <div role="tabpanel" ng-transclude></div>',
    scope: { },
    link: function(scope, elem, attr) {}
  }
})

})(window);
