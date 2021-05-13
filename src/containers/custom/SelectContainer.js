import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import SelectComponent from '../../components/custom/SelectComponent'

function SelectContainer ({
  name,
  options,
  label,
  placeholder,
  className,
  handleChangeCb,
  required
}) {
  const { setValue, watch } = useFormContext()

  const selectValue = watch(name)

  const handleChange = e => {
    setValue(name, e.target.value)
    if (handleChangeCb) handleChangeCb(e.target.value)
  }

  return (
    <SelectComponent
      value={selectValue}
      name={name}
      handleChange={handleChange}
      options={options}
      label={label}
      placeholder={placeholder}
      className={className}
      required={required}
    />
  )
}

SelectContainer.propTypes = {
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
  handleChangeCb: PropTypes.func,
  required: PropTypes.bool
}

export default SelectContainer
