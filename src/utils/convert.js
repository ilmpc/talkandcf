import locale from '../locale'

export const getBase64 = file => new Promise((resolve, reject) => {
  const reader = new window.FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(
    reader.result
      .replace('data:', '')
      .replace(/^.+,/, '')
  )
  reader.onerror = () => reject(locale.ERRORS.PROCESS_FILE_ERROR)
})
