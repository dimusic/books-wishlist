import templateUrl from './book-search-input.html';

export const bookSearchInputComponent = {
    bindings: {
        query: '<',
        onQueryChange: '&'
    },
    templateUrl,
    controller: class BookSearchInputComponent {
        constructor () {
            'ngInject';
        }
        
        onChange() {
            this.onQueryChange({
                $event: {
                    query: this.query
                }
            });
        }
    }
};