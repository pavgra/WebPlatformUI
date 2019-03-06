import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import BellIcon from 'mdi-material-ui/Bell';

import { Theme, WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  toolbarBtn: {
    '&:not(:first-child)': {
      marginLeft: '0.8rem',
    },
  },
});

interface Props extends WithStyles<typeof styles> {
}

function NotificationsIcon(props: Props) {
  const { classes } = props;

  return (
    <IconButton
      className={classes.toolbarBtn}
      color="inherit"
    >
      <Badge badgeContent={17} color="secondary">
        <BellIcon />
      </Badge>
    </IconButton>
  )
}

export default withStyles(styles)(NotificationsIcon);