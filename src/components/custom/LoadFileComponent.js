import {useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

import AttachFileIcon from "@material-ui/icons/AttachFile"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"

function LoadFileComponent({ loading, uploadFileCb, text: {OPEN_BTN, UPLOAD_BTN} }) {
    const [newFile, setNewFile] = useState(null)

    const pickFile = useCallback((e) => {
        setNewFile(() => e.target.files[0])
    }, [setNewFile])
    const uploadFile = useCallback(() => {
        uploadFileCb(newFile)
        setNewFile(null)
    }, [uploadFileCb, newFile, setNewFile])

    return (
        <>
            <label htmlFor='new-file'>
                <ListItem button disabled={loading}>
                    <input
                        accept='image/*'
                        name='newFile'
                        onChange={pickFile}
                        style={{ display: 'none' }}
                        id='new-file'
                        type='file'
                    />
                    <ListItemIcon>
                        <AttachFileIcon />
                    </ListItemIcon>
                    <ListItemText primary={OPEN_BTN} />
                </ListItem>
            </label>
            {newFile && (
                <>
                    <ListItem>
                        <ListItemText primary={newFile?.name} />
                    </ListItem>
                    <ListItem button disabled={loading} onClick={uploadFile}>
                        <ListItemIcon>
                            <CloudUploadIcon />
                        </ListItemIcon>
                        <ListItemText primary={UPLOAD_BTN} />
                    </ListItem>
                </>
            )}
        </>
    );
}

LoadFileComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
    uploadFileCb: PropTypes.func.isRequired,
    text: PropTypes.object
}

LoadFileComponent.defaultProps = {
    text: {
        OPEN_BTN: 'Выбрать файл',
        UPLOAD_BTN: 'Загрузить',
    }
}

export default LoadFileComponent