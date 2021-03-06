import React, { useState } from 'react'
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
import { ButtonGroup } from '@material-ui/core'
import locale from '../../locale'
import Spinner from '../custom/Spinner'
import PropTypes from 'prop-types'
import MyMeetingsContainer from '../../containers/MyMeetingsContainer'

const drawerWidth = 250

const {
  NOTIFICATIONS: {
    ALL_BUTTON, APPLIED_BUTTON,
    APPLY_BUTTON, DENY_BUTTON, DONE_BUTTON,
    INBOX_BUTTON, CREATED_AT, DESCRIPTION, TITLE,
    FROM, ROOM, TO, ACTION, CREATED_BY, EVENT_ENDED, CREATOR_NOT_FOUND
  }
} = locale

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    top: '64px'
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
    margin: theme.spacing(1),
    minWidth: '150px'
  },
  divFlex: {
    display: 'flex',
    alignItems: 'center'
  }
}))
const columns = [
  {
    id: 'title',
    label: TITLE,
    align: 'center',
    minWidth: 100
  },
  {
    id: 'description',
    label: DESCRIPTION,
    align: 'center',
    minWidth: 100
  },
  {
    id: 'from',
    label: FROM,
    align: 'center',
    minWidth: 150
  },
  {
    id: 'to',
    label: TO,
    align: 'center',
    minWidth: 150
  },
  {
    id: 'room',
    label: ROOM,
    align: 'center',
    minWidth: 50
  },
  {
    id: 'createdBy',
    label: CREATED_BY,
    align: 'center',
    minWidth: 100
  },
  {
    id: 'createdAt',
    label: CREATED_AT,
    align: 'center',
    minWidth: 100
  },
  {
    id: 'action',
    label: ACTION,
    align: 'center',
    minWidth: 170
  }
]

const NotificationsComponent = (
  {
    events, getFormattedDate, allButtonHandler, appliedButtonHandler,
    buttonsGroupState, inboxHandler, doneHandler, sidePanelState,
    applyHandler, denyHandler, userid, loading, page, setPage
  }) => {
  const classes = useStyles()

  const [rowsPerPage, setRowsPerPage] = useState(10)
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  if (loading && !events) {
    return <Spinner />
  }

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
            <ListItem button selected={sidePanelState === 'inbox'} onClick={inboxHandler}>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={INBOX_BUTTON} />
            </ListItem>
            <ListItem button selected={sidePanelState === 'done'} onClick={doneHandler}>
              <ListItemIcon> <DoneIcon /> </ListItemIcon>
              <ListItemText primary={DONE_BUTTON} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        {sidePanelState === 'inbox' && (
          <div className={classes.divFlex}>
            <ButtonGroup color='primary' aria-label='filter'>
              <Button variant={buttonsGroupState === 'all' ? 'contained' : ''} onClick={allButtonHandler}>{ALL_BUTTON}</Button>
              <Button variant={buttonsGroupState === 'applied' ? 'contained' : ''} onClick={appliedButtonHandler}>{APPLIED_BUTTON}</Button>
            </ButtonGroup>
            <MyMeetingsContainer />
          </div>)}
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
              {events.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((event) => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={event._id}>
                    {columns.map((column) => {
                      let value = event[column.id]
                      if (column.id === 'room' && value !== null) {
                        value = event[column.id].roomNumber
                      }
                      if (column.id === 'from' || column.id === 'to' || column.id === 'createdAt') {
                        value = getFormattedDate(event[column.id])
                      }
                      if (column.id === 'createdBy') {
                        const creatorid = event.createdBy
                        const creator = event.appliedUsers.find(user => user._id === creatorid)
                        if (!creator) {
                          value = CREATOR_NOT_FOUND
                        } else {
                          value = creator.username
                        }
                      }
                      if (column.id === 'action') {
                        if (sidePanelState === 'inbox') {
                          if (event.appliedUsers.find(element => element._id === userid)) {
                            value = (
                              <Button
                                variant='contained'
                                color='secondary'
                                className={classes.button}
                                startIcon={<CloseIcon />}
                                onClick={denyHandler(event._id)}
                              >
                                {DENY_BUTTON}
                              </Button>
                            )
                          } else {
                            value = (
                              <Button
                                variant='contained'
                                color='primary'
                                className={classes.button}
                                startIcon={<DoneIcon />}
                                onClick={applyHandler(event._id)}
                              >
                                {APPLY_BUTTON}
                              </Button>
                            )
                          }
                        } else {
                          value = EVENT_ENDED
                        }
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
          count={events.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </main>
    </div>
  )
}

NotificationsComponent.propTypes = {
  events: PropTypes.array.isRequired,
  getFormattedDate: PropTypes.func.isRequired,
  allButtonHandler: PropTypes.func.isRequired,
  inboxHandler: PropTypes.func.isRequired,
  doneHandler: PropTypes.func.isRequired,
  applyHandler: PropTypes.func.isRequired,
  denyHandler: PropTypes.func.isRequired,
  buttonsGroupState: PropTypes.string.isRequired,
  sidePanelState: PropTypes.string.isRequired,
  userid: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default NotificationsComponent
