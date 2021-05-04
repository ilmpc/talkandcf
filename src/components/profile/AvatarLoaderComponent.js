import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import locale from '../../locale.js'

const { PROFILE: { CHOOSE_NEW_PHOTO, UPLOAD_NEW_PHOTO, DELETE_PHOTO } } = locale

const useStyles = makeStyles({
  input: {
    display: 'none'
  }
})

function AvatarLoaderComponent ({
  loadingAvatar,
  newAvatar,
  isAvatarPicked,
  chooseAvatar,
  uploadAvatar,
  deleteAvatar
}) {
  const classes = useStyles()

  return (
    <>
      <ListItem button disabled={loadingAvatar}>
        <input
          accept='image/*'
          name='avatar'
          onChange={chooseAvatar}
          className={classes.input}
          id='new-photo'
          type='file'
        />
        <label htmlFor='new-photo'>
          <ListItemIcon>
            <AttachFileIcon />
          </ListItemIcon>
        </label>
        <label htmlFor='new-photo'>
          <ListItemText primary={CHOOSE_NEW_PHOTO} />
        </label>
      </ListItem>
      {isAvatarPicked && (
        <>
          <ListItem>
            <ListItemText primary={newAvatar?.name} />
          </ListItem>
          <ListItem button disabled={loadingAvatar} onClick={uploadAvatar}>
            <ListItemIcon>
              <CloudUploadIcon />
            </ListItemIcon>
            <ListItemText primary={UPLOAD_NEW_PHOTO} />
          </ListItem>
        </>)}
      <ListItem button disabled={loadingAvatar} onClick={deleteAvatar}>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary={DELETE_PHOTO} />
      </ListItem>
    </>
  )
}

AvatarLoaderComponent.propTypes = {
  loadingAvatar: PropTypes.bool,
  isAvatarPicked: PropTypes.bool,
  chooseAvatar: PropTypes.func,
  uploadAvatar: PropTypes.func,
  deleteAvatar: PropTypes.func
}

export default AvatarLoaderComponent
