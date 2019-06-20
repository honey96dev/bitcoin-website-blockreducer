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
        $scope.timeZone = 0;

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
        $scope.volumeSum = {
            x: [],
            y: [],
            name: 'VolumeSum',
            yaxis: 'y2',
            type: 'scatter',
            // line: {
            //     dash: 'dash',
            // },
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
                        timeZone: $scope.timeZone,
                    }
                }).then(function (res) {
                    $scope.open.x = [];
                    $scope.open.y = [];
                    $scope.volume.x = [];
                    $scope.volume.y = [];
                    $scope.volumeSum.x = [];
                    $scope.volumeSum.y = [];

                    var tmpData = res.data;

                    for (var obj of tmpData) {
                        $scope.open.x.push(obj.timestamp);
                        $scope.open.y.push(obj.open);
                        $scope.volume.x.push(obj.timestamp);
                        $scope.volume.y.push(obj.volume);
                        $scope.volumeSum.x.push(obj.timestamp);
                        $scope.volumeSum.y.push(obj.volumeSum);
                    }

                    var data = [$scope.open, $scope.volume, $scope.volumeSum];

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
                            title: 'Volume/VolumeSum',
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
                            timeZone: $scope.timeZone,
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
