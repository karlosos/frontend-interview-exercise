import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'

import { networkElements as rows } from '../api/data'

const headCells = [
  {
    id: 'ip',
    label: 'IP'
  },
  {
    id: 'type',
    label: 'Type'
  },
  {
    id: 'dn',
    label: 'DN'
  }
]

function EnhancedTableHead (props) {
  const { onSelectAllClick, numSelected, rowCount } = props

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
  },
  tableContainer: {
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  }
}))

export default function EnhancedTable ({ selectedElements, setSelectedElements }) {
  const classes = useStyles()

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id)
      setSelectedElements(newSelecteds)
      return
    }
    setSelectedElements([])
  }

  const handleClick = (event, id) => {
    const selectedIndex = selectedElements.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedElements, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedElements.slice(1))
    } else if (selectedIndex === selectedElements.length - 1) {
      newSelected = newSelected.concat(selectedElements.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedElements.slice(0, selectedIndex),
        selectedElements.slice(selectedIndex + 1)
      )
    }

    setSelectedElements(newSelected)
  }

  const isSelected = (name) => selectedElements.indexOf(name) !== -1

  return (
    <div className={classes.root}>
      <TableContainer className={classes.tableContainer}>
        <Table
          className={classes.table}
          aria-labelledby='tableTitle'
          size='medium'
          aria-label='enhanced table'
          stickyHeader
        >
          <EnhancedTableHead
            classes={classes}
            numSelected={selectedElements.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={rows.length}
          />
          <TableBody>
            {rows
              .map((row, index) => {
                const isItemSelected = isSelected(row.id)
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                  >
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell component='th' id={labelId} scope='row' padding='none'>
                      {row.ip}
                    </TableCell>
                    <TableCell align='left'>{row.type}</TableCell>
                    <TableCell align='left'>{row.dn}</TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
