;(function(window) {

angular.module('app', [])

// tab directive
.directive('tab', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<h2>Hello world!</h2> <div role="tabpanel" ng-transclude></div>',
    require: '^tabset',
    scope: { },
    link: function(scope, elem, attr, tabsetCtrl) {}
  }
})

// tabset directive
.directive('tabset', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: { },
    templateUrl: 'tabset.html',
    bindToController: true,
    controllerAs: 'tabset',
    controller: function() {
      var self = this
      self.tabs = []
    }
  }
})

})(window);
