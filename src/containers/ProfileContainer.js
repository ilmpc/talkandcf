import React, { useState } from 'react'
import ProfileComponent from '../components/profile/ProfileComponent'
import AvatarLoaderComponent from '../components/profile/AvatarLoaderComponent'
import ProfileFormComponent from '../components/profile/ProfileFormComponent'
import noImage from '../assets/images/no-image.jpg'

const initialState = {
  username: '',
  password: '',
  oldPassword: '',
  email: '',
  avatar: '',
  about: '',
  firstName: '',
  lastName: ''
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

  const [userInfo, setUserInfo] = useState({ ...initialState, ...userInfoFromStore })

  const [loadingAvatar, setLoadingAvatar] = useState(false)
  const [newAvatar, setNewAvatar] = useState('')
  const [isAvatarPicked, setIsAvatarPicked] = useState(false)

  const chooseAvatar = (e) => {
    setNewAvatar(e.target.files[0])
    setIsAvatarPicked(true)
  }

  const uploadAvater = () => {
    setLoadingAvatar(true)
    setTimeout(() => {
      console.log('new avatar', newAvatar)
      setUserInfo(prev => ({ ...prev, avatar: 'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg' }))
      setIsAvatarPicked(false)
      setLoadingAvatar(false)
    }, 1000)
  }
  const deleteAvatar = () => {
    if (userInfo.avatar) {
      setLoadingAvatar(true)
      setTimeout(() => {
        setUserInfo(prev => ({ ...prev, avatar: noImage }))
        setIsAvatarPicked(false)
        setLoadingAvatar(false)
      }, 500)
    }
  }

  const handleChange = (e) => {
    setUserInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const updateProfile = (data) => console.log(data)

  return (
    <ProfileComponent
      userInfo={userInfo}
      loading={loadingAvatar}
      handleChange={handleChange}
      avatarLoader={<AvatarLoaderComponent
        loadingAvatar={loadingAvatar}
        newAvatar={newAvatar}
        isAvatarPicked={isAvatarPicked}
        chooseAvatar={chooseAvatar}
        uploadAvater={uploadAvater}
        deleteAvatar={deleteAvatar}
                    />}
      profileForm={<ProfileFormComponent
        userInfo={userInfo}
        updateProfile={updateProfile}
                   />}
    />
  )
}

export default ProfileContainer
