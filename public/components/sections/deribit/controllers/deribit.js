(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('DeribitController', ['$rootScope', '$scope', '$http', '$window', Controller]);

    function Controller($rootScope, $scope, $http, $window) {
        $scope.timeoutId = null;

        $scope.strikeKDECall = {
            x: [],
            y: [],
            line: {shape: 'spline'},
            name: 'Call',
            type: 'scatter',
            fill: 'tozeroy',
        };
        $scope.strikeKDEPut = {
            x: [],
            y: [],
            line: {shape: 'spline'},
            name: 'Put',
            type: 'scatter',
            fill: 'tonexty',
        };

        $scope.bidKDECall = {
            x: [],
            y: [],
            line: {shape: 'spline'},
            name: 'Call',
            type: 'scatter',
            fill: 'tozeroy',
        };
        $scope.bidKDEPut = {
            x: [],
            y: [],
            line: {shape: 'spline'},
            name: 'Put',
            type: 'scatter',
            fill: 'tonexty',
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

        $scope.CustomizeChart = function() {
            $http({
                method: "GET",
                url: "/deribit/strike-kde",
            }).then(function(res) {
                $scope.strikeKDECall.x = [];
                $scope.strikeKDECall.y = [];
                $scope.strikeKDEPut.x = [];
                $scope.strikeKDEPut.y = [];
                const tmpData = res.data;
                // console.log(tmpData.strikeKDECall);
                for (let item of tmpData.KDECall) {
                    $scope.strikeKDECall.x.push(item.value);
                    $scope.strikeKDECall.y.push(item.density);
                }
                for (let item of tmpData.KDEPut) {
                    $scope.strikeKDEPut.x.push(item.value);
                    $scope.strikeKDEPut.y.push(item.density);
                }
                const data = [$scope.strikeKDECall, $scope.strikeKDEPut];

                const layout = {
                    dragmode: 'zoom',
                    showlegend: true,
                    xaxis: {
                        autorange: true,
                        rangeslider: {},
                        title: 'Strike',
                        type: 'linear'
                    },
                    yaxis: {
                        title: 'Strike',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-strike-kde', data, layout, {responsive: true});
                } catch (e) {

                }
                // if ($rootScope.timeoutId != null) {
                //     clearTimeout($scope.timeoutId);
                // }
                // $rootScope.timeoutId = setTimeout($scope.CustomizeChart, timeout);
            });
            $http({
                method: "GET",
                url: "/deribit/bid-kde",
            }).then(function(res) {
                $scope.bidKDECall.x = [];
                $scope.bidKDECall.y = [];
                $scope.bidKDEPut.x = [];
                $scope.bidKDEPut.y = [];
                const tmpData = res.data;
                // console.log(tmpData.strikeKDECall);
                for (let item of tmpData.KDECall) {
                    $scope.bidKDECall.x.push(item.value);
                    $scope.bidKDECall.y.push(item.density);
                }
                for (let item of tmpData.KDEPut) {
                    $scope.bidKDEPut.x.push(item.value);
                    $scope.bidKDEPut.y.push(item.density);
                }
                const data = [$scope.bidKDECall, $scope.bidKDEPut];

                const layout = {
                    dragmode: 'zoom',
                    showlegend: true,
                    xaxis: {
                        autorange: true,
                        rangeslider: {},
                        title: 'Bid',
                        type: 'linear'
                    },
                    yaxis: {
                        title: 'Bid',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-bid-kde', data, layout, {responsive: true});
                } catch (e) {

                }
                // if ($rootScope.timeoutId != null) {
                //     clearTimeout($scope.timeoutId);
                // }
                // $rootScope.timeoutId = setTimeout($scope.CustomizeChart, timeout);
            });
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
