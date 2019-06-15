(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('DeribitOptions2Controller', ['$rootScope', '$scope', '$http', '$window', Controller]);

    function Controller($rootScope, $scope, $http, $window) {
        $scope.timeoutId = null;

        $scope.gammaStrikeCall = {
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
        $scope.gammaStrikePut = {
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

        $scope.gammaBidCall = {
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
        $scope.gammaBidPut = {
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

        $scope.gammaDeltaCall = {
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
        $scope.gammaDeltaPut = {
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

        $scope.gammaKDECall = {
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
        $scope.gammaKDEPut = {
            x: [],
            y: [],
            line: {
                shape: 'spline',
            },
            name: 'Put',
            type: 'scatter',
            fill: 'tonexty',
        };

        $scope.vegaStrikeCall = {
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
        $scope.vegaStrikePut = {
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

        $scope.vegaBidCall = {
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
        $scope.vegaBidPut = {
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

        $scope.vegaDeltaCall = {
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
        $scope.vegaDeltaPut = {
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

        $scope.vegaGammaCall = {
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
        $scope.vegaGammaPut = {
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

        $scope.vegaKDECall = {
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
        $scope.vegaKDEPut = {
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
                $scope.gammaStrikeCall.x = [];
                $scope.gammaStrikeCall.y = [];
                $scope.gammaStrikePut.x = [];
                $scope.gammaStrikePut.y = [];
                $scope.gammaBidCall.x = [];
                $scope.gammaBidCall.y = [];
                $scope.gammaBidPut.x = [];
                $scope.gammaBidPut.y = [];
                $scope.gammaDeltaCall.x = [];
                $scope.gammaDeltaCall.y = [];
                $scope.gammaDeltaPut.x = [];
                $scope.gammaDeltaPut.y = [];
                $scope.gammaKDECall.x = [];
                $scope.gammaKDECall.y = [];
                $scope.gammaKDEPut.x = [];
                $scope.gammaKDEPut.y = [];
                $scope.vegaStrikeCall.x = [];
                $scope.vegaStrikeCall.y = [];
                $scope.vegaStrikePut.x = [];
                $scope.vegaStrikePut.y = [];
                $scope.vegaBidCall.x = [];
                $scope.vegaBidCall.y = [];
                $scope.vegaBidPut.x = [];
                $scope.vegaBidPut.y = [];
                $scope.vegaDeltaCall.x = [];
                $scope.vegaDeltaCall.y = [];
                $scope.vegaDeltaPut.x = [];
                $scope.vegaDeltaPut.y = [];
                $scope.vegaGammaCall.x = [];
                $scope.vegaGammaCall.y = [];
                $scope.vegaGammaPut.x = [];
                $scope.vegaGammaPut.y = [];
                $scope.vegaKDECall.x = [];
                $scope.vegaKDECall.y = [];
                $scope.vegaKDEPut.x = [];
                $scope.vegaKDEPut.y = [];
                const tmpData = res.data;
                const limitSpread = 0.2;
                for (let item of tmpData.data) {
                    let spread = item.best_ask_price - item.best_bid_price;
                    // if (spread > limitSpread) spread = 0;
                    if (item.type == 'Call') {
                        $scope.gammaStrikeCall.x.push(item.strike);
                        $scope.gammaStrikeCall.y.push(item.gamma);
                        $scope.gammaBidCall.x.push(item.best_bid_price);
                        $scope.gammaBidCall.y.push(item.gamma);
                        $scope.gammaDeltaCall.x.push(item.delta);
                        $scope.gammaDeltaCall.y.push(item.gamma);

                        $scope.vegaStrikeCall.x.push(item.strike);
                        $scope.vegaStrikeCall.y.push(item.vega);
                        $scope.vegaBidCall.x.push(item.best_bid_price);
                        $scope.vegaBidCall.y.push(item.vega);
                        $scope.vegaDeltaCall.x.push(item.delta);
                        $scope.vegaDeltaCall.y.push(item.vega);
                        $scope.vegaGammaCall.x.push(item.gamma);
                        $scope.vegaGammaCall.y.push(item.vega);
                    }
                    if (item.type == 'Put') {
                        $scope.gammaStrikePut.x.push(item.strike);
                        $scope.gammaStrikePut.y.push(item.gamma);
                        $scope.gammaBidPut.x.push(item.best_bid_price);
                        $scope.gammaBidPut.y.push(item.gamma);
                        $scope.gammaDeltaPut.x.push(item.delta);
                        $scope.gammaDeltaPut.y.push(item.gamma);

                        $scope.vegaStrikePut.x.push(item.strike);
                        $scope.vegaStrikePut.y.push(item.vega);
                        $scope.vegaBidPut.x.push(item.best_bid_price);
                        $scope.vegaBidPut.y.push(item.vega);
                        $scope.vegaDeltaPut.x.push(item.delta);
                        $scope.vegaDeltaPut.y.push(item.vega);
                        $scope.vegaGammaPut.x.push(item.gamma);
                        $scope.vegaGammaPut.y.push(item.vega);
                    }
                }

                //==========================Gamma-Strike====
                let data = [$scope.gammaStrikeCall, $scope.gammaStrikePut];

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
                        title: 'Gamma',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-gamma-strike', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Gamma-Bid====
                data = [$scope.gammaBidCall, $scope.gammaBidPut];

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
                        title: 'Gamma',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-gamma-bid', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Gamma-Delta====
                data = [$scope.gammaDeltaCall, $scope.gammaDeltaPut];

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
                        title: 'Gamma',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-gamma-delta', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Vega-Strike====
                data = [$scope.vegaStrikeCall, $scope.vegaStrikePut];

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
                        title: 'Vega',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-vega-strike', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Vega-Bid====
                data = [$scope.vegaBidCall, $scope.vegaBidPut];

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
                        title: 'Vega',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-vega-bid', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Vega-Delta====
                data = [$scope.vegaDeltaCall, $scope.vegaDeltaPut];

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
                        title: 'Vega',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-vega-delta', data, layout, {responsive: true});
                } catch (e) {

                }

                //==========================Vega-Gamma====
                data = [$scope.vegaGammaCall, $scope.vegaGammaPut];

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
                        title: 'Vega',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-vega-gamma', data, layout, {responsive: true});
                } catch (e) {

                }

                //===========================Gamma-KDE=======================
                for (let item of tmpData.gammaKDECall) {
                    $scope.gammaKDECall.x.push(item.value);
                    $scope.gammaKDECall.y.push(item.density);
                }
                for (let item of tmpData.gammaKDEPut) {
                    $scope.gammaKDEPut.x.push(item.value);
                    $scope.gammaKDEPut.y.push(item.density);
                }
                data = [$scope.gammaKDEPut, $scope.gammaKDECall, ];

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
                        title: 'Gamma',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-gamma-kde', data, layout, {responsive: true});
                } catch (e) {

                }

                //===========================Vega-KDE=======================
                for (let item of tmpData.vegaKDECall) {
                    $scope.vegaKDECall.x.push(item.value);
                    $scope.vegaKDECall.y.push(item.density);
                }
                for (let item of tmpData.vegaKDEPut) {
                    $scope.vegaKDEPut.x.push(item.value);
                    $scope.vegaKDEPut.y.push(item.density);
                }
                data = [$scope.vegaKDEPut, $scope.vegaKDECall, ];

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
                        title: 'Vega',
                        autorange: true,
                        type: 'linear'
                    },
                };

                try {
                    Plotly.newPlot('plotly-div-deribit-vega-kde', data, layout, {responsive: true});
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
