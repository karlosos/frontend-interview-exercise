import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedNetworkElements } from '../store/wizardSlice'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'

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
    flex: 1
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

export default function EnhancedTable ({ networkElements, selectedNetworkElements }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = networkElements.map((n) => n.id)
      dispatch(setSelectedNetworkElements(newSelecteds))
      return
    }
    dispatch(setSelectedNetworkElements([]))
  }

  const handleClick = (event, id) => {
    const selectedIndex = selectedNetworkElements.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedNetworkElements, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedNetworkElements.slice(1))
    } else if (selectedIndex === selectedNetworkElements.length - 1) {
      newSelected = newSelected.concat(selectedNetworkElements.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedNetworkElements.slice(0, selectedIndex),
        selectedNetworkElements.slice(selectedIndex + 1)
      )
    }

    dispatch(setSelectedNetworkElements(newSelected))
  }

  const isSelected = (name) => selectedNetworkElements.indexOf(name) !== -1

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
            numSelected={selectedNetworkElements.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={networkElements.length}
          />
          <TableBody>
            {networkElements
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
                    key={row.id}
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
