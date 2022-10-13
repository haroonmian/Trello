import React, { memo } from 'react'
//@ts-ignore
import FileUpload from "react-mui-fileuploader"

interface Props {}
const ImageUploader: React.FC<Props> = memo(() => {
  
  const handleFileUploadError = (error:any) => {
    // Do something...
  }
  
  const handleFilesChange = (files:any) => {
    // localStorage.setItem("uploadImages", JSON.stringify(files)); 
    // Do something...
  }
  return (
    <>
    <FileUpload
      multiFile={true}
      disabled={false}
      title=""
      header=""
      leftLabel=""
      rightLabel=""
      buttonLabel="Upload file or image"
      buttonRemoveLabel="Remove all"
      maxFileSize={10}
      maxUploadFiles={0}
      maxFilesContainerHeight={357}
      errorSizeMessage={''}
      allowedExtensions={['jpg', 'jpeg', 'svg']}
      onFilesChange={handleFilesChange}
      onError={handleFileUploadError}
      ImageUploader={false}
      bannerProps={{ elevation: 0, variant: "outlined" }}
      containerProps={{ elevation: 0, variant: "outlined" }}
    />
    </>
  )
})

export default ImageUploader