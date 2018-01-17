import angular from 'angular';
import { book } from './book/book.module';
import { bookSearch } from './book-search/book-search.module';
import { savedBooks } from './saved-books/saved-books.module';

export const books = angular
    .module('components.books', [
        book,
        bookSearch,
        savedBooks
    ])
    .name;