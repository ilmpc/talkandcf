const getEvents = {
  REQUEST: '@@events/GET_EVENTS_REQUEST',
  SUCCESS: '@@events/GET_EVENTS_SUCCESS',
  ERROR: '@@events/GET_EVENTS_ERROR'
}
const denyEvents = {
  REQUEST: '@@events/DENY_EVENTS_REQUEST',
  ERROR: '@@events/DENY_EVENTS_ERROR'
}
const applyEvents = {
  REQUEST: '@@events/APPLY_EVENTS_REQUEST',
  ERROR: '@@events/APPLY_EVENTS_ERROR'
}
const types = {
  getEvents,
  denyEvents,
  applyEvents
}
export default types
