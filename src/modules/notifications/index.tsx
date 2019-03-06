import React from 'react';
import NotificationsIcon from './components/NotificationsIcon';

import Module from '../Module';

export default class Bootstrap implements Module {

  constructor() {

  }
  
  getAppBarItems() {
    return [
      <NotificationsIcon />
    ];
  }

  getMenuItems() {
    return [];
  }

  getRoutes() {
    return [];
  }

  init() {
    // const { serviceRootPath, eventBus } 
  }
}