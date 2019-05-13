(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('VolumeChartController', Controller);

    function Controller($scope, $http, $window) {
        $scope.arrayCandles = [
            {id: '1m', value: "1 Minute"},
            {id: '5m', value: "5 Minute"},
            // {id: 2, value: "10 Minute"},
            // {id: 3, value: "30 Minute"},
            {id: '1h', value: "1 Hour"},
            // {id: 5, value: "3 Hour"},
            // {id: 6, value: "1 Day"}
        ];

        $scope.binSize = '5m';
        $scope.startTime = '';
        $scope.endTime = '';

        $scope.open = {
            x: [],
            y: [],
            name: 'Open',
            yaxis: 'y1',
            type: 'scatter',
        };
        $scope.volume = {
            x: [],
            y: [],
            name: 'Volume',
            yaxis: 'y2',
            type: 'scatter',
            // line: {
            //     dash: 'dash',
            // },
        };
        $scope.num_3 = {
            x: [],
            y: [],
            name: 'Num3*VWAP',
            yaxis: 'y1',
            type: 'scatter',
            line: {
                dash: 'dash',
            },
        };
        $scope.num_6 = {
            x: [],
            y: [],
            name: 'Num6*VWAP',
            yaxis: 'y1',
            type: 'scatter',
            line: {
                dash: 'dash',
            },
        };
        $scope.num_9 = {
            x: [],
            y: [],
            name: 'Num9*VWAP',
            yaxis: 'y1',
            type: 'scatter',
            line: {
                dash: 'dash',
            },
        };
        $scope.num_100 = {
            x: [],
            y: [],
            name: 'Num100*VWAP',
            yaxis: 'y1',
            type: 'scatter',
            line: {
                dash: 'dash',
            },
        };

        $scope.open2 = {
            x: [],
            y: [],
            name: 'Open',
            yaxis: 'y1',
            type: 'scatter',
        };

        $scope.openInterest = {
            x: [],
            y: [],
            name: 'OpenInterest',
            yaxis: 'y2',
            type: 'scatter',
        };

        $scope.openValue = {
            x: [],
            y: [],
            name: 'OpenValue',
            yaxis: 'y2',
            type: 'scatter',
        };

        $scope.CustomizeChart = function() {
            if ($scope.startTime > $scope.endTime) {
                $window.alert('Please Check your "Start Time"!');
            } else {
                $http({
                    method: "POST",
                    url: "/chart/volume/init",
                    params: {
                        interval: $scope.binSize,
                        startTime: $scope.startTime,
                        endTime: $scope.endTime,
                    }
                }).then(function (res) {
                    $scope.open.x = [];
                    $scope.open.y = [];
                    $scope.volume.x = [];
                    $scope.volume.y = [];
                    $scope.num_3.x = [];
                    $scope.num_3.y = [];
                    $scope.num_6.x = [];
                    $scope.num_6.y = [];
                    $scope.num_9.x = [];
                    $scope.num_9.y = [];
                    $scope.num_100.x = [];
                    $scope.num_100.y = [];

                    var tmpData = res.data;

                    for (var obj of tmpData) {
                        $scope.open.x.push(obj.timestamp);
                        $scope.open.y.push(obj.open);
                        $scope.volume.x.push(obj.timestamp);
                        $scope.volume.y.push(obj.volume);
                        $scope.num_3.x.push(obj.timestamp);
                        $scope.num_3.y.push(obj.num_3);
                        $scope.num_6.x.push(obj.timestamp);
                        $scope.num_6.y.push(obj.num_6);
                        $scope.num_9.x.push(obj.timestamp);
                        $scope.num_9.y.push(obj.num_9);
                        $scope.num_100.x.push(obj.timestamp);
                        $scope.num_100.y.push(obj.num_100);
                    }

                    var data = [$scope.open, $scope.volume, $scope.num_3, $scope.num_6, $scope.num_9, $scope.num_100];

                    var layout = {
                        dragmode: 'zoom',
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
                            title: 'Volume',
                            titlefont: {color: 'rgb(148, 103, 189)'},
                            tickfont: {color: 'rgb(148, 103, 189)'},
                            overlaying: 'y',
                            side: 'right'
                        }
                    };

                    Plotly.newPlot('plotly-volume-open', data, layout);

                    // var data2 = [$scope.trace2];
                    //
                    // var layout2 = {
                    //     yaxis: {
                    //         title: 'Volume',
                    //         titlefont: {color: 'rgb(148, 103, 189)'},
                    //         tickfont: {color: 'rgb(148, 103, 189)'},
                    //         overlaying: 'y',
                    //         side: 'right'
                    //     }
                    // };
                    //
                    // Plotly.newPlot('plotly-volume', data2, layout2);
                    $http({
                        method: "POST",
                        url: "/chart/volume/custom",
                        params: {
                            interval: $scope.binSize,
                            startTime: $scope.startTime,
                            endTime: $scope.endTime,
                        }
                    }).then(function (res) {
                        $scope.open2.x = [];
                        $scope.open2.y = [];
                        $scope.openInterest.x = [];
                        $scope.openInterest.y = [];
                        $scope.openValue.x = [];
                        $scope.openValue.y = [];

                        var tmpData = res.data;

                        for (var obj of tmpData) {
                            $scope.open2.x.push(obj.timestamp);
                            $scope.open2.y.push(obj.open);
                            $scope.openInterest.x.push(obj.timestamp);
                            $scope.openInterest.y.push(obj.openInterest);
                            $scope.openValue.x.push(obj.timestamp);
                            $scope.openValue.y.push(obj.openValue);
                        }

                        var data = [$scope.open, $scope.openInterest, $scope.openValue];

                        var layout = {
                            dragmode: 'zoom',
                            showlegend: true,
                            xaxis: {
                                autorange: true,
                                rangeslider: {},
                                title: 'Date',
                                type: 'date'
                            },
                            yaxis: {
                                title: 'Open',
                                autorange: true,
                                type: 'linear'
                            },
                            yaxis2: {
                                title: 'OpenInterest/OpenValue',
                                titlefont: {color: 'rgb(148, 103, 189)'},
                                tickfont: {color: 'rgb(148, 103, 189)'},
                                overlaying: 'y',
                                side: 'right'
                            }
                        };

                        Plotly.newPlot('plotly-volume-interest', data, layout);
                    });
                });
            }
        }

        initController();

        function initController() {
            $scope.CustomizeChart();
        }
    }

})();
