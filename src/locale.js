const locale = {
  AUTH: {
    LOGIN: 'Войти',
    NO_ACCOUNT: 'Нет аккаунта?',
    HAVE_ACCOUNT: 'Есть аккаунт?',
    REGISTER: 'Зарегистрироваться',
    USERNAME: 'Имя пользователя',
    EMAIL: 'Адрес электронной почты',
    PASSWORD: 'Пароль'
  },
  ERRORS: {
    UNKNOWN_ERROR: 'Something went wrong',
    REQUIRED: 'Это поле обязательно',
    MORE_THAN: (num) => `Не должно содержать менеее ${num} символов`,
    LESS_THAN: (num) => `Не должно содержать более ${num} символов`,
    USERNAME_VALIDATION: 'Нужно использовать только латинские буквы и цифры',
    EMAIL_VALIDATION: 'Email некорректен',
    PASSWORD_VALIDATION: 'Нужно использовать хотя бы одну заглавную латинскую букву, цифру и любой из символов: @$!%*?&'
  },
  NAVBAR: {
    PROFILE: 'Profile',
    LOGOUT: 'Logout',
    LOGIN: 'Login'
  },
  PROFILE: {
    TITLE: 'Профиль',
    CHOOSE_NEW_PHOTO: 'Выбрать новое фото',
    UPLOAD_NEW_PHOTO: 'Загрузить фото',
    DELETE_PHOTO: 'Удалить фото',
    MY_MEETINGS: 'Мои встречи',
    FORM_LABELS: {
      username: 'Логин',
      password: 'Новый пароль',
      oldPassword: 'Текущий пароль',
      email: 'Email',
      about: 'Обо мне',
      firstName: 'Имя',
      lastName: 'Фамилия'
    },
    UPDATE_PROFILE: 'Обновить данные',
    EDIT_USERINFO: 'Редактировать данные'
  }
}

export default locale
