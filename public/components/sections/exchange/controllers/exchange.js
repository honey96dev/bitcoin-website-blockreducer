(function () {
    'use strict';

    const app = angular.module('BlockReducerApp');
    // app.config(['$qProvider', function ($qProvider) {
    //     $qProvider.errorOnUnhandledRejections(false);
    // }]);
    let socket;
    app.controller('ExchangeController', ['$rootScope', '$scope', '$http', '$sce', Controller]);

    function Controller($rootScope, $scope, $http, $sce, $location, UserService) {
        $rootScope.exchangeScope = $scope;

        socket = $rootScope.socketIO;
        socket.off('marketHistory');
        socket.on('marketHistory', (history) => {
            // console.log('2', history);

            let rows = history.reverse().slice(0, $scope.limitCount);
            for (let r in rows) {
                rows[r].class = "streamingListRow " + (rows[r].amount > 99999 ? 'Dark' : '') + " " + (rows[r].marker ? 'Sell' : 'Buy');
                rows[r].amount1 = rows[r].amount > 999 ? (rows[r].amount / 1000).toFixed(0) + 'k' : rows[r].amount;
                rows[r].date = new Date(rows[r].timestamp * 1000).toUTCString();
            }
            $rootScope.exchangeScope = $scope.realtimes = rows;
            // $scope.randomNumber = Math.random();
            // $('#randomNumber').val(Math.random());
            $rootScope.$digest();
            // app.reRenderUIPart();
            // console.log($scope.realtimes);
        });


        $scope.sourceIds = [];
        $scope.sources = [];
        $scope.realtimes = [];
        // $scope.randomNumber = '';
        $scope.symbol = '';
        $scope.threshold = 0;
        $scope.limitCount = 50;

        initcontroller();
        
        function initcontroller() {
            console.log('init-start');
            // var url = "/exchange/admin/getAllExchanges?groupLabel=data";
            var url = "/exchange/admin/getAllExchanges";
            // var trustedUrl = $sce.trustAsResourceUrl(url);
            $http({
                method: "GET",
                url: url,
            }).then(function(res) {
                // console.log(res);
                if (res.status === 200) {
                    $scope.sources = res.data;
                    // for (let i in $scope.sources) {
                    //     $scope.sources[i].funcName = "toggleSourceId('" + $scope.sources[i].id + "')";
                    // }
                }
                // $('#source').DataTable();
            });
            // $('#realtimes').DataTable({
                // "ajax": "http://127.0.0.1:3002/admin/getAllExchanges",
                // // "ajax": "ssdfa",
                // "columns": [
                //     { "data": "exchange_id" },
                //     { "data": "symbol" },
                //     { "data": "name" },
                //     { "data": "route" },
                //     { "data": "active" },
                //     { "data": "id" }
                // ]
            // });
            // socket
            console.log('init-end');
        }

        $scope.toggleSourceId = function (item) {
            const {id, symbol} = item.item;
            const idx = $scope.sourceIds.indexOf(symbol);
            // console.log('begin', $scope.sourceIds);
            if (idx != -1) {
                // console.log('splice', idx);
                // $scope.sourceIds =
                $scope.sourceIds.splice(idx, 1);
            } else {
                // console.log('push', name);
                $scope.sourceIds.push(symbol);
            }
            // console.log('end', $scope.sourceIds);
        };

        $scope.submitSources = function () {

            // Axios.get(process.env.REACT_APP_API + "/cryptoMarkets/getMarketData/?symbol="+symbol+"&filterPrice="+filterPrice+"&limitRow="+limitRow+"&exchangeIds="+exchangeIds.toString())
            //     .then(res => {
            //         console.log(res);
            //     }).catch(err => {
            //     console.log(err)
            // });
            $http({
                url: 'http://localhost:8080/exchange/cryptoMarkets/getMarketData',
                method: 'get',
                params: {
                    symbol: $scope.symbol,
                    filterPrice: $scope.threshold,
                    limitRow: $scope.limitCount,
                    exchangeIds: $scope.sourceIds.join(',')
                }
            })
                .then(function (response) {
                // handle success
                console.log(response);
            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        };
    }
})();

