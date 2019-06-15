(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('AdminUsersController', Controller);

    function Controller($scope, $http, $window, $location, UserService) {
        initcontroller();
        
        function initcontroller() {
            UserService.GetAll().then(function (user) {
                console.log(user);
                $scope.data = user;
            });
        };

        $scope.editInfo = function(info) {
            $scope.currentUser = {
                id: info['id'],
                email: info['email'],
                firstName: info['firstName'],
                lastName: info['lastName'],
                password: info['password'],
                username: info['username'],
                auth: info['auth'],
            };
            $scope.pass = false;
            $scope.header = "Update User Details";
            $scope.btn_text = "Update";
            $scope.flag = 'Update';
            
        };

        $scope.currentUser;
        $scope.UpdateInfo = function(info){ 
            if($scope.flag=='Update'){
                UserService.Update(info)
                    .then(function (data) {
                        initcontroller();
                    })
            } else if ($scope.flag == 'Insert') {
                if ($scope.currentUser.password == $scope.currentUser.passwordconfirm) {
                    const data = {
                        email: $scope.currentUser['email'],
                        firstName: $scope.currentUser['firstName'],
                        lastName: $scope.currentUser['lastName'],
                        password: $scope.currentUser['password'],
                        username: $scope.currentUser['username'],
                        auth: $scope.currentUser['auth'],
                    };
                    console.log($scope.currentUser);
                    console.log(data);
                    UserService.Create(data)
                        .then(function (data) {
                            alert(data.message);
                            if (data.result == 'success') {
                                initcontroller();
                            }
                        })
                } else {
                    alert("Password Confirm Error");
                }
            } 
        };

        $scope.deleteInfo = function(info){
            if(confirm("Are you really delete this user?")==true){
                UserService.Delete(info.id).
                    then(function(data){
                        initcontroller();
                    });     
            } 
        };

        $scope.createUser = function(){
            $scope.currentUser = [];
            $scope.currentUser['auth'] = 'user';
            $scope.header = "Insert New User";
            $scope.btn_text = "Insert";
            $scope.flag = 'Insert';
            $scope.pass = true;
        };

        $scope.orderByMe = function(x){
            $scope.myOrderBy = x;
        };

        $scope.toMain = function() {
            $location.path('/admin');
        };

        $scope.toEstimate = function() {
            $location.path('/admin-estimate');
        };

        $scope.toChart = function() {
            $location.path('/admin-estimate-chart');
        };
    }
})();