import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Theme, WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  icon: {
    marginRight: 0
  },
  link: {
    textDecoration: 'none'
  },
});

export interface MenuItem {
  label: string, icon: JSX.Element, link: string
};

interface MenuListProps extends WithStyles<typeof styles> {
  items: Array<MenuItem>
}

function MenuList({ classes, items, location }: MenuListProps & RouteComponentProps) {
  return (
    <List>
      {items.map((menuItem, index) => (
        <Link key={index} to={menuItem.link} className={classes.link}>
          <ListItem button key={index} selected={location.pathname === menuItem.link}>
            <ListItemIcon className={classes.icon}>{menuItem.icon}</ListItemIcon>
            <ListItemText primary={menuItem.label} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

const StyledMenuList = withStyles(styles)(withRouter(MenuList));

export {
  StyledMenuList as MenuList,
};