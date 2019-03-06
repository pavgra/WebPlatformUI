import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import PlusCircleOutlineIcon from 'mdi-material-ui/PlusCircleOutline';
import MUIDataTable from "mui-datatables";

import { Theme, WithStyles, withStyles, createStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const columns = ["ID", "Name", "Desscription", "Created", "Updated", "Author"];

const data = [
 ['1', 'Ibuprofen', 'Ibuprofen and all descendants', '03 Mar 19, 23:00', null, 'Pavel Grafkin'],
 ['2', 'Aspirin', 'Aspirin and all descendants', '01 Mar 19, 12:00', null, 'Pavel Grafkin'],
 ['3', 'Diabetes Type 2', '', '03 Mar 19, 23:00', null, 'Pavel Grafkin'],
];

const options = {
  filter: false,
  print: false,
  selectableRows: false
  // filterType: 'checkbox',
};

const StyledTabs = withStyles({
  root: {
    height: '3.6rem',
  },
  flexContainer: {
    height: '3.6rem',
  },
})(Tabs);

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: '2rem 1.6rem' //theme.spacing.unit * 3,
  },
  sectionBar: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    color: grey[800],
    backgroundColor: grey[300],
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  iconedBtnLabel: {
    paddingLeft: '0.6rem',
  },
  grow: {
    flexGrow: 1,
  },
});

interface Props extends WithStyles<typeof styles> {
}

function List(props: Props) {
  const { classes } = props;

  return (
    <div>
      <AppBar className={classes.sectionBar}>
        <StyledTabs value={0}>
          <Tab label="List" />
          <Tab label="Import" />
        </StyledTabs>
        <div className={classes.grow} />
        <Button variant="contained" color="primary">
          <PlusCircleOutlineIcon />
          <span className={classes.iconedBtnLabel}>New Concept Set</span>
        </Button>
      </AppBar>
      <div className={classes.content}>
        <MUIDataTable 
          title={"Concept Sets"} 
          data={data}
          columns={columns} 
          options={options} 
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(List);