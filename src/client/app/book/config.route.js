(function () {
    'use strict';

    angular.module('app.book')
        .run(routeConfig);

    routeConfig.$inject = ['routehelper'];
    /* @ngInject */
    function routeConfig(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/books',
                config: {
                    templateUrl: 'app/book/books.html',
                    title: 'Book Result'
                }
            },
            {
                url: '/books/:bookId',
                config: {
                    templateUrl: 'app/book/editBook.html',
                    title: 'Book Edit'
                    // , not working in here needs to see
                    // resolve: {
                    //     editPromise: function(bookData, $routeParams) {
                    //         debugger;
                    //         return bookData.getBookById($routeParams.bookId);
                    //     }
                    // }
                }
            }
        ];
    }
})();