import LoadFileContainer from '../../containers/custom/LoadFileContainer'
import locale from '../../locale.js'
import noImage from '../../assets/images/no-image.jpg'

import PropTypes from 'prop-types'
import { Routes } from '../../constants'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import DeleteIcon from '@material-ui/icons/Delete'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import Divider from '@material-ui/core/Divider'

const { PROFILE: { DELETE_PHOTO, MY_MEETINGS } } = locale

function AvatarComponent ({
  avatarUrl,
  deleteAvatar
}) {
  return (
    <>
      <img src={avatarUrl || noImage} alt='avatar' />
      <List component='nav' aria-label='image settings'>
        <LoadFileContainer
          fileType='avatar'
          text={{ OPEN_BTN: 'Выбрать фото профиля', UPLOAD_BTN: 'Загрузить фото' }}
        />
        <ListItem button onClick={deleteAvatar}>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary={DELETE_PHOTO} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <Link to={Routes.MEETINGS}>
            <ListItemText primary={MY_MEETINGS} />
          </Link>
        </ListItem>
      </List>
    </>
  )
}

AvatarComponent.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  deleteAvatar: PropTypes.func.isRequired
}

export default AvatarComponent
