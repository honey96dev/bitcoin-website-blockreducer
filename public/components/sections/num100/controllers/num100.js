(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('Num100ChartController', ['$rootScope', '$scope', '$http', '$window', Controller]);

    function Controller($rootScope, $scope, $http, $window) {
        $scope.timeoutId = null;
        $scope.binSize = '5m';
        $scope.startTime = '';
        $scope.endTime = '';
        $scope.timeZone = 0;

        $scope.open = {
            x: [],
            y: [],
            name: 'Open',
            yaxis: 'y1',
            type: 'scatter'
        };
        $scope.num_3 = {
            x: [],
            y: [],
            name: 'Num3',
            yaxis: 'y1',
            type: 'scatter'
        };
        $scope.num_6 = {
            x: [],
            y: [],
            name: 'Num6',
            yaxis: 'y1',
            type: 'scatter'
        };
        $scope.num_9 = {
            x: [],
            y: [],
            name: 'Num9',
            yaxis: 'y1',
            type: 'scatter'
        };
        $scope.num_100 = {
            x: [],
            y: [],
            name: 'Num100',
            yaxis: 'y1',
            type: 'scatter',
            line: {
                // color: 'red',
            }
        };

        $scope.num_3i = {
            x: [],
            y: [],
            name: 'Num3i',
            yaxis: 'y2',
            type: 'scatter',
            line: {
                dash: 'dash',
            },
        };
        $scope.num_6i = {
            x: [],
            y: [],
            name: 'Num6i',
            yaxis: 'y2',
            type: 'scatter',
            line: {
                dash: 'dash',
            },
        };
        $scope.num_9i = {
            x: [],
            y: [],
            name: 'Num9i',
            yaxis: 'y2',
            type: 'scatter',
            line: {
                dash: 'dash',
            },
        };
        $scope.num_100i = {
            x: [],
            y: [],
            name: 'Num100i',
            yaxis: 'y2',
            type: 'scatter',
            line: {
                dash: 'dash',
            },
        };

        $scope.arrayCandles = [
            {id: '1m', value: "1 Minute"},
            {id: '5m', value: "5 Minute"},
            // {id: 2, value: "10 Minute"},
            // {id: 3, value: "30 Minute"},
            {id: '1h', value: "1 Hour"},
            // {id: 5, value: "3 Hour"},
            // {id: 6, value: "1 Day"}
        ];

        $scope.CustomizeChart = function() {
            var binSize = $scope.binSize;
            console.log('CustomizeChart', binSize, new Date());
            // var endTime = new Date($scope.endTime).toISOString();

            if ($scope.startTime > $scope.endTime) {
                $window.alert('Please Check your "Start Time"!');
            } else {
                $http({
                    method: "GET",
                    url: "/api/fft/id0_collection/" + binSize,
                    params: {
                        startTime: $scope.startTime,
                        endTime: $scope.endTime,
                        timeZone: $scope.timeZone,
                    }
                }).then(function(res) {
                    $scope.open.x = [];
                    $scope.open.y = [];
                    $scope.num_3.x = [];
                    $scope.num_3.y = [];
                    $scope.num_6.x = [];
                    $scope.num_6.y = [];
                    $scope.num_9.x = [];
                    $scope.num_9.y = [];
                    $scope.num_100.x = [];
                    $scope.num_100.y = [];
                    $scope.num_3i.x = [];
                    $scope.num_3i.y = [];
                    $scope.num_6i.x = [];
                    $scope.num_6i.y = [];
                    $scope.num_9i.x = [];
                    $scope.num_9i.y = [];
                    $scope.num_100i.x = [];
                    $scope.num_100i.y = [];
                    var tmpData = res.data;
                    for (var obj of tmpData) {
                        $scope.open.x.push(obj.timestamp);
                        $scope.open.y.push(obj.open);
                        $scope.num_3.x.push(obj.timestamp);
                        $scope.num_3.y.push(obj.num_3);
                        $scope.num_6.x.push(obj.timestamp);
                        $scope.num_6.y.push(obj.num_6);
                        $scope.num_9.x.push(obj.timestamp);
                        $scope.num_9.y.push(obj.num_9);
                        $scope.num_100.x.push(obj.timestamp);
                        $scope.num_100.y.push(obj.num_100);
                        $scope.num_3i.x.push(obj.timestamp);
                        $scope.num_3i.y.push(obj.num_3i);
                        $scope.num_6i.x.push(obj.timestamp);
                        $scope.num_6i.y.push(obj.num_6i);
                        $scope.num_9i.x.push(obj.timestamp);
                        $scope.num_9i.y.push(obj.num_9i);
                        $scope.num_100i.x.push(obj.timestamp);
                        $scope.num_100i.y.push(obj.num_100i);
                    }

                    var data = [$scope.open, $scope.num_3, $scope.num_6, $scope.num_9, $scope.num_100,
                        $scope.num_3i, $scope.num_6i, $scope.num_9i, $scope.num_100i];

                    var layout = {
                        // dragmode: 'zoom',
                        // // margin: {
                        // //     r: 10,
                        // //     t: 25,
                        // //     b: 40,
                        // //     l: 60
                        // // },
                        // showlegend: false,
                        // xaxis: {
                        //     autorange: true,
                        //     rangeslider: {},
                        //     title: 'Date',
                        //     type: 'date'
                        // },
                        // yaxis: {
                        //     autorange: true,
                        //     type: 'linear'
                        // }
                        dragmode: 'zoom',
                        // margin: {
                        //     r: 10,
                        //     t: 25,
                        //     b: 40,
                        //     l: 60
                        // },
                        showlegend: true,
                        xaxis: {
                            autorange: true,
                            rangeslider: {},
                            title: 'Date',
                            type: 'date'
                        },
                        yaxis: {
                            title: 'Open/Real',
                            autorange: true,
                            type: 'linear'
                        },
                        yaxis2: {
                            title: 'Imagine',
                            titlefont: {color: 'rgb(148, 103, 189)'},
                            tickfont: {color: 'rgb(148, 103, 189)'},
                            overlaying: 'y',
                            side: 'right'
                        }
                    };

                    try {
                        Plotly.newPlot('plotly-div-num100', data, layout, {responsive: true});
                    } catch (e) {

                    }
                    let timeout = 300000;
                    if ($scope.binSize == '1m') {
                        timeout = 60000;
                    } else if ($scope.binSize == '1h') {
                        timeout = 1800000;
                    }
                    if ($rootScope.timeoutId != null) {
                        clearTimeout($scope.timeoutId);
                    }
                    $rootScope.timeoutId = setTimeout($scope.CustomizeChart, timeout);
                });
            }
        };


        initcontroller();

        function initcontroller() {
            $scope.CustomizeChart();
            // $http({
            //     method: "GET",
            //     url: "/api/fft/id0_collection/5m",
            // })
            //     .then(function(res) {
            //     var tmpData = res.data;
            //     for (var obj of tmpData) {
            //         $scope.open.x.push(obj.timestamp);
            //         $scope.open.y.push(obj.open);
            //         $scope.num_3.x.push(obj.timestamp);
            //         $scope.num_3.y.push(obj.num_3);
            //         $scope.num_6.x.push(obj.timestamp);
            //         $scope.num_6.y.push(obj.num_6);
            //         $scope.num_9.x.push(obj.timestamp);
            //         $scope.num_9.y.push(obj.num_9);
            //         $scope.num_100.x.push(obj.timestamp);
            //         $scope.num_100.y.push(obj.num_100);
            //         $scope.num_3i.x.push(obj.timestamp);
            //         $scope.num_3i.y.push(obj.num_3i);
            //         $scope.num_6i.x.push(obj.timestamp);
            //         $scope.num_6i.y.push(obj.num_6i);
            //         $scope.num_9i.x.push(obj.timestamp);
            //         $scope.num_9i.y.push(obj.num_9i);
            //         $scope.num_100i.x.push(obj.timestamp);
            //         $scope.num_100i.y.push(obj.num_100i);
            //     }
            //
            //     var data = [$scope.open, $scope.num_3, $scope.num_6, $scope.num_9, $scope.num_100,
            //                 $scope.num_3i, $scope.num_6i, $scope.num_9i, $scope.num_100i];
            //
            //     var layout = {
            //         // dragmode: 'zoom',
            //         // // margin: {
            //         // //     r: 10,
            //         // //     t: 25,
            //         // //     b: 40,
            //         // //     l: 60
            //         // // },
            //         // showlegend: false,
            //         // xaxis: {
            //         //     autorange: true,
            //         //     rangeslider: {},
            //         //     title: 'Date',
            //         //     type: 'date'
            //         // },
            //         // yaxis: {
            //         //     autorange: true,
            //         //     type: 'linear'
            //         // }
            //         dragmode: 'zoom',
            //         // margin: {
            //         //     r: 10,
            //         //     t: 25,
            //         //     b: 40,
            //         //     l: 60
            //         // },
            //         showlegend: true,
            //         xaxis: {
            //             autorange: true,
            //             rangeslider: {},
            //             title: 'Date',
            //             type: 'date'
            //         },
            //         yaxis: {
            //             title: 'Open/Real',
            //             autorange: true,
            //             type: 'linear'
            //         },
            //         yaxis2: {
            //             title: 'Imagine',
            //             titlefont: {color: 'rgb(148, 103, 189)'},
            //             tickfont: {color: 'rgb(148, 103, 189)'},
            //             overlaying: 'y',
            //             side: 'right'
            //         }
            //     };
            //
            //     Plotly.newPlot('plotly-div', data, layout);
            //
            //
            // });
        }
    }

})();
