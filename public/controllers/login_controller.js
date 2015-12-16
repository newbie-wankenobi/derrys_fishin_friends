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

    vm.userHold = {
      name: "",
      phoneNumber: "",
      password: ""
    };

    // function logIn(name) {
    //   $log.debug("Logging in:", vm.userHold.name);

    //   // Log in the user by updating the service's .name:
    //   vm.user.name            = vm.userHold.name;
    //   vm.user.phoneNumber     = vm.userHold.phoneNumber;
    //   vm.user.password        = vm.userHold.password;

    //   // Reset userHold
    //   vm.userHold.name        = "";
    //   vm.userHold.phoneNumber = "";
    //   vm.userHold.password    = "";

    //   $state.go("triumphs");
    // }

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
