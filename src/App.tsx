import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GlobeModelIcon from 'mdi-material-ui/GlobeModel';

import { BrowserRouter as Router, Route, Link, Switch, withRouter, RouteComponentProps } from "react-router-dom";

import grey from '@material-ui/core/colors/grey';
import { Theme, WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import { MenuItem, MenuList } from './components/MenuList';

const drawerWidth = 230;

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  routerContent: {
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#003142'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: '1rem',
  },
  toolbarTitle: {
    paddingLeft: 16
  },
  grow: {
    flexGrow: 1,
  },
  icon: {
    marginRight: 0
  },
  main: {
    paddingLeft: drawerWidth,
  },
  link: {
    textDecoration: 'none'
  },
});

interface AppProps extends WithStyles<typeof styles> {
  routes: Array<JSX.Element>, 
  menuItems: Array<MenuItem>,
  appBarItems: Array<JSX.Element>,
}

function App({ classes, routes, menuItems, appBarItems }: AppProps) {
  return (
    <div className={classes.root}>
      <Router>
        <div className={classes.routerContent}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <GlobeModelIcon />
              <Typography className={classes.toolbarTitle} variant="h6" color="inherit" noWrap>
                ATLAS
              </Typography>
              <div className={classes.grow} />
              <div>
                {appBarItems}
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <MenuList items={menuItems} />
            {/*menuItems.map((block, blockIndex) => ([
              blockIndex > 0 ? <Divider key={blockIndex*2-1} /> : null,
              <MenuList key={blockIndex*2} items={block} />
            ]))*/}
          </Drawer>
          <main className={classes.main}>
            <div className={classes.toolbar} />
            {routes}
          </main>
        </div>
      </Router>
    </div>
  );
}

export default withStyles(styles)(App);