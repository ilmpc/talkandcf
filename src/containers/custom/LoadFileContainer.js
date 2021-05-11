import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import LoadFileComponent from '../../components/custom/LoadFileComponent'
import actions from '../../ducks/utils/actions'
import locale from '../../locale'
import selectors from '../../ducks/utils/selectors'

function LoadFileContainer ({ fileType, text }) {
  const dispatch = useDispatch()

  const loading = useSelector(selectors.selectLoading)

  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const handleSelect = useCallback((e) => {
    setFile(() => e.target.files[0])
  }, [setFile])
  const handleUpload = useCallback(async () => {
    if (file) {
      dispatch(actions.loadFileRequest({ fileType, fileName: file.name, file }))
      setFile(null)
    } else {
      setError(locale.ERRORS.PROCESS_FILE_ERROR)
    }
  }, [dispatch, setFile, file, fileType])

  return (
    <LoadFileComponent
      loading={loading}
      file={file}
      handleSelect={handleSelect}
      handleUpload={handleUpload}
      error={error}
      text={text}
    />
  )
}

LoadFileContainer.propTypes = {
  fileType: PropTypes.string.isRequired,
  text: PropTypes.object
}

LoadFileComponent.defaultProps = {
  text: {
    OPEN_BTN: 'Выбрать файл',
    UPLOAD_BTN: 'Загрузить'
  }
}

export default LoadFileContainer
