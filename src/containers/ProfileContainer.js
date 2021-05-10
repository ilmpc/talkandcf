import React, { useState, useCallback, useEffect } from 'react'
import ProfileComponent from '../components/profile/ProfileComponent'
import locale from '../locale'
import FormComponent from '../components/custom/FormComponent'
import { useForm, FormProvider, useFormState } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import AvatarComponent from '../components/profile/AvatarComponent'
import { formFields } from '../forms/ProfileForm'
import PopupComponent from '../components/custom/PopupComponent'
import selectors from '../ducks/users/selectors'
import actions from '../ducks/users/actions'

const { PROFILE: { UPDATE_PROFILE }, ERRORS } = locale

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  about: '',
  password: '',
  oldPassword: '',
  avatar: ''
}

function ProfileContainer (props) {
  const dispatch = useDispatch()
  const loading = useSelector(selectors.selectLoading)
  const error = useSelector(selectors.selectError)
  const user = useSelector(selectors.selectUser)
  const userInfo = { ...initialState, ...user }
  // maybe remove it to global state
  const [message, setMessage] = useState(null)

  const methods = useForm({ defaultValues: userInfo })

  useEffect(() => {
    formFields.order.map(field => user[field] && methods.setValue(field, user[field]))
    if (methods.formState.isSubmitSuccessful) {
      setMessage({ text: 'Profile updated', type: 'success' })
      methods.reset(userInfo)
    }
  //  eslint-disable-next-line
  }, [user])

  const { dirtyFields } = useFormState({
    control: methods.control
  })
  const deleteAvatar = useCallback(() => {
    dispatch(actions.deleteAvatar())
  }, [dispatch])

  const updateProfile = useCallback((data) => {
    setMessage(null)
    if (data.password) {
      if (!data.oldPassword) {
        methods.setError('oldPassword', {
          type: 'profileForm',
          message: ERRORS.ENTER_OLD_PASS
        }, true)
      }
    }
    const changedFields = Object.keys(dirtyFields)
    if (changedFields.length === 0) {
      setMessage({ text: ERRORS.NO_CHANGE, type: 'error' })
    } else {
      if ((changedFields.includes('password') && !changedFields.includes('oldPassword')) || (!changedFields.includes('password') && changedFields.includes('oldPassword'))) {
        setMessage({ text: ERRORS.BOTH_PASSWORDS, type: 'error' })
      } else {
        const newUser = {}
        changedFields.map(field => {
          newUser[field] = data[field]
          return null
        })
        dispatch(actions.updateProfileRequest(newUser))
      }
    }
  }, [methods, dispatch, dirtyFields])

  return (
    <>
      <PopupComponent isOpen={!!error || !!message} message={error || message?.text} severity={message?.type || 'error'} />
      <ProfileComponent
        loading={loading}
        avatarComponent={<AvatarComponent
          avatarUrl={userInfo.avatar}
          deleteAvatar={deleteAvatar}
                         />}
        profileForm={
          <FormProvider {...methods}>
            <FormComponent
              onSubmit={updateProfile}
              fields={formFields}
              submitButton={{
                text: UPDATE_PROFILE,
                options: {
                  fullWidth: false
                }
              }}
            />
          </FormProvider>
            }
      />
    </>
  )
}

export default ProfileContainer
