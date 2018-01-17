import angular from 'angular';
import { bookSearchResultsComponent } from './book-search-results.component';
import './book-search-results.scss';

export const bookSearchResults = angular
    .module('components.books.book-search.book-search-results', [])
    .component('bookSearchResults', bookSearchResultsComponent)
    .name;