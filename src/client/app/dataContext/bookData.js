(function() {
    'use strict';

    angular
        .module('app.book')
        .factory('bookData', bookData);

    bookData.$inject = ['$location', '$q', '$rootScope', '$timeout', 'logger', '$http', '$cacheFactory', '$resource'];

    /* @ngInject */
    function bookData($location, $q, $rootScope, $timeout, logger, $http, $cacheFactory, $resource) {

        var service = {
            getAllBooks: getAllBooks,
            getBookById: getBookById,
            saveBook: saveBook,
            deleteBook: deleteBook,
            // use of resource 
            getBookResource: getBookResource,
            getBookIdResource: getBookIdResource
        };

        return service;
        //////////////////////

        function getAllBooks() {
            // debugger;
            // var cacheData = $cacheFactory.get('$http'),
            //     deferred = $q.defer();
            // if (cacheData && cacheData.get('../client/localtestdata/allbooks.json')) {
            //     return deferred.resolve(cacheData.get('../client/localtestdata/allbooks.json'));
            // }
            return $http({
                    method: 'GET',
                    cache: true,
                    url: '../client/localtestdata/allbooks.json'
                }).then(getAllBooksSuccess)
                .catch(errorHandler);
        }

        function getAllBooksSuccess(resp) {
            return resp.data;
        }

        function errorHandler(reason) {
            return $q.reject("Error in Books - " + reason.statusText);
        }

        function getBookById(id) {
            return $http({
                    method: 'GET',
                    url: '../client/localtestdata/editBook.json?bookId=' + id,
                    transformResponse: transformResponse
                }).then(getAllBooksSuccess)
                .catch(errorHandler);
        }

        function saveBook(book) {
            removeHttpCache();
            return $http({
                    method: 'POST',
                    data: book,
                    url: '../client/localtestdata/saveBook.json'
                }).then(getAllBooksSuccess)
                .catch(errorHandler);
        }

        function deleteBook(id) {
            removeHttpCache();
            return $http({
                    method: 'POST',
                    data: {
                        bookId: id
                    },
                    url: '../client/localtestdata/deleteBook.json'
                }).then(getAllBooksSuccess)
                .catch(errorHandler);
        }

        function transformResponse(data) {
            try {
                var respObj = angular.fromJson(data);
                respObj.lastupdated = new Date();
            } catch (e) {
                return data;
            };

            return respObj;
        }

        function removeHttpCache() {
            var cacheData = $cacheFactory.get('$http');
            if (cacheData) {
                cacheData.removeAll();
            }
        }

        // resource impmementation Example
        function getBookResource() {
           return $resource('../client/localtestdata/allbooks.json', null, {
                'update': {
                    method: 'PUT'
                }
            });
        }
        function getBookIdResource() {
           return $resource('../client/localtestdata/editBook.json?', {bookId:'@bookId'}, {
                'update': {
                    method: 'PUT'
                }
            });
        }
    }
})();