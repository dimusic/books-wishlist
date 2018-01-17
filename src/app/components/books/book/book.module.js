import angular from 'angular';
import { bookComponent } from './book.component';
import './book.scss';

export const book = angular
    .module('components.books.book', [])
    .component('book', bookComponent)
    .name;