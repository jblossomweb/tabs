;(function(window) {

angular.module('app', [])

// tab directive
.directive('tab', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<h2>Hello world!</h2> <div role="tabpanel" ng-transclude></div>',
    require: '^tabset',
    scope: { 
    	heading: '@'
    },
    link: function(scope, elem, attr, tabsetCtrl) {
    	scope.active = false
    	tabsetCtrl.addTab(scope)
    }
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
      self.addTab = function addTab(tab) {
			  self.tabs.push(tab)
			}
    }
  }
})

})(window);
