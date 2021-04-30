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
  const { PROFILE: { FORM_LABELS, UPDATE_PROFILE, EDIT_USERINFO } } = locale

  const { control, handleSubmit } = useForm()

  return (
    <>
      <Typography color='primary' gutterBottom>
        {EDIT_USERINFO}
      </Typography>
      <form onSubmit={handleSubmit(updateProfile)} className={classes.root}>
        <Controller
          name='firstName'
          control={control}
          defaultValue={userInfo.firstName}
          render={({ field }) => <TextField
            {...field}
            id='firstName'
            name='firstName'
            label={FORM_LABELS.firstName}
            variant='outlined'
            margin='normal'
            fullWidth
                                 />}
        />
        <Controller
          name='lastName'
          control={control}
          defaultValue={userInfo.lastName}
          render={({ field }) => <TextField
            {...field}
            id='lastName'
            name='lastName'
            label={FORM_LABELS.lastName}
            variant='outlined'
            margin='normal'
            fullWidth
                                 />}
        />
        <Controller
          name='username'
          control={control}
          defaultValue={userInfo.username}
          render={({ field }) => <TextField
            {...field}
            id='username'
            name='username'
            label={FORM_LABELS.username}
            variant='outlined'
            margin='normal'
            fullWidth
                                 />}
        />
        <Controller
          name='email'
          control={control}
          defaultValue={userInfo.email}
          render={({ field }) => <TextField
            {...field}
            id='email'
            name='email'
            label={FORM_LABELS.email}
            variant='outlined'
            margin='normal'
            fullWidth
                                 />}
        />
        <Controller
          name='about'
          control={control}
          defaultValue={userInfo.about}
          render={({ field }) => <TextField
            {...field}
            id='about'
            name='about'
            label={FORM_LABELS.about}
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
            {...field}
            id='password'
            name='password'
            label={FORM_LABELS.password}
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
            {...field}
            id='oldPassword'
            name='oldPassword'
            label={FORM_LABELS.oldPassword}
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
