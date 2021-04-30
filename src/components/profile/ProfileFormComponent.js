import React from 'react'
import PropTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import locale from '../../locale'

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: '1rem',
      maxWidth: '600px',
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
    '& button': {
      margin: '1rem 1rem 1rem 0'
    }
  }
}))

function ProfileFormComponent ({ userInfo, updateProfile }) {
  const classes = useStyles()
  const { PROFILE: { FORM_LABELS, UPDATE_PROFILE } } = locale

  const { control, handleSubmit } = useForm()

  return (
    <>
      <Typography color='primary' gutterBottom>
        Редактировать данные
      </Typography>
      <form onSubmit={handleSubmit(updateProfile)} className={classes.root}>
        <Controller
          name='firstName'
          control={control}
          render={({ field }) => <TextField
            id='firstName'
            name='firstName'
            label={FORM_LABELS.firstName}
            defaultValue={userInfo.firstName}
            variant='outlined'
            margin='normal'
            fullWidth
                                 />}
        />
        <Controller
          name='lastName'
          control={control}
          render={({ field }) => <TextField
            id='lastName'
            name='lastName'
            label={FORM_LABELS.lastName}
            defaultValue={userInfo.lastName}
            variant='outlined'
            margin='normal'
            fullWidth
                                 />}
        />
        <Controller
          name='username'
          control={control}
          render={({ field }) => <TextField
            id='username'
            name='username'
            label={FORM_LABELS.username}
            defaultValue={userInfo.username}
            variant='outlined'
            margin='normal'
            fullWidth
                                 />}
        />
        <Controller
          name='email'
          control={control}
          render={({ field }) => <TextField
            id='email'
            name='email'
            label={FORM_LABELS.email}
            defaultValue={userInfo.email}
            variant='outlined'
            margin='normal'
            fullWidth
                                 />}
        />
        <Controller
          name='about'
          control={control}
          render={({ field }) => <TextField
            id='about'
            name='about'
            label={FORM_LABELS.about}
            defaultValue={userInfo.about}
            variant='outlined'
            margin='normal'
            fullWidth
            multiline
            rows={4}
                                 />}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => <TextField
            id='password'
            name='password'
            label={FORM_LABELS.password}
            defaultValue={userInfo.password}
            type='password'
            variant='outlined'
            margin='normal'
            fullWidth
                                 />}
        />
          <Controller
              name='oldPassword'
              control={control}
              render={({ field }) => <TextField
                  id='oldPassword'
                  name='oldPassword'
                  label={FORM_LABELS.oldPassword}
                  defaultValue={userInfo.oldPassword}
                  type='password'
                  variant='outlined'
                  margin='normal'
                  fullWidth
              />}
          />
        <Button type='submit' variant='contained' color='primary'>
          {UPDATE_PROFILE}
        </Button>
      </form>
    </>
  )
}

ProfileFormComponent.propTypes = {
  userInfo: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired
}

export default ProfileFormComponent
