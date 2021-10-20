import React, { useRef } from 'react'
import Button from '../Button/button'
import axios from 'axios'

export interface IUploadprops {
  action: string
  onProgress?: (percentage: number, file: File) => void
  onSuccess?: (data: any, file: File) => void
  onError?: (err: any, file: File) => void
}

const Upload: React.FC<IUploadprops> = (props) => {
  const { action } = props
  const { onProgress, onSuccess, onError } = props
  const InputRef = useRef<HTMLInputElement>(null)

  const uploadFiles = (files: FileList) => {
    const _files = Array.from(files)
    _files.forEach((file) => {
      const formData = new FormData()
      formData.append(file.name, file)
      axios
        .post(action, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (e) => {
            let perc = Math.floor((e.loaded * 100) / e.total) || 0
            if (perc < 100) {
              if (onProgress) {
                onProgress(perc, file)
              }
            }
          },
        })
        .then((res) => {
          console.log(res)
          if (onSuccess) {
            onSuccess(res.data, file)
          }
        })
        .catch((err) => {
          console.error(err)
          if (onError) {
            onError(err, file)
          }
        })
    })
  }

  const handleClickUpload = () => {
    InputRef.current.click()
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    uploadFiles(files)
    if (InputRef.current) InputRef.current.value = ''
  }
  return (
    <div className="whale-upload-wrapper">
      <Button btnType="primary" onClick={handleClickUpload}>
        上传文件
      </Button>
      <input
        ref={InputRef}
        className="whale-file-input"
        style={{ display: 'none' }}
        type="file"
        onChange={handleFileChange}
      />
    </div>
  )
}

export default Upload
