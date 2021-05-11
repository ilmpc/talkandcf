import PropTypes from 'prop-types'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

function SelectComponent ({
  value,
  name,
  options,
  label,
  placeholder,
  handleChange,
  className,
  required
}) {
  return (
    <FormControl
      variant='outlined'
      className={className}
      required={required}
      fullWidth
    >
      <InputLabel id={`${name}-label`}>{placeholder}</InputLabel>
      <Select
        labelId={`${name}-label`}
        value={value}
        onChange={handleChange}
        id={name}
        label={label || name}
      >
        <MenuItem value='' disabled>
          <em>{placeholder}</em>
        </MenuItem>
        {options.map(({ value, text }) => <MenuItem key={value} value={value}>{text}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

SelectComponent.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool
}

export default SelectComponent
