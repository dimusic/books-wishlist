import angular from 'angular';
import { bookSearchInputComponent } from './book-search-input.component';
import './book-search-input.scss';

export const bookSearchInput = angular
    .module('components.books.book-search.book-search-input', [

    ])
    .component('bookSearchInput', bookSearchInputComponent)
    .name;