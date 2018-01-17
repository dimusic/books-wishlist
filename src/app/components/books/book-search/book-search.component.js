import templateUrl from './book-search.html';

export const bookSearchComponent = {
    bindings: {
        savedBooks: '<',
        onBookSave: '&'
    },
    templateUrl,
    controller: class BookSearchComponent {
        constructor(BookSearchService) {
            'ngInject';

            this.bookSearchService = BookSearchService;
        }
        
        $onInit() {
            this.books = [];
            this.searchQuery = '';
            this.isLoading = false;
            this.searchErrored = false;
        }
        
        searchBooks({ query }) {
            this.books = [];
            this.searchQuery = query;
            this.searchErrored = false;

            if (query.length === 0) {
                return;
            }

            this.isLoading = true;

            this.bookSearchService.search(query).then((res) => {
                this.isLoading = false;

                if (res.data.totalItems > 0) {
                    this.books = res.data.items;
                }
            }).catch((err) => {
                // Cancelled request
                if (err.status === -1 && err.xhrStatus === 'abort') {
                    return ;
                }
                
                console.error(err);
                this.searchErrored = true;
                this.isLoading = false;
            });
        }
    }
};