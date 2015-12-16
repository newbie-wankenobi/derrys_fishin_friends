(function() {
  angular.module('fishinApp')
         .controller('UsersController', UsersController);

  UsersController.$inject = ['$state', 'authService', 'userDataService'];

  function UsersController($state, authService, userDataService) {
    var vm = this;

    vm.currentUser = {};
    vm.message = '';


    if (authService.currentUser() !== undefined) {
      vm.currentUser = authService.currentUser();
    }

    // attaching functions to controller
    vm.getUsers   = getUsers;
    vm.getUser    = getUser;
    vm.updateUser = updateUser;
    vm.createUser = createUser;
    vm.deleteUser = deleteUser;

    // defining function declarations
    function getUser() {

    }

    function getUsers() {

    }

    function createUser() {
      vm.message = '';
      // use the create function in the userService
      userDataService.create(vm.userData)
        .success(function(data) {
          vm.userData = {};
          vm.message = data.message;
          console.log(vm.message);
        });

        $state.go('homePage');
    };

    function updateUser() {
      // get the user data for the user you want to edit
      // $routeParams is the way we grab data from the URL
      userService.get($routeParams.user_id)
        .success(function(data) {
          vm.userData = data;
        });

      // function to save the user
      vm.saveUser = function() {
        vm.message = '';

        // call the userService function to update
        userService.update($routeParams.user_id, vm.userData)
          .success(function(data) {

            // clear the form
            vm.userData = {};

            // bind the message from our API to vm.message
            vm.message = data.message;
          });
      };
    }

    function deleteUser(id) {

      userService.delete(id)
        .success(function(data) {

          // get all users to update the table
          // you can also set up your api
          // to return the list of users with the delete call
          userService.all()
            .success(function(data) {
              vm.users = data;
            });
        });
    };
  };
})();
