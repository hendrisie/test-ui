/*
@startuml

class Result << (C,red) Component>>{
  result: Array<denomination>,
  leftover: number,
}

@enduml

 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

function createRow(id, qty, desc) {
  return { id, qty, desc };
}

function Result(props) {
  const { classes, leftover, result } = props;
  const rows = result ? result.map((row, id) => createRow(id, ...row)) : [];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Qty.</TableCell>
            <TableCell>Denomination</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.qty}x</TableCell>
              <TableCell>Rp{row.desc}</TableCell>
            </TableRow>
          ))}
          {leftover && (
            <TableRow>
              <TableCell>Left</TableCell>
              <TableCell>Rp{leftover} (no available fraction)</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

Result.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Result);
