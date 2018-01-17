import angular from 'angular';
import { BookSearchService } from './book-search.service';
import { bookSearchComponent } from './book-search.component';
import { bookSearchInput } from './book-search-input/book-search-input.module';
import { bookSearchResults } from './book-search-results/book-search-results.module';

export const bookSearch = angular
    .module('components.books.book-search', [
        bookSearchInput,
        bookSearchResults
    ])
    .component('bookSearch', bookSearchComponent)
    .service('BookSearchService', BookSearchService)
    .name;