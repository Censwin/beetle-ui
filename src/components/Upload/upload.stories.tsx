import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Upload from "./upload";



const renderUpload = () => {
  return (
    <Upload 
      action="http://jsonplaceholder.typicode.com/posts" 
      onProgress={action('progress')} 
      onSuccess={action('success')} 
      onError={action('error')} 
    />
  )
}

storiesOf('Upload', module).add('Upload', renderUpload)