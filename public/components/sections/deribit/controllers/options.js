(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('DeribitOptionsController', ['$rootScope', '$scope', '$http', '$window', Controller]);

    function Controller($rootScope, $scope, $http, $window) {
        $scope.timeoutId = null;

        $scope.strikeKDECall = {
            x: [],
            y: [],
            line: {
                shape: 'spline',
                dash: 'dash',
            },
            name: 'Call',
            type: 'scatter',
            fill: 'tozeroy',
        };
        $scope.strikeKDEPut = {
            x: [],
            y: [],
            line: {
                shape: 'spline',
            },
            name: 'Put',
            type: 'scatter',
            fill: 'tonexty',
        };

        $scope.bidStrikeCall = {
            x: [],
            y: [],
            name: 'Call',
            mode: 'markers',
            marker: {
                symbol: "circle",
                opacity: 0.7,
                size: 7.5,
            },
            type: 'scatter',
        };
        $scope.bidStrikePut = {
            x: [],
            y: [],
            name: 'Put',
            mode: 'markers',
            marker: {
                symbol: 134,
                opacity: 0.7,
                size: 9,
            },
            type: 'scatter',
        };

        $scope.bidKDECall = {
            x: [],
            y: [],
            line: {
                shape: 'spline',
                dash: 'dash',
            },
            name: 'Call',
            type: 'scatter',
            fill: 'tozeroy',
        };
        $scope.bidKDEPut = {
            x: [],
            y: [],
            line: {
                shape: 'spline',
            },
            name: 'Put',
            type: 'scatter',
            fill: 'tonexty',
        };

        $scope.deltaStrikeCall = {
            x: [],
            y: [],
            name: 'Call',
            mode: 'markers',
            marker: {
                symbol: "circle",
                opacity: 0.7,
                size: 7.5,
            },
            type: 'scatter',
        };
        $scope.deltaStrikePut = {
            x: [],
            y: [],
            name: 'Put',
            mode: 'markers',
            marker: {
                symbol: 134,
                opacity: 0.7,
                size: 9,
            },
            type: 'scatter',
        };

        $scope.deltaBidCall = {
            x: [],
            y: [],
            name: 'Call',
            mode: 'markers',
            marker: {
                symbol: "circle",
                opacity: 0.7,
                size: 7.5,
            },
            type: 'scatter',
        };
        $scope.deltaBidPut = {
            x: [],
            y: [],
            name: 'Put',
            mode: 'markers',
            marker: {
                symbol: 134,
                opacity: 0.7,
                size: 9,
            },
            type: 'scatter',
        };

        $scope.deltaKDECall = {
            x: [],
            y: [],
            line: {
                shape: 'spline',
                dash: 'dash',
            },
            name: 'Call',
            type: 'scatter',
            fill: 'tozeroy',
        };
        $scope.deltaKDEPut = {
            x: [],
            y: [],
            line: {
                shape: 'spline',
            },
            name: 'Put',
            type: 'scatter',
            fill: 'tonexty',
        };

        $scope.CustomizeChart = function() {
            $http({
                method: "GET",
                url: "/deribit/instruments",
            }).then(function(res) {
                $scope.strikeKDECall.x = [];
                $scope.strikeKDECall.y = [];
                $scope.strikeKDEPut.x = [];
                $scope.strikeKDEPut.y = [];
                $scope.bidStrikeCall.x = [];
                $scope.bidStrikeCall.y = [];
                $scope.bidStrikePut.x = [];
                $scope.bidStrikePut.y = [];
                $scope.bidKDECall.x = [];
                $scope.bidKDECall.y = [];
                $scope.bidKDEPut.x = [];
                $scope.bidKDEPut.y = [];
                $scope.deltaStrikeCall.x = [];
                $scope.deltaStrikeCall.y = [];
                $scope.deltaStrikePut.x = [];
                $scope.deltaStrikePut.y = [];
                $scope.deltaBidCall.x = [];
                $scope.deltaBidCall.y = [];
                $scope.deltaBidPut.x = [];
                $scope.deltaBidPut.y = [];
                $scope.deltaKDECall.x = [];
                $scope.deltaKDECall.y = [];
                $scope.deltaKDEPut.x = [];
                $scope.deltaKDEPut.y = [];
                const tmpData = res.data;
                const limitSpread = 0.2;
                for (let item of tmpData.data) {
                    let spread = item.best_ask_price - item.best_bid_price;
                    // if (spread > limitSpread) spread = 0;
                    if (item.type == 'Call') {
                        $scope.bidStrikeCall.x.push(item.strike);
                        $scope.bidStrikeCall.y.push(item.best_bid_price);

                        $scope.deltaStrikeCall.x.push(item.strike);
                        $scope.deltaStrikeCall.y.push(item.delta);
                        $scope.deltaBidCall.x.push(item.best_bid_price);
                        $scope.deltaBidCall.y.push(item.delta);
                    }
                    if (item.type == 'Put') {
                        $scope.bidStrikePut.x.push(item.strike);
                        $scope.bidStrikePut.y.push(item.best_bid_price);

                        $scope.deltaStrikePut.x.push(item.strike);
                        $scope.deltaStrikePut.y.push(item.delta);
                        $scope.deltaBidPut.x.push(item.best_bid_price);
                        $scope.deltaBidPut.y.push(item.delta);

                    }
                }

                //==========================Bid-Strike====
                let data = [$scope.bidStrikeCall, $scope.bidStrikePut];

                let layout = {
                    dragmode: 'zoom',
                    showlegend: true,
                    xaxis: {
                        autorange: true,
                        rangeslider: {},
                        title: 'Strike',
                        type: 'linear'
                    },
                    yaxis: {
                        title: 'Bid',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-bid-strike', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Delta-Strike====
                data = [$scope.deltaStrikeCall, $scope.deltaStrikePut];

                layout = {
                    dragmode: 'zoom',
                    showlegend: true,
                    xaxis: {
                        autorange: true,
                        rangeslider: {},
                        title: 'Strike',
                        type: 'linear'
                    },
                    yaxis: {
                        title: 'Delta',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-delta-strike', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Delta-Bid====
                data = [$scope.deltaBidCall, $scope.deltaBidPut];

                layout = {
                    dragmode: 'zoom',
                    showlegend: true,
                    xaxis: {
                        autorange: true,
                        rangeslider: {},
                        title: 'Bid',
                        type: 'linear'
                    },
                    yaxis: {
                        title: 'Delta',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-delta-bid', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Strike-KDE====
                // console.log(tmpData.strikeKDECall);
                for (let item of tmpData.strikeKDECall) {
                    $scope.strikeKDECall.x.push(item.value);
                    $scope.strikeKDECall.y.push(item.density);
                }
                for (let item of tmpData.strikeKDEPut) {
                    $scope.strikeKDEPut.x.push(item.value);
                    $scope.strikeKDEPut.y.push(item.density);
                }
                data = [$scope.strikeKDEPut, $scope.strikeKDECall, ];

                layout = {
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

                //===========================Bid-KDE=======================
                for (let item of tmpData.bidKDECall) {
                    $scope.bidKDECall.x.push(item.value);
                    $scope.bidKDECall.y.push(item.density);
                }
                for (let item of tmpData.bidKDEPut) {
                    $scope.bidKDEPut.x.push(item.value);
                    $scope.bidKDEPut.y.push(item.density);
                }
                data = [$scope.bidKDEPut, $scope.bidKDECall, ];

                layout = {
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

                //===========================Delta-KDE=======================
                for (let item of tmpData.deltaKDECall) {
                    $scope.deltaKDECall.x.push(item.value);
                    $scope.deltaKDECall.y.push(item.density);
                }
                for (let item of tmpData.deltaKDEPut) {
                    $scope.deltaKDEPut.x.push(item.value);
                    $scope.deltaKDEPut.y.push(item.density);
                }
                data = [$scope.deltaKDEPut, $scope.deltaKDECall, ];

                layout = {
                    dragmode: 'zoom',
                    showlegend: true,
                    xaxis: {
                        autorange: true,
                        rangeslider: {},
                        title: 'Delta',
                        type: 'linear'
                    },
                    yaxis: {
                        title: 'Delta',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-delta-kde', data, layout, {responsive: true});
                } catch (e) {

                }

                if ($rootScope.timeoutId != null) {
                    clearTimeout($scope.timeoutId);
                }
                $rootScope.timeoutId = setTimeout($scope.CustomizeChart, 60000);
            });

        };


        initcontroller();

        function initcontroller() {
            $scope.CustomizeChart();
        }
    }

})();
