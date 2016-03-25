(function() {
  "use strict";

  angular
      .module("fishinApp")
      .controller("MainController", MainController);

  MainController.$inject = ["$state", "userDataService", "$log", "authService"];

  function MainController($state, userDataService, $log, authService) {
    var vm = this;

    vm.current     = userDataService.current;
    vm.logout      = authService.logout;
    vm.isLoggedIn  = authService.isLoggedIn;

    vm.$state = $state;
  }

})();
