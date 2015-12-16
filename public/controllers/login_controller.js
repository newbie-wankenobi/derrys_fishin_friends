(function() {
  "use strict";

  angular
    .module("fishinApp")
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "userDataService", "$log"];

  function LoginController($state, userDataService, $log) {
    var vm = this;

    vm.user   = userDataService;
    vm.logIn  = logIn;

    // Form data for login
    vm.loginData;

    function logIn() {
      authService.login(vm.loginData.phoneNumber, vm.loginData.password)
        .then(function(res) {
          console.log(res.data);
          userDataService.user = res.data.user;
          $state.go('triumphs');
        });
    };
  }

})();
