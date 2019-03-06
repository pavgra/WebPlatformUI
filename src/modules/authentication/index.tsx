import React from 'react';
import UserIcon from './components/UserIcon';

import Module from '../Module';

export default class Bootstrap implements Module {

  constructor() {

  }
  
  getAppBarItems() {
    return [
      <UserIcon />
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