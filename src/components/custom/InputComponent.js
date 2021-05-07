import { useState, useCallback } from 'react'
import TextField from '@material-ui/core/TextField'
import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const initialProps = {
  variant: 'outlined',
  margin: 'normal',
  fullWidth: true
}

function InputComponent ({
  control,
  errors,
  name,
  type,
  label,
  autocomplete,
  rules,
  customProps
}) {
  const [showPass, setShowPass] = useState('password')
  const handleClickShowPassword = useCallback(() => setShowPass(() => 'text'), [setShowPass])
  const handleMouseDownPassword = useCallback(() => setShowPass(() => 'password'), [setShowPass])
  const forPasswordField = useCallback(() => (
    <InputAdornment position='end'>
      <IconButton
        aria-label='toggle password visibility'
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {showPass === 'text' ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  ), [handleClickShowPassword, handleMouseDownPassword, showPass])
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) =>
        <TextField
          {...field}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          id={name}
          type={type === 'password' ? showPass : type}
          label={label || name}
          inputProps={{
            autoComplete: autocomplete
          }}
          InputProps={{
            endAdornment: type === 'password' ? forPasswordField() : null
          }}
          {...initialProps}
          {...customProps}
        />}
    />
  )
}

InputComponent.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  autocomplete: PropTypes.string,
  rules: PropTypes.object,
  customProps: PropTypes.object
}

export default InputComponent
