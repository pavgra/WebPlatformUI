import React from 'react';

import DatabaseIcon from 'mdi-material-ui/Database';
import MagnifyIcon from 'mdi-material-ui/Magnify';
import AccountGroupIcon from 'mdi-material-ui/AccountGroup';
import ChartAreasplineIcon from 'mdi-material-ui/ChartAreaspline';
import SitemapIcon from 'mdi-material-ui/Sitemap';
import FlashIcon from 'mdi-material-ui/Flash';
import AccountIcon from 'mdi-material-ui/Account';
import ScaleBalanceIcon from 'mdi-material-ui/ScaleBalance';
import HeartPulseIcon from 'mdi-material-ui/HeartPulse';
import FormatListChecksIcon from 'mdi-material-ui/FormatListChecks';
import SettingsIcon from 'mdi-material-ui/Settings';
import ChatIcon from 'mdi-material-ui/Chat';

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
        label: 'Data sources',
        icon: <DatabaseIcon />,
        link: '/',
      },
      {
        label: 'Search',
        icon: <MagnifyIcon />,
        link: '/',
      },
      {
        label: 'Cohort Definitions',
        icon: <AccountGroupIcon />,
        link: '/',
      },
      {
        label: 'Characterizations',
        icon: <ChartAreasplineIcon />,
        link: '/',
      },
      {
        label: 'Cohort Pathways',
        icon: <SitemapIcon />,
        link: '/',
      },
      {
        label: 'Incidence Rates',
        icon: <FlashIcon />,
        link: '/',
      },
      {
        label: 'Profiles',
        icon: <AccountIcon />,
        link: '/',
      },
      {
        label: 'Estimation',
        icon: <ScaleBalanceIcon />,
        link: '/',
      },
      {
        label: 'Prediction',
        icon: <HeartPulseIcon />,
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