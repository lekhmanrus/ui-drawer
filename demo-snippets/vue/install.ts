import Vue from 'nativescript-vue';

import { install } from '@nativescript-community/ui-drawer';
import DrawerPlugin from '@nativescript-community/ui-drawer/vue';

import BasicDrawer from './BasicDrawer.vue';
import AllSides from './AllSides.vue';

export function installPlugin() {
    Vue.use(DrawerPlugin);
    install();
}

export const demos = [
    { name: 'Basic Drawer', path: 'basic', component: BasicDrawer },
    { name: 'All Sides', path: 'all-sides', component: AllSides }
];
