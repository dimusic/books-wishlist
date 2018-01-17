import templateUrl from './book-search-results.html';

export const bookSearchResultsComponent = {
    bindings: {
        books: '<',
        savedBooks: '<',
        onBookSave: '&'
    },
    templateUrl,
    controller: class BookSearchResultsComponent {
        constructor() {
            'ngInject';
        }

        isBookSaved(book) {
            return this.savedBooks.find(savedBook => savedBook.id === book.id);
        }
    }
};