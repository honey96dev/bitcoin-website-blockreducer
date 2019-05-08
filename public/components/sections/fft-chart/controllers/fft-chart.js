(function () {
    'use strict';

    angular
        .module('BlockReducerApp')
        .controller('FFTChart2Controller', Controller);

    function Controller($scope, $http, $window, $location, UserService) {

        $scope.trace1 = {
            x: [],
            y: [],
            // close: [],
            // decreasing: {line: {color: '#7F7F7F'}},
            // high: [],
            // increasing: {line: {color: '#17BECF'}},
            // line: {color: 'rgba(31,119,180,1)'},
            // low: [],
            // open: [],
            name: 'Price',
            type: 'scatter',
            // type: 'ohlc',
            xaxis: 'x',
            yaxis: 'y'
        };

        $scope.trace2 = {
            x: [],
            y: [],
            name: 'Low Pass',
            yaxis: 'y2',
            type: 'scatter'
        };

        $scope.trace3 = {
            x: [],
            y: [],
            name: 'High Pass',
            yaxis: 'y2',
            type: 'scatter'
        };

        $scope.arrayCandles = [
            {id: '5m', value: "5 Minute"},
            // {id: 2, value: "10 Minute"},
            // {id: 3, value: "30 Minute"},
            {id: '1h', value: "1 Hour"},
            // {id: 5, value: "3 Hour"},
            // {id: 6, value: "1 Day"}
        ];
     
        initcontroller();
        
        function initcontroller() {
            $http({
                method: "POST",
                url: "/chart/fft/init",
                data: {
                    str: "init"
                }
            }).then(function(res) {
                var tmpData = res.data;

                $scope.trace1.x = [];
                $scope.trace1.y = [];
                // $scope.trace1.close = [];
                // $scope.trace1.high = [];
                // $scope.trace1.low = [];
                // $scope.trace1.open = [];
                $scope.trace2.x = [];
                $scope.trace2.y = [];
                $scope.trace3.x = [];
                $scope.trace3.y = [];
                // console.log(tmpData);
                for (var item of tmpData) {
                    $scope.trace1.x.push(item.isoDate);
                    $scope.trace1.y.push(item.open);
                    // $scope.trace1.open.push(obj.open);
                    // $scope.trace1.high.push(obj.high);
                    // $scope.trace1.low.push(obj.low);
                    // $scope.trace1.close.push(obj.close);
                    $scope.trace2.x.push(item.isoDate);
                    // $scope.trace2.y.push((obj.high - obj.low) / obj.close);
                    $scope.trace2.y.push(item.lowPass);
                    $scope.trace3.x.push(item.isoDate);
                    // $scope.trace2.y.push((obj.high - obj.low) / obj.close);
                    $scope.trace3.y.push(item.highPass);
                }
                
                var data1 = [$scope.trace1, $scope.trace2];

                var layout1 = {
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
                        title: 'Price',
                        autorange: true,
                        type: 'linear'
                    },
                    yaxis2: {
                        title: 'Low Pass',
                        titlefont: {color: 'rgb(148, 103, 189)'},
                        tickfont: {color: 'rgb(148, 103, 189)'},
                        overlaying: 'y',
                        side: 'right'
                    }
                };
                Plotly.newPlot('plotly-div', data1, layout1);


                var data2 = [$scope.trace1, $scope.trace3];

                var layout2 = {
                    dragmode: 'zoom',
                    // margin: {
                    //     r: 10,
                    //     t: 25,
                    //     b: 40,
                    //     l: 60
                    // },
                    showlegend: false,
                    xaxis: {
                        autorange: true,
                        rangeslider: {},
                        title: 'Date',
                        type: 'date'
                    },
                    yaxis: {
                        title: 'Price',
                        autorange: true,
                        type: 'linear'
                    },
                    yaxis2: {
                        title: 'High Pass',
                        // titlefont: {color: 'rgb(148, 103, 189)'},
                        // tickfont: {color: 'rgb(148, 103, 189)'},
                        overlaying: 'y',
                        side: 'right'
                    }
                };

                console.log(data2);
                Plotly.newPlot('myFFTDiv', data2, layout2);

                // var data2 = [$scope.trace2];
               
                // var layout2 = {
                //     yaxis: {
                //       title: 'yaxis2 title',
                //       titlefont: {color: 'rgb(148, 103, 189)'},
                //       tickfont: {color: 'rgb(148, 103, 189)'},
                //       overlaying: 'y',
                //       side: 'right'
                //     }
                // };
                // Plotly.newPlot('myFFTDiv', data2, layout2);
            });
        }

        $scope.estimate = [];

        $scope.enabledEdit =[];

        $scope.AddEstimate = function() {
            var row ={ price:"", time:"", disableEdit: true};
            $scope.estimate.push(row);
            $scope.enabledEdit[$scope.estimate.length - 1] = false;
        };
        
        $scope.EditEstimate = function(index) {
            console.log("edit index" + index);
            $scope.enabledEdit[index] = true;
        };
        
        $scope.DeleteEstimate = function(index) {
            $scope.estimate.splice(index, 1);
        };
        
        
        $scope.GenerateChart = function() {
            var tmpArray = [];
            UserService.GetCurrent().then(function (user) {
                for (var obj of $scope.estimate) {
                    tmpArray.push({_id: user.id, price: obj.price, time: obj.time});
                }

                if (tmpArray.length > 0) {
                    $http({
                        method: "POST",
                        url: "/chart/fft/estimate",
                        async: false,
                        data: { tmpArray }
                    }).then(function(res) {
                        var tmpData = res.data;
                        
                        $scope.trace1.x = [];
                        $scope.trace1.close = [];
                        $scope.trace1.high = [];
                        $scope.trace1.low = [];
                        $scope.trace1.open = [];
                        $scope.trace2.x = [];
                        $scope.trace2.y = [];

                        for (var obj of tmpData) {
                            $scope.trace1.x.push(obj.isoDate);
                            $scope.trace1.open.push(obj.open);
                            $scope.trace1.high.push(obj.high);
                            $scope.trace1.low.push(obj.low);
                            $scope.trace1.close.push(obj.close);
                            $scope.trace2.x.push(obj.isoDate);
                            $scope.trace2.y.push((obj.high - obj.low) / obj.close);
                        }
                        
                        var data = [$scope.trace1];

                        var layout = {
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
                                title: 'yaxis title',
                                autorange: true,
                                type: 'linear'
                            }
                        };

                        
                        var data2 = [$scope.trace2];

                        var layout2 = {
                            yaxis: {
                              title: 'yaxis2 title',
                              titlefont: {color: 'rgb(148, 103, 189)'},
                              tickfont: {color: 'rgb(148, 103, 189)'},
                              overlaying: 'y',
                              side: 'right'
                            }
                        };

                        Plotly.newPlot('plotly-combined-modal', data, layout);
                        Plotly.newPlot('ploty-fft-modal', data2, layout2);
                    });
                }

                

                $scope.estimate = []; // initialize the array;
            });
        };

        $scope.CustomizeChart = function(inputData) {
            $http({
                method: 'POST',
                url: '/chart/fft/customize',
                data: { inputData }
            }).then(function(res) {
                var tmpData = res.data;

                $scope.trace1.x = [];
                $scope.trace1.y = [];
                // $scope.trace1.close = [];
                // $scope.trace1.high = [];
                // $scope.trace1.low = [];
                // $scope.trace1.open = [];
                $scope.trace2.x = [];
                $scope.trace2.y = [];
                $scope.trace3.x = [];
                $scope.trace3.y = [];
                // console.log(tmpData);
                for (var item of tmpData) {
                    $scope.trace1.x.push(item.isoDate);
                    $scope.trace1.y.push(item.open);
                    // $scope.trace1.open.push(obj.open);
                    // $scope.trace1.high.push(obj.high);
                    // $scope.trace1.low.push(obj.low);
                    // $scope.trace1.close.push(obj.close);
                    $scope.trace2.x.push(item.isoDate);
                    // $scope.trace2.y.push((obj.high - obj.low) / obj.close);
                    $scope.trace2.y.push(item.lowPass);
                    $scope.trace3.x.push(item.isoDate);
                    // $scope.trace2.y.push((obj.high - obj.low) / obj.close);
                    $scope.trace3.y.push(item.highPass);
                }

                var data1 = [$scope.trace1, $scope.trace2];

                var layout1 = {
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
                        title: 'Price',
                        autorange: true,
                        type: 'linear'
                    },
                    yaxis2: {
                        title: 'Low Pass',
                        titlefont: {color: 'rgb(148, 103, 189)'},
                        tickfont: {color: 'rgb(148, 103, 189)'},
                        overlaying: 'y',
                        side: 'right'
                    }
                };

                Plotly.newPlot('plotly-div', data1, layout1);


                var data2 = [$scope.trace1, $scope.trace3];

                var layout2 = {
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
                        title: 'Price',
                        autorange: true,
                        type: 'linear'
                    },
                    yaxis2: {
                        title: 'High Pass',
                        // titlefont: {color: 'rgb(148, 103, 189)'},
                        // tickfont: {color: 'rgb(148, 103, 189)'},
                        overlaying: 'y',
                        side: 'right'
                    }
                };

                Plotly.newPlot('myFFTDiv', data2, layout2);

                // var data2 = [$scope.trace2];

                // var layout2 = {
                //     yaxis: {
                //       title: 'yaxis2 title',
                //       titlefont: {color: 'rgb(148, 103, 189)'},
                //       tickfont: {color: 'rgb(148, 103, 189)'},
                //       overlaying: 'y',
                //       side: 'right'
                //     }
                // };
                // Plotly.newPlot('myFFTDiv', data2, layout2);
           
            });
        };

        $scope.ClearData = function() {
            $scope.estimate = [];
        };
    }
})();
