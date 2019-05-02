(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('HiddenOrderDayController', Controller);

    function Controller($scope, $http, $window) {
        $scope.trace1 = {
            x: [],
            y: [],
            name: 'Price',
            yaxis: 'y1',
            type: 'scatter'
        };

        $scope.trace2 = {
            x: [],
            y: [],
            name: 'Hidden Buy',
            yaxis: 'y1',
            mode: 'markers',
            opacity: 1,
            marker: {
                color: 'green',
                // size: 20,
                // size: [20, 20, 20, 50]
            }
        };

        $scope.trace3 = {
            x: [],
            y: [],
            name: 'Hidden Sell',
            yaxis: 'y2',
            mode: 'markers',
            opacity: 1,
            marker: {
                color: 'red',
                // size: 20,
                // size: [20, 20, 20, 50]
            }
        };

        initController();

        function initController() {
            $http({
                method: "POST",
                url: "/chart/hidden/year",
                data: {
                    str: "init"
                }
            }).then((res) => {
                $scope.trace1.x = [];
                $scope.trace1.y = [];
                $scope.trace2.x = [];
                $scope.trace2.y = [];
                $scope.trace3.x = [];
                $scope.trace3.y = [];

                var tmpData = res.data;
                for (var obj of tmpData[0]) {
                    $scope.trace1.x.push((new Date(obj.timestamp)).toISOString());
                    $scope.trace1.y.push(parseFloat(obj.open));
                }
                for (var obj of tmpData[1]) {
                    $scope.trace2.x.push((new Date(obj.timestamp)).toISOString());
                    $scope.trace2.y.push(parseFloat(obj.price));
                }
                for (var obj of tmpData[2]) {
                    $scope.trace3.x.push((new Date(obj.timestamp)).toISOString());
                    $scope.trace3.y.push(parseFloat(obj.price));
                }

                var data1 = [$scope.trace1];
                // console.log(data1);
                var layout1 = {
                    yaxis: {
                      title: 'Price',
                      titlefont: {color: 'rgb(148, 103, 189)'},
                      tickfont: {color: 'rgb(148, 103, 189)'},
                      overlaying: 'y1',
                      side: 'right'
                    }
                };
                Plotly.newPlot('price-timestamp-chart', data1, layout1);

                var data2 = [$scope.trace2];

                var layout2 = {
                    yaxis: {
                      title: 'Hidden Buy',
                      titlefont: {color: 'rgb(94, 199, 72)'},
                      tickfont: {color: 'rgb(94, 199, 72)'},
                      overlaying: 'y1',
                      side: 'left'
                    }
                };
                
                Plotly.newPlot('hidden-timestamp-chart', data2, layout2);

                var data3 = [$scope.trace3];

                var layout3 = {
                    yaxis: {
                        title: 'Hidden Sell',
                        titlefont: {color: 'rgb(194, 99, 72)'},
                        tickfont: {color: 'rgb(194, 99, 72)'},
                        overlaying: 'y2',
                        side: 'right'
                    }
                };

                Plotly.newPlot('hidden-timestamp-chart', data3, layout3);
                // console.log(data2);
            });
        }
    }

})();