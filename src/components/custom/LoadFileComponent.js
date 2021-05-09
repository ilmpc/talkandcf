import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import AttachFileIcon from '@material-ui/icons/AttachFile'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import PopupComponent from './PopupComponent'

function LoadFileComponent ({
  loading,
  file,
  handleSelect,
  handleUpload,
  error,
  text: { OPEN_BTN, UPLOAD_BTN }
}) {
  return (
    <>
      <PopupComponent isOpen={!!error} message={error} />
      <label htmlFor='new-file'>
        <ListItem button disabled={loading}>
          <input
            accept='image/*'
            name='newFile'
            onChange={handleSelect}
            style={{ display: 'none' }}
            id='new-file'
            type='file'
          />
          <ListItemIcon>
            <AttachFileIcon />
          </ListItemIcon>
          <ListItemText primary={OPEN_BTN} />
        </ListItem>
      </label>
      {file && (
        <>
          <ListItem>
            <ListItemText primary={file?.name} />
          </ListItem>
          <ListItem button disabled={loading} onClick={handleUpload}>
            <ListItemIcon>
              <CloudUploadIcon />
            </ListItemIcon>
            <ListItemText primary={UPLOAD_BTN} />
          </ListItem>
        </>
      )}
    </>
  )
}

LoadFileComponent.propTypes = {
  loading: PropTypes.bool.isRequired,
  file: PropTypes.object,
  handleSelect: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  error: PropTypes.string,
  text: PropTypes.object.isRequired
}

export default LoadFileComponent
