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
    NO_DIGITS: 'Цифры недопустимы',
    ENTER_OLD_PASS: 'Введите текущий пароль',
    MORE_THAN: (num) => `Не должно содержать менеее ${num} символов`,
    LESS_THAN: (num) => `Не должно содержать более ${num} символов`,
    USERNAME_VALIDATION: 'Логин не может содержать только цифры, используйте латинские буквы, разрешены символы: _ и -',
    EMAIL_VALIDATION: 'Email некорректен',
    PASSWORD_VALIDATION: 'Пароль должен содержать латинские буквы и цифры, разрешены символы: !@#$%^&*_-',
    PROCESS_FILE_ERROR: 'Ошибка обработки файла',
    NO_CHANGE: 'Данные не были изменены',
    BOTH_PASSWORDS: 'Введите новый и текущий пароли'
  },
  NAVBAR: {
    PROFILE: 'Profile',
    LOGOUT: 'Logout'
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
  },
  NOTIFICATIONS: {
    ALL_BUTTON: 'Все',
    APPLIED_BUTTON: 'Принятые',
    APPLY_BUTTON: 'Принять',
    DENY_BUTTON: 'Отклонить',
    INBOX_BUTTON: 'Входящие',
    DONE_BUTTON: 'Завершённые',
    TITLE: 'Заголовок',
    DESCRIPTION: 'Описание',
    FROM: 'Начало',
    TO: 'Конец',
    ROOM: 'Комната',
    CREATED_BY: 'Создатель',
    CREATED_AT: 'Создано в',
    ACTION: 'Действие',
    EVENT_ENDED: 'Это событие уже закончилось',
    CREATOR_NOT_FOUND: 'Создатель покинул событие'
  },
  DASHBOARD: {
    TITLE: 'Главная'
  },
  ROOMS: {
    SELECT_FILTERS: 'Оборудование комнаты',
    CAMERA: 'Камера',
    MICRO: 'Микрофон',
    SPEAKERS: 'Колонки',
    BOARD: 'Маркерная доска',
    CAPACITY: 'Вместимость'
  }
}

export default locale
