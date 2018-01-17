import angular from 'angular';
import { savedBooksComponent } from './saved-books.component';
import './saved-books.scss';

export const savedBooks = angular
    .module('components.books.saved-books', [
        
    ])
    .component('savedBooks', savedBooksComponent)
    .name;