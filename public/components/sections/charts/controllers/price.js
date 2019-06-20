(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('PriceChartController', Controller);

    function Controller($scope, $http, $window) {
        $scope.timeZone = 0;

        $scope.graphData = {
            x: [], y:[], type: 'scatter'
        };

        initController();

        function initController() {
            $http({
                method: "POST",
                url: "/chart/price/init",
                data: {
                    str: "init"
                }
            }).then(function(res) {
                var tmpData = res.data;
                for (var obj of tmpData) {
                    $scope.graphData.x.push(obj.isoDate);
                    $scope.graphData.y.push(obj.open);
                }

                $scope.graphPlots = [$scope.graphData];

                $scope.graphData = {
                    x: [], y:[], type: 'scatter'
                };
            });
        }

        $scope.CustomizeChart = function() {
            if ($scope.startTime > $scope.endTime) {
                $window.alert('Please Check your "Start Time"!');
            } else {
                $http({
                    method: "POST",
                    url: "/chart/price/custom",
                    data: {
                        startTime: $scope.startTime,
                        endTime: $scope.endTime,
                        timeZone: $scope.timeZone,
                    }
                }).then(function(res) {
                    var tmpData = res.data;
                    for (var obj of tmpData) {
                        $scope.graphData.x.push(obj.isoDate);
                        $scope.graphData.y.push(obj.open);
                    }

                    $scope.graphPlots = [$scope.graphData];

                    $scope.graphData = {
                        x: [], y:[], type: 'scatter'
                    };
                });
            }
        };
    }

})();
