import angular from 'angular';
import templateUrl from './app.html';

export const appComponent = {
    templateUrl,
    controller: class AppComponent {
        constructor(BookSearchService) {
            'ngInject';

            this.bookSearchService = BookSearchService;
            this.savedBooks = [];
        }

        saveBook({ book }) {
            const alreadySaved = this.savedBooks.find((savedBook) => {
                return savedBook.id === book.id;
            });

            if (!alreadySaved) {
                this.savedBooks = [
                    ...this.savedBooks,
                    book
                ];
            }
        }

        removeBook({ book }) {
            this.savedBooks = this.savedBooks.filter(savedBook => savedBook.id !== book.id);
        }
    }
};