import React, { useState, useCallback } from 'react'
import ProfileComponent from '../components/profile/ProfileComponent'
import AvatarLoaderComponent from '../components/profile/AvatarLoaderComponent'
import noImage from '../assets/images/no-image.jpg'
import { emailValidation, passwordValidation, usernameValidation } from '../validation'
import locale from '../locale'
import FormComponent from '../components/custom/FormComponent'
import { useForm, FormProvider } from 'react-hook-form'

const {
  PROFILE: { FORM_LABELS, UPDATE_PROFILE }
} = locale

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

const formFields = {
  order: ['firstName', 'lastName', 'username', 'email', 'about', 'password', 'oldPassword'],
  children: {
    firstName: {
      element: 'input',
      name: 'firstName',
      type: 'text',
      label: FORM_LABELS.firstName,
      // rules: usernameValidation,
      autocomplete: 'name'
    },
    lastName: {
      element: 'input',
      name: 'lastName',
      type: 'text',
      label: FORM_LABELS.lastName,
      // rules: usernameValidation,
      autocomplete: 'name'
    },
    username: {
      element: 'input',
      name: 'username',
      type: 'text',
      label: FORM_LABELS.username,
      // rules: usernameValidation,
      autocomplete: 'username'
    },
    email: {
      element: 'input',
      name: 'email',
      type: 'email',
      label: FORM_LABELS.email,
      // rules: emailValidation,
      autocomplete: 'email'
    },
    about: {
      element: 'input',
      name: 'about',
      type: 'text',
      label: FORM_LABELS.about,
      // rules: emailValidation,
      autocomplete: 'off',
      customProps: {
        multiline: true,
        rows: 4
      }
    },
    password: {
      element: 'input',
      name: 'password',
      type: 'password',
      label: FORM_LABELS.password,
      // rules: passwordValidation,
      autocomplete: 'new-password'
    },
    oldPassword: {
      element: 'input',
      name: 'oldPassword',
      type: 'password',
      label: FORM_LABELS.oldPassword,
      // rules: passwordValidation,
      autocomplete: 'current-password'
    }
  }
}

function ProfileContainer (props) {
  // from store
  const userInfoFromStore = {
    _id: '5dfb75872be01a001bcd0b41',
    username: 'test1',
    email: 'tesat1@yandex.ru',
    createdAt: '2019-12-19T13:05:11.043Z',
    events: []
  }
  const methods = useForm({ defaultValues: { ...initialState, ...userInfoFromStore } })

  const [userInfo, setUserInfo] = useState({ ...initialState, ...userInfoFromStore })

  const [loadingAvatar, setLoadingAvatar] = useState(false)
  const [newAvatar, setNewAvatar] = useState('')
  const [isAvatarPicked, setIsAvatarPicked] = useState(false)

  const chooseAvatar = useCallback((e) => {
    setNewAvatar(e.target.files[0])
    setIsAvatarPicked(true)
  }, [setNewAvatar, setIsAvatarPicked])

  const uploadAvatar = useCallback(() => {
    setLoadingAvatar(true)
    setTimeout(() => {
      console.log('new avatar', newAvatar)
      setUserInfo(prev => ({ ...prev, avatar: 'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg' }))
      setIsAvatarPicked(false)
      setLoadingAvatar(false)
    }, 1000)
  }, [setLoadingAvatar, setUserInfo, setIsAvatarPicked, setLoadingAvatar])
  const deleteAvatar = useCallback(() => {
    if (userInfo.avatar) {
      setLoadingAvatar(true)
      setTimeout(() => {
        setUserInfo(prev => ({ ...prev, avatar: noImage }))
        setIsAvatarPicked(false)
        setLoadingAvatar(false)
      }, 500)
    }
  }, [setLoadingAvatar, setUserInfo, setIsAvatarPicked, setLoadingAvatar, userInfo.avatar])

  const updateProfile = useCallback((data) => console.log(data), [])

  return (
    <ProfileComponent
      userInfo={userInfo}
      loading={loadingAvatar}
      avatarLoader={
        <AvatarLoaderComponent
          loadingAvatar={loadingAvatar}
          newAvatar={newAvatar}
          isAvatarPicked={isAvatarPicked}
          chooseAvatar={chooseAvatar}
          uploadAvatar={uploadAvatar}
          deleteAvatar={deleteAvatar}
        />
      }
      profileForm={
        <>
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
              formClassName=''
            />
          </FormProvider>
        </>
      }
    />
  )
}

export default ProfileContainer
