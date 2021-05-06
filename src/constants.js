export const Routes = {
  ROOT: '/',
  LOGIN: '/login',
  PROFILE: '/profile',
  NOTIFICATIONS: '/notifications',
  MEETINGS: '/meetings'
}

export const Api = {
  ROOT: process.env.REACT_APP_API_URL,
  AUTH: {
    SIGNUP: '/auth/create',
    LOGIN: '/auth/login'
  },
  PROFILE: {
    ME: '/auth/me'
  }
}

export const ApiTokenStorageKey = 'BackendApiToken'

export const ViewTypes = {
  daysInMonth: 'dayGridMonth',
  daysInWeek: 'dayGridWeek',
  timeAllWeek: 'timeGridWeek',
  timeAllDay: 'timeGridDay'
}

export const Events = [
  { title: 'event 1', date: '2021-04-07', id: '123123123123' },
  { title: 'event 2', date: '2021-04-20', id: '010101010110' }
]
