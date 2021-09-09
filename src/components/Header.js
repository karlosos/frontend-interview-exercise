import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    backgroundColor: '#fff',
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  title: {
    flexGrow: 1,
    color: `${theme.palette.primary.dark}`
  }
}))

function Header () {
  const classes = useStyles()

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Typography variant='h6' className={classes.title} classes={{ colorPrimary: classes.title }}>
          Network Element Operation Scheduler
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
