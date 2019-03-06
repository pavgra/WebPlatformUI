import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from 'mdi-material-ui/AccountCircle';

import { Theme, WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  toolbarBtn: {
    '&:not(:first-child)': {
      marginLeft: '0.8rem',
    },
  },
  username: {
    fontSize: '1.1rem',
    paddingLeft: '0.5rem',
    marginTop: '-0.1rem',
  },
});

interface Props extends WithStyles<typeof styles> {
}

function UserIcon(props: Props) {
  const { classes } = props;

  return (
    <IconButton
      className={classes.toolbarBtn}
      color="inherit"
    >
      <AccountCircleIcon />
      <span className={classes.username}>pavgra</span>
    </IconButton>
  )
}

export default withStyles(styles)(UserIcon);