(function(window, angular, undefined) {
  'use strict';

  angular
    .module('<%= moduleNameCamelCase %>.directives', [
      '<%= moduleNameCamelCase %>.controllers'
    ])
    .directive('TestDirective', [
      function() {
        return {
          restrict: 'E',
          controller: 'TestController',
          scope: {},
          template: '<div class="<%= moduleName %>">{{message}}</div>'
        };
      }
    ]);

})(window, window.angular);
