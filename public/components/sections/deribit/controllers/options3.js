(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('DeribitOptions3Controller', ['$rootScope', '$scope', '$http', '$window', Controller]);

    function Controller($rootScope, $scope, $http, $window) {
        $scope.timeoutId = null;

        $scope.spreadStrikeCall = {
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
        $scope.spreadStrikePut = {
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

        $scope.spreadBidCall = {
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
        $scope.spreadBidPut = {
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

        $scope.spreadDeltaCall = {
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
        $scope.spreadDeltaPut = {
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

        $scope.spreadGammaCall = {
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
        $scope.spreadGammaPut = {
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

        $scope.spreadVegaCall = {
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
        $scope.spreadVegaPut = {
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

        $scope.spreadKDECall = {
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
        $scope.spreadKDEPut = {
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
                $scope.spreadStrikeCall.x = [];
                $scope.spreadStrikeCall.y = [];
                $scope.spreadStrikePut.x = [];
                $scope.spreadStrikePut.y = [];
                $scope.spreadBidCall.x = [];
                $scope.spreadBidCall.y = [];
                $scope.spreadBidPut.x = [];
                $scope.spreadBidPut.y = [];
                $scope.spreadDeltaCall.x = [];
                $scope.spreadDeltaCall.y = [];
                $scope.spreadDeltaPut.x = [];
                $scope.spreadDeltaPut.y = [];
                $scope.spreadGammaCall.x = [];
                $scope.spreadGammaCall.y = [];
                $scope.spreadGammaPut.x = [];
                $scope.spreadGammaPut.y = [];
                $scope.spreadVegaCall.x = [];
                $scope.spreadVegaCall.y = [];
                $scope.spreadVegaPut.x = [];
                $scope.spreadVegaPut.y = [];
                $scope.spreadKDECall.x = [];
                $scope.spreadKDECall.y = [];
                $scope.spreadKDEPut.x = [];
                $scope.spreadKDEPut.y = [];
                const tmpData = res.data;
                const limitSpread = 0.2;
                for (let item of tmpData.data) {
                    let spread = item.best_ask_price - item.best_bid_price;
                    // if (spread > limitSpread) spread = 0;
                    if (item.type == 'Call') {
                        $scope.spreadStrikeCall.x.push(item.strike);
                        $scope.spreadStrikeCall.y.push(spread);
                        $scope.spreadBidCall.x.push(item.best_bid_price);
                        $scope.spreadBidCall.y.push(spread);
                        $scope.spreadDeltaCall.x.push(item.delta);
                        $scope.spreadDeltaCall.y.push(spread);
                        $scope.spreadGammaCall.x.push(item.gamma);
                        $scope.spreadGammaCall.y.push(spread);
                        $scope.spreadVegaCall.x.push(item.vega);
                        $scope.spreadVegaCall.y.push(spread);
                    }
                    if (item.type == 'Put') {
                        $scope.spreadStrikePut.x.push(item.strike);
                        $scope.spreadStrikePut.y.push(spread);
                        $scope.spreadBidPut.x.push(item.best_bid_price);
                        $scope.spreadBidPut.y.push(spread);
                        $scope.spreadDeltaPut.x.push(item.delta);
                        $scope.spreadDeltaPut.y.push(spread);
                        $scope.spreadGammaPut.x.push(item.gamma);
                        $scope.spreadGammaPut.y.push(spread);
                        $scope.spreadVegaPut.x.push(item.vega);
                        $scope.spreadVegaPut.y.push(spread);
                    }
                }

                //==========================Spread-Strike====
                let data = [$scope.spreadStrikeCall, $scope.spreadStrikePut];

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
                        title: 'Spread',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-spread-strike', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Spread-Bid====
                data = [$scope.spreadBidCall, $scope.spreadBidPut];

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
                        title: 'Spread',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-spread-bid', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Spread-Delta====
                data = [$scope.spreadDeltaCall, $scope.spreadDeltaPut];

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
                        title: 'Spread',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-spread-delta', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Spread-Gamma====
                data = [$scope.spreadGammaCall, $scope.spreadGammaPut];

                layout = {
                    dragmode: 'zoom',
                    showlegend: true,
                    xaxis: {
                        autorange: true,
                        rangeslider: {},
                        title: 'Gamma',
                        type: 'linear'
                    },
                    yaxis: {
                        title: 'Spread',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-spread-gamma', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Spread-Vega====
                data = [$scope.spreadVegaCall, $scope.spreadVegaPut];

                layout = {
                    dragmode: 'zoom',
                    showlegend: true,
                    xaxis: {
                        autorange: true,
                        rangeslider: {},
                        title: 'Vega',
                        type: 'linear'
                    },
                    yaxis: {
                        title: 'Spread',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-spread-vega', data, layout, {responsive: true});
                } catch (e) {

                }

                //===========================Spread-KDE=======================
                for (let item of tmpData.spreadKDECall) {
                    $scope.spreadKDECall.x.push(item.value);
                    $scope.spreadKDECall.y.push(item.density);
                }
                for (let item of tmpData.spreadKDEPut) {
                    $scope.spreadKDEPut.x.push(item.value);
                    $scope.spreadKDEPut.y.push(item.density);
                }
                data = [$scope.spreadKDEPut, $scope.spreadKDECall, ];

                layout = {
                    dragmode: 'zoom',
                    showlegend: true,
                    xaxis: {
                        autorange: true,
                        rangeslider: {},
                        title: 'Spread',
                        type: 'linear'
                    },
                    yaxis: {
                        title: 'Spread',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-spread-kde', data, layout, {responsive: true});
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
