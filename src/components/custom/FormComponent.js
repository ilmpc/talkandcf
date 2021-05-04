import React from 'react'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'
import InputComponent from './InputComponent'
import Button from '@material-ui/core/Button'

function FormComponent ({
  fields,
  onSubmit,
  submitButton,
  formClassName
}) {
  const { handleSubmit, control, formState: { errors } } = useFormContext()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
      {fields.order.map(fieldName => {
        const { element, name, type, label, rules, styles } = fields.children[fieldName]
        switch (element) {
          case 'input':
            return (
              <InputComponent
                key={name}
                control={control}
                name={name}
                errors={errors}
                type={type}
                label={label}
                rules={rules}
                styles={styles}
              />
            )
          default:
            return null
        }
      })}
      <Button
        type='submit'
        className={submitButton.className}
        fullWidth
        variant='contained'
        color='primary'
        {...submitButton.options}
      >
        {submitButton.text}
      </Button>
    </form>
  )
}

FormComponent.propTypes = {
  fields: PropTypes.shape({
    children: PropTypes.object.isRequired,
    order: PropTypes.array.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    options: PropTypes.object
  }).isRequired,
  formClassName: PropTypes.string
}

export default FormComponent
