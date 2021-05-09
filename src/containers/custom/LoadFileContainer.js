import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import LoadFileComponent from '../../components/custom/LoadFileComponent'
import { getBase64 } from '../../utils/convert'
import actions from "../../ducks/utils/actions";

function LoadFileContainer ({ fileType, text }) {
  const dispatch = useDispatch()
  // selector from duck utils
  const loading = false

  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const handleSelect = useCallback((e) => {
    setFile(() => e.target.files[0])
  }, [setFile])
  const handleUpload = useCallback(async () => {
    const fileToBase64 = await getBase64(file)
    console.log(file)
    // const mockAction = () => ({ type: 'UPLOAD_FILsE_REQUEST', payload: { fileType, name: file.lastModified + file.size , file: fileToBase64 } })
    if (!fileToBase64) {
      setError(fileToBase64)
    }
    dispatch(actions.loadFileRequest({ fileType, name: file.name, file: fileToBase64 }))
    setFile(null)
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
