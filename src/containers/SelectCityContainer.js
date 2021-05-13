import { useDispatch } from 'react-redux'
import SelectContainer from './custom/SelectContainer'
import { makeStyles } from '@material-ui/core/styles'
import { useForm, FormProvider } from 'react-hook-form'
import utils from '../ducks/utils'

const options = [{
  value: 'Питер',
  text: 'Санкт-Петербург'
}, {
  value: 'Новосибирск',
  text: 'Новосибирск'
}, {
  value: 'Академгородок',
  text: 'Академгородок'
}]

const useStyles = makeStyles(theme => ({
  selector: {
    margin: theme.spacing(1),
    maxWidth: 300,
    '& .MuiSelect-root': {
      padding: theme.spacing(2)
    }
  }
}))

function SelectCityContainer () {
  const methods = useForm({
    defaultValues: { city: window.localStorage.getItem('city') || '' }
  })
  const dispatch = useDispatch()

  const classes = useStyles()

  const handleOfficeChange = (value) => {
    dispatch(utils.actions.setCity(value))
  }

  return (
    <FormProvider {...methods}>
      <SelectContainer
        name='city'
        options={options}
        label='Выберите свой офис'
        placeholder='Офис'
        className={classes.selector}
        handleChangeCb={handleOfficeChange}
      />
    </FormProvider>
  )
}

export default SelectCityContainer
