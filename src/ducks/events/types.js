const getEvents = {
  REQUEST: '@@events/GET_EVENTS_REQUEST',
  SUCCESS: '@@events/GET_EVENTS_SUCCESS',
  ERROR: '@@events/GET_EVENTS_ERROR'
}
const denyEvent = {
  REQUEST: '@@events/DENY_EVENT_REQUEST',
  ERROR: '@@events/DENY_EVENT_ERROR'
}
const applyEvent = {
  REQUEST: '@@events/APPLY_EVENT_REQUEST',
  ERROR: '@@events/APPLY_EVENT_ERROR'
}
const postEvent = {
  REQUEST: '@@events/POST_EVENT_REQUEST',
  ERROR: '@@events/POST_EVENT_ERROR'
}
const getEventById = {
  REQUEST: '@@events/GET_EVENT_BY_ID_REQUEST',
  SUCCESS: '@@events/GET_EVENT_BY_ID_SUCCESS',
  ERROR: '@@events/GET_EVENT_BY_ID_ERROR'
}
const patchEvent = {
  REQUEST: '@@events/PATCH_EVENT_REQUEST',
  ERROR: '@@events/PATCH_EVENT_ERROR'
}
const deleteEvent = {
  REQUEST: '@@events/DELETE_EVENT_REQUEST',
  ERROR: '@@events//DELETE_EVENT_ERROR'
}

const CLEAR_ERRORS = '@@events/CLEAR_ERRORS'
const types = {
  getEvents,
  denyEvent,
  applyEvent,
  postEvent,
  getEventById,
  patchEvent,
  deleteEvent,
  clearErrors: CLEAR_ERRORS
}
export default types
