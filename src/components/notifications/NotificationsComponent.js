import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import DoneIcon from '@material-ui/icons/Done'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close'
const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  container: {
    maxHeight: '100%'
  },
  button: {
    margin: theme.spacing(1)
  }
}))
const columns = [
  { id: 'title', label: 'Title', minWidth: 100 },
  { id: 'description', label: 'Description', minWidth: 100 },
  {
    id: 'from',
    label: 'From',
    minWidth: 170
  },
  {
    id: 'to',
    label: 'To',
    minWidth: 170
  },
  {
    id: 'room',
    label: 'Room',
    minWidth: 50
  },
  {
    id: 'createdBy',
    label: 'Created by',
    minWidth: 170
  },
  {
    id: 'createdAt',
    label: 'Created at',
    minWidth: 100
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 170
  }
]

function getFormattedDate (stringDate) {
  const date = new Date(stringDate)
  const minutes = date.getMinutes() === 0 ? '00' : date.getMinutes()
  const hours = date.getHours()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${hours}-${minutes} ${day}.${month}.${year}`
}

export const NotificationsComponent = () => {
  const classes = useStyles()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [rows, setRows] = useState([])
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    const date = new Date()
    console.log(date)
    fetch('http://peregovorki-js.noveogroup.com/events')
      .then(response => response.json())
      .then(events => setRows([...events.data]))
  }, [])

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon> <InboxIcon /></ListItemIcon>
              <ListItemText primary='Inbox' />
            </ListItem>
            <ListItem button>
              <ListItemIcon> <DoneIcon /></ListItemIcon>
              <ListItemText primary='Done' />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      let value = row[column.id]
                      if (column.id === 'room' && value !== null) {
                        value = row[column.id].roomNumber
                      }
                      if (column.id === 'from' || column.id === 'to' || column.id === 'createdAt') {
                        value = getFormattedDate(row[column.id])
                      }
                      if (column.id === 'actions') {
                        value = (
                          <>
                            <Button
                              variant='contained'
                              color='primary'
                              className={classes.button}
                              startIcon={<DoneIcon />}
                            >
                              Apply
                            </Button>
                          <Button
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            startIcon={<CloseIcon />}
                          >
                            Deny
                          </Button>
                          </>
                        )
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </main>
    </div>
  )
}
