import React from 'react';
import CartIcon from 'mdi-material-ui/Cart';

import Module from '../Module';

import List from './pages/list';

export default class Bootstrap implements Module {

  constructor() {

  }
  
  getAppBarItems() {
    return [];
  }

  getMenuItems() {
    return [
      {
        label: 'Concept Sets',
        icon: <CartIcon />,
        link: '/',
      },
    ];
  }

  getRoutes() {
    return [
      {
        path: '/',
        component: List
      }
    ];
  }

  init() {
    // const { serviceRootPath, eventBus } 
  }
}