export class BookSearchService {
    constructor($http, $q) {
        'ngInject';

        this.$http = $http;
        this.$q = $q;

        this.canceller = null;
        this.isResolved = false;
    }

    cancelPreviousRequest() {
        if (this.canceller) {
            this.canceller.resolve();
        }

        this.canceller = this.$q.defer();
    }

    search(query) {
        if (!this.isResolved) {
            this.cancelPreviousRequest();
        }
        this.isResolved = false;

        return this.$http({
            method: 'GET',
            url: `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&printType=books`,
            timeout: this.canceller.promise
        }).then((res) => {
            this.isResolved = true;
            return res;
        });
    }
}