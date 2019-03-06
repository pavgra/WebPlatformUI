import React from 'react';

import HomeIcon from 'mdi-material-ui/Home';

import Module from '../Module';

export default class Bootstrap implements Module {

  constructor() {

  }
  
  getAppBarItems() {
    return [];
  }

  getMenuItems() {
    return [
      {
        label: 'Home',
        icon: <HomeIcon />,
        link: '/',
      },
    ];
  }

  getRoutes() {
    return [
      {
        path: '/',
        component: () => <div></div>
      }
    ];
  }

  init() {
    // const { serviceRootPath, eventBus } 
  }
}