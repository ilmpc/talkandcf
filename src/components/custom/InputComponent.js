import TextField from '@material-ui/core/TextField'
import { Controller } from 'react-hook-form'
import PropTypes from 'prop-types'

const initialStyles = {
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
  rules,
  styles
}) {
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
          type={type}
          label={label || name}
          {...initialStyles}
          {...styles}
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
  rules: PropTypes.object,
  styles: PropTypes.object
}

export default InputComponent
