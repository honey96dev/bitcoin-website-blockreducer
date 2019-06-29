(function () {
    'use strict';

    angular
        .module('BlockReducerApp', ['ui.router', 'graphPlotter', 'angularjs-datetime-picker','ngAnimate', 'ngSanitize', 'ui.bootstrap'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider, $qProvider) {
        $qProvider.errorOnUnhandledRejections(true);
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './components/sections/home/views/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                data: { activeTab: 'home'}
            })

            .state('account', {
                url: '/account',
                templateUrl: './components/sections/account/views/account.html',
                controller: 'AccountController',
                controllerAs: 'vm',
                data: { activeTab: 'account' }
            })

            .state('change-password', {
                url: '/change-password',
                templateUrl: './components/sections/account/views/change-password.html',
                controller: 'ChangePasswordController',
                controllerAs: 'vm',
                data: { activeTab: 'change-password' }
            })

            .state('price-chart', {
                url: '/price',
                templateUrl: './components/sections/charts/views/price.html',
                controller: 'PriceChartController',
                controllerAs: 'vm',
                // data: { activeTab: 'priceChart' }
            })

            .state('volume-chart', {
                url: '/volume',
                templateUrl: './components/sections/charts/views/volume.html',
                controller: 'VolumeChartController',
                controllerAs: 'vm',
                // data: { activeTab: 'volumeChart' }
            })

            .state('vwap-chart', {
                url: '/vwap-chart',
                templateUrl: './components/sections/charts/views/vwap.html',
                controller: 'VwapChartController',
                controllerAs: 'vm',
                // data: { activeTab: 'volumeChart' }
            })

            .state('current-trade-chart', {
                url: '/trade',
                templateUrl: './components/sections/charts/views/trade.html',
                controller: 'CurrentTradeController',
                controllerAs: 'vm',
                // data: { activeTab: 'tradeChart' }
            })

            .state('fft-chart', {
                url: '/fft',
                templateUrl: './components/sections/fft/views/fft.html',
                controller: 'FFTChartController',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('hidden-day-chart', {
                url: '/hidden_day',
                templateUrl: './components/sections/hidden-order/views/hidden-day.html',
                controller: 'HiddenOrderDayController',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('hidden-year-chart', {
                url: '/hidden_year',
                templateUrl: './components/sections/hidden-order/views/hidden-year.html',
                controller: 'HiddenOrderYearController',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('fft-chart2', {
                url: '/fft_chat2',
                templateUrl: './components/sections/fft-chart/views/fft-chart.html',
                // templateUrl: './components/sections/admin/estimate-chart/views/estimate-chart.html',
                controller: 'FFTChart2Controller',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('num100-chart', {
                url: '/num100_chart',
                templateUrl: './components/sections/num100/views/num100.html',
                // templateUrl: './components/sections/admin/estimate-chart/views/estimate-chart.html',
                controller: 'Num100ChartController',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('num100-log-chart', {
                url: '/num100_log_chart',
                templateUrl: './components/sections/num100-log/views/num100.html',
                // templateUrl: './components/sections/admin/estimate-chart/views/estimate-chart.html',
                controller: 'Num100LogChartController',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('exchange', {
                url: '/exchange',
                templateUrl: './components/sections/exchange/views/exchange.html',
                // templateUrl: './components/sections/admin/estimate-chart/views/estimate-chart.html',
                controller: 'ExchangeController',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('deribit-options', {
                url: '/deribit-options',
                templateUrl: './components/sections/deribit/views/options.html',
                // templateUrl: './components/sections/admin/estimate-chart/views/estimate-chart.html',
                controller: 'DeribitOptionsController',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('deribit-options2', {
                url: '/deribit-options2',
                templateUrl: './components/sections/deribit/views/options2.html',
                // templateUrl: './components/sections/admin/estimate-chart/views/estimate-chart.html',
                controller: 'DeribitOptions2Controller',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('deribit-options3', {
                url: '/deribit-options3',
                templateUrl: './components/sections/deribit/views/options3.html',
                // templateUrl: './components/sections/admin/estimate-chart/views/estimate-chart.html',
                controller: 'DeribitOptions3Controller',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('deribit-result', {
                url: '/deribit-result',
                templateUrl: './components/sections/deribit/views/result.html',
                // templateUrl: './components/sections/admin/estimate-chart/views/estimate-chart.html',
                controller: 'DeribitResultController',
                controllerAs: 'vm',
                // data: { activeTab: 'fftChart' }
            })

            .state('admin', {
                url: '/admin',
                templateUrl: './components/sections/admin/main/views/main.html',
                controller: 'AdminMainController',
                controllerAs: 'vm',
                data: { activeTab: 'admin' }
            })

            .state('admin-users', {
                url: '/admin-users',
                templateUrl: './components/sections/admin/users/views/users.html',
                controller: 'AdminUsersController',
                controllerAs: 'vm',
                data: { activeTab: 'adminUser' }
            })

            .state('admin-estimate', {
                url: '/admin-estimate',
                templateUrl: './components/sections/admin/estimate/views/estimate.html',
                controller: 'AdminEstimateController',
                controllerAs: 'vm',
                data: { activeTab: 'adminEstimate' }
            })

            .state('admin-estimate-chart', {
                url: '/admin-estimate-chart',
                templateUrl: './components/sections/admin/estimate-chart/views/estimate-chart.html',
                controller: 'AdminEstimateChartController',
                controllerAs: 'vm',
                data: { activeTab: 'adminEstimateChart' }
            });
    }

    function pingToServer($rootScope) {
        if ($rootScope.pingTimeoutId) {
            clearTimeout($rootScope.pingTimeoutId);
        }
        if ($rootScope.socketIO.connected) $rootScope.socketIO.emit('onlineSignal', JSON.stringify({userId: $rootScope.userId}));
        $rootScope.pingTimeoutId = setTimeout(pingToServer, 30000, $rootScope);
    }

    function run($http, $rootScope, $window, UserService) {
        // add JWT token as default auth header
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;

        // update active tab on state change
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.activeTab = toState.data.activeTab;
        });

        UserService.GetCurrent().then(function(user) {
            console.log(user);
            $rootScope.userId  = user.id;
            $rootScope.username  = user.username;
            $rootScope.auth = user.auth;
            var role = user.auth;
            if(role=='admin'){
                // $('a#admin_li').remove();
                var admin_li = "<li class='sidebar'><a ui-sref='admin' href='#!/admin' id='admin_li' onmouseover=''><i class='fa fa-tachometer-alt'></i><span>Admin Panel</span></a></li>";
                $("li#block_chart").before(admin_li);
            }
            $('p#username').text($rootScope.username);
            $('span#user-role').text($rootScope.auth);
            // console.log(user);

            $rootScope.socketIO = io('localhost:8080',{
                reconnection: true,
                reconnectionDelay: 2000,
                reconnectionDelayMax: 4000,
                reconnectionAttempts: Infinity
            });

            $rootScope.socketIO.on('connect', function () {
                pingToServer($rootScope);
            });
        });
    }

    // manually bootstrap angular after the JWT token is retrieved from the server
    $(function () {
        // get JWT token from server
        $.get('/app/token', function (token) {
            window.jwtToken = token;
            angular.bootstrap(document, ['BlockReducerApp']);
        });
    });
})();
