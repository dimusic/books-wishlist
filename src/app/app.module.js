import angular from 'angular';
import { appComponent } from './app.component';
import { components } from './components/components.module';
import { common } from './common/common.module';

import 'normalize.css';
import './app.scss';

export const app = angular
    .module('app', [
        components,
        common
    ])
    .component('app', appComponent)
    .name;