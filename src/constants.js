export const Routes = {
  REGISTER: '/register',
  ROOT: '/',
  LOGIN: '/login',
  PROFILE: '/profile',
  NOTIFICATIONS: '/notifications',
  MEETINGS: '/meetings'
}

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

export const LOGO_URL = 'https://noveogroup.ru/build/images/logo-noveo.e179f24f.svg'

export const UserEndpoints = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/create',
  LOAD_USER: '/auth/me',
  UPDATE_PROFILE: '/users',
  LOAD_USER_BY_ID: (id) => `/users/${id}`
}
