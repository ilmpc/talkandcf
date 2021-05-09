import React, { useState, useCallback } from 'react'
import ProfileComponent from '../components/profile/ProfileComponent'
import locale from '../locale'
import FormComponent from '../components/custom/FormComponent'
import { useForm, FormProvider } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import AvatarComponent from '../components/profile/AvatarComponent'
import { formFields } from '../forms/ProfileForm'
import PopupComponent from '../components/custom/PopupComponent'

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
  // from store
  const loading = false
  const error = null
  const userInfoFromStore = {
    _id: '5dfb75872be01a001bcd0b41',
    username: 'test1',
    email: 'tesat1@yandex.ru',
    createdAt: '2019-12-19T13:05:11.043Z',
    events: []
  }

  const [userInfo, setUserInfo] = useState({ ...initialState, ...userInfoFromStore })

  const methods = useForm({ defaultValues: userInfo })

  const deleteAvatar = useCallback(() => {
    const mockAction = () => ({ type: 'DELETE_AVATAR_REQUEST' })
    dispatch(mockAction())
  }, [dispatch])

  const updateProfile = useCallback((data) => {
      if (data.password) {
          if (!data.oldPassword) {
              methods.setError("oldPassword", {
                  type: "profileForm",
                  message: ERRORS.ENTER_OLD_PASS
              }, true)
          }
      }
      console.log(data)
  }, [methods])

  return (
    <>
      <PopupComponent isOpen={!!error} message={error} />
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
