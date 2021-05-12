export const Routes = {
  REGISTER: '/register',
  ROOT: '/',
  LOGIN: '/login',
  PROFILE: '/profile',
  NOTIFICATIONS: '/notifications',
  MEETINGS: '/meetings'
}

export const Api = {
  ROOT: process.env.REACT_APP_API_URL,
  USER: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/create',
    LOAD_USER: '/auth/me',
    UPDATE_PROFILE: '/users',
    LOAD_USER_BY_ID: (id) => `/users/${id}`
  },

  UTILS: {
    LOAD_FILE: '/media/upload'
  },

  EVENTS: {
    GET_EVENTS: '/events',
    DENY: (id) => `/events/${id}/deny`,
    APPLY: (id) => `/events/${id}/apply`,
    POST_EVENT: '/events',
    GET_EVENT_BY_ID: (id) => `/events/${id}`,
    PATCH_EVENT: (id) => `/events/${id}`,
    DELETE_EVENT: (id) => `/events/${id}`
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

export const LOGO_URL = 'https://noveogroup.ru/build/images/logo-noveo.e179f24f.svg'
export const NO_AVATAR = 'https://peregovorki-noveo.s3.us-east-2.amazonaws.com/1d521a8b-8564-412b-830a-766cf4c90b24-no-image.jpgno-image.jpg'
