import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { operationTypes } from '../common/constants'

const useStyles = makeStyles((theme) => ({
  summary: {
    padding: theme.spacing(2),
    flex: 1
  },
  tableContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  sectionHeader: {
    marginBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[400]}`
  }
}))

function SummaryInfo ({ selectedNetworkElementsData, selectedOperation }) {
  const classes = useStyles()
  return (
    <div className={classes.summary}>
      <Typography variant='h5' className={classes.sectionHeader}>
        Network Elements
      </Typography>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>IP Address</TableCell>
              <TableCell>NE Name</TableCell>
              <TableCell>Technology</TableCell>
              <TableCell>SW Version</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedNetworkElementsData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row'>
                  {row.ip}
                </TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='left'>{row.type}</TableCell>
                <TableCell align='left'>{row.swVersion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant='h5' className={classes.sectionHeader}>
        Operation Type
      </Typography>
      <Typography>
        {operationTypes[selectedOperation].label}
      </Typography>
    </div>
  )
}

export default SummaryInfo
