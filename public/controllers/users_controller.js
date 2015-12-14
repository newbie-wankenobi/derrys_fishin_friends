(function() {
  angular.module('fishinApp')

         .controller('UsersController', UsersController);

  UsersController.$inject = ['authService', 'userDataService'];

  function UsersController(authService, userDataService) {
    var vm = this;


  }
})();
