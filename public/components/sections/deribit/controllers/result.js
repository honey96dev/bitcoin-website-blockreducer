(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('DeribitResultController', ['$rootScope', '$scope', '$http', '$window', Controller]);

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
                $scope.strikeKDECall.x = [];
                $scope.strikeKDECall.y = [];
                $scope.strikeKDEPut.x = [];
                $scope.strikeKDEPut.y = [];
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
                const tmpData = res.data;
                const limitSpread = 0.2;
                for (let item of tmpData.data) {
                    if (item.type == 'Call') {
                        $scope.bidStrikeCall.x.push(item.strike);
                        $scope.bidStrikeCall.y.push(item.best_bid_price);

                        $scope.deltaStrikeCall.x.push(item.strike);
                        $scope.deltaStrikeCall.y.push(item.delta);
                        $scope.deltaBidCall.x.push(item.best_bid_price);
                        $scope.deltaBidCall.y.push(item.delta);

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

                        let spread = item.best_ask_price - item.best_bid_price;
                        if (spread > limitSpread) spread = 0;
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
                        $scope.bidStrikePut.x.push(item.strike);
                        $scope.bidStrikePut.y.push(item.best_bid_price);

                        $scope.deltaStrikePut.x.push(item.strike);
                        $scope.deltaStrikePut.y.push(item.delta);
                        $scope.deltaBidPut.x.push(item.best_bid_price);
                        $scope.deltaBidPut.y.push(item.delta);

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

                        let spread = item.best_ask_price - item.best_bid_price;
                        if (spread > limitSpread) spread = 0;
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

                //==========================Gamma-Strike====
                data = [$scope.gammaStrikeCall, $scope.gammaStrikePut];

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

                //==========================Spread-Strike====
                data = [$scope.spreadStrikeCall, $scope.spreadStrikePut];

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
                // if ($rootScope.timeoutId != null) {
                //     clearTimeout($scope.timeoutId);
                // }
                // $rootScope.timeoutId = setTimeout($scope.CustomizeChart, timeout);
            });

        };


        initcontroller();

        function initcontroller() {
            $scope.CustomizeChart();
        }
    }

})();
