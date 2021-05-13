import React, { useState } from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import dateUtils from '@date-io/dayjs'
// import { TextField } from '@material-ui/core'

function EventComponent (props) {
  const [selectedDate, handleDateChange] = useState(new Date())
  return (
    <>
      <form>
        <MuiPickersUtilsProvider utils={dateUtils}>
          <DatePicker
            disableToolbar
            variant='inline'
            label='Only calendar'
            helperText='No year selection'
            value={selectedDate}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
      </form>
    </>
  )
}

export default EventComponent
