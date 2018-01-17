import angular from 'angular';
import { books } from './books/books.module';

export const components = angular
    .module('components', [
        books
    ])
    .name;