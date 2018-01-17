import templateUrl from './saved-books.html';

export const savedBooksComponent = {
    bindings: {
        books: '<',
        onBookRemove: '&'
    },
    templateUrl,
    controller: class SavedBooksComponent{

    }
};